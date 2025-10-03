import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Building2, Sprout, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data ko halka aur saaf rakha gaya hai
const stakeholdersData = [
  { icon: Sprout, label: "Farmers" },
  { icon: Users, label: "Consumers" },
  { icon: Building2, label: "Businesses" },
  { icon: Heart, label: "Supporters" },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const StakeholderTeaser: React.FC = () => {
  return (
    <motion.section
      className="py-24 bg-muted/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            variants={iconVariants}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground"
          >
            A Movement Built by Many
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={iconVariants}
            className="text-lg text-muted-foreground mb-12"
          >
            Everyone has a role to play in the journey towards a sustainable
            India.
          </motion.p>

          {/* Icons Row */}
          <div className="flex justify-center items-center gap-8 md:gap-16 mb-12">
            {stakeholdersData.map((stakeholder) => (
              <motion.div
                key={stakeholder.label}
                variants={iconVariants}
                className="group flex flex-col items-center text-center w-24"
              >
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <stakeholder.icon
                    className="text-primary-foreground"
                    size={32}
                  />
                </div>
                <span className="mt-4 text-sm font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stakeholder.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <motion.div variants={iconVariants}>
            <Button
              asChild
              size="lg"
              className="group gradient-accent text-accent-foreground hover-lift"
            >
              <Link to="/stakeholders">
                Explore All Roles
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StakeholderTeaser;
