import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Navigation links ko component ke bahar rakhna ek acchi practice hai
const navLinks = [
  { name: "About", href: "/about" },
  { name: "Foundation", href: "/foundation" },
  { name: "Programs", href: "/programs" },
  { name: "Stakeholders", href: "/stakeholders" },
  { name: "Media", href: "/media" },
];

// Animation variants for Framer Motion
const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Active link ke liye

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center gap-3">
              {/* --- LOGO CHANGE HERE --- */}
              <img
                src="/logo1.png"
                alt="Jaivic Bharat Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-display font-bold text-primary">
                Jaivic Bharat
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  className="relative"
                >
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                      layoutId="underline"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/join">Join the Movement</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-t border-border/40"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={menuItemVariants}>
                  <Link
                    to={link.href}
                    className="block py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants} className="pt-4">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                    Join the Movement
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
