import { Users, Sprout, Building2, Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import stakeholdersHero from "@/assets/stakeholders-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const stakeholders = [
  {
    icon: Users,
    title: "Citizens",
    description: "Conscious consumers driving organic demand",
    details: "Be part of the change by choosing organic. Your purchasing decisions create market demand, support farmers, and promote healthier communities.",
    benefits: [
      "Access to pure, chemical-free food",
      "Healthier lifestyle for your family",
      "Support local farmers and communities",
      "Contribute to environmental conservation"
    ],
    actions: [
      "Join #OneOrganicSwitch program",
      "Visit local Organic Corners",
      "Become a subscriber for updates",
      "Spread awareness in your community"
    ],
    color: "from-accent/20 to-accent/5"
  },
  {
    icon: Sprout,
    title: "Farmers",
    description: "Backbone of organic transformation",
    details: "Transform your farming practices with our comprehensive support. From training to market access, we're with you every step of the way.",
    benefits: [
      "Higher income and better margins",
      "Reduced input costs over time",
      "Health benefits from chemical-free farming",
      "Access to premium organic markets"
    ],
    actions: [
      "Get Farmer Transition Toolkit",
      "Join training and certification programs",
      "Access the Carbon Credit Marketplace",
      "Connect with organic buyers"
    ],
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Building2,
    title: "Businesses",
    description: "Partners in sustainable commerce",
    details: "Align your business with the organic movement. Reach conscious consumers, fulfill CSR goals, and contribute to a sustainable future.",
    benefits: [
      "Access to growing organic market",
      "Enhanced brand reputation",
      "CSR and sustainability credentials",
      "Loyal, conscious customer base"
    ],
    actions: [
      "Become an advertiser on our platform",
      "Sponsor programs and initiatives",
      "Source organic products for your business",
      "Partner for events and campaigns"
    ],
    color: "from-accent/20 to-accent/5"
  },
  {
    icon: Heart,
    title: "Donors & Investors",
    description: "Catalysts of organic growth",
    details: "Your contribution accelerates the organic revolution. Invest in sustainable agriculture, support community programs, and create lasting impact.",
    benefits: [
      "Measurable social and environmental impact",
      "Transparent reporting and accountability",
      "Tax benefits on donations",
      "Be part of a growing movement"
    ],
    actions: [
      "Make a one-time donation",
      "Invest in farmer transition projects",
      "Sponsor a program or region",
      "Join our donor community"
    ],
    color: "from-secondary/20 to-secondary/5"
  },
];

const Stakeholders = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stakeholdersHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our Stakeholders
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Together we're building an organic future for India
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              A Movement for Everyone
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The organic revolution requires all of us — citizens, farmers, businesses, and supporters. 
              Find your role and join thousands already making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Sections */}
      {stakeholders.map((stakeholder, index) => {
        const Icon = stakeholder.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={stakeholder.title}
            className={`py-20 ${isEven ? 'bg-background' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Icon Side */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'} animate-fade-in`}>
                    <div className={`glass-card p-12 rounded-3xl hover-lift bg-gradient-to-br ${stakeholder.color}`}>
                      <div className="w-32 h-32 rounded-3xl gradient-primary flex items-center justify-center mb-8 mx-auto shadow-xl">
                        <Icon className="text-primary-foreground" size={64} />
                      </div>
                      <div className="text-center">
                        <h3 className="text-3xl font-display font-bold mb-4">
                          {stakeholder.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {stakeholder.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'} animate-fade-in`} style={{ animationDelay: "100ms" }}>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {stakeholder.details}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-xl font-display font-bold mb-4">Benefits</h4>
                      <div className="space-y-2">
                        {stakeholder.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-secondary mt-1">✓</span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mb-8">
                      <h4 className="text-xl font-display font-bold mb-4">How to Participate</h4>
                      <div className="space-y-2">
                        {stakeholder.actions.map((action) => (
                          <div key={action} className="flex items-start gap-3 text-muted-foreground">
                            <ArrowRight className="text-accent mt-1 flex-shrink-0" size={20} />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="hero" size="lg" className="group">
                      Get Started as {stakeholder.title}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Impact Numbers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Collective Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              When we work together, we create lasting change
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "50,000+", label: "Active Citizens" },
              { number: "5,000+", label: "Organic Farmers" },
              { number: "200+", label: "Business Partners" },
              { number: "₹2Cr+", label: "Community Investment" }
            ].map((stat, i) => (
              <Card 
                key={stat.label} 
                className="glass-card border-2 text-center p-8 hover-lift animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Find Your Place in the Movement
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whatever your role, you can contribute to the organic revolution
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join the Movement</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stakeholders;
