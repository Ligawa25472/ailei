import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import stcwBanner from "@/assets/stcw-banner.jpg";

const CaptainsLicense = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={stcwBanner}
      subtitle="Ready to Become"
      title="A Licensed Captain?"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl text-foreground mb-6">Captain OUPV (6-PACK) to 100-Ton License Blended Course & Exam</h2>
          <p className="font-body text-foreground mb-2"><strong>Course Cost $1,495</strong></p>
          <p className="font-body text-foreground mb-2"><strong>Course Duration:</strong> 3 Days</p>
          <p className="font-body text-foreground mb-2"><strong>USCG Approved (MARTSA-281)</strong></p>
          <p className="font-body text-foreground mb-4"><strong>Course Location:</strong> Orlando, FL</p>

          <p className="font-body text-foreground mb-4">
            Prepare for your USCG Operator of Uninspected Passenger Vessels (OUPV) or Master license. Our comprehensive blended course covers navigation, rules of the road, seamanship, and includes the final exam.
          </p>

          <p className="font-body text-foreground mb-2"><strong>Course covers:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Navigation & Chart Plotting</li>
            <li>Rules of the Road (COLREGS)</li>
            <li>Deck General & Safety</li>
            <li>Seamanship & Weather</li>
            <li>Ship Simulator Training</li>
            <li>USCG Exam Preparation & Final Exam</li>
          </ul>

          <p className="font-body text-foreground mb-4"><strong>Requirements:</strong> Applicants must have documented sea service. Contact us for specific requirements based on your license type.</p>

          <p className="font-body text-foreground mb-4">The course combines online learning with in-person practical training and exam. Upon successful completion, you will receive your USCG Captain's License.</p>

          <SignUpButton />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CaptainsLicense;
