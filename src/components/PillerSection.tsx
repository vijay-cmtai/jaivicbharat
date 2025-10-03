import React from "react";
import { motion } from "framer-motion";
import { Sprout, HeartHandshake, Users, Globe } from "lucide-react";

// Data ko yahan component ke andar hi rakhte hain
const pillarsData = [
  {
    icon: Sprout,
    title: "Ecological Farming",
    description:
      "Promoting techniques that enhance biodiversity and regenerate soil health naturally.",
    imageSrc:
      "https://cdn-images.prepp.in/public/image/f5e74a4387b2fcf03c1e985dc50f4279.png?tr=w-,h-,c-force",
  },
  {
    icon: HeartHandshake,
    title: "Farmer Empowerment",
    description:
      "Creating a fair and transparent ecosystem that ensures financial stability for farmers.",
    imageSrc:
      "https://media.istockphoto.com/id/990892396/photo/indian-farmer-holding-crop-plant-in-his-wheat-field.jpg?s=612x612&w=0&k=20&c=je5zLlBPEeFplzaSAg_hLryRy2r9AiajSBV_2dd3u_A=",
  },
  {
    icon: Users,
    title: "Community Wellness",
    description:
      "Providing access to safe, nutritious food and raising awareness about conscious consumption.",
    imageSrc:
      "https://images.unsplash.com/photo-1543083477-4f785aeafaa9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Globe,
    title: "Sustainable Legacy",
    description:
      "Building a resilient food system that protects our planet for the generations to come.",
    imageSrc:
      "https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196640.jpg?semt=ais_hybrid&w=740&q=80",
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

const PillarsSection: React.FC = () => {
  return (
    <motion.section
      className="py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            The Pillars of Our Movement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on a foundation of respect for people and the planet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pillarsData.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Background Image */}
              <img
                src={pillar.imageSrc}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>

              {/* Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-transform duration-500 group-hover:scale-110">
                <pillar.icon className="text-primary-foreground" size={32} />
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-end h-80 p-6 text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold font-display text-primary-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PillarsSection;
