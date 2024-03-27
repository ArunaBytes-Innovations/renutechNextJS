import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import User from "@/app/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
    const headersList = headers();
    const referer = headersList.get("authorization");

    // verify jwt token 
    const isToken = referer.split(" ")[1];

    // Check if token is missing
    if (!isToken) {
        return NextResponse.json({ message: 'Unauthorized: Missing token' });
    }

    // Verify the token
    try {
        const decoded = jwt.verify(isToken, process.env.JWT_KEY);
        console.log('Decoded:', decoded);  // Log the decoded token
    } catch (err) {
        console.error('JWT verification error:', err);  // Log the error
        return NextResponse.json({ message: 'Unauthorized: Invalid token' });
    }
    await connectDB();
    const user = await req.json();
    const oldUser = await User.findOne({ email: user.email });

    if (oldUser) {
        return NextResponse.json({ message: 'User already exists' });
    }

    // save user to database
    const newUser = new User(user);
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_KEY, {
        expiresIn: '7d',
    });

    return NextResponse.json({ userId: newUser._id, token, user: newUser });
}