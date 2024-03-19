import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import User from "@/app/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
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