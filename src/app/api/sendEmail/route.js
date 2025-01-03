import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  const data = await req.json();
  const { firstName, lastName, email, topic, message } = data;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "vg@vivly.in",
      pass: "gmnq bcgy muan xwwu",
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: "vg@vivly.in",
      subject: `Vivly's Contact Form Submission: ${topic}`,
      text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Topic: ${topic}
          Message: ${message}
        `,
    });

    return NextResponse.json("Email sent successfully!");
  } catch (error) {
    return NextResponse.json("Failed to send email.");
  }
};
