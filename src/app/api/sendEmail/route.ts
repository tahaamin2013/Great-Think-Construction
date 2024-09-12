import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Message From ${name} | Great Think Construction`,
      html: `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: none; border-radius: 15px; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1);">
  <header style="background: linear-gradient(135deg, #FFD700, #FFEB3B); padding: 30px; text-align: center;">
    <h1 style="font-size: 28px; color: #fff; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">New Message From ${name}</h1>
  </header>
  <div style="background-color: #fff; padding: 30px;">
    <p style="font-size: 18px; color: #333; margin-bottom: 20px; border-left: 4px solid #FFD700; padding-left: 15px;"><strong>Name:</strong> ${name}</p>
    <p style="font-size: 18px; color: #333; margin-bottom: 20px; border-left: 4px solid #FFEB3B; padding-left: 15px;"><strong>Email:</strong> ${email}</p>
    <p style="font-size: 18px; color: #333; margin-bottom: 20px; border-left: 4px solid #FFC107; padding-left: 15px;"><strong>Message:</strong> ${message}</p>
  </div>
  <footer style="background: linear-gradient(135deg, #FFEB3B, #FFD700); padding: 20px; text-align: center;">
    <p style="font-size: 16px; color: #fff; margin: 0; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">&copy; ${new Date().getFullYear()} Great Think Construction Corp. All rights reserved.</p>
  </footer>
</div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (e) {
    console.error("Unexpected error:", e);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again",
      },
      { status: 500 }
    );
  }
}