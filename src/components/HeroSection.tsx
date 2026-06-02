import { motion } from "framer-motion";
import lifestyleCruise from "@/assets/lifestyle-cruise.jpg";

const HeroSection = () => {
  return (
    <>
      {/* Gray text hero */}
      <section className="bg-[hsl(var(--gray-hero))] py-28 md:py-40 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-background/80 mb-6"
          >
            Ready to Start Learning?
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-background uppercase leading-tight mb-6 tracking-wide"
          >
            Travel Exotic Locations, Experience Life at Sea and Meet New Friends All While Earning Money.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-body text-xs md:text-sm tracking-[0.35em] uppercase text-background/80"
          >
            What Are You Waiting For?
          </motion.p>
        </div>
      </section>

      {/* Lifestyle photo strip */}
      <section className="w-full">
        <img
          src={lifestyleCruise}
          alt="Young people enjoying life at sea"
          className="w-full h-[300px] md:h-[450px] object-cover"
          width={1920}
          height={800}
        />
      </section>
    </>
  );
};

export default HeroSection;
