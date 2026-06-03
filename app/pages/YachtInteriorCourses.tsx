"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import yachtBanner from "@/assets/yacht-banner.jpg";

const YachtInteriorCourses = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={yachtBanner}
      subtitle="Ready to Start"
      title="Your Yacht Career?"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">Yacht Interior Training</h2>
        <div className="flex flex-col items-center gap-3 mb-12">
          <a href="#yachtinterior" className="font-body text-ocean hover:text-foreground transition-colors underline">Yachting - Interior Crew Training</a>
          <a href="#x-training" className="font-body text-ocean hover:text-foreground transition-colors underline">Yachting X-Training Deckhand & Interior Crew Combined Training</a>
        </div>

        <motion.div id="yachtinterior" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-6">Yachting - Interior Crew Training</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost: $800</strong></p>
          <p className="font-body text-foreground mb-2"><strong>Course Duration:</strong> 3 Days</p>
          <p className="font-body text-foreground mb-4"><strong>Course Location:</strong> Fort Lauderdale, Orlando Florida</p>
          <p className="font-body text-foreground mb-4">
            <strong>Yacht Stewardess Training</strong> — Lifestyle of exotic travel and meeting new people all over the world, while earning money, are just some of the exciting benefits working on a Yacht. The work is demanding and with our Yacht Interior course taught by Industry professionals, you will be prepared with the basics of working on a Yacht, how to become a yacht stewardess, networking, bar tending and food service.
          </p>

          <p className="font-body text-foreground mb-2 mt-6"><strong>Professional Superyacht Interior Crew Course Summary</strong></p>

          <p className="font-body text-foreground mb-2 mt-4"><strong>Introduction</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Introduction to the Superyacht Industry & Terminology</li>
            <li>Preparing resumes, applications & networking</li>
            <li>Meet with top recruitment agencies</li>
            <li>Finding a position in the luxury yacht industry, salaries and types of employment</li>
            <li>Personal safety and well-being - life on yachts</li>
            <li>Departments and hierarchy on a yacht</li>
            <li>Personal presentation - Dress codes, etiquette, behavior</li>
            <li>Introduction to silver service</li>
          </ul>

          <p className="font-body text-foreground mb-2"><strong>Food - Guest Service</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Types of service</li>
            <li>Preparing for guest arrival</li>
            <li>Formal, informal service</li>
            <li>Seating, proper table setting & decorations</li>
            <li>Breakfast, lunch & dinner service</li>
            <li>Theme nights, cocktail parties, beach/BBQ</li>
            <li>Use of glassware & cutlery</li>
          </ul>

          <p className="font-body text-foreground mb-2"><strong>Housekeeping & Bar Service</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Housekeeping and laundry</li>
            <li>Coffee/Tea service</li>
            <li>Wine service & wine/food pairing</li>
            <li>Introduction to mixology</li>
            <li>Beers, liquors & spirits</li>
            <li>Cocktails & champagne</li>
          </ul>
          <SignUpButton />
        </motion.div>

        <motion.div id="x-training" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-6">Yachting X-Training - Deckhand & Interior Crew Training</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost: $800</strong></p>
          <p className="font-body text-foreground mb-2"><strong>Course Duration:</strong> 3 Days</p>
          <p className="font-body text-foreground mb-4"><strong>Course Location:</strong> Fort Lauderdale</p>
          <p className="font-body text-foreground mb-4">
            Not sure which direction you'd like to go? Perhaps just looking for a broad knowledge of many aspects of yachting. A complete cross training for all departments.
          </p>
          <p className="font-body text-foreground mb-4">
            This incredibly extensive introductory course begins with the fundamentals and then moves into the things that will help make you a more complete team player. It touches on topics such as basic protocols that every yachtie should know. It then teaches rudimentary seamanship tools like essential knots and imperative requirements such as service etiquette and galley must haves.
          </p>
          <p className="font-body text-foreground">A must have for any crew member!</p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl text-foreground mb-6">STCW Basic Training Blended 2 Day Course - USCG Approved</h3>
          <p className="font-body text-foreground mb-2"><strong>Course cost $995</strong> (Option to combine with the VPDSD course $1150)</p>
          <p className="font-body text-foreground mb-4"><strong>Course locations:</strong> Orlando/Cape Canaveral and Fort Lauderdale/West Palm Beach.</p>
          <p className="font-body text-foreground mb-4">Maritime Advanced Preparatory Academy offers an exclusive 2 Day STCW Basic Training Blended course. The course is a combination of online courses, covering the four parts of Basic Training, followed by 2 days of practical training. STCW Basic Training is a required safety course for all crew.</p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Personal Survival Techniques - Online & Half Day Practical</li>
            <li>Fire prevention and fire fighting - Online & 1 Day Practical</li>
            <li>Elementary First Aid - Online & Practical</li>
            <li>Personal Safety & Social Responsibilities - Online</li>
            <li>Option to combine with the STCW PDSD course</li>
          </ul>
          <SignUpButton />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default YachtInteriorCourses;
