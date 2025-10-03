import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tractor, ShoppingBasket, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data for the stakeholders
const stakeholdersData = [
  {
    icon: Tractor,
    eyebrow: "For Farmers",
    title: "Cultivate a Prosperous Future",
    description:
      "Join our network to get access to organic transition toolkits, fair pricing, and a supportive community. We provide the resources you need to grow sustainably and profitably.",
    imageSrc:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1887&auto=format&fit=crop",
    link: "/stakeholders/farmers",
    buttonText: "Farmer Programs",
    imagePosition: "left",
  },
  {
    icon: ShoppingBasket,
    eyebrow: "For Consumers",
    title: "Choose Health, Choose Earth",
    description:
      "Discover authentic organic products and connect with the farmers who grow your food. Make conscious choices that benefit your health and the planet.",
    imageSrc:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
    link: "/stakeholders/consumers",
    buttonText: "Shop Ethically",
    imagePosition: "right",
  },
  {
    icon: Building,
    eyebrow: "For Businesses",
    title: "Partner for a Greener Tomorrow",
    description:
      "Collaborate with us to build a sustainable supply chain, meet ESG goals, and offer your customers authentic organic products. Let's grow together.",
    imageSrc:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
    link: "/stakeholders/businesses",
    buttonText: "Corporate Partnerships",
    imagePosition: "left",
  },
];

// Animation Variants for slide-in effect
const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const StakeholderSection: React.FC = () => {
  return (
    <section className="py-24 bg-background overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            A Movement for All
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you are a farmer, a consumer, or a business, there's a vital
            role for you in this organic revolution.
          </p>
        </motion.div>

        <div className="space-y-24">
          {stakeholdersData.map((stakeholder) => (
            <motion.div
              key={stakeholder.title}
              className="grid md:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Image Column */}
              <motion.div
                className={`order-1 ${stakeholder.imagePosition === "left" ? "md:order-1" : "md:order-2"}`}
              
              >
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-secondary/10 z-0 transform -rotate-2"></div>
                  <img
                    src={stakeholder.imageSrc}
                    alt={stakeholder.title}
                    className="relative z-10 rounded-2xl shadow-medium w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                className={`order-2 ${stakeholder.imagePosition === "left" ? "md:order-2" : "md:order-1"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                    <stakeholder.icon
                      className="text-accent-foreground"
                      size={24}
                    />
                  </div>
                  <span className="text-secondary font-semibold uppercase tracking-wider">
                    {stakeholder.eyebrow}
                  </span>
                </div>
                <h3 className="text-3xl font-display font-bold my-4 text-foreground">
                  {stakeholder.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  {stakeholder.description}
                </p>
                <Button asChild size="lg" className="group">
                  <Link to={stakeholder.link}>
                    {stakeholder.buttonText}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;
