"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import shieldMaritime from "@/assets/shield-maritime.png";
import shieldYacht from "@/assets/shield-yacht.png";
import shieldEntertainment from "@/assets/shield-entertainment.png";

const courses = [
  {
    title: "Maritime",
    subtitle: "Safety Academy",
    image: shieldMaritime,
    description: "Maritime Safety Training",
    href: "/stcw-courses",
  },
  {
    title: "Yacht",
    subtitle: "",
    image: shieldYacht,
    description: "Yacht Training",
    href: "/yacht-deckhand-courses",
  },
  {
    title: "Entertainment",
    subtitle: "",
    image: shieldEntertainment,
    description: "Cruise Ship Workshops",
    href: "/cruise-ship-entertainment",
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <Link href={course.href} className="group block">
                <div className="flex justify-center mb-6">
                  <img
                    src={course.image}
                    alt={course.description}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-44 w-44 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-foreground mb-1 uppercase tracking-wider">
                  {course.title}
                </h3>
                {course.subtitle && (
                  <p className="font-display text-sm text-muted-foreground uppercase tracking-wider mb-4">
                    {course.subtitle}
                  </p>
                )}
                <p className="font-display text-lg text-foreground mb-6">{course.description}</p>
                <span className="inline-block px-10 py-3 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-foreground text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  Learn More
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
