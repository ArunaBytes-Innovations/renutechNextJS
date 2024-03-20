
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/Student";
import Event from "@/app/models/Event";

import jwt from "jsonwebtoken"
import { headers } from "next/headers";

// getStudentById
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
    const student = await Student.findById(id).populate("events");
    return NextResponse.json(student);
}

// updateStudentById
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
    const student = await Student.findById(id);

    if (!student) {
        return NextResponse.error("Student not found", 404);
    }
    const updatedStudent = await req.json();
    Object.assign(student, updatedStudent);
    await student.save();
    return NextResponse.json(student);
}

// deleteStudentById
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
    const student = await Student.findById(id);

    if (!student) {
        return NextResponse.error("Student not found", 404);
    }
    await Student.findByIdAndDelete(id);
    return NextResponse.json({ message: "Student deleted" });
}