"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import deckhandBanner from "@/assets/deckhand-banner.jpg";

const DeckhandCourses = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={deckhandBanner}
      subtitle="Ready to Start"
      title="A Deckhand Career?"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">Deckhand Courses</h2>
        <h3 className="font-display text-xl text-muted-foreground text-center uppercase tracking-wider mb-12">Deckhand Training</h3>

        <div className="flex flex-col items-center gap-3 mb-12">
          <a href="#deck1" className="font-body text-ocean hover:text-foreground transition-colors underline">
            Introductory Deckhand (with simulator training)
          </a>
          <a href="#deck2" className="font-body text-ocean hover:text-foreground transition-colors underline">
            STCW Basic Training (Blended)
          </a>
        </div>

        <motion.div id="deck1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-6">Introductory Deckhand (with simulator training)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost $800</strong></p>
          <p className="font-body text-foreground mb-2"><strong>Course Duration:</strong> 3 Days</p>
          <p className="font-body text-foreground mb-4"><strong>Course Location:</strong> Orlando</p>
          <p className="font-body text-foreground mb-4">Start Your Adventure Today. Join Our Deckhand Course and Master the Skills Needed to Work on a ship. The Deckhand course is a great introduction to working as a deckhand. It is designed for those interested in seeking a deckhand position on a yacht but are not sure how to best prepare.</p>
          <p className="font-body text-foreground mb-2"><strong>Students will learn:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Basic navigation</li>
            <li>Seamanship</li>
            <li>Deck work</li>
            <li>Emergencies and communications</li>
          </ul>
          <p className="font-body text-foreground mb-2"><strong>In addition, you will Practice with our State-of-the-Art Ship Simulator Technology:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Collision regulations</li>
            <li>Basic boat handling</li>
            <li>Maritime terminology</li>
            <li>Keeping a proper watch in port, at sea and at anchor</li>
            <li>Reporting procedures</li>
            <li>Helmsman techniques</li>
            <li>ECDIS (Electronic charts) and use of radar</li>
          </ul>
          <p className="font-body text-foreground">We highly recommend you also take our exclusive 2 Day STCW Basic Training blended course to complete your full qualification as a deckhand.</p>
          <SignUpButton />
        </motion.div>

        <motion.div id="deck2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl text-foreground mb-6">STCW Basic Training Blended Course (Online & 2 Day Practical Training)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course cost from $995</strong> ($1195 combined with STCW VPDSD)</p>
          <p className="font-body text-foreground mb-2"><strong>Course Locations:</strong> Orlando/Port Canaveral and Fort Lauderdale</p>
          <p className="font-body text-foreground mb-4"><strong>Course Delivery:</strong> Online followed by 2 days of practical training (Fire Fighting, PST and First Aid/CPR).</p>
          <p className="font-body text-foreground mb-4">Maritime Advanced Preparatory Academy offers an exclusive 2 Day STCW Basic Training Blended approved course. The course is completed online followed by 2 days of practical training, covering the four parts of Basic Training. STCW Basic Training is a required safety course for all crew.</p>
          <p className="font-body text-foreground mb-4">Upon enrollment you will receive your online course login information so you can start straight away. Online courses must be completed prior to your 2 days of practical training.</p>
          <SignUpButton />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default DeckhandCourses;
