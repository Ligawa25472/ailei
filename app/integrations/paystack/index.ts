/**
 * Paystack Payment Integration
 * Handles payment processing for courses and services
 */

export interface PaystackPaymentProps {
  email: string;
  amount: number; // Amount in kobo (lowest currency unit)
  reference: string;
  onSuccess?: (reference: string) => void;
  onError?: (error: string) => void;
}

export interface PaystackResponse {
  status: boolean;
  message: string;
  data?: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

/**
 * Initialize Paystack payment
 * @param props Payment configuration
 */
export const initializePaystackPayment = async (
  props: PaystackPaymentProps
): Promise<PaystackResponse> => {
  const { email, amount, reference } = props;

  try {
    const response = await fetch("/api/payments/paystack/initialize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        reference,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to initialize payment");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Payment initialization failed"
    );
  }
};

/**
 * Verify Paystack payment reference
 * @param reference Payment reference from Paystack
 */
export const verifyPaystackPayment = async (
  reference: string
): Promise<PaystackResponse> => {
  try {
    const response = await fetch(
      `/api/payments/paystack/verify?reference=${reference}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to verify payment");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Payment verification failed"
    );
  }
};

/**
 * Charge customer using Paystack authorization code
 * @param authorizationCode Previously authorized payment code
 * @param email Customer email
 * @param amount Amount in kobo
 */
export const chargeAuthorization = async (
  authorizationCode: string,
  email: string,
  amount: number
): Promise<PaystackResponse> => {
  try {
    const response = await fetch("/api/payments/paystack/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorization_code: authorizationCode,
        email,
        amount,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to charge authorization");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Charge failed"
    );
  }
};

/**
 * Format amount to Paystack format (kobo)
 * @param amount Amount in naira
 */
export const formatAmountForPaystack = (amount: number): number => {
  return Math.round(amount * 100); // Convert to kobo
};
