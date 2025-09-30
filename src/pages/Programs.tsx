import { Repeat, Store, BookOpen, Coins, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import programsHero from "@/assets/programs-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: Repeat,
    title: "#OneOrganicSwitch",
    tagline: "Small Change, Big Impact",
    description: "Incentive program encouraging households to switch one staple item to organic",
    details: "Start your organic journey with just one product. We provide incentives, resources, and support to make the switch easy and affordable. Track your impact and inspire others in your community.",
    benefits: [
      "Monthly rewards for consistent organic purchases",
      "Access to certified organic suppliers",
      "Community support and recipes",
      "Track your health and environmental impact"
    ],
    color: "text-accent",
    stats: { participants: "25,000+", switches: "100,000+" }
  },
  {
    icon: Store,
    title: "Organic Corners",
    tagline: "Your Local Organic Hub",
    description: "Local demonstration centers and supply nodes for organic products",
    details: "Physical spaces in communities serving as organic marketplaces, education centers, and farmer connection points. Experience organic living firsthand and support local farmers.",
    benefits: [
      "Fresh organic produce directly from farmers",
      "Weekly workshops and demonstrations",
      "Farmer-consumer meetups",
      "Quality assurance and certification support"
    ],
    color: "text-secondary",
    stats: { corners: "150+", cities: "45" }
  },
  {
    icon: BookOpen,
    title: "Farmer Transition Toolkits",
    tagline: "Your Path to Organic Farming",
    description: "Comprehensive resources for farmers switching to organic practices",
    details: "Step-by-step guides, training materials, and ongoing support for farmers transitioning to organic methods. From soil preparation to market access, we cover it all.",
    benefits: [
      "Free training and certification programs",
      "Access to organic inputs and seeds",
      "Mentorship from experienced organic farmers",
      "Market linkages and pricing support"
    ],
    color: "text-accent",
    stats: { farmers: "5,000+", hectares: "20,000+" }
  },
  {
    icon: Coins,
    title: "Carbon Credit Marketplace",
    tagline: "Earn While You Sustain",
    description: "Platform to trade carbon credits from regenerative organic farms",
    details: "Connect regenerative farmers with buyers seeking to offset carbon emissions. Monetize your sustainable practices and contribute to global climate action.",
    benefits: [
      "Fair pricing for carbon credits",
      "Verification and certification support",
      "Direct connection with corporate buyers",
      "Additional income stream for farmers"
    ],
    color: "text-secondary",
    stats: { credits: "15,000t CO₂", farmers: "800+" }
  },
];

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${programsHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Action-driven initiatives for organic transformation
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Take Action Today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our programs are designed to make organic living accessible, affordable, and rewarding. 
              Whether you're a consumer, farmer, or business, there's a program for you.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      {programs.map((program, index) => {
        const Icon = program.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section 
            key={program.title}
            className={`py-20 ${isEven ? 'bg-background' : 'bg-muted/30'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  {/* Icon/Visual Side */}
                  <div className={`${isEven ? 'md:order-1' : 'md:order-2'} animate-fade-in`}>
                    <div className="relative">
                      <div className="glass-card p-12 rounded-3xl hover-lift">
                        <div className="w-32 h-32 rounded-3xl gradient-primary flex items-center justify-center mb-8 mx-auto">
                          <Icon className="text-primary-foreground" size={64} />
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-secondary mb-2">
                            {program.tagline}
                          </div>
                          <div className="grid grid-cols-2 gap-6 mt-8">
                            {Object.entries(program.stats).map(([key, value]) => (
                              <div key={key} className="glass-card p-4 rounded-xl">
                                <div className="text-3xl font-bold text-secondary mb-1">
                                  {value}
                                </div>
                                <div className="text-sm text-muted-foreground capitalize">
                                  {key}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={`${isEven ? 'md:order-2' : 'md:order-1'} animate-fade-in`} style={{ animationDelay: "100ms" }}>
                    <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
                      Program {index + 1}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                      {program.title}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-6">
                      {program.description}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {program.details}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {program.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={20} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="hero" size="lg" className="group">
                      Join This Program
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* How to Participate */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              How to Get Started
            </h2>
            <p className="text-xl text-muted-foreground">
              Join any of our programs in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Sign Up", desc: "Register for the program that interests you" },
              { step: "2", title: "Get Resources", desc: "Access toolkits, training, and support" },
              { step: "3", title: "Take Action", desc: "Start your organic journey and track impact" }
            ].map((item, i) => (
              <Card key={item.step} className="glass-card border-2 text-center hover-lift animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardHeader>
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-4 mx-auto text-3xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
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
              Ready to Take Action?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose a program and start your organic journey today
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/join">Join Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
