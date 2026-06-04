"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/emails/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "noreply@ahlei.com",
          to: ["admissions@aihlei.org"],
          bcc: ["safiinc2023@gmail.com"],
          subject: `New contact form submission from ${form.name}`,
          html: `<p><strong>Name:</strong> ${form.name}</p><p><strong>Email:</strong> ${form.email}</p><p><strong>Phone:</strong> ${form.phone}</p><p><strong>Message:</strong></p><p>${form.message.replace(/\n/g, "<br />")}</p>`,
          reply_to: form.email,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "There was a problem sending your message.");
      }

      toast({ title: "Message sent", description: "Your request has been sent to admissions." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({ title: "Send failed", description: error instanceof Error ? error.message : "Unable to send message." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Ready to start your maritime career? Get in touch with our admissions team today.
          </p>
        </div>
      </div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 border border-border"
          >
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ocean"
                placeholder="John Smith"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ocean"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ocean"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            <div>
              <label className="block font-body text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ocean resize-none"
                placeholder="Tell us about your maritime career goals..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
