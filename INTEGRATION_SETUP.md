# Integration Setup Guide

This document covers the setup of three critical integrations:
1. **Zoho SalesIQ** - Live Chat Widget
2. **Paystack** - Payment Processing
3. **Resend** - Email Service

## 1. Zoho SalesIQ Live Chat Widget

### Status: ✅ Already Integrated

The Zoho chat widget is now embedded in your global layout (`app/layout.tsx`).

**Features:**
- Widget appears on all pages automatically
- Allows live customer support
- Zoho chat widget code: `siqbd8af5c4329c14486412a147b2a3980e`

**What was added:**
```tsx
{/* Zoho SalesIQ Live Chat Widget */}
<script>{`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}</script>
<script id="zsiqscript" src="https://salesiq.zohopublic.com/widget?wc=siqbd8af5c4329c14486412a147b2a3980e" defer></script>
```

---

## 2. Paystack Payment Integration

### Setup Steps

#### Step 1: Get API Keys from Paystack
1. Sign up at [paystack.com](https://paystack.com)
2. Go to **Settings** → **API Keys & Webhooks**
3. Copy your:
   - **Public Key** (for frontend)
   - **Secret Key** (for backend)

#### Step 2: Update `.env` File
```env
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY="pk_live_xxxxxxxxxxxxx"  # Replace with your public key
PAYSTACK_SECRET_KEY="sk_live_xxxxxxxxxxxxx"              # Replace with your secret key
```

#### Step 3: Install Paystack Script
The Paystack script is already loaded in `app/layout.tsx`:
```tsx
<script async src="https://js.paystack.co/v1/inline.js"></script>
```

#### Step 4: Use Payment Functions

**Initialize Payment:**
```typescript
import { initializePaystackPayment, formatAmountForPaystack } from "@/integrations/paystack";

const amount = formatAmountForPaystack(50000); // ₦50,000 → 5,000,000 kobo

const response = await initializePaystackPayment({
  email: "customer@example.com",
  amount,
  reference: "unique-reference-" + Date.now(),
});

// Redirect to authorization URL
window.location.href = response.data.authorization_url;
```

**Verify Payment:**
```typescript
import { verifyPaystackPayment } from "@/integrations/paystack";

const verified = await verifyPaystackPayment("reference_from_url");
```

**Charge Saved Authorization:**
```typescript
import { chargeAuthorization } from "@/integrations/paystack";

const result = await chargeAuthorization(
  "authorization_code",
  "customer@example.com",
  amount
);
```

### API Routes
- `POST /api/payments/paystack/initialize` - Start payment
- `GET /api/payments/paystack/verify?reference=xxx` - Verify payment
- `POST /api/payments/paystack/charge` - Charge saved card

---

## 3. Resend Email Integration

### Setup Steps

#### Step 1: Get API Key from Resend
1. Sign up at [resend.com](https://resend.com)
2. Go to **API Keys**
3. Copy your API Key (starts with `re_`)

#### Step 2: Update `.env` File
```env
RESEND_API_KEY="re_xxxxxxxxxxxxx"  # Replace with your Resend API key
```

#### Step 3: Install Resend Package
```bash
npm install resend
# or
bun add resend
```

#### Step 4: Use Email Functions

**Send Custom Email:**
```typescript
import { sendEmail } from "@/integrations/resend";

await sendEmail({
  to: "customer@example.com",
  subject: "Welcome to Ahlei!",
  html: "<h1>Welcome!</h1><p>Your course is ready.</p>",
});
```

**Send Enrollment Confirmation:**
```typescript
import { sendEnrollmentConfirmation } from "@/integrations/resend";

await sendEnrollmentConfirmation(
  "student@example.com",
  "Advanced Maritime Navigation",
  "ENROLL-12345"
);
```

**Send Payment Confirmation:**
```typescript
import { sendPaymentConfirmation } from "@/integrations/resend";

await sendPaymentConfirmation(
  "student@example.com",
  "₦50,000",
  "PAY-12345",
  "STCW Advanced Course"
);
```

**Send Password Reset:**
```typescript
import { sendPasswordResetEmail } from "@/integrations/resend";

await sendPasswordResetEmail(
  "user@example.com",
  "https://ahlei.com/reset?token=xxx"
);
```

**Send Contact Form Email:**
```typescript
import { sendContactFormEmail } from "@/integrations/resend";

await sendContactFormEmail(
  "John Doe",
  "john@example.com",
  "Course Inquiry",
  "I have questions about the Advanced Navigation course."
);
```

### API Route
- `POST /api/emails/send` - Send email via Resend

---

## 4. Supabase Database Integration

### Already Configured ✅
Environment variables:
```env
NEXT_PUBLIC_SUPABASE_PROJECT_ID="jwhgyrkuwhhuvlwpmkwm"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."
NEXT_PUBLIC_SUPABASE_URL="https://jwhgyrkuwhhuvlwpmkwm.supabase.co"
```

### Create Tables for Payments & Emails

**Payments Table** (Supabase SQL):
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  amount BIGINT NOT NULL, -- in kobo
  currency VARCHAR(3) DEFAULT 'NGN',
  reference VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending', -- pending, completed, failed
  payment_method VARCHAR(50) NOT NULL DEFAULT 'paystack',
  course_id UUID REFERENCES courses(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Emails Table** (Supabase SQL):
```sql
CREATE TABLE emails (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipient_email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  email_type VARCHAR(50) NOT NULL, -- enrollment, payment, reset, etc.
  status VARCHAR(50) NOT NULL DEFAULT 'sent', -- sent, failed, bounced
  resend_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 5. Environment Variables Checklist

```env
# Supabase (already configured)
NEXT_PUBLIC_SUPABASE_PROJECT_ID="jwhgyrkuwhhuvlwpmkwm"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJ..."
NEXT_PUBLIC_SUPABASE_URL="https://jwhgyrkuwhhuvlwpmkwm.supabase.co"

# Paystack (fill in your keys)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY="pk_live_..."
PAYSTACK_SECRET_KEY="sk_live_..."

# Resend (fill in your key)
RESEND_API_KEY="re_..."

# Zoho (already configured in code)
# No env vars needed - widget code is embedded in layout.tsx
```

---

## 6. Deployment on Vercel

### Update `.env.production` (if using)
Add the same environment variables to Vercel project settings:
1. Go to your Vercel project
2. **Settings** → **Environment Variables**
3. Add:
   - `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - `PAYSTACK_SECRET_KEY`
   - `RESEND_API_KEY`

Note: Public variables (starting with `NEXT_PUBLIC_`) are safe to expose in browser.

---

## 7. Testing the Integrations

### Test Paystack
```bash
# Use test keys from Paystack dashboard
# Test card: 4111 1111 1111 1111
# Exp: Any future date
# CVV: Any 3 digits
```

### Test Resend
```bash
# Use a test email or your own
# Check email inbox or Resend dashboard for delivery status
```

### Test Zoho Widget
- Visit your website
- Look for chat widget in bottom-right corner
- Try sending a message

---

## 8. Next Steps

1. **Install Resend package**: `npm install resend`
2. **Get API keys** from Paystack and Resend
3. **Update `.env`** with your keys
4. **Create database tables** in Supabase
5. **Test integrations** locally with `npm run dev`
6. **Deploy** to Vercel with environment variables

---

## Support & Resources

- **Paystack Docs**: https://paystack.com/docs
- **Resend Docs**: https://resend.com/docs
- **Zoho SalesIQ**: https://www.zoho.com/salesiq/
- **Supabase Docs**: https://supabase.com/docs

