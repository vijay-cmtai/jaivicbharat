import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Mouse } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";

// --- SABSE PEHLE, LOCAL IMAGE KO IMPORT KAREIN ---
import firstHeroImage from "@/assets/hero-organic-farm.jpg";

// --- Background Images Array (Ab pehli image imported variable hai) ---
const backgroundImages = [
  firstHeroImage, // Yeh aapki local image hai
  "https://images.unsplash.com/photo-1492496913980-501348b61469?w=1920&q=80",
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
  "https://images.unsplash.com/photo-1620200423726-203798583345?w=1920&q=80",
];

// --- Helper Components (inmein koi badlav nahi hai) ---

const AnimatedCounter = ({ from, to, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to]);

  return (
    <div className="text-center">
      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-300 to-yellow-400 bg-clip-text text-transparent mb-1">
        <span ref={ref}>{from.toLocaleString()}</span>
        {suffix}
      </h3>
    </div>
  );
};

const StatCard = ({ value, label, suffix = "" }) => (
  <div className="bg-black/25 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1">
    <AnimatedCounter from={0} to={value} suffix={suffix} />
    <p className="text-white/80 font-semibold">{label}</p>
  </div>
);

// --- Main Hero Component ---

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 7000); // Har 7 second mein image badlegi
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const headline = "A Citizen-Led Movement for Organic India";
  const headlineWords = headline.split(" ");

  const headlineContainerVariants = {
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  // --- NAYE ANIMATION VARIANTS IMAGE SLIDE KE LIYE ---
  const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slideshow with Left-to-Right Scroll */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImageIndex}
          src={backgroundImages[currentImageIndex]}
          alt="Organic farming movement"
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-green-950/70 z-0" />

      {/* Main Content with Parallax */}
      <motion.div
        style={{ y: contentY }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Leaf className="text-lime-300" size={16} />
          <span className="text-xs font-medium text-white uppercase tracking-widest">
            Citizen-Led Movement
          </span>
        </motion.div>

        {/* Animated Headline (word by word) - YAHAN FIX KIYA GAYA HAI */}
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-5 leading-tight [text-shadow:2px_2px_10px_rgba(0,0,0,0.5)]"
          variants={headlineContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              style={
                word === "Organic" || word === "India"
                  ? {
                      background: "linear-gradient(to right, #a3e635, #facc15)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : {}
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Baaki content aage ka waisa hi hai */}
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
        >
          Empowering Bharat with Wealth, Wellness & Sustainable Growth
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
        >
          <Link to="/join">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 w-full sm-w-auto text-lg font-semibold text-black bg-gradient-to-r from-lime-400 to-yellow-400 rounded-full shadow-lg shadow-lime-500/20 transition-transform duration-300 transform hover:scale-105">
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
          <Link to="/programs">
            <button className="px-8 py-3 w-full sm-w-auto text-lg font-semibold text-white bg-black/20 backdrop-blur-md border border-white/30 rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50">
              Explore Programs
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.1 }}
        >
          <StatCard value={10000} suffix="+" label="Community Members" />
          <StatCard value={500} suffix="+" label="Organic Farms" />
          <StatCard value={2} suffix="M+" label="Carbon Credits" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
