import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
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
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Ahlei, we are committed to providing world-class maritime training that meets the highest international standards. Our mission is to equip maritime professionals with the knowledge, skills, and certifications needed to excel in their careers while maintaining the highest safety standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Experience</h2>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in maritime education and training, Ahlei has become a trusted leader in the industry. Our instructors are highly qualified professionals with extensive real-world experience, ensuring that every course reflects current industry practices and standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">USCG Approved</h2>
              <p className="text-muted-foreground leading-relaxed">
                All of our courses are approved by the United States Coast Guard, ensuring that our training meets federal requirements for maritime personnel. Our students graduate with internationally recognized certifications that are valid across the global maritime industry.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are dedicated to continuous improvement and staying at the forefront of maritime education. Our state-of-the-art facilities, experienced instructors, and comprehensive curriculum ensure that our graduates are well-prepared for successful careers at sea.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
