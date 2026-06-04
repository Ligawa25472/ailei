"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import yachtCta from "@/assets/yacht-cta.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <Image
        src={yachtCta}
        alt="Luxury yacht at sea"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        priority={false}
      />
      <div className="absolute inset-0 bg-foreground/30" />
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-xs tracking-[0.35em] uppercase text-background/80 mb-4"
        >
          Ready to Enroll?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl text-background mb-8"
        >
          Start learning today!
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/booking"
            className="inline-block px-14 py-4 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-background text-background hover:bg-background hover:text-foreground transition-colors"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
