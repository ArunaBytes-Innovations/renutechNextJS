
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";

import jwt from "jsonwebtoken"
import { headers } from "next/headers";

// getEventById
export async function GET(req, { params }) {
    await connectDB();
    const id = params.id;
    const event = await Event.findById(id);
    return NextResponse.json(event);
}

// updateEventById
export async function PUT(req, { params }) {
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
    const id = params.id;
    const event = await Event.findById(id).populate("coordinators");

    if (!event) {
        return NextResponse.error("Event not found", 404);
    }
    const updatedEvent = await req.json();
    Object.assign(event, updatedEvent);
    await event.save();
    return NextResponse.json(event);
}

// deleteEventById
export async function DELETE(req, { params }) {
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
    const id = params.id;
    const event = await Event.findById(id);

    if (!event) {
        return NextResponse.error("Event not found", 404);
    }
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted" });
}