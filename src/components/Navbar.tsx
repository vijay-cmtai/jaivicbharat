import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Foundation", href: "/foundation" },
    { name: "Programs", href: "/programs" },
    { name: "Stakeholders", href: "/stakeholders" },
    { name: "Media", href: "/media" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-2xl font-display text-primary-foreground">🌿</span>
            </div>
            <span className="text-xl font-display font-bold text-primary">Jaivic Bharat</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Movement</Link>
            </Button>
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
      {isMenuOpen && (
        <div className="lg:hidden glass-card border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="w-full mt-4">
              <Link to="/join" onClick={() => setIsMenuOpen(false)}>
                Join the Movement
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
