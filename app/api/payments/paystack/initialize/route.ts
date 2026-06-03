import { NextRequest, NextResponse } from "next/server";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

interface PaystackInitializeRequest {
  email: string;
  amount: number;
  reference: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json(
        { error: "Paystack configuration missing" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as PaystackInitializeRequest;
    const { email, amount, reference } = body;

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        reference,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Paystack initialization error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Initialization failed",
      },
      { status: 500 }
    );
  }
}
