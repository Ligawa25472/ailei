import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, X, ShoppingCart } from "lucide-react";
import scheduleBanner from "@/assets/schedule-banner.jpg";
import academyLogo from "@/assets/academy-logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";

// Paystack Public Key
const PAYSTACK_PUBLIC_KEY = "pk_live_ce5e0251204496c9ab247070556d4fe20c4d7949";

const steps = ["BOOKER", "DETAILS", "PAYMENT", "COMPLETE"] as const;
type Step = (typeof steps)[number];

const swimmingOptions = [
  "Yes - I can swim confidently",
  "Yes - but I am not a strong swimmer",
  "No - I cannot swim",
];

const hearAboutOptions = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Friend/Colleague Referral",
  "Yacht Crew Agency",
  "Other",
];

const BookingCheckout = () => {
  const navigate = useNavigate();
  const { items, removeItem, clearCart, totalCost, totalItems } = useCart();
  const [confirmAmount, setConfirmAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"pesapal" | "bank">("pesapal");
  const [processingPayment, setProcessingPayment] = useState(false);

  const [currentStep, setCurrentStep] = useState<Step>("BOOKER");
  const [discountCode, setDiscountCode] = useState("");

  // Booker form
  const [bookerEmail, setBookerEmail] = useState("");

  // Details form
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
    phone: "",
    dobMonth: "",
    dobDay: "",
    dobYear: "",
    photoId: "",
    company: "",
    height: "",
    shoeSize: "",
    swimming: "",
    weight: "",
    hearAbout: "",
    uscgCredential: "",
    textMessages: "",
    cancellationAgreed: false,
  });

  const goToStep = (step: Step) => setCurrentStep(step);

  const updateDetail = (field: string, value: string | boolean) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border py-4">
        <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between">
          <h1 className="font-display text-xl font-semibold text-foreground">
            Ahlei Course Schedule
          </h1>
          {currentStep !== "BOOKER" && (
            <div className="flex items-center gap-2 text-foreground">
              <ShoppingCart className="w-4 h-4" />
              <span className="font-body text-sm font-semibold">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
              <span className="font-body text-sm text-muted-foreground">
                ${totalCost.toLocaleString()}.00
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-48 md:h-64">
        <img
          src={scheduleBanner}
          alt="Course Schedule"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <img
              src={academyLogo}
              alt="Ahlei"
              className="h-24 w-24 md:h-32 md:w-32 object-contain bg-background/90 rounded-lg p-3"
            />
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      {currentStep === "BOOKER" ? (
        <div className="border-b border-border py-3">
          <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center">
            <Link
              to="/course-schedule"
              className="font-body text-sm uppercase tracking-widest text-ocean hover:text-foreground transition-colors"
            >
              Schedule
            </Link>
            <Link
              to="/course-schedule"
              className="font-body text-sm uppercase tracking-widest text-ocean hover:text-foreground transition-colors"
            >
              Exit Booking System
            </Link>
          </div>
        </div>
      ) : null}

      {/* Step breadcrumb (shown after basket) */}
      {currentStep !== "BOOKER" ? (
        <div className="border-b border-border py-3">
          <div className="container mx-auto px-4 max-w-4xl flex items-center gap-3">
            {steps.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="text-muted-foreground font-body text-xs">›</span>
                )}
                <span
                  className={`font-body text-xs uppercase tracking-widest font-semibold ${
                    step === currentStep
                      ? "text-foreground"
                      : steps.indexOf(step) < steps.indexOf(currentStep)
                      ? "text-ocean cursor-pointer"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => {
                    if (steps.indexOf(step) < steps.indexOf(currentStep)) {
                      goToStep(step);
                    }
                  }}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="container mx-auto px-4 max-w-4xl py-8">
        {/* BASKET step */}
        {currentStep === "BOOKER" && (
          <div>
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Your basket is empty.
                </p>
                <Link
                  to="/course-schedule"
                  className="px-8 py-3 bg-ocean text-background font-body font-semibold text-sm rounded-sm hover:bg-ocean/90 transition-colors inline-block"
                >
                  Browse courses
                </Link>
              </div>
            ) : (
              <>
                {/* Selected Items */}
                <div className="border border-border rounded-sm mb-6">
                  <div className="bg-muted px-6 py-3">
                    <h2 className="font-display text-sm uppercase tracking-widest text-foreground font-semibold">
                      Selected Items
                    </h2>
                  </div>
                  <div className="p-6">
                    {items.map((item, idx) => (
                      <div key={item.id}>
                        <h3 className="font-display text-base font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 font-body text-sm text-muted-foreground mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {item.date} &nbsp;·&nbsp; {item.duration}
                          </span>
                        </div>

                        <div className="flex items-center justify-between py-3 border-t border-border">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="font-body text-sm text-foreground">
                              {item.ticketLabel}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-body text-sm text-muted-foreground">
                              × {item.quantity}
                            </span>
                            <span className="font-body text-sm font-semibold text-foreground">
                              ${(item.price * item.quantity).toLocaleString()}.00
                            </span>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {idx < items.length - 1 && (
                          <div className="my-4 border-b border-border" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="bg-muted px-6 py-4 flex items-center justify-end gap-6">
                    <span className="font-display text-sm font-semibold text-foreground">
                      Total cost of booking
                    </span>
                    <span className="font-display text-base font-semibold text-foreground">
                      ${totalCost.toLocaleString()}.00
                    </span>
                  </div>

                  {/* Discount code */}
                  <div className="px-6 py-4 flex items-center justify-center gap-3">
                    <input
                      type="text"
                      placeholder="Enter discount or voucher code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="px-4 py-2 border border-border rounded-sm font-body text-sm w-64 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ocean"
                    />
                    <button className="px-6 py-2 bg-ocean text-background font-body text-sm font-semibold rounded-sm hover:bg-ocean/90 transition-colors">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    to="/course-schedule"
                    className="px-6 py-2 border border-border font-body text-sm text-foreground hover:bg-muted transition-colors rounded-sm"
                  >
                    Select more
                  </Link>
                  <button
                    onClick={() => goToStep("DETAILS")}
                    className="px-8 py-3 bg-ocean text-background font-body font-semibold text-sm rounded-sm hover:bg-ocean/90 transition-colors"
                  >
                    Book now
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* DETAILS step */}
        {currentStep === "DETAILS" && (
          <div className="max-w-2xl mx-auto">
            {/* Booker email */}
            <div className="border border-border rounded-sm mb-6">
              <div className="bg-muted px-6 py-3">
                <h2 className="font-display text-base font-semibold text-foreground">
                  Booker details
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-6 mb-4">
                  <label className="font-body text-sm text-foreground text-right w-48">
                    Your email address
                  </label>
                  <div className="flex-1">
                    <input
                      type="email"
                      value={bookerEmail}
                      onChange={(e) => setBookerEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean"
                    />
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      Enter your own email if booking on behalf of others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendee details */}
            <div className="border border-border rounded-sm mb-6">
              <div className="bg-muted px-6 py-3">
                <h2 className="font-display text-base font-semibold text-foreground">
                  Attendee details
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-xs uppercase tracking-widest font-semibold text-foreground">
                    1ST ATTENDEE
                  </span>
                  <button className="px-4 py-1.5 border border-border font-body text-sm text-foreground hover:bg-muted rounded-sm transition-colors">
                    Change attendee
                  </button>
                </div>

                <div className="space-y-5">
                  <FormRow label="Full name" required>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-body text-xs text-muted-foreground mb-1 block">First name</label>
                        <input type="text" value={details.firstName} onChange={(e) => updateDetail("firstName", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                      </div>
                      <div>
                        <label className="font-body text-xs text-muted-foreground mb-1 block">Last name</label>
                        <input type="text" value={details.lastName} onChange={(e) => updateDetail("lastName", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                      </div>
                    </div>
                  </FormRow>

                  <FormRow label="Address" required>
                    <textarea rows={3} value={details.address} onChange={(e) => updateDetail("address", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean resize-y" />
                  </FormRow>

                  <FormRow label="City" required>
                    <input type="text" value={details.city} onChange={(e) => updateDetail("city", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Email" required>
                    <input type="email" value={details.email} onChange={(e) => updateDetail("email", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Phone number and or What's App number" required>
                    <input type="tel" value={details.phone} onChange={(e) => updateDetail("phone", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Date of Birth" required>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="font-body text-xs text-muted-foreground mb-1 block">Month</label>
                        <select value={details.dobMonth} onChange={(e) => updateDetail("dobMonth", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean">
                          <option value="">--</option>
                          {Array.from({ length: 12 }, (_, i) => (<option key={i + 1} value={String(i + 1)}>{i + 1}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-xs text-muted-foreground mb-1 block">Day</label>
                        <select value={details.dobDay} onChange={(e) => updateDetail("dobDay", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean">
                          <option value="">--</option>
                          {Array.from({ length: 31 }, (_, i) => (<option key={i + 1} value={String(i + 1)}>{i + 1}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="font-body text-xs text-muted-foreground mb-1 block">Year</label>
                        <select value={details.dobYear} onChange={(e) => updateDetail("dobYear", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean">
                          <option value="">--</option>
                          {Array.from({ length: 80 }, (_, i) => { const y = 2008 - i; return <option key={y} value={String(y)}>{y}</option>; })}
                        </select>
                      </div>
                    </div>
                  </FormRow>

                  <FormRow label="Photo ID# (Example, Driving license, passport)" required>
                    <input type="text" value={details.photoId} onChange={(e) => updateDetail("photoId", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Company (if None state N/A)" required>
                    <input type="text" value={details.company} onChange={(e) => updateDetail("company", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Height in Feet/Inches" required>
                    <input type="text" value={details.height} onChange={(e) => updateDetail("height", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Approx Shoe Size" required>
                    <input type="text" value={details.shoeSize} onChange={(e) => updateDetail("shoeSize", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Swimming (must be able to tread water for 1 minute without a floatation device)" required>
                    <select value={details.swimming} onChange={(e) => updateDetail("swimming", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean">
                      <option value="">--</option>
                      {swimmingOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                    <p className="font-body text-xs text-ocean mt-1">
                      IMPORTANT students must be able to tread water for 1 minute without any flotation devices. Please contact the school if you believe you cannot complete this assessment.
                    </p>
                  </FormRow>

                  <FormRow label="Weight in Pounds" required>
                    <input type="text" value={details.weight} onChange={(e) => updateDetail("weight", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="How did you hear about us?" required>
                    <select value={details.hearAbout} onChange={(e) => updateDetail("hearAbout", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean">
                      <option value="">--</option>
                      {hearAboutOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  </FormRow>

                  <FormRow label="Do you have a US Coastguard credential? If yes please state your number if not type N/A." required>
                    <input type="text" value={details.uscgCredential} onChange={(e) => updateDetail("uscgCredential", e.target.value)} className="w-full px-3 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean" />
                  </FormRow>

                  <FormRow label="Text Messages for Important Course Information" required>
                    <div className="flex items-center gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="textMessages" value="yes" checked={details.textMessages === "yes"} onChange={() => updateDetail("textMessages", "yes")} className="accent-ocean" />
                        <span className="font-body text-sm text-foreground">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="textMessages" value="no" checked={details.textMessages === "no"} onChange={() => updateDetail("textMessages", "no")} className="accent-ocean" />
                        <span className="font-body text-sm text-foreground">No</span>
                      </label>
                    </div>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      By submitting your number to Ahlei, you provide express written consent to contact you via SMS with important course information. Message and data rates may apply. Select no to opt out.
                    </p>
                  </FormRow>
                </div>
              </div>
            </div>

            {/* Booking details / cancellation */}
            <div className="border border-border rounded-sm mb-6">
              <div className="bg-muted px-6 py-3">
                <h2 className="font-display text-base font-semibold text-foreground">
                  Booking details
                </h2>
              </div>
              <div className="p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={details.cancellationAgreed}
                    onChange={(e) => updateDetail("cancellationAgreed", e.target.checked)}
                    className="mt-1 accent-ocean"
                  />
                  <div>
                    <span className="font-body text-sm text-foreground">
                      Do you agree to the cancellation Policy (Check Box){" "}
                      <span className="text-destructive">*</span>
                    </span>
                    <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                      Cancellations made prior to 7 days before the start of the 2-day practical portion of the course incurs a 50% cancellation fee. No refunds within 7 days of the practical course commencement date. We reserve the right to postpone classroom/practical course dates for any reason and offer alternate dates, the student can change practical course dates without any penalty (subject to availability with participant numbers).
                    </p>
                  </div>
                </label>
              </div>
              <div className="px-6 py-4 border-t border-border">
                <button
                  onClick={() => goToStep("PAYMENT")}
                  className="px-8 py-3 bg-ocean text-background font-body font-semibold text-sm rounded-sm hover:bg-ocean/90 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAYMENT step */}
        {currentStep === "PAYMENT" && (
          <div className="max-w-2xl mx-auto">
            {/* Order Summary */}
            <div className="border border-border rounded-sm mb-6">
              <div className="bg-muted px-6 py-3">
                <h2 className="font-display text-base font-semibold text-foreground">
                  Order Summary
                </h2>
              </div>
              <div className="p-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between mb-4 pb-4 border-b border-border last:mb-0 last:pb-0">
                    <span className="font-body text-sm text-foreground">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-display text-base font-semibold text-foreground">
                      ${(item.price * item.quantity).toLocaleString()}.00
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-display text-sm font-semibold text-foreground">Total Due</span>
                  <span className="font-display text-xl font-semibold text-foreground">
                    ${totalCost.toLocaleString()}.00
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="border border-border rounded-sm mb-6">
              <div className="bg-muted px-6 py-3">
                <h2 className="font-display text-base font-semibold text-foreground">
                  Payment Method
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:bg-muted transition-colors" onClick={() => setPaymentMethod("paystack")}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paystack"
                      checked={paymentMethod === "paystack"}
                      onChange={(e) => setPaymentMethod(e.target.value as "paystack" | "bank")}
                      className="accent-ocean"
                    />
                    <div>
                      <span className="font-body text-sm font-semibold text-foreground">Credit/Debit Card (Paystack)</span>
                      <p className="font-body text-xs text-muted-foreground mt-1">Pay instantly with your card</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-border rounded-sm cursor-pointer hover:bg-muted transition-colors" onClick={() => setPaymentMethod("bank")}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value as "paystack" | "bank")}
                      className="accent-ocean"
                    />
                    <div>
                      <span className="font-body text-sm font-semibold text-foreground">Bank Transfer (Wire)</span>
                      <p className="font-body text-xs text-muted-foreground mt-1">Transfer to our bank account</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Paystack Payment */}
            {paymentMethod === "paystack" && (
              <div className="border border-border rounded-sm mb-6">
                <div className="bg-muted px-6 py-3">
                  <h2 className="font-display text-base font-semibold text-foreground">
                    Card Payment (Powered by Paystack)
                  </h2>
                </div>
                <div className="p-6">
                  <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                    Pay securely with your credit or debit card. Your payment will be processed immediately through Paystack's secure payment gateway.
                  </p>
                  <div className="bg-muted p-4 rounded-sm mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm font-semibold text-foreground">Amount to Pay:</span>
                      <span className="font-display text-lg font-semibold text-foreground">${totalCost.toLocaleString()}.00</span>
                    </div>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mb-6">
                    Click the "Process Payment" button below to proceed to the secure Paystack payment page. Your booking will be confirmed immediately after successful payment.
                  </p>
                </div>
              </div>
            )}

            {/* Bank Transfer Instructions */}
            {paymentMethod === "bank" && (
              <div className="border border-border rounded-sm mb-6">
                <div className="bg-muted px-6 py-3">
                  <h2 className="font-display text-base font-semibold text-foreground">
                    Bank Transfer Instructions (USD)
                  </h2>
                </div>
                <div className="p-6">
                  <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                    Please make a wire transfer to the following bank account. Once payment is received, your booking will be confirmed via email.
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">Bank Name:</span>
                      <span className="font-body text-sm font-semibold text-foreground">Wells Fargo</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">Account Name:</span>
                      <span className="font-body text-sm font-semibold text-foreground">AHLEI</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">Account Number:</span>
                      <span className="font-body text-sm font-semibold text-foreground font-mono tracking-wide">40630256674989054</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">Account Type:</span>
                      <span className="font-body text-sm font-semibold text-foreground">Checking</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">Routing Number:</span>
                      <span className="font-body text-sm font-semibold text-foreground font-mono tracking-wide">121000248</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">SWIFT Code:</span>
                      <span className="font-body text-sm font-semibold text-foreground font-mono tracking-wide">WFBIUS6SXXX</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                      <span className="font-body text-sm text-muted-foreground sm:w-40 flex-shrink-0">Bank Address:</span>
                      <span className="font-body text-sm font-semibold text-foreground">651 N Broad St, Suite 206, Middletown, Delaware, 19709, USA</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Confirm Payment */}
            <div className="border border-border rounded-sm mb-6">
              <div className="bg-muted px-6 py-3">
                <h2 className="font-display text-base font-semibold text-foreground">
                  Confirm Payment
                </h2>
              </div>
              <div className="p-6">
                {paymentMethod === "bank" ? (
                  <>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      Enter the amount you are transferring (USD as invoiced) and click confirm to complete your booking.
                    </p>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-display text-lg font-semibold text-foreground">$</span>
                      <input
                        type="text"
                        placeholder={`${totalCost.toLocaleString()}.00`}
                        value={confirmAmount}
                        onChange={(e) => setConfirmAmount(e.target.value)}
                        className="w-48 px-4 py-2 border border-border rounded-sm font-body text-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-ocean"
                      />
                      <span className="font-body text-sm text-muted-foreground">USD</span>
                    </div>
                    <div className="border-t border-border pt-4 space-y-3">
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        Payment confirmation (SWIFT MT103) should be emailed to{" "}
                        <a href="mailto:billing@ahlei.com" className="text-ocean underline font-semibold">
                          billing@ahlei.com
                        </a>{" "}
                        along with your application reference.
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        All bank charges and transfer fees are to be borne by the applicant. Please send payments as <span className="font-semibold text-foreground">OUR</span> (all charges paid by sender).
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-ocean/10 border border-ocean rounded-sm p-4 mb-4">
                      <p className="font-body text-sm text-foreground font-semibold mb-2">Ready to pay?</p>
                      <p className="font-body text-sm text-muted-foreground">
                        Click the "Process Payment" button below to complete your booking securely via Paystack.
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="px-6 py-4 border-t border-border flex items-center justify-between">
                <button
                  onClick={() => goToStep("DETAILS")}
                  className="px-6 py-2 border border-border font-body text-sm text-foreground hover:bg-muted transition-colors rounded-sm"
                >
                  Back
                </button>
                <button
                  disabled={processingPayment || (paymentMethod === "bank" && !confirmAmount)}
                  onClick={async () => {
                    setProcessingPayment(true);
                    const dob = [details.dobMonth, details.dobDay, details.dobYear].filter(Boolean).join("/");
                    
                    if (paymentMethod === "paystack") {
                      // Initialize Paystack payment
                      const handler = window.PaystackPop.setup({
                        key: PAYSTACK_PUBLIC_KEY,
                        email: details.email,
                        amount: totalCost * 100, // Paystack expects amount in cents
                        ref: `AHLEI-${Date.now()}`,
                        onClose: function() {
                          setProcessingPayment(false);
                        },
                        onSuccess: async function(response: any) {
                          // Save booking to database after successful payment
                          await supabase.from("bookings").insert({
                            booker_email: bookerEmail,
                            first_name: details.firstName,
                            last_name: details.lastName,
                            address: details.address,
                            city: details.city,
                            email: details.email,
                            phone: details.phone,
                            dob,
                            photo_id: details.photoId,
                            company: details.company,
                            height: details.height,
                            shoe_size: details.shoeSize,
                            swimming: details.swimming,
                            weight: details.weight,
                            hear_about: details.hearAbout,
                            uscg_credential: details.uscgCredential,
                            text_messages: details.textMessages,
                            cancellation_agreed: details.cancellationAgreed,
                            courses: items.map(i => ({ title: i.title, date: i.date, duration: i.duration, price: i.price, quantity: i.quantity })),
                            total_cost: totalCost,
                            payment_method: "paystack",
                            paystack_reference: response.reference,
                          });
                          setProcessingPayment(false);
                          goToStep("COMPLETE");
                          clearCart();
                        },
                      });
                      handler.openIframe();
                    } else {
                      // Bank transfer - save booking as pending
                      await supabase.from("bookings").insert({
                        booker_email: bookerEmail,
                        first_name: details.firstName,
                        last_name: details.lastName,
                        address: details.address,
                        city: details.city,
                        email: details.email,
                        phone: details.phone,
                        dob,
                        photo_id: details.photoId,
                        company: details.company,
                        height: details.height,
                        shoe_size: details.shoeSize,
                        swimming: details.swimming,
                        weight: details.weight,
                        hear_about: details.hearAbout,
                        uscg_credential: details.uscgCredential,
                        text_messages: details.textMessages,
                        cancellation_agreed: details.cancellationAgreed,
                        courses: items.map(i => ({ title: i.title, date: i.date, duration: i.duration, price: i.price, quantity: i.quantity })),
                        total_cost: totalCost,
                        confirm_amount: confirmAmount,
                        payment_method: "bank",
                      });
                      setProcessingPayment(false);
                      goToStep("COMPLETE");
                      clearCart();
                    }
                  }}
                  className="px-8 py-3 bg-ocean text-background font-body font-semibold text-sm rounded-sm hover:bg-ocean/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {paymentMethod === "paystack" ? "Process Payment" : "Confirm Payment"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* COMPLETE step */}
        {currentStep === "COMPLETE" && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ocean/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Booking Confirmed!
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Thank you for booking with Ahlei. A confirmation email has been sent with your booking details.
            </p>
            <Link
              to="/"
              className="px-8 py-3 bg-ocean text-background font-body font-semibold text-sm rounded-sm hover:bg-ocean/90 transition-colors inline-block"
            >
              Return to Home
            </Link>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-muted border-t border-border py-12 mt-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
                Contact
              </h3>
              <div className="font-body text-sm text-muted-foreground space-y-2">
                <p>Ahlei</p>
                <p>6236 Kingspointe Pkwy, #1, Orlando, FL, 32819</p>
                <p>4077488302</p>
                <p>courses@ahlei.com</p>
                <p>https://www.ahlei.com</p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
                Payments
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3">
                Cards accepted:
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 border border-border rounded-sm font-body text-xs font-bold text-foreground">VISA</span>
                <span className="px-3 py-1 border border-border rounded-sm font-body text-xs font-bold text-foreground">MC</span>
                <span className="px-3 py-1 border border-border rounded-sm font-body text-xs font-bold text-foreground">AMEX</span>
              </div>
              <p className="font-body text-sm text-muted-foreground mt-4">
                View our{" "}
                <Link to="/contact" className="text-ocean underline">refund policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormRow = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
    <label className="font-body text-sm text-foreground sm:text-right sm:w-48 sm:pt-2 flex-shrink-0">
      {label}
      {required && <span className="text-destructive ml-0.5">*</span>}
    </label>
    <div className="flex-1">{children}</div>
  </div>
);

export default BookingCheckout;
