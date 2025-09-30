import { Sprout, Store, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    icon: Sprout,
    title: "#OneOrganicSwitch",
    description: "Incentive program for households to switch to organic staples",
    impact: "Join 5,000+ families making the switch",
  },
  {
    icon: Store,
    title: "Organic Corners",
    description: "Local demo centers & supply nodes",
    impact: "50+ corners across India",
  },
  {
    icon: BookOpen,
    title: "Farmer Transition Toolkits",
    description: "Step-by-step resources for farmers switching to organic",
    impact: "Download free resources",
  },
  {
    icon: TrendingUp,
    title: "Carbon Credit Marketplace",
    description: "Platform to trade carbon credits from regenerative farms",
    impact: "2M+ credits traded",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Programs & Action Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turning vision into action through practical, community-driven initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.title}
                className="glass-card hover-lift border-2 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-display mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    {program.impact}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
