import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Leaf, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Button import karein

// Data for the cards
const cardsData = [
  {
    icon: Target,
    title: "About Us",
    description:
      "Learn about our core philosophy, the dedicated team driving this change, and our unwavering commitment.",
    link: "/about",
    linkText: "Learn More",
    imageSrc:
      "https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg",
  },
  {
    icon: Leaf,
    title: "Our Foundation",
    description:
      "Discover the four fundamental pillars that guide our every action: Wealth, Wellness, Education, and Sustainability.",
    link: "/foundation",
    linkText: "Explore Pillars",
    imageSrc:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Our Programs",
    description:
      "Explore our on-the-ground initiatives, from farmer workshops to urban organic markets and policy advocacy.",
    link: "/programs",
    linkText: "View Programs",
    imageSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
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
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const DiveDeeperSection: React.FC = () => {
  return (
    <motion.section
      id="explore"
      className="py-24 bg-muted/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradienA Tangible Impact">
            Dive Deeper into Our Movement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore every facet of our initiative and see how we're building a
            sustainable India, together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cardsData.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl h-96 flex flex-col justify-end"
            >
              {/* Background Image */}
              <img
                src={card.imageSrc}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Darkening Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Content Box */}
              <div className="relative p-6 m-4 bg-background/70 backdrop-blur-lg rounded-xl border border-border/30 shadow-lg transition-all duration-300 group-hover:border-accent">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mr-4">
                    <card.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-foreground/80 text-sm mb-4">
                  {card.description}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto text-sm font-semibold text-primary hover:text-secondary group/btn"
                >
                  <Link to={card.link}>
                    {card.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DiveDeeperSection;
