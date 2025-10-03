import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have this
import { Input } from "@/components/ui/input"; // Assuming you have this

const Footer = () => {
  const exploreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Foundation", href: "/foundation" },
    { name: "Our Programs", href: "/programs" },
    { name: "Join Us", href: "/join" },
  ];

  const programLinks = [
    { name: "#OneOrganicSwitch", href: "/programs/one-organic-switch" },
    { name: "Organic Corners", href: "/programs/organic-corners" },
    { name: "Farmer Transition Toolkits", href: "/programs/farmer-toolkits" },
    { name: "Carbon Credit Marketplace", href: "/programs/carbon-marketplace" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/jaivicbharat",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/jaivicbharat",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/jaivicbharat",
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3 mb-4">
              {/* --- LOGO YAHAN HAI --- */}
              <img
                src="/logo1.png"
                alt="Jaivic Bharat Logo"
                className="h-12 w-auto"
              />
              <span className="text-xl font-display font-bold text-white">
                Jaivic Bharat
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A citizen-led movement catalyzing India's transition to organic
              and sustainable living.
            </p>

            {/* Newsletter Section */}
            <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
            <form className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button
                type="submit"
                variant="hero"
                size="icon"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </Button>
            </form>
          </div>

          {/* Spacer for layout */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Explore Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-base mb-6">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-accent hover:translate-x-1 block transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white text-base mb-6">
              Our Initiatives
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-accent hover:translate-x-1 block transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white text-base mb-6">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="mailto:info@jaivicbharat.org"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@jaivicbharat.org
              </a>
              <p className="flex items-center gap-2 pt-2">New Delhi, India</p>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-accent text-white flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Jaivic Bharat — All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
