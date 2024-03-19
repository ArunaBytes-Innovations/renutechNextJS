import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import User from "@/app/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
    await connectDB();
    const credentail = await req.json();
    const { email, password } = credentail;
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ message: 'User not Registerd' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        return NextResponse.json({ message: 'Invalid Password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
        expiresIn: '7d',
    });

    return NextResponse.json({ token, user });
}