import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Coordinator from "@/app/models/Coordinator";

export async function GET() {
    await connectDB();
    const coordinator = await Coordinator.find();
    return NextResponse.json(coordinator);
}

export async function POST(req) {
    await connectDB();
    const newCoordinator = await req.json();
    const coordinator = new Coordinator(newCoordinator);
    await coordinator.save();
    return NextResponse.json(coordinator);
}