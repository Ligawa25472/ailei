"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
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
};

export default Contact;
