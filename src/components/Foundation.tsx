import { Wallet, Heart, GraduationCap, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Wallet,
    title: "Wealth",
    description: "Micro-enterprise, farmer income, market access",
    details: "Building sustainable economic opportunities for farmers through direct market access, fair pricing, and micro-enterprise development.",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Wellness",
    description: "Health programs, organic food access, community wellness",
    details: "Promoting community health through access to organic food, wellness programs, and preventive healthcare initiatives.",
    color: "text-secondary",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Skill training, awareness drives, farmer toolkits",
    details: "Empowering communities with knowledge through training programs, educational resources, and awareness campaigns.",
    color: "text-accent",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Carbon credits, regenerative practices, long-term ecology",
    details: "Creating a sustainable future through regenerative farming, carbon credit programs, and environmental conservation.",
    color: "text-secondary",
  },
];

const Foundation = () => {
  return (
    <section id="pillars" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wealth • Wellness • Education • Sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="glass-card hover-lift border-2 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-display">{pillar.title}</CardTitle>
                  <CardDescription className="text-base">{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{pillar.details}</p>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Foundation;
