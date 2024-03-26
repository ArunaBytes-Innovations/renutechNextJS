import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/Student";

import { writeFile } from "fs/promises";

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
    const students = await Student.find();
    return NextResponse.json(students);
}

export async function POST(req) {
    await connectDB();
    const data = await req.formData();
    const paymentProof = data.get('paymentProof');
    const newStudent = {
        name: data.get('name'),
        contact: data.get('contact'),
        email: data.get('email'),
        college: data.get('college'),
        registrationNo: data.get('registrationNo'),
        branch: data.get('branch'),
        year: data.get('year'),
        paymentStatus: data.get('paymentStatus'),
        paymentDate: data.get('paymentDate'),
        transactionId: data.get('transactionId'),
        events: data.get('events'),
    };
    const student = new Student(newStudent);

    if (paymentProof) {
        const byteData = await paymentProof.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./tmp/payments/${student._id.toString()}.jpg`;
        await writeFile(path, buffer);
    }
    await student.save();
    return NextResponse.json(student);
}