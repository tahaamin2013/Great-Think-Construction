import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, address, phone } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "email are required" },
        { status: 400 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { error: "Name are required" },
        { status: 400 }
      );
    }
  
    if (!message) {
      return NextResponse.json(
        { error: "Message are required" },
        { status: 400 }
      );
    }

    if (!address) {
      return NextResponse.json(
        { error: "Address are required" },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { error: "Phone are required" },
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
      subject: `${name} is Requesting Estimate at Great Think Construction`,
      html: `
<div style="font-family: 'Arial', sans-serif; line-height: 1.6; background-color: #f0f0f0; margin: 0; padding: 0;">
    <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 0 20px rgba(0,0,0,0.1); overflow: hidden;">
        <header style="background: linear-gradient(135deg, #ff7e00, #ff9a44); color: #ffffff; text-align: center; padding: 30px 20px;">
            <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Construction Request Estimate</h1>
            <p style="margin: 10px 0 0; font-size: 16px;">Great Think Construction</p>
        </header>
        <main style="padding: 30px;">
            <div style="background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); padding: 20px; margin-bottom: 20px;">
                <h2 style="color: #333333; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7e00; padding-bottom: 10px;">Customer Information</h2>
                <p style="margin: 10px 0;"><strong style="color: #ff7e00;">Name:</strong> <span style="color: #555555;">${name}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #ff7e00;">Email:</strong> <span style="color: #555555;">${email}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #ff7e00;">Address:</strong> <span style="color: #555555;">${address}</span></p>
                <p style="margin: 10px 0;"><strong style="color: #ff7e00;">Phone:</strong> <span style="color: #555555;">${phone}</span></p>
            </div>
            <div style="background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); padding: 20px;">
                <h2 style="color: #333333; margin-top: 0; font-size: 20px; border-bottom: 2px solid #ff7e00; padding-bottom: 10px;">Message</h2>
                <p style="color: #555555; margin: 10px 0; line-height: 1.8;">${message}</p>
            </div>
        </main>
        <footer style="background-color: #333333; color: #ffffff; text-align: center; padding: 20px; font-size: 14px;">
            <p style="margin: 0;">&copy; 2025 Great Think Construction. All rights reserved.</p>
            <p style="margin: 10px 0 0;">
                <a href="https://greatthinkconstruction.com" style="color: #ff9a44; text-decoration: none; margin: 0 10px;">Website</a> |
                <a href="https://greatthinkconstruction.com/contact" style="color: #ff9a44; text-decoration: none; margin: 0 10px;">Contact Us</a> |
                <a href="https://greatthinkconstruction.com/privacy-policy" style="color: #ff9a44; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
            </p>
        </footer>
    </div>
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