import { Target, Globe, Users, Heart, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Vision & Mission
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Building a sustainable, organic future for India through community-driven initiatives
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {/* Vision */}
              <div className="glass-card p-10 rounded-2xl hover-lift animate-fade-in group">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="text-primary-foreground" size={36} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To create a thriving ecosystem where organic farming is the norm, empowering communities with 
                  sustainable practices that ensure health, prosperity, and environmental stewardship for generations to come.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision an India where every household has access to safe, nutritious organic food, and every 
                  farmer prospers through sustainable agricultural practices.
                </p>
              </div>

              {/* Mission */}
              <div className="glass-card p-10 rounded-2xl hover-lift animate-fade-in group" style={{ animationDelay: "100ms" }}>
                <div className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="text-primary-foreground" size={36} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To mobilize citizens, farmers, and businesses towards organic practices through education, 
                  community programs, and sustainable market solutions that create lasting positive impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are committed to building partnerships, providing resources, and creating opportunities 
                  that make organic farming accessible and profitable for all stakeholders.
                </p>
              </div>
            </div>

            {/* Why Organic Section */}
            <div className="glass-card p-12 rounded-2xl animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="text-secondary" size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold mb-6">Why Organic Matters</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Organic farming is not just about growing food without chemicals — it's about nurturing the soil, 
                    protecting biodiversity, and ensuring food security for future generations.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Heart className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold">Health Benefits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Healthier food with higher nutritional value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>No harmful pesticides or chemicals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Better for community wellness</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                    <TrendingUp className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold">Economic Impact</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Better farmer livelihoods and rural development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Premium pricing for organic produce</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Reduced input costs over time</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Award className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold">Environmental Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Reduced environmental pollution and carbon footprint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Preservation of traditional farming knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Sustainable water and soil management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h3 className="text-2xl font-display font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of citizens, farmers, and businesses in creating a sustainable organic future for India.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/join">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
