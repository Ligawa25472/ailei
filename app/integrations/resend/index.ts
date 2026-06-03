/**
 * Resend Email Service Integration
 * Handles transactional emails for the application
 */

export interface EmailRecipient {
  email: string;
  name?: string;
}

export interface SendEmailProps {
  to: string | EmailRecipient | (string | EmailRecipient)[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
  }>;
}

export interface ResendResponse {
  id: string;
  from: string;
  to: string[];
  created_at: string;
}

/**
 * Send email using Resend
 * @param props Email configuration
 */
export const sendEmail = async (
  props: SendEmailProps
): Promise<ResendResponse> => {
  const {
    to,
    subject,
    html,
    text,
    from = "noreply@ahlei.com",
    replyTo,
  } = props;

  try {
    const recipients = Array.isArray(to)
      ? to.map((r) => (typeof r === "string" ? r : r.email))
      : [typeof to === "string" ? to : to.email];

    const response = await fetch("/api/emails/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: recipients,
        subject,
        html,
        text,
        from,
        reply_to: replyTo,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Email sending failed"
    );
  }
};

/**
 * Send course enrollment confirmation email
 */
export const sendEnrollmentConfirmation = async (
  email: string,
  courseName: string,
  enrollmentId: string
): Promise<ResendResponse> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Welcome to ${courseName}!</h2>
      <p>Your enrollment has been confirmed.</p>
      <p><strong>Enrollment ID:</strong> ${enrollmentId}</p>
      <p>You will receive access details shortly. If you have any questions, please contact our support team.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="color: #666; font-size: 12px;">Ahlei - USCG Approved Maritime Training</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: `Enrollment Confirmation - ${courseName}`,
    html,
  });
};

/**
 * Send payment confirmation email
 */
export const sendPaymentConfirmation = async (
  email: string,
  amount: string,
  reference: string,
  courseName: string
): Promise<ResendResponse> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Payment Received</h2>
      <p>Thank you for your payment!</p>
      <p><strong>Course:</strong> ${courseName}</p>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Reference:</strong> ${reference}</p>
      <p>Your course will be activated within 24 hours.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="color: #666; font-size: 12px;">Ahlei - USCG Approved Maritime Training</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: "Payment Confirmation",
    html,
  });
};

/**
 * Send password reset email
 */
export const sendPasswordResetEmail = async (
  email: string,
  resetLink: string
): Promise<ResendResponse> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Reset Your Password</h2>
      <p>Click the link below to reset your password:</p>
      <p><a href="${resetLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
      <p>This link expires in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      <p style="color: #666; font-size: 12px;">Ahlei - USCG Approved Maritime Training</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject: "Reset Your Password",
    html,
  });
};

/**
 * Send contact form submission email
 */
export const sendContactFormEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<ResendResponse> => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    </div>
  `;

  return sendEmail({
    to: "contact@ahlei.com",
    subject: `New Contact: ${subject}`,
    html,
    replyTo: email,
  });
};
