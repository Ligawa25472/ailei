import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface SendEmailRequest {
  to: string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  reply_to?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Resend configuration missing. Please set RESEND_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as SendEmailRequest;
    const {
      to,
      subject,
      html,
      text,
      from = "noreply@ahlei.com",
      reply_to,
    } = body;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html,
        text,
        reply_to,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Resend email error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Email sending failed",
      },
      { status: 500 }
    );
  }
}
