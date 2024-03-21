import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";
import Coordinator from "@/app/models/Coordinator";

import jwt from "jsonwebtoken"
import { headers } from "next/headers";

export async function GET() {
    await connectDB();
    const coordinator = await Coordinator.find();
    console.log("get coordinators");
    return NextResponse.json(coordinator);
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
    const newCoordinator = await req.json();
    const eventId = newCoordinator.eventId;
    const event = await Event.findById(eventId).populate("coordinators");
    if (!event) {
        return NextResponse.error("event not found", 404);
    }
    const coordinator = new Coordinator(newCoordinator);
    await coordinator.save();

    await event.updateOne({ $push: { coordinators: coordinator._id } });
    return NextResponse.json({ event });
}