import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/student";

export async function GET() {
    const students = await Student.find({});
    return NextResponse.json(students);
}

export async function POST(req) {
    await connectDB();
    const student = new Student(req.body);
    await student.save();
    return NextResponse.json(student);
}

export async function PUT(req) {
    await connectDB();
    const { id } = req.query;
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    return NextResponse.json(student);
}

export async function DELETE(req) {
    const { id } = req.query;
    await Student.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Student deleted' });
}