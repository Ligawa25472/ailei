import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import stcwOnlineBanner from "@/assets/stcw-online-banner.jpg";

const STCWOnlineCourses = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={stcwOnlineBanner}
      subtitle="STCW Courses - Ready to Start"
      title="Learning Online?"
      ctaText="Sign Up Now"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-12">
          STCW Online USCG Approved Courses
        </h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-4">STCW Crowd Management Online Course (MARTSA-142)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course cost $200</strong></p>
          <p className="font-body text-foreground mb-4"><strong>Course Delivery:</strong> Online or Classroom</p>
          <p className="font-body text-foreground mb-4">Our STCW crowd management online course fulfills the requirements of STCW (2010). The online course is US Coastguard approved and internationally recognized.</p>
          <p className="font-body text-foreground mb-2"><strong>Crew will learn:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>The ships muster plan</li>
            <li>Types of lifesaving appliances</li>
            <li>Fire fighting appliances</li>
            <li>Assisting passengers to muster and embarkation stations</li>
            <li>Emergency exits</li>
            <li>Mustering procedures</li>
            <li>Crowd management techniques</li>
          </ul>
          <p className="font-body text-foreground">The final test can be taken by zoom video or in person.</p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-4">STCW Advanced Fire Fighting Online Course (MARTSA-15)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost $795</strong></p>
          <p className="font-body text-foreground mb-4"><strong>Course Completion:</strong> Online & remote assessments</p>
          <p className="font-body text-foreground mb-4">STCW Advanced Fire Fighting online course. The USCG approved course satisfies the STCW Advanced Fire Fighting training requirements of Section A-VI/3. The online course is delivered on our Maritime Learning System followed by a test and assessment either by video or in our classroom.</p>
          <p className="font-body text-foreground mb-2">The online course covers the following topics:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Control firefighting operations aboard ships</li>
            <li>Organize and train fire parties</li>
            <li>Inspect and service fire detection and extinguishing systems and equipment</li>
            <li>Investigate and compile reports on incidents involving fire</li>
          </ul>
          <p className="font-body text-foreground"><strong>Pre-Requisites:</strong> STCW Basic Training.</p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-4">STCW Maritime Security Awareness Online Course (MARTSA-561)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course cost $200</strong></p>
          <p className="font-body text-foreground mb-4"><strong>Course Delivery:</strong> Online or Classroom</p>
          <p className="font-body text-foreground mb-4">Our USCG approved STCW Security Awareness course provides crew with the necessary knowledge and understanding of basic security measures onboard the ship.</p>
          <p className="font-body text-foreground mb-2"><strong>Crew will learn to:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Contribute to the enhancement of maritime security</li>
            <li>Recognize security risks & threats</li>
            <li>Maintain security awareness and vigilance</li>
            <li>Maintain conditions set out in the ship's security plan</li>
            <li>Recognize security equipment and systems</li>
          </ul>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-4">STCW Vessel Personnel with Designated Security Duties (VPDSD) Online Course (MARTSA-747)</h3>
          <p className="font-body text-foreground mb-2"><strong>USCG Approved MARTSA-747</strong></p>
          <p className="font-body text-foreground mb-2"><strong>Course Cost $275</strong></p>
          <p className="font-body text-foreground mb-4"><strong>Course Completion:</strong> Online</p>
          <p className="font-body text-foreground mb-4">Our online VPDSD Course meets the requirements of the STCW Code as amended (2010) and leads to the issue of a recognized STCW Certificate of Proficiency in Designated Security Duties (PDSD).</p>
          <p className="font-body text-foreground mb-4">Upon enrollment, you will receive your online course login information. On course completion you will schedule a date/time for the final test via a zoom video call.</p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 border-b border-border pb-12">
          <h3 className="font-display text-2xl text-foreground mb-4">STCW Crisis Management & Human Behavior Online Course (MARTSA-981)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost $395</strong></p>
          <p className="font-body text-foreground mb-4">This course meets the requirements of STCW as amended Regulation V/2 and is recognized by all cruise lines. The training is for any crew member having responsibility for the safety of passengers in emergency situations.</p>
          <p className="font-body text-foreground mb-2"><strong>Crew will learn:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4 font-body text-foreground mb-4">
            <li>Organizing shipboard emergencies</li>
            <li>Optimizing the use of emergency resources</li>
            <li>Controlling the response to emergencies</li>
            <li>Controlling passenger and other personnel during emergency situations</li>
            <li>Establish and maintain effective communication</li>
          </ul>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3 className="font-display text-2xl text-foreground mb-4">STCW Basic Training Blended Course (USCG Approved)</h3>
          <p className="font-body text-foreground mb-2"><strong>Course Cost from $995</strong></p>
          <p className="font-body text-foreground mb-4"><strong>Course completion:</strong> Online and 2 days in person. The 5-day STCW Basic Training also available.</p>
          <p className="font-body text-foreground mb-4"><strong>Course Locations:</strong> Orlando (Port Canaveral), Fort Lauderdale (West Palm Beach)</p>
          <p className="font-body text-foreground mb-4">Maritime Advanced Preparatory Academy offers an exclusive 2 Day STCW Basic Training Blended course. The course is a combination of STCW online training covering the 4 modules of Basic Training followed by 2 days of in-person practical training. STCW Basic Training is a required safety course for all cruise line and yacht crew.</p>
          <SignUpButton />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default STCWOnlineCourses;
