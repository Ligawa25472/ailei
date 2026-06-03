import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import entertainmentBanner from "@/assets/entertainment-banner.jpg";

const SevenSeasStars = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={entertainmentBanner}
      subtitle=""
      title="Seven Seas Stars"
      ctaLink="/contact"
      ctaText="Book Now"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-3xl text-foreground text-center mb-8">Seven Seas Stars</h2>
          <p className="font-body text-foreground leading-relaxed mb-6">
            <strong>Let us bring the world to you!</strong> Seven Seas Stars is a group of professional dancers that enhance your events by bringing world talent to you! Whether it's our Sinatra Stars that bring a taste of New York New York or London Stars that give you a flare of 60's London Go Go's, we will not disappoint bringing you a touch of sensuous taste of movement from all corners of the seven seas.
          </p>
          <p className="font-body text-foreground leading-relaxed mb-6">
            Handpicked professional dancers by our creator and choreographer, you will have the highest talent and technique the entertainment industry can find. Her performers are not just beautiful but empowered, talented, and know how to create an ambience that is sure to leave your guest coming back for more!
          </p>
          <p className="font-body text-foreground leading-relaxed mb-6">
            For booking information, please email <strong>info@ahlei.com</strong>
          </p>
          <SignUpButton href="/contact" />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SevenSeasStars;
