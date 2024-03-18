
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";

// getEventById
export async function GET(req, { params }) {
    await connectDB();
    const id = params.id;
    const event = await Event.findById(id);
    return NextResponse.json(event);
}

// updateEventById
export async function PUT(req, { params }) {
    await connectDB();
    const id = params.id;
    const event = await Event.findById(id);

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
    await connectDB();
    const id = params.id;
    const event = await Event.findById(id);

    if (!event) {
        return NextResponse.error("Event not found", 404);
    }
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted" });
}