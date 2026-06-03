"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { courseCategories, scheduleData } from "@/data/scheduleData";

export default function CourseSchedulePage() {
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
            Course Schedule
          </motion.h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">
            Browse upcoming maritime training events, including STCW, yacht crew, and captain license sessions.
          </p>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3 mb-10">
            {courseCategories.map((category) => (
              <div key={category.filter} className="rounded-2xl border border-border bg-muted p-4 text-center">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Category</p>
                <h3 className="font-display text-lg text-foreground">{category.label}</h3>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {scheduleData.map((event) => (
              <div key={event.id} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="font-display text-xl text-foreground mb-2">{event.title}</p>
                    <p className="font-body text-sm text-muted-foreground">{event.location} · {event.address}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="font-display text-3xl text-ocean">${event.price}</p>
                    <p className={`text-xs font-semibold uppercase ${event.status === "available" ? "text-emerald-700" : "text-amber-700"}`}>
                      {event.status.replace("-", " ")}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">Date</p>
                    <p className="font-body text-foreground">{event.month} · {event.day} · {event.duration}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground">Class</p>
                    <p className="font-body text-foreground">{event.ticketLabel}</p>
                  </div>
                  <div className="text-right md:text-left">
                    <Link
                      href="/booking"
                      className="inline-flex items-center rounded-sm border border-foreground px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                      Reserve Spot
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl text-foreground mb-4">Need help choosing a course?</h2>
          <p className="font-body text-muted-foreground mb-6">
            Contact us and our team will recommend the best training package for your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-sm bg-ocean px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background hover:bg-ocean/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
