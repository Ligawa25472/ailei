"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import Link from "next/link";

type CourseInfo = {
  title: string;
  subtitle: string;
  description: string;
  modules: string[];
  duration: string;
  price: string;
};

const courseData: Record<string, CourseInfo> = {
  "stcw-courses": {
    title: "STCW Courses",
    subtitle: "Standards of Training, Certification & Watchkeeping",
    description: "Our USCG-approved STCW Basic Safety Training course is required for anyone seeking employment on commercial vessels. This comprehensive program covers all four elements of basic safety training.",
    modules: ["Personal Survival Techniques", "Fire Prevention & Firefighting", "Elementary First Aid", "Personal Safety & Social Responsibilities", "Security Awareness Training"],
    duration: "5 Days",
    price: "$1,295",
  },
  "stcw-online": {
    title: "STCW Online Courses",
    subtitle: "Flexible Online Maritime Training",
    description: "Complete the theoretical portions of your STCW training online at your own pace before attending the practical sessions at our facility.",
    modules: ["Online Theory Modules", "Self-Paced Learning", "Interactive Assessments", "Certificate Upon Completion"],
    duration: "Self-Paced + 3 Days Practical",
    price: "$995",
  },
  "deckhand-courses": {
    title: "Deckhand Courses",
    subtitle: "Entry-Level Maritime Deckhand Training",
    description: "Our deckhand course prepares you for an entry-level position on commercial vessels. Learn seamanship, navigation basics, and deck operations.",
    modules: ["Basic Seamanship", "Knot Tying & Line Handling", "Navigation Fundamentals", "Vessel Maintenance", "Deck Safety Procedures"],
    duration: "2 Weeks",
    price: "$1,795",
  },
  "yacht-deckhand": {
    title: "Yacht Deckhand Courses",
    subtitle: "Superyacht Deckhand Training Program",
    description: "Comprehensive training designed specifically for the superyacht industry. Learn everything from tender operations to water sports instruction.",
    modules: ["Tender Operations", "Water Sports Instruction", "Exterior Yacht Maintenance", "Guest Service Excellence", "Navigation & Watchkeeping"],
    duration: "3 Weeks",
    price: "$2,495",
  },
  "yacht-interior": {
    title: "Yacht Interior Courses",
    subtitle: "Superyacht Stewardess Training",
    description: "Master the art of luxury service aboard superyachts. From silver service to floral arrangements, learn what it takes to excel in yacht interiors.",
    modules: ["Silver Service & Table Setting", "Wine & Beverage Knowledge", "Housekeeping Standards", "Floral Arrangements", "Laundry & Garment Care"],
    duration: "2 Weeks",
    price: "$1,995",
  },
  "captains-license": {
    title: "Captain's License",
    subtitle: "USCG Captain's License Preparation",
    description: "Prepare for your USCG Operator of Uninspected Passenger Vessels (OUPV) or Master license. Our comprehensive course covers navigation, rules of the road, and seamanship.",
    modules: ["Navigation & Chart Plotting", "Rules of the Road", "Deck General & Safety", "Seamanship & Weather", "Exam Preparation"],
    duration: "2 Weeks",
    price: "$2,195",
  },
  "entertainment-workshops": {
    title: "Entertainment Workshops",
    subtitle: "Cruise Ship Entertainment Training",
    description: "Designed for performers, musicians, and entertainment professionals looking to break into the cruise ship industry. Learn audition techniques, stage performance, and life at sea.",
    modules: ["Audition Preparation", "Stage Performance Skills", "Ship Life Orientation", "Contract Negotiation", "Industry Networking"],
    duration: "1 Week",
    price: "$895",
  },
  "seven-seas-stars": {
    title: "Seven Seas Stars",
    subtitle: "Alumni Success Stories",
    description: "Meet our graduates who have gone on to have incredible careers at sea. From yacht captains to cruise ship entertainers, our alumni are making waves around the world.",
    modules: ["Featured Alumni Profiles", "Career Path Insights", "Industry Tips & Advice", "Networking Opportunities"],
    duration: "Ongoing",
    price: "Free",
  },
};

export default function CoursePage() {
  const params = useParams();
  const slug = params.slug as string;
  const router = useRouter();
  
  if (slug === "stcw-courses") {
    router.push("/stcw-courses");
    return null;
  }
  
  const course = courseData[slug] || courseData["deckhand-courses"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-gold mb-4"
          >
            {course.title}
          </motion.h1>
          <p className="font-body text-gold-light/80 max-w-2xl mx-auto">{course.subtitle}</p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <h2 className="font-display text-2xl text-foreground mb-4">Course Overview</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">{course.description}</p>

              <h3 className="font-display text-xl text-foreground mb-4">What You&apos;ll Learn</h3>
              <ul className="space-y-3">
                {course.modules.map((mod) => (
                  <li key={mod} className="flex items-center gap-3 font-body text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    {mod}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-maritime h-fit"
            >
              <h3 className="font-display text-lg text-foreground mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Duration</span>
                  <p className="font-body text-foreground font-semibold">{course.duration}</p>
                </div>
                <div>
                  <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Tuition</span>
                  <p className="font-display text-2xl text-gold">{course.price}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 font-body font-semibold text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-navy-light transition-colors rounded-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </div>
  );
}
