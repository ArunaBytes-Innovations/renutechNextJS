import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";

import jwt from "jsonwebtoken"
import { headers } from "next/headers";

export async function GET() {
    await connectDB();
    const event = await Event.find();
    return NextResponse.json(event);
}

export async function POST(req) {
    const headersList = headers();
    const referer = headersList.get("authorization");

    // verify jwt token 
    const token = referer.split(" ")[1];

    // Check if token is missing
    if (!token) {
        return NextResponse.json({ message: 'Unauthorized: Missing token' });
    }

    // Verify the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        console.log('Decoded:', decoded);  // Log the decoded token
    } catch (err) {
        console.error('JWT verification error:', err);  // Log the error
        return NextResponse.json({ message: 'Unauthorized: Invalid token' });
    }
    await connectDB();
    const newEvent = await req.json();
    const event = new Event(newEvent);
    await event.save();
    return NextResponse.json({ event });
}