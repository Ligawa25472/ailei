import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import yachtBanner from "@/assets/yacht-banner.jpg";

const YachtDeckhandCourses = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={yachtBanner}
      subtitle="Ready to Start"
      title="A Superyacht Career?"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-4">Yachting - Crew Training</h2>
        <div className="flex flex-col items-center gap-3 mb-12">
          <a href="#yachtdeck" className="font-body text-ocean hover:text-foreground transition-colors underline">Yachting Introductory Deckhand Course</a>
          <a href="/yacht-interior-courses" className="font-body text-ocean hover:text-foreground transition-colors underline">Yachting Interior - Stewardess / Steward Courses</a>
        </div>

        <motion.div id="yachtdeck" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-6">Yacht Deckhand - Introductory Deckhand Course</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost $800</strong> ($1500 when combined with STCW Basic Training - 20% discount)</p>
          <p className="font-body text-foreground mb-2"><strong>Course Location:</strong> Orlando, FL</p>
          <p className="font-body text-foreground mb-4"><strong>Course Duration:</strong> 3 Days</p>
          <p className="font-body text-foreground mb-4 text-lg"><strong>Your Ticket to a Yacht Career Starts Here</strong></p>
          <p className="font-body text-foreground mb-4">Dreaming of turquoise waters, exotic ports, and a career that's an adventure? It's closer than you think. Our intensive 3-Day Deckhand Program is your launchpad into the exciting world of yachting.</p>
          <p className="font-body text-foreground mb-4">We transform eager beginners into confident, entry-level candidates. In just three days, you'll gain the essential skills and insider knowledge that yacht recruiters look for.</p>
          <p className="font-body text-foreground mb-2"><strong>Get Ready For Hands-On, Practical Learning:</strong></p>
          <ul className="list-disc list-inside space-y-2 ml-4 font-body text-foreground mb-4">
            <li>Master Essential Skills: Get real-world practice in mooring, anchoring, knot tying, and VHF radio communication.</li>
            <li>Become Bridge-Ready: Train on our deck watchkeeping simulator to assist the Captain with navigation, anchoring, and port watches.</li>
            <li>Learn the Lingo: Speak confidently with a full grasp of yachting terminology and operations.</li>
            <li>Launch Your Job Search: Get expert tips on crafting a winning yachtie CV and navigating the application process.</li>
          </ul>
          <p className="font-body text-foreground mb-4"><strong>Why Choose This Course?</strong> Stop dreaming and start doing. For a small investment, you'll graduate with a certificate, a foundational skill set, and the confidence to walk the dock and land your first job.</p>
          <p className="font-body text-foreground mb-4">You can take the course along with our exclusive 2-day STCW basic training blended course and the required STCW Maritime Security online course.</p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl text-foreground mb-6">STCW Basic Training Blended Course - Online & 2 Day Practical Training</h3>
          <p className="font-body text-foreground mb-2"><strong>Course cost from $995</strong></p>
          <p className="font-body text-foreground mb-2"><strong>Course locations:</strong> Orlando (Port Canaveral) and Fort Lauderdale/West Palm Beach.</p>
          <p className="font-body text-foreground mb-4"><strong>Course Delivery:</strong> Online courses followed by 2 days in practical training (Fire Fighting, PST and First Aid/CPR).</p>
          <p className="font-body text-foreground mb-4">STCW Basic Training is the required safety course for yacht crew. Our exclusive STCW Basic Training Blended Course comprises of 4 modules taken online followed by 2 Days of practical training.</p>
          <p className="font-body text-foreground mb-2"><strong>STCW Basic Training - Students will learn:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Personal Survival Techniques (PST MARTSA-0363)</li>
            <li>Basic Fire Fighting (FPFF MARTA-0053)</li>
            <li>Basic First Aid (EFA MARTSA-0197)</li>
            <li>Personal Safety & Social Responsibilities (PSSR MARTSA-0359)</li>
            <li>Optional STCW VPDSD (MARTSA-0747)</li>
          </ul>
          <SignUpButton />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default YachtDeckhandCourses;
