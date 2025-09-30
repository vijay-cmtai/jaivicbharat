import {
  Wallet,
  Heart,
  GraduationCap,
  Leaf,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import foundationHero from "@/assets/foundation-hero.jpg";
import wealthImg from "@/assets/wealth-pillar.jpg";
import wellnessImg from "@/assets/wellness-pillar.jpg";
import educationImg from "@/assets/education-pillar.jpg";
import sustainabilityImg from "@/assets/sustainability-pillar.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Wallet,
    title: "Wealth",
    description: "Micro-enterprise, farmer income, market access",
    details:
      "Building sustainable economic opportunities for farmers through direct market access, fair pricing, and micro-enterprise development. We create pathways for financial independence and prosperity.",
    image: wealthImg,
    stats: [
      { label: "Farmers Supported", value: "5,000+" },
      { label: "Average Income Increase", value: "40%" },
      { label: "Market Connections", value: "200+" },
    ],
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Health programs, organic food access, community wellness",
    details:
      "Promoting community health through access to organic food, wellness programs, and preventive healthcare initiatives. Health is wealth, and organic living is the foundation.",
    image: wellnessImg,
    stats: [
      { label: "Families Reached", value: "10,000+" },
      { label: "Health Programs", value: "50+" },
      { label: "Wellness Centers", value: "25+" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Skill training, awareness drives, farmer toolkits",
    details:
      "Empowering communities with knowledge through training programs, educational resources, and awareness campaigns. Knowledge is the key to sustainable transformation.",
    image: educationImg,
    stats: [
      { label: "Training Sessions", value: "300+" },
      { label: "Certified Farmers", value: "2,500+" },
      { label: "Resource Kits Distributed", value: "8,000+" },
    ],
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Carbon credits, regenerative practices, long-term ecology",
    details:
      "Creating a sustainable future through regenerative farming, carbon credit programs, and environmental conservation. Protecting our planet for generations to come.",
    image: sustainabilityImg,
    stats: [
      { label: "Carbon Credits Generated", value: "15,000t" },
      { label: "Regenerative Farms", value: "1,200+" },
      { label: "Biodiversity Projects", value: "45+" },
    ],
  },
];

const Foundation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foundationHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 [text-shadow:2px_2px_8px_rgba(0,0,0,0.3)]">
            Foundation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Built on Four Strategic Pillars
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-white/90 text-lg font-medium">
            <span className="flex items-center gap-2">
              <Wallet size={20} /> Wealth
            </span>
            <span className="text-white/50 hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <Heart size={20} /> Wellness
            </span>
            <span className="text-white/50 hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </span>
            <span className="text-white/50 hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <Leaf size={20} /> Sustainability
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              The Four Pillars of Change
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our foundation rests on four interconnected pillars that create a
              holistic approach to organic transformation. Each pillar supports
              and strengthens the others, creating a sustainable ecosystem for
              lasting impact.
            </p>
          </div>
        </div>
      </section>

      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={pillar.title}
            className={`py-20 ${isEven ? "bg-background" : "bg-muted/30"}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center`}
              >
                <div
                  className={`relative ${isEven ? "md:order-1" : "md:order-2"} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -top-8 left-8 z-10">
                    <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Icon className="text-primary-foreground" size={40} />
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl hover-lift group">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-auto md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div
                  className={`${isEven ? "md:order-2" : "md:order-1"} animate-fade-in`}
                  style={{ animationDelay: `${index * 100 + 100}ms` }}
                >
                  <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium mb-4">
                    Pillar {index + 1}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                    {pillar.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {pillar.details}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-10">
                    {pillar.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold text-secondary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/programs">
                      Explore {pillar.title} Programs
                      <ArrowRight
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Integrated Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Our pillars work together to create comprehensive, sustainable
              change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card hover-lift animate-fade-in border-t-4 border-primary shadow-soft">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="text-primary" size={28} />
                </div>
                <CardTitle className="text-2xl">Holistic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each pillar supports and enhances the others, creating a
                  multiplier effect for positive change.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card hover-lift animate-fade-in border-t-4 border-accent shadow-soft"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="text-accent" size={28} />
                </div>
                <CardTitle className="text-2xl">Measurable Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We track impact across all pillars, ensuring accountability
                  and continuous improvement.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-card hover-lift animate-fade-in border-t-4 border-secondary shadow-soft"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Users className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-2xl">Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every initiative is designed with community needs and
                  participation at its core.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Support Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in building a stronger foundation for organic India. Every
              contribution makes a difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/join">Join the Movement</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/programs">View Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Foundation;
