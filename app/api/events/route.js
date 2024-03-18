import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";
import Student from "@/app/models/Student";
import Coordinator from "@/app/models/Coordinator";

export async function GET() {
    await connectDB();
    const event = await Event.find().populate("events.coordinators").populate("coordinators");
    return NextResponse.json(event);
}

export async function POST(req) {
    await connectDB();
    const newEvent = await req.json();
    const event = new Event(newEvent);
    await event.save();
    return NextResponse.json({ event });
}