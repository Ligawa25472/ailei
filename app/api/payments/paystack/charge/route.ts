import { NextRequest, NextResponse } from "next/server";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

interface ChargeAuthorizationRequest {
  authorization_code: string;
  email: string;
  amount: number;
}

export async function POST(request: NextRequest) {
  try {
    if (!PAYSTACK_SECRET_KEY) {
      return NextResponse.json(
        { error: "Paystack configuration missing" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ChargeAuthorizationRequest;
    const { authorization_code, email, amount } = body;

    const response = await fetch("https://api.paystack.co/transaction/charge_authorization", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorization_code,
        email,
        amount,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Paystack charge error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Charge failed",
      },
      { status: 500 }
    );
  }
}
