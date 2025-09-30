import { Users, Building2, Sprout, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stakeholders = [
  {
    icon: Users,
    title: "Citizens & Consumers",
    description: "Join the movement by switching to organic products and supporting sustainable practices in your daily life.",
  },
  {
    icon: Sprout,
    title: "Farmers & Producers",
    description: "Transition to organic farming with our comprehensive support, training, and market access programs.",
  },
  {
    icon: Building2,
    title: "Businesses & Advertisers",
    description: "Partner with us to promote organic products and reach a community passionate about sustainability.",
  },
  {
    icon: Heart,
    title: "Donors & Investors",
    description: "Support our mission through donations or investments in sustainable farming and community programs.",
  },
];

const Stakeholders = () => {
  return (
    <section id="stakeholders" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Stakeholders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everyone has a role to play in building an organic India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stakeholders.map((stakeholder, index) => {
            const Icon = stakeholder.icon;
            return (
              <Card
                key={stakeholder.title}
                className="glass-card hover-lift border-2 text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-primary-foreground" size={28} />
                  </div>
                  <CardTitle className="text-xl font-display">{stakeholder.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stakeholder.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stakeholders;
