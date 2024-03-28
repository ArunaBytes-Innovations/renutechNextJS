import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    },
});


export async function POST(req) {
    const { fullName, college, email, message } = await req.json();
    try {
        await transporter.sendMail({
            from: process.env.NODEMAILER_USER, // sender address
            to: process.env.NODEMAILER_USER, // list of receivers
            subject: `${fullName} need a talk`, // Subject line
            html: ` <h1>${fullName} is tring to contact you..</h1><p>${message} </p><p> Name : ${fullName}  </p><p> College : ${college}</p><p> Email : <a href="mailto:${email}">${email}</a> </P>`, // html body
        });
        return NextResponse.json({ message: 'Thanks for contacting us, we will get back to you soon.' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: error.message });
    }
}