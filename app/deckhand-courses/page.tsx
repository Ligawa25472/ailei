"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Page() {
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
            Deckhand Courses
          </motion.h1>
        </div>
      </div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-muted-foreground">Coming soon...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
