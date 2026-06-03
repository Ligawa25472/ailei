import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import stcwBanner from "@/assets/stcw-banner.jpg";
import stcwFirefighting from "@/assets/stcw-firefighting.jpg";
import stcwCrisisMgmt from "@/assets/stcw-crisis-mgmt.jpg";
import stcwSecurity from "@/assets/stcw-security.jpg";
import stcwCrowdMgmt from "@/assets/stcw-crowd-mgmt.jpg";
import stcwPstBlended from "@/assets/stcw-pst-blended.jpg";
import stcwVpdsd from "@/assets/stcw-vpdsd.jpg";

const SignUpButton = () => (
  <div className="flex justify-center py-10">
    <Link
      href="/course-schedule"
      className="inline-block px-16 py-4 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
    >
      Sign Up Now
    </Link>
  </div>
);

interface CourseSectionProps {
  id: string;
  title: string;
  image?: string | StaticImageData;
  imageCaption?: string;
  children: React.ReactNode;
}

const CourseSection = ({ id, title, image, imageCaption, children }: CourseSectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="py-12 border-b border-border last:border-b-0"
  >
    <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 font-medium">{title}</h2>
    {image ? (
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <Image
            src={image}
            alt={imageCaption || title}
            className="w-full max-w-md"
            width={400}
            height={300}
          />
          {imageCaption && (
            <p className="font-body text-sm text-muted-foreground mt-2">{imageCaption}</p>
          )}
        </div>
        <div className="font-body text-foreground space-y-4">{children}</div>
      </div>
    ) : (
      <div className="font-body text-foreground space-y-4">{children}</div>
    )}
  </motion.section>
);

export default function STCWCourses() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src={stcwBanner}
          alt="STCW Maritime Training"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-lg md:text-xl text-background/80 tracking-widest uppercase mb-2">
              Ready to Start
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-background font-bold uppercase tracking-wider">
              A Career At Sea?
            </h1>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-10 py-3 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-background text-background hover:bg-background hover:text-foreground transition-colors"
              >
                Enroll Today
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Course Navigation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">
            STCW Basic Training Blended & Online STCW Courses
          </h2>
          <div className="flex flex-col items-center gap-3">
            {[
              { label: "2 Day STCW Basic Training Blended Course (STCW95 & 2010)", id: "stcwbasic" },
              { label: "STCW Advanced Fire Fighting (Online)", id: "stcwadvancedfirefighting" },
              { label: "STCW Basic Training Revalidation Course", id: "basicrevalidation" },
              { label: "STCW Crowd Management, Crisis Management and Maritime Security courses", id: "crowdsecurity" },
              { label: "STCW Personal Survival Techniques and Fire Fighting Blended Courses", id: "stcwblended" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-body text-ocean hover:text-foreground transition-colors text-center underline"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/contact"
              className="font-body text-ocean hover:text-foreground transition-colors text-center underline mt-2"
            >
              Course Schedule
            </a>
          </div>
        </div>
      </section>

      {/* All Course Sections */}
      <div className="container mx-auto px-4 max-w-5xl">

        {/* STCW Basic Training */}
        <CourseSection
          id="stcwbasic"
          title="STCW Basic Training Blended Course USCG Approved (Online & 2 Day Practical Training)"
        >
          <p><strong>Course cost from $995</strong> ($1195 combined with STCW VPDSD - Vessel Personnel with Designated Security Duties course)</p>
          <p><strong>Course Locations:</strong> Orlando/Port Canaveral and Fort Lauderdale.</p>
          <p><strong>Course Delivery:</strong> Online followed by 2 days of practical training (Fire Fighting, PST and First Aid/CPR).</p>
          <p><strong>Also available 5-day STCW Basic Training</strong></p>
          <p>At Maritime Advanced Preparatory Academy, we offer a premium STCW Basic Training Blended Course, combining flexible online learning with hands-on practical training. Our course is approved by the US Coastguard, ensuring that you receive the best maritime safety training available.</p>
          <p>Maritime Advanced Preparatory Academy provides a 2-Day STCW Basic Training Blended course, which combines online learning with 2 days of hands-on training. This course covers the four essential parts of Basic Training and is mandatory for all crew members.</p>
          <p className="mt-4"><strong>Our STCW Basic Training Blended Course is offered in prime locations:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Orlando/Port Canaveral:</strong> Close to the major cruise port</li>
            <li><strong>Fort Lauderdale:</strong> Accessible to those on the East Coast, known for its yachting industry.</li>
          </ul>
          <p className="mt-4"><strong>Enrollment Process:</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Enroll online and receive your online course login details.</li>
            <li>Complete the online course at your own pace.</li>
            <li>Attend the 2-day practical training at your selected date and location.</li>
            <li>Receive your STCW certification!</li>
          </ol>
          <p className="mt-4">This course also counts for the STCW Basic Training refresher.</p>
          <div className="mt-4">
            <p><strong>STCW Basic Training Blended Course (STCW95 & 2010)</strong></p>
            <p className="mt-2"><strong>Required Training:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal Survival Techniques (MARTSA-363)</li>
              <li>Basic Fire Fighting (MARTSA-53)</li>
              <li>First Aid CPR (MARTSA-197)</li>
              <li>Personal Safety & Social Responsibilities (MARTSA-359)</li>
              <li>Optional STCW VPDSD (Vessel Personnel with Designated Security Duties MARTSA-747)</li>
            </ul>
          </div>
          <p className="mt-4">Ready to get started? Enroll in our STCW Basic Training today and secure your spot in our next class!</p>
          <SignUpButton />
        </CourseSection>

        {/* STCW Advanced Fire Fighting */}
        <CourseSection
          id="stcwadvancedfirefighting"
          title="STCW Advanced Fire Fighting Online (MARTSA-15)"
        >
          <p><strong>Course Cost $795</strong></p>
          <p><strong>STCW Advanced Fire Fighting.</strong> The USCG-approved course meets the STCW Advanced Fire Fighting training requirements as outlined in Section A-VI/3. The online course is provided through our Maritime Learning System and includes a final test and assessment, which can be taken online or in person.</p>
          <p><strong>Course Completion:</strong> Online and Final Assessments (online or classroom)</p>
          <p className="mt-2">The online course covers the following topics:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Control firefighting operations aboard ships</li>
            <li>Organize and train fire teams</li>
            <li>Inspect and service fire detection and extinguishing systems and equipment</li>
            <li>Investigate and compile reports on incidents involving fire</li>
          </ul>
          <p className="mt-4"><strong>Assessments</strong></p>
          <p>Fire investigation</p>
          <p>Final test and assessment.</p>
          <p className="mt-2"><strong>Pre-Requisites:</strong> STCW Basic Training.</p>
          <SignUpButton />
        </CourseSection>

        {/* STCW Basic Training Revalidation */}
        <CourseSection
          id="basicrevalidation"
          title="STCW Basic Training Revalidation USCG Approved"
          image={stcwFirefighting}
          imageCaption="STCW Fire Fighting Revalidation"
        >
          <p><strong>Course length 12 hours (1.5 Days)</strong></p>
          <p><strong>Course Cost $695</strong></p>
          <p><strong>Course locations:</strong> Cape Canaveral, Orlando and Fort Lauderdale/West Palm Beach.</p>
          <p className="mt-2">This STCW basic training revalidation course meets the requirements of STCW and approved by the US Coastguard.</p>
          <p className="mt-2"><strong>Requirements:</strong> Participants must have obtained 12 months sea service from the previous five 5 years and sailed on a ship subject to training and drills to revalidate STCW Basic Training certification. The course covers the practical assessments for STCW Personal Survival Techniques and Fire Prevention & Fire Fighting under the below USCG approval:</p>
          <p className="mt-2"><strong>Personal Survival Techniques revalidation (MARTSA-791)</strong></p>
          <p><strong>Basic Fire Fighting revalidation (MARTSA-813)</strong></p>
          <SignUpButton />
        </CourseSection>

        {/* STCW VPDSD */}
        <CourseSection
          id="vpdsd"
          title="STCW VPDSD Vessel Personnel with Designated Security Duties (MARTSA-843)"
          image={stcwVpdsd}
          imageCaption="STCW Vessel Personnel with Designated Security Duties"
        >
          <p><strong>Course Type:</strong> Blended - Online and Assessment USCG Approved (MARTSA-843)</p>
          <p><strong>Cost $275</strong></p>
          <p className="mt-2">Our VPDSD Course meets the requirements of Section A-VI paragraphs 6-B of the amended STCW code and leads to the issue of a recognized STCW Certificate of Proficiency in Designated Security Duties (VPDSD).</p>
          <p className="mt-2">The course is completed online with a final test. The final test is completed either by zoom video or in-person.</p>
          <p className="mt-4"><strong>Crew will learn:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Roles and Responsibilities of Personnel with Designated Security Duties</li>
            <li>Following and maintaining the conditions set out in the ship security plan and security levels.</li>
            <li>Recognition of security risks and threats</li>
            <li>Security inspections and surveys</li>
            <li>Understand the use and maintain security equipment</li>
          </ul>
          <SignUpButton />
        </CourseSection>

        {/* STCW Crisis Management */}
        <CourseSection
          id="crowdsecurity"
          title="STCW Crisis Management & Human Behavior (MARTSA-981)"
          image={stcwCrisisMgmt}
          imageCaption="STCW Crisis Management & Human Behavior"
        >
          <p><strong>Course Delivery:</strong> Online and Assessment USCG Approved (MARTSA-981)</p>
          <p><strong>Course Cost: $395</strong></p>
          <p className="mt-2">The blended STCW crisis management and human behavior course meets the requirements of STCW under the approval of the US Coastguard. You can take this STCW course online and attend the class for the final assessment. The course is designed for those having responsibility for the safety of passengers in emergency situations.</p>
          <p className="mt-4"><strong>Crew will learn how to:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Organizing shipboard emergencies</li>
            <li>Optimize the use of resources</li>
            <li>Control response to an emergency</li>
            <li>Control passengers and crew in an emergency</li>
            <li>Establish and maintain effective communication</li>
          </ul>
          <p className="mt-4"><strong>Course Completion</strong></p>
          <p>Online and 4 hours in person</p>
          <SignUpButton />
        </CourseSection>

        {/* STCW Security Awareness */}
        <CourseSection
          id="securityawareness"
          title="STCW Security Awareness (MARTSA-561)"
          image={stcwSecurity}
          imageCaption="STCW Security Awareness Online Course"
        >
          <p><strong>Course Delivery:</strong> Online and Assessment USCG Approved (MARTSA-561)</p>
          <p><strong>Course Cost: $200</strong></p>
          <p className="mt-2">The approved STCW Security Awareness Training course, provides crew with the necessary knowledge and understanding of basic security measures onboard the ship. This course will help you to have a heightened awareness of security and become more vigilant when onboard the ship.</p>
          <p className="mt-2">The course is completed online with a final test. The final test is completed either by zoom video or in-person.</p>
          <p className="mt-4"><strong>Crew will learn to:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Contribute to the enhancement of maritime security</li>
            <li>Recognize security risks & threats</li>
            <li>Maintain security awareness and vigilance</li>
            <li>Maintain conditions set out in the ship's security plan</li>
            <li>Recognize security equipment and systems</li>
          </ul>
          <SignUpButton />
        </CourseSection>

        {/* STCW Crowd Management */}
        <CourseSection
          id="crowdmanagement"
          title="STCW Crowd Management Online Course (MARTSA-142)"
          image={stcwCrowdMgmt}
          imageCaption="STCW Crowd Management Online Course"
        >
          <p><strong>Course Delivery:</strong> Online and Assessment USCG Approved (MARTSA-142)</p>
          <p><strong>Course Cost: $200</strong></p>
          <p className="mt-2">The course is completed online with a final test. The final test is completed either by remote video or in-person.</p>
          <p className="mt-2">Our Online crowd management course is US Coastguard approved and internationally recognized. The course is required for those sailing on passenger ships.</p>
          <p className="mt-4"><strong>Crew will learn:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>The ships muster plan</li>
            <li>Types of lifesaving appliances</li>
            <li>Fire fighting appliances</li>
            <li>Assisting passengers to muster and embarkation stations</li>
            <li>Emergency exits</li>
            <li>Mustering procedures</li>
            <li>Crowd management techniques</li>
          </ul>
          <SignUpButton />
        </CourseSection>

        {/* STCW PST & Fire Fighting Blended */}
        <CourseSection
          id="stcwblended"
          title="STCW Personal Survival Techniques & Basic Fire Fighting Blended Courses"
          image={stcwPstBlended}
          imageCaption="STCW Blended Courses"
        >
          <p><strong>Course Cost: $295 (PST) & $595 (Fire Fighting) USCG Approved</strong></p>
          <p><strong>STCW PST - Online & 4 Hour Practical Training</strong></p>
          <p><strong>STCW Basic Fire Fighting - Online & 1 Day Practical Training</strong></p>
          <p className="mt-2"><strong>USCG Approved</strong></p>
          <p className="mt-2">The PST Blended courses is undertaken by completing the online course and attending 4 hours of practical training at one of our pool locations.</p>
          <p>The STCW Basic Fire Fighting is undertaken by completing the online course and attending 8 hours of practical at one of our Firefighting locations.</p>
          <SignUpButton />
        </CourseSection>

      </div>

      <Footer />
    </div>
  );
}
