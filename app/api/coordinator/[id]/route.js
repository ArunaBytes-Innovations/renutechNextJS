
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Coordinator from "@/app/models/Coordinator";

// getCoordinatorById
export async function GET(req, { params }) {
    await connectDB();
    const id = params.id;
    const coordinator = await Coordinator.findById(id);
    return NextResponse.json(coordinator);
}

// updateCoordinatorById
export async function PUT(req, { params }) {
    await connectDB();
    const id = params.id;
    const coordinator = await Coordinator.findById(id);

    if (!coordinator) {
        return NextResponse.error("Coordinator not found", 404);
    }
    const updatedCoordinator = await req.json();
    Object.assign(coordinator, updatedCoordinator);
    await coordinator.save();
    return NextResponse.json(coordinator);
}

// deleteCoordinatorById
export async function DELETE(req, { params }) {
    await connectDB();
    const id = params.id;
    const coordinator = await Coordinator.findById(id);

    if (!coordinator) {
        return NextResponse.error("Coordinator not found", 404);
    }
    await Coordinator.findByIdAndDelete(id);
    return NextResponse.json({ message: "Coordinator deleted" });
}