"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MissionSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl text-foreground mb-8 leading-relaxed"
        >
          Have you ever dreamed of a career that would take you across the Seven Seas and beyond?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          Imagine getting paid, with no living expenses and meeting people from all over the World! 
          With the right attitude, some basic skills and just a few weeks of training, you can be ready for a career at sea.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block px-12 py-4 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
