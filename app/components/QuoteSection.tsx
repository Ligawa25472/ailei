"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import cruisePort from "@/assets/cruise-port.jpg";

const QuoteSection = () => {
  return (
    <section className="relative py-24 md:py-32">
      <Image
        src={cruisePort}
        alt="Cruise ship in port"
        className="absolute inset-0 w-full h-full object-cover"
        fill
        priority={false}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 container mx-auto px-4 max-w-4xl text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-display text-xl md:text-3xl italic text-background leading-relaxed"
        >
          "Our mission is to provide the highest quality of maritime training to give crew the specific knowledge required prior to assuming shipboard duties"
        </motion.blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
