import React from "react";
import { motion } from "framer-motion";
import { Users, Leaf, Sprout, HeartHandshake } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter"; // AnimatedCounter ko import karein

// Data ko number aur suffix me alag kar diya hai
const statsData = [
  { icon: Users, to: 50000, suffix: "K+", label: "Active Citizens" },
  { icon: Leaf, to: 5000, suffix: "K+", label: "Organic Farmers" },
  { icon: Sprout, to: 20000, suffix: "K+", label: "Hectares Converted" },
  { icon: HeartHandshake, to: 150, suffix: "+", label: "Community Partners" },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TangibleImpactSection: React.FC = () => {
  return (
    <motion.section
      className="py-24 bg-primary text-primary-foreground relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/path-to-your-subtle-pattern.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary-foreground">
            A Tangible Impact
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Our collective efforts are creating measurable change across India.
            The numbers speak for themselves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              className="group relative bg-primary-foreground/[.05] p-6 rounded-2xl border border-primary-foreground/10 text-center transition-all duration-300 hover:bg-primary-foreground/[.08] hover:border-accent"
            >
              {/* Glowing effect on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <stat.icon className="text-accent-foreground" size={32} />
                  </div>
                </div>
                <div className="text-5xl font-bold font-display text-primary-foreground mb-2">
                  <AnimatedCounter
                    to={stat.to}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <div className="text-primary-foreground/70 text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TangibleImpactSection;
