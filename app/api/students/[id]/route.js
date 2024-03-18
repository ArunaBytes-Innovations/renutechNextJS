
import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/Student";

// getStudentById
export async function GET(req, { params }) {
    await connectDB();
    const id = params.id;
    const student = await Student.findById(id).populate("events");
    return NextResponse.json(student);
}

// updateStudentById
export async function PUT(req, { params }) {
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
    await connectDB();
    const id = params.id;
    const student = await Student.findById(id);

    if (!student) {
        return NextResponse.error("Student not found", 404);
    }
    await Student.findByIdAndDelete(id);
    return NextResponse.json({ message: "Student deleted" });
}