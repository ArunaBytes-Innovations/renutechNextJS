import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Event from "@/app/models/Event";
import Coordinator from "@/app/models/Coordinator";

export async function GET() {
    await connectDB();
    const coordinator = await Coordinator.find();
    console.log("get coordinators");
    return NextResponse.json(coordinator);
}

export async function POST(req) {
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