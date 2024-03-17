import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/student";

export async function GET() {
    await connectDB();
    const students = await Student.find();
    return NextResponse.json(students);
}

export async function POST(req) {
    await connectDB();
    const newStudent = await req.json();
    const student = new Student(newStudent);
    await student.save();
    return NextResponse.json(student);
}