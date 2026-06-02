import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CoursePageHeroProps {
  bannerImage: string;
  subtitle: string;
  title: string;
  ctaText?: string;
  ctaLink?: string;
}

const CoursePageHero = ({ bannerImage, subtitle, title, ctaText = "Enroll Today", ctaLink = "/course-schedule" }: CoursePageHeroProps) => (
  <div className="relative w-full h-[50vh] min-h-[400px]">
    <img src={bannerImage} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
      <div className="text-center">
        <p className="font-display text-lg md:text-xl text-background/80 tracking-widest uppercase mb-2">
          {subtitle}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-6xl text-background font-bold uppercase tracking-wider"
        >
          {title}
        </motion.h1>
        <div className="mt-8">
          <Link
            to={ctaLink}
            className="inline-block px-10 py-3 font-body font-semibold text-xs tracking-[0.25em] uppercase border-2 border-background text-background hover:bg-background hover:text-foreground transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CoursePageHero;
