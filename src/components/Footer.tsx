import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

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
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
              <span className="text-xl font-display font-bold">
                Jaivic Bharat
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A citizen-led movement for organic India.
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <p>New Delhi • India</p>
              <a
                href="mailto:info@jaivicbharat.org"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@jaivicbharat.org
              </a>
            </div>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © Jaivic Bharat 2025 — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
