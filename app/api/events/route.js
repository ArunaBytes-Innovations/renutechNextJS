import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";
import Student from "@/app/models/Student";

export async function GET() {
    await connectDB();
    const event = await Event.find();
    return NextResponse.json(event);
}

export async function POST(req) {
    await connectDB();
    const newEvent = await req.json();
    const email = newEvent.email;
    const student = await Student.findOne({ email });
    if (!student) {
        return NextResponse.error("Student not found", 404);
    }
    const event = new Event(newEvent);
    await event.save();

    await student.updateOne({ $push: { events: event._id } });
    return NextResponse.json({ event, student });
}