
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Coordinator from "@/app/models/Coordinator";

import jwt from "jsonwebtoken"
import { headers } from "next/headers";

// getCoordinatorById
export async function GET(req, { params }) {
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
    const coordinator = await Coordinator.findById(id);
    return NextResponse.json(coordinator);
}

// updateCoordinatorById
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
    const coordinator = await Coordinator.findById(id);

    if (!coordinator) {
        return NextResponse.error("Coordinator not found", 404);
    }
    await Coordinator.findByIdAndDelete(id);
    return NextResponse.json({ message: "Coordinator deleted" });
}