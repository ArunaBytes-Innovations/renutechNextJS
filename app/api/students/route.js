import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/Student";
import Event from "@/app/models/Event";

import jwt from "jsonwebtoken"
import { headers } from "next/headers";

export async function GET() {
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
    const students = await Student.find().populate("events");
    return NextResponse.json(students);
}

export async function POST(req) {
    await connectDB();
    const newStudent = await req.json();
    const student = new Student(newStudent);
    await student.save();
    return NextResponse.json(student);
}