import { useEffect, useRef } from "react";
import {
  Users,
  Sprout,
  Building2,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Data ko update kiya gaya hai, image URLs add kiye hain ---
const stakeholders = [
  {
    icon: Users,
    title: "Citizens",
    description: "Conscious consumers driving organic demand.",
    details:
      "Be part of the change by choosing organic. Your decisions create market demand, support farmers, and promote healthier communities.",
    benefits: [
      "Access to pure, chemical-free food",
      "Healthier lifestyle for your family",
      "Support local farmers",
      "Contribute to environmental conservation",
    ],
    actions: [
      "Join #OneOrganicSwitch program",
      "Visit local Organic Corners",
      "Become a subscriber for updates",
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920",
    color: "lime",
  },
  {
    icon: Sprout,
    title: "Farmers",
    description: "The backbone of organic transformation.",
    details:
      "Transform your farming with our comprehensive support. From training to market access, we're with you every step.",
    benefits: [
      "Higher income and better margins",
      "Reduced input costs over time",
      "Health benefits from chemical-free farming",
      "Access to premium organic markets",
    ],
    actions: [
      "Get Farmer Transition Toolkit",
      "Join training & certification programs",
      "Access Carbon Credit Marketplace",
    ],
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1920",
    color: "green",
  },
  {
    icon: Building2,
    title: "Businesses",
    description: "Partners in sustainable commerce.",
    details:
      "Align your business with the organic movement. Reach conscious consumers, fulfill CSR goals, and contribute to a sustainable future.",
    benefits: [
      "Access to a growing organic market",
      "Enhanced brand reputation",
      "CSR and sustainability credentials",
      "Loyal, conscious customer base",
    ],
    actions: [
      "Become an advertiser",
      "Sponsor our initiatives",
      "Source organic products",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920",
    color: "teal",
  },
  {
    icon: Heart,
    title: "Donors & Investors",
    description: "The catalysts of organic growth.",
    details:
      "Your contribution accelerates the organic revolution. Invest in sustainable agriculture, support community programs, and create lasting impact.",
    benefits: [
      "Measurable social & environmental impact",
      "Transparent reporting & accountability",
      "Tax benefits on donations",
      "Be part of a growing movement",
    ],
    actions: [
      "Make a one-time donation",
      "Invest in farmer transition projects",
      "Sponsor a program",
    ],
    image:
      "https://images.unsplash.com/photo-1593113589675-755198ab2129?q=80&w=1920",
    color: "yellow",
  },
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Helper Component for Animated Numbers ---
const AnimatedCounter = ({ to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const valueString = to.replace(/[^0-9]/g, ""); // "50,000+" -> "50000"
      const finalValue = parseInt(valueString, 10);

      const controls = animate(0, finalValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
};

const Stakeholders = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        {/* <Navbar /> */}

        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop)`,
            }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-lime-300 to-green-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Our Stakeholders
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Together, we're building an organic future for India.
            </motion.p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              className="text-4xl font-bold mb-6 text-green-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              A Movement for Everyone
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The organic revolution requires all of us — citizens, farmers,
              businesses, and supporters. Find your role and join thousands
              already making a difference.
            </motion.p>
          </div>
        </section>

        {/* Stakeholder Sections with New Design */}
        <div className="space-y-24 pb-24">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.section
                key={stakeholder.title}
                className="container mx-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto`}
                >
                  {/* --- NEW CARD WITH IMAGE & ICON --- */}
                  <motion.div
                    className={`relative rounded-3xl overflow-hidden group shadow-2xl aspect-[4/5] ${isEven ? "md:order-1" : "md:order-2"}`}
                  >
                    <img
                      src={stakeholder.image}
                      alt={stakeholder.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    <div className="relative h-full flex flex-col justify-end p-8 text-white">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-${stakeholder.color}-500/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20`}
                      >
                        <Icon
                          className={`text-${stakeholder.color}-300`}
                          size={40}
                        />
                      </div>
                      <h3 className="text-4xl font-bold mb-3">
                        {stakeholder.title}
                      </h3>
                      <p className="text-xl text-white/80">
                        {stakeholder.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    className={`${isEven ? "md:order-2" : "md:order-1"}`}
                  >
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {stakeholder.details}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-green-800">
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {stakeholder.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-3"
                            >
                              <CheckCircle
                                className={`text-${stakeholder.color}-500 mt-1 flex-shrink-0 w-5 h-5`}
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-4 text-green-800">
                          How to Participate
                        </h4>
                        <ul className="space-y-3">
                          {stakeholder.actions.map((action) => (
                            <li key={action} className="flex items-start gap-3">
                              <ArrowRight
                                className={`text-${stakeholder.color}-500 mt-1 flex-shrink-0 w-5 h-5`}
                              />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className={`bg-${stakeholder.color}-600 hover:bg-${stakeholder.color}-700 text-white rounded-full group px-8 py-6 text-base`}
                    >
                      <Link to="/join">
                        Get Started as {stakeholder.title}
                        <ArrowRight
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                          size={20}
                        />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Impact Numbers Section */}
        {/* <section className="py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Collective Impact
            </h2>
            <p className="text-xl text-green-200">
              When we work together, we create lasting change.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "50,000+", label: "Active Citizens" },
              { number: "5,000+", label: "Organic Farmers" },
              { number: "200+", label: "Business Partners" },
              { number: "2Cr+", label: "Community Investment" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-lime-300 mb-2">
                  <AnimatedCounter
                    to={stat.number}
                    suffix={stat.number.includes("+") ? "+" : ""}
                  />
                </div>
                <div className="text-green-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-green-800">
                Find Your Place in the Movement
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whatever your role, you can contribute to the organic
                revolution.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-lime-500 hover:bg-lime-600 text-green-950 rounded-full group px-10 py-7 text-lg"
              >
                <Link to="/join">Join the Movement Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  );
};

// This part is for Tailwind CSS to recognize dynamic classes.
// You can keep it or remove it if you don't need it.
const TailwindColorClasses = () => (
  <div className="hidden">
    <div className="bg-lime-600 hover:bg-lime-700 text-lime-300 text-lime-500"></div>
    <div className="bg-green-600 hover:bg-green-700 text-green-300 text-green-500"></div>
    <div className="bg-teal-600 hover:bg-teal-700 text-teal-300 text-teal-500"></div>
    <div className="bg-yellow-600 hover:bg-yellow-700 text-yellow-300 text-yellow-500"></div>
    <div className="bg-lime-500/20"></div>
    <div className="bg-green-500/20"></div>
    <div className="bg-teal-500/20"></div>
    <div className="bg-yellow-500/20"></div>
  </div>
);

export default Stakeholders;
