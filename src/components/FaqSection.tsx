import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react"; // Using Plus/Minus for clarity

// Data ko yahan component ke andar rakhte hain
const faqData = [
  {
    question: "What does 'organic' mean to Jaivic Bharat?",
    answer:
      "For us, organic is more than just chemical-free. It's a holistic system that respects the soil, biodiversity, farmers' livelihoods, and consumer health. It's about working in harmony with nature.",
  },
  {
    question: "How can I join the movement?",
    answer:
      "You can join us as a citizen member, a farmer partner, or a volunteer. Visit our 'Join Us' page to find the best way for you to contribute to a healthier India.",
  },
  {
    question: "Where can I buy produce from your farmers?",
    answer:
      "We are building a network of 'Organic Corners' in cities across the country. You can find a list of our partner stores and farmers' markets on our 'Programs' page.",
  },
  {
    question: "Is organic food more expensive?",
    answer:
      "While some organic products might have a higher price point due to certification costs and sustainable farming practices, we are actively working to create a more efficient supply chain to make organic food accessible and affordable for everyone.",
  },
];

// Animation Variants
const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FaqSection: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Image and Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="text-left mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our movement and how you
                can get involved.
              </p>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
                alt="Community discussion"
                className="rounded-2xl shadow-lg mt-8 w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-muted/50 border border-border/50 rounded-lg shadow-sm transition-all hover:border-accent"
                >
                  <AccordionTrigger className="p-6 text-left text-lg font-semibold hover:no-underline group">
                    <span className="flex-1 mr-4">{faq.question}</span>
                    {/* Custom Animated Plus/Minus Icon */}
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center relative">
                      <Minus className="w-5 h-5 absolute transition-transform duration-300 transform group-data-[state=closed]:rotate-90 group-data-[state=closed]:scale-0" />
                      <Plus className="w-5 h-5 absolute transition-transform duration-300 transform group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center md:text-left">
              <p className="text-muted-foreground">
                Can't find your answer?{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-primary hover:underline"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
