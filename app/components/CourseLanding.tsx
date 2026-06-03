"use client";

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
  details: string;
};

const courseData: Record<string, CourseInfo> = {
  "deckhand-courses": {
    title: "Deckhand Courses",
    subtitle: "Entry-Level Deckhand Training",
    description:
      "Learn the fundamentals of deck operations, seamanship, and onboard safety. Our deckhand course is designed for new crew members pursuing a maritime career.",
    modules: [
      "Basic seamanship and line handling",
      "Knot tying and deck maintenance",
      "Safety drills and emergency response",
      "Navigation fundamentals",
      "Teamwork and shipboard communication",
    ],
    duration: "2 Weeks",
    price: "$1,795",
    details:
      "This program is ideal for aspiring crew members looking to build a strong foundation for work on commercial vessels, yachts, and passenger ships.",
  },
  "yacht-deckhand": {
    title: "Yacht Deckhand Courses",
    subtitle: "Luxury Yacht Deckhand Training",
    description:
      "Train for the high-end superyacht industry with practical deck skills, tender handling, and guest service standards.",
    modules: [
      "Tender operations and water sports support",
      "Exterior yacht maintenance",
      "Deck safety and seamanship",
      "Guest service essentials",
      "Navigation and watchkeeping basics",
    ],
    duration: "3 Weeks",
    price: "$2,495",
    details:
      "Our yacht deckhand path prepares you for crew positions on luxury yachts and charter vessels with the industry knowledge employers want.",
  },
  "yacht-interior": {
    title: "Yacht Interior Courses",
    subtitle: "Superyacht Stewardess Training",
    description:
      "Master etiquette, service, and interior operations for yacht hospitality, from silver service to guest relations.",
    modules: [
      "Silver service and table presentation",
      "Housekeeping and cabin preparation",
      "Wine and beverage service",
      "Laundry and garment care",
      "Communication and guest experience",
    ],
    duration: "2 Weeks",
    price: "$1,995",
    details:
      "This course is tailored for yacht interior professionals who want to deliver a five-star guest experience on board.",
  },
  "captains-license": {
    title: "Captain's License",
    subtitle: "USCG Operator License Preparation",
    description:
      "Prepare for your USCG OUPV, 100 Ton, or Master license exams with navigation, rules of the road, and vessel safety training.",
    modules: [
      "Navigation and chart plotting",
      "Rules of the road and collision avoidance",
      "Deck general and seamanship",
      "Weather, tides, and passage planning",
      "License exam strategies",
    ],
    duration: "2 Weeks",
    price: "$2,195",
    details:
      "We provide practical exam preparation and the confidence you need to step into a licensed captain role.",
  },
  "stcw-online": {
    title: "STCW Online Courses",
    subtitle: "Flexible Maritime Theory Training",
    description:
      "Complete required STCW theory modules online at your own pace and prepare for the practical training sessions that follow.",
    modules: [
      "Personal survival techniques theory",
      "Fire prevention and firefighting theory",
      "Elementary first aid theory",
      "Personal safety and social responsibility",
      "Security awareness and shipboard safety",
    ],
    duration: "Self-Paced + 3 Days Practical",
    price: "$995",
    details:
      "These online courses are perfect for busy learners who need flexible study with industry-approved maritime training.",
  },
  "stcw-courses": {
    title: "STCW Courses",
    subtitle: "USCG-Approved Basic Safety Training",
    description:
      "Our STCW Basic Training program delivers the core safety and survival skills required by the international maritime industry.",
    modules: [
      "Personal Survival Techniques",
      "Basic Fire Fighting",
      "Elementary First Aid",
      "Personal Safety & Social Responsibilities",
      "Security Awareness",
    ],
    duration: "5 Days",
    price: "$1,295",
    details:
      "This course fully prepares you for STCW certification with a mix of online and practical training elements.",
  },
  "entertainment-workshops": {
    title: "Cruise Ship Entertainment Workshops",
    subtitle: "Performance Training for Cruise Entertainment",
    description:
      "Learn how to audition, perform, and thrive in the cruise ship entertainment industry with coaching tailored to performers and crew.",
    modules: [
      "Audition preparation",
      "Stage performance techniques",
      "Onboard entertainment operations",
      "Show production and branding",
      "Industry networking strategies",
    ],
    duration: "1 Week",
    price: "$895",
    details:
      "This workshop helps entertainers and creative professionals get ready for roles on cruise ships and luxury yachts.",
  },
  "seven-seas-stars": {
    title: "Seven Seas Stars",
    subtitle: "Success Stories & Career Guidance",
    description:
      "Discover how our graduates turned training into maritime careers across yachts, cruise ships, and offshore operations.",
    modules: [
      "Featured alumni stories",
      "Career path planning",
      "Industry hiring advice",
      "Interview and resume guidance",
      "Networking opportunities",
    ],
    duration: "Ongoing",
    price: "Free",
    details:
      "Seven Seas Stars showcases the journeys of our successful graduates and helps you plan your next career move.",
  },
};

export default function CourseLanding({ courseKey }: { courseKey: string }) {
  const course = courseData[courseKey];

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-5xl text-foreground mb-4"
            >
              Course Not Found
            </motion.h1>
            <p className="text-muted-foreground">
              The requested course page does not exist. Please return to the course schedule.
            </p>
            <div className="mt-8">
              <Link
                href="/course-schedule"
                className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            {course.title}
          </motion.h1>
          <p className="max-w-3xl mx-auto font-body text-base text-muted-foreground">
            {course.subtitle}
          </p>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2"
            >
              <h2 className="font-display text-3xl text-foreground mb-6">Course Overview</h2>
              <p className="font-body text-foreground leading-relaxed mb-6">{course.description}</p>
              <p className="font-body text-foreground leading-relaxed mb-6">{course.details}</p>
              <div className="space-y-3">
                {course.modules.map((module) => (
                  <div key={module} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ocean flex-shrink-0" />
                    <p className="font-body text-foreground">{module}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-muted border border-border rounded-2xl p-8"
            >
              <h3 className="font-display text-xl text-foreground mb-4">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground uppercase tracking-[0.25em] text-xs mb-2">Duration</p>
                  <p className="font-display text-2xl text-foreground">{course.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground uppercase tracking-[0.25em] text-xs mb-2">Tuition</p>
                  <p className="font-display text-3xl text-ocean">{course.price}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/course-schedule"
                  className="inline-flex w-full justify-center rounded-sm border border-foreground bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-background transition-colors hover:bg-foreground/90"
                >
                  View Schedule
                </Link>
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
