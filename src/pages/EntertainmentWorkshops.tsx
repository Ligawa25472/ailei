import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CoursePageHero from "@/components/CoursePageHero";
import SignUpButton from "@/components/SignUpButton";
import { motion } from "framer-motion";
import entertainmentBanner from "@/assets/entertainment-banner.jpg";

const EntertainmentWorkshops = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <CoursePageHero
      bannerImage={entertainmentBanner}
      subtitle="Ready to prepare for"
      title="An Entertainment Career at Sea?"
      ctaLink="/contact"
      ctaText="Contact Us"
    />

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <blockquote className="font-display text-xl md:text-2xl text-muted-foreground italic text-center mb-12 leading-relaxed">
          "Our Mission is to mentor, prepare and give the tools for success to those seeking a career at sea in Entertainment."
        </blockquote>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">MentorSHIP Program: Singers & Dancers</h2>
          <p className="font-body text-foreground leading-relaxed mb-4">
            This workshop is designed for pre-professional or professional singers and dancers looking for a career on a cruise ship. The two-day workshop will include a thorough exploration of what life on a ship is really like and how to make the best of your contract. It will also provide dance and vocal classes to fine tune their skills.
          </p>
          <p className="font-body text-foreground leading-relaxed mb-4">
            We will discuss headshots and resumes, and a guest industry expert will be there to provide a Q&A. Every student will get to participate in a mock audition and receive productive feedback.
          </p>
          <p className="font-body text-foreground leading-relaxed mb-4">
            There is a third optional day for performers to get their headshots/body shots done by a professional photographer. At the end of the course, a list of highly qualified mentors will be provided to those seeking further guidance through their career.
          </p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-border pt-12">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Entertainment Activities Staff</h2>
          <p className="font-body text-foreground leading-relaxed mb-4">
            This workshop is open to anyone looking for a career at sea in Entertainment Activities. This person should have an outgoing, flexible and positive personality. This one-day workshop will include Social Etiquette, a Hosting session, resume building, and a complete exploration of what life is like at sea.
          </p>
          <p className="font-body text-foreground leading-relaxed mb-4">
            All students will have the opportunity to have a filmed hosting session on a mock stage with productive feedback from an industry expert.
          </p>
          <SignUpButton />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-t border-border pt-12">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Business Of Commercial Dance</h2>
          <p className="font-body text-foreground leading-relaxed mb-4">
            This workshop is open to anyone looking for a career as a dancer in the commercial dance industry. In this 3 hour workshop, dancers will explore and learn what it takes to be a working dancer in Los Angeles and New York as a professional dancer in the television and film industry.
          </p>
          <p className="font-body text-foreground leading-relaxed">
            For group workshop registration please email <strong>info@ahlei.com</strong>
          </p>
          <SignUpButton />
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EntertainmentWorkshops;
