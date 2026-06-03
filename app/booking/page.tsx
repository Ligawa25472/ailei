"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { scheduleData } from "@/data/scheduleData";

export default function BookingPage() {
  const upcomingEvents = scheduleData.slice(0, 6);

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
            Book Your Course
          </motion.h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">
            Choose a training date, complete the booking form, and a member of our team will contact you to confirm your seat.
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-border rounded-2xl p-6 bg-muted">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">{event.month}</p>
                    <h2 className="font-display text-xl text-foreground mt-2">{event.title}</h2>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${event.status === "available" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                    {event.status.replace("-", " ")}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">{event.location} · {event.duration}</p>
                <p className="font-body text-sm text-foreground mb-4">{event.address}</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-2xl text-ocean">${event.price}</p>
                  <Link
                    href="/course-schedule"
                    className="inline-flex items-center rounded-sm border border-foreground px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="font-display text-3xl text-foreground mb-4">Ready to reserve your seat?</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-6">
              Visit the schedule page to view full course dates, then contact our team to secure your booking. If you already have a course selected, we can process your request immediately.
            </p>
            <Link
              href="/course-schedule"
              className="inline-flex rounded-sm bg-ocean px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background hover:bg-ocean/90 transition-colors"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
