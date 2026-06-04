"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { scheduleData, type CourseEvent } from "@/data/scheduleData";
import { supabase } from "@/integrations/supabase/client";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: any) => any;
    };
  }
}

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_live_ce5e0251204496c9ab247070556d4fe20c4d7949";

const defaultFormState = {
  bookerEmail: "",
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
  paymentMethod: "paystack",
  confirmAmount: "",
};

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center text-foreground">
          Loading booking form…
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventId = searchParams?.get("eventId") || "";
  const selectedEvent = useMemo(
    () => scheduleData.find((event) => event.id === eventId) ?? scheduleData[0],
    [eventId]
  );

  const [event, setEvent] = useState<CourseEvent>(selectedEvent);
  const [form, setForm] = useState(defaultFormState);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setEvent(selectedEvent);
  }, [selectedEvent]);

  useEffect(() => {
    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (session?.user?.email) {
        const userEmail = session.user.email;
        setForm((prev) => ({ ...prev, email: userEmail, bookerEmail: userEmail }));
      }
    };
    loadSession();
  }, []);

  const updateForm = (field: keyof typeof defaultFormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const dobString = () => {
    const { dobMonth, dobDay, dobYear } = form;
    return [dobMonth, dobDay, dobYear].filter(Boolean).join("/");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("");
    setSuccessMessage("");

    if (!form.cancellationAgreed) {
      setStatusMessage("Please agree to the cancellation terms before booking.");
      return;
    }

    if (!form.firstName || !form.lastName || !form.email || !form.bookerEmail || !form.address || !form.city || !form.phone) {
      setStatusMessage("Please complete all required fields before continuing.");
      return;
    }

    if (!event) {
      setStatusMessage("Please select a course to reserve.");
      return;
    }

    setLoading(true);

    const { data } = await supabase.auth.getSession();
    const userId = data.session?.user?.id;

    const bookingPayload: any = {
      user_id: userId || undefined,
      booker_email: form.bookerEmail,
      first_name: form.firstName,
      last_name: form.lastName,
      address: form.address,
      city: form.city,
      email: form.email,
      phone: form.phone,
      dob: dobString(),
      photo_id: form.photoId,
      company: form.company,
      height: form.height,
      shoe_size: form.shoeSize,
      swimming: form.swimming,
      weight: form.weight,
      hear_about: form.hearAbout,
      uscg_credential: form.uscgCredential,
      text_messages: form.textMessages,
      cancellation_agreed: form.cancellationAgreed,
      courses: [
        {
          title: event.title,
          date: `${event.day}, ${event.date} ${event.month.split(",")[0]} '26`,
          duration: event.duration,
          price: event.price,
          quantity: 1,
        },
      ],
      total_cost: event.price,
    };

    if (form.paymentMethod === "paystack") {
      if (!window.PaystackPop) {
        setStatusMessage("Paystack payment library did not load. Please try again later.");
        setLoading(false);
        return;
      }

      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email: form.email,
        amount: event.price * 100,
        ref: `AHLEI-${Date.now()}`,
        metadata: {
          eventId: event.id,
          eventTitle: event.title,
        },
        onClose: () => {
          setLoading(false);
          setStatusMessage("Payment window closed. Your booking was not completed.");
        },
        onSuccess: async (response: any) => {
          bookingPayload.status = "confirmed";
          bookingPayload.confirm_amount = String(event.price);
          bookingPayload.payment_reference = response.reference;

          const { error } = await supabase.from("bookings" as any).insert(bookingPayload);
          if (error) {
            setStatusMessage(error.message);
          } else {
            setSuccessMessage("Booking completed successfully! We have received your payment and your seat is reserved.");
          }
          setLoading(false);
        },
      });

      handler.openIframe();
      return;
    }

    bookingPayload.confirm_amount = form.confirmAmount || String(event.price);
    bookingPayload.status = "pending";

    const { error } = await supabase.from("bookings" as any).insert(bookingPayload);
    if (error) {
      setStatusMessage(error.message);
    } else {
      setSuccessMessage("Your booking request has been submitted. We will contact you to complete payment.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Reserve Your Course
          </motion.h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">
            Complete the form below to secure your seat and pay online with Paystack or confirm a bank transfer.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr]">
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-display text-lg text-foreground font-semibold">Selected course</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">{event.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl text-ocean">${event.price.toLocaleString()}</p>
                    <p className="font-body text-xs text-muted-foreground">{event.ticketLabel}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 text-sm">
                  <div className="flex items-center justify-between rounded-2xl bg-muted p-4">
                    <span className="font-medium text-foreground">Date</span>
                    <span className="text-muted-foreground">{event.month} · {event.day} · {event.duration}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-muted p-4">
                    <span className="font-medium text-foreground">Location</span>
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-muted p-4">
                    <span className="font-medium text-foreground">Address</span>
                    <span className="text-muted-foreground">{event.address}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="font-display text-lg text-foreground font-semibold mb-4">Need a different date?</h2>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Browse our full schedule and choose another course date if required.
                </p>
                <Link
                  href="/course-schedule"
                  className="inline-flex rounded-sm bg-ocean px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background hover:bg-ocean/90 transition-colors"
                >
                  View full schedule
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {statusMessage && (
                  <div className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">{statusMessage}</div>
                )}
                {successMessage && (
                  <div className="rounded-md bg-emerald-100 px-4 py-3 text-sm text-emerald-900">{successMessage}</div>
                )}

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Booker email" required>
                    <input
                      type="email"
                      value={form.bookerEmail}
                      onChange={(e) => updateForm("bookerEmail", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                  <FormField label="Email" required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="First name" required>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => updateForm("firstName", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                  <FormField label="Last name" required>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => updateForm("lastName", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                </div>

                <FormField label="Address" required>
                  <textarea
                    rows={3}
                    value={form.address}
                    onChange={(e) => updateForm("address", e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20 resize-y"
                    required
                  />
                </FormField>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="City" required>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => updateForm("city", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                  <FormField label="Phone" required>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <FormField label="Date of birth" required>
                    <div className="grid grid-cols-3 gap-3">
                      <select
                        value={form.dobMonth}
                        onChange={(e) => updateForm("dobMonth", e.target.value)}
                        className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                        required
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, index) => (
                          <option key={index} value={String(index + 1)}>{index + 1}</option>
                        ))}
                      </select>
                      <select
                        value={form.dobDay}
                        onChange={(e) => updateForm("dobDay", e.target.value)}
                        className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                        required
                      >
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, index) => (
                          <option key={index} value={String(index + 1)}>{index + 1}</option>
                        ))}
                      </select>
                      <select
                        value={form.dobYear}
                        onChange={(e) => updateForm("dobYear", e.target.value)}
                        className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                        required
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 80 }, (_, index) => {
                          const year = new Date().getFullYear() - index;
                          return (
                            <option key={year} value={String(year)}>{year}</option>
                          );
                        })}
                      </select>
                    </div>
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Photo ID (Driver's license, passport)" required>
                    <input
                      type="text"
                      value={form.photoId}
                      onChange={(e) => updateForm("photoId", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                      required
                    />
                  </FormField>
                  <FormField label="Company / Agency">
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => updateForm("company", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                    />
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Height">
                    <input
                      type="text"
                      value={form.height}
                      onChange={(e) => updateForm("height", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                    />
                  </FormField>
                  <FormField label="Shoe size">
                    <input
                      type="text"
                      value={form.shoeSize}
                      onChange={(e) => updateForm("shoeSize", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                    />
                  </FormField>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField label="Swimming ability">
                    <select
                      value={form.swimming}
                      onChange={(e) => updateForm("swimming", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                    >
                      <option value="">Choose</option>
                      <option value="Yes - I can swim confidently">Yes - I can swim confidently</option>
                      <option value="Yes - but I am not a strong swimmer">Yes - but I am not a strong swimmer</option>
                      <option value="No - I cannot swim">No - I cannot swim</option>
                    </select>
                  </FormField>
                  <FormField label="Weight">
                    <input
                      type="text"
                      value={form.weight}
                      onChange={(e) => updateForm("weight", e.target.value)}
                      className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                    />
                  </FormField>
                </div>

                <FormField label="How did you hear about us?">
                  <input
                    type="text"
                    value={form.hearAbout}
                    onChange={(e) => updateForm("hearAbout", e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </FormField>

                <FormField label="USCG credential / endorsement">
                  <input
                    type="text"
                    value={form.uscgCredential}
                    onChange={(e) => updateForm("uscgCredential", e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </FormField>

                <FormField label="Text message consent">
                  <input
                    type="text"
                    value={form.textMessages}
                    onChange={(e) => updateForm("textMessages", e.target.value)}
                    className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                  />
                </FormField>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border bg-muted p-4">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={form.cancellationAgreed}
                        onChange={(e) => updateForm("cancellationAgreed", e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-border text-ocean focus:ring-ocean"
                      />
                      <span className="font-body text-sm text-muted-foreground">
                        I understand the course booking terms, cancellation policy, and agree to be contacted by Ahlei about payment and schedule confirmation.
                      </span>
                    </label>
                  </div>

                  <div className="rounded-2xl border border-border bg-muted p-4">
                    <div className="font-display text-sm font-semibold text-foreground mb-3">Payment method</div>
                    <div className="grid gap-3">
                      <label className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paystack"
                          checked={form.paymentMethod === "paystack"}
                          onChange={() => updateForm("paymentMethod", "paystack")}
                          className="h-4 w-4 text-ocean"
                        />
                        <span className="font-body text-sm text-foreground">Pay online with card</span>
                      </label>
                      <label className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          checked={form.paymentMethod === "bank"}
                          onChange={() => updateForm("paymentMethod", "bank")}
                          className="h-4 w-4 text-ocean"
                        />
                        <span className="font-body text-sm text-foreground">Confirm with bank transfer</span>
                      </label>
                    </div>
                    {form.paymentMethod === "bank" && (
                      <div className="mt-4">
                        <label className="font-body text-sm text-foreground block mb-2">Amount to confirm</label>
                        <input
                          type="text"
                          value={form.confirmAmount}
                          onChange={(e) => updateForm("confirmAmount", e.target.value)}
                          placeholder={`Suggested: ${event.price}`}
                          className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-md bg-ocean px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background transition hover:bg-ocean/90 disabled:opacity-60"
                >
                  {loading ? "Submitting…" : "Submit booking"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const FormField = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div>
    <label className="font-body text-sm text-foreground block mb-2">
      {label}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
    {children}
  </div>
);
