import { motion } from "framer-motion";
import { Shield, Award, Users, Globe } from "lucide-react";

const stats = [
  { icon: Shield, value: "USCG", label: "Approved Training" },
  { icon: Award, value: "5,000+", label: "Graduates" },
  { icon: Users, value: "50+", label: "Expert Instructors" },
  { icon: Globe, value: "30+", label: "Countries Represented" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="font-display text-2xl md:text-3xl text-foreground mb-1">{stat.value}</div>
              <div className="font-body text-xs tracking-wider uppercase text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
