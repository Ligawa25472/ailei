"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
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
            About Us
          </motion.h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Learn more about Ahlei and our commitment to excellence in maritime education.
          </p>
        </div>
      </div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-foreground space-y-8"
          >
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ahlei was founded with a singular vision: to provide world-class maritime training that prepares aspiring seafarers for successful careers on the open water. Located in Orlando, Florida — with training locations at Port Canaveral and Fort Lauderdale — we are uniquely positioned to offer hands-on training with direct access to the maritime industry.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide the highest quality of maritime training to give crew the specific knowledge required prior to assuming shipboard duties. We believe that proper training saves lives and creates confident, capable mariners ready to excel in any maritime environment.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground mb-4">Why Choose Us?</h2>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside ml-4">
                <li>USCG & STCW approved training facility</li>
                <li>Experienced instructors with real-world maritime backgrounds</li>
                <li>Small class sizes for personalized attention</li>
                <li>Job placement assistance upon graduation</li>
                <li>State-of-the-art training equipment and ship simulators</li>
                <li>Multiple locations: Orlando/Port Canaveral and Fort Lauderdale</li>
              </ul>
            </div>
          </motion.div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-3 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
