import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Student from "@/app/models/Student";
import jwt from "jsonwebtoken"
import { headers } from "next/headers";


import nodemailer from 'nodemailer';

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


const nodePass = process.env.NODEMAILER_PASS

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.NODEMAILER_USER,
        pass: nodePass
    },
});

export async function POST(req) {
    await connectDB();
    const newStudent = await req.json();
    const student = new Student(newStudent);

    await transporter.sendMail({
        from: process.env.NODEMAILER_USER, // sender address
        to: student.email,
        subject: `${student.name} : You have been Registred`, // Subject line
        html: `
            <h1>Welcome ${student.name}!</h1>
            <p>You have been successfully registered to RenuTech Event.</p>

            <h2>Registration Details:</h2>
            <ul>
                <li><strong>Name:</strong> ${student.name}</li>
                <li><strong>Contact:</strong> ${student.contact}</li>
                <li><strong>Email:</strong> ${student.email}</li>
                <li><strong>College:</strong> ${student.college}</li>
                <li><strong>Registration No:</strong> ${student.registrationNo}</li>
                <li><strong>Branch:</strong> ${student.branch}</li>
                <li><strong>Year:</strong> ${student.year}</li>
                <li><strong>Payment Date:</strong> ${student.paymentDate ? new Date(student.paymentDate).toLocaleDateString() : 'Not Available'}</li>
                <li><strong>Transaction ID:</strong> ${student.transactionId}</li>
                <li><strong>Events:</strong> ${student.events.join(', ')}</li>
            </ul>
            <p>Thank you for registering!</p>
        `, // html body
    });

    await student.save();
    return NextResponse.json(student);
}