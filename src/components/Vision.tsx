import { Target, Globe, Users } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Vision & Mission
            </h2>
            <p className="text-xl text-muted-foreground">
              Building a sustainable, organic future for India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="glass-card p-8 rounded-2xl hover-lift animate-fade-in">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Target className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create a thriving ecosystem where organic farming is the norm, empowering communities with 
                sustainable practices that ensure health, prosperity, and environmental stewardship for generations to come.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card p-8 rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Globe className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To mobilize citizens, farmers, and businesses towards organic practices through education, 
                community programs, and sustainable market solutions that create lasting positive impact.
              </p>
            </div>
          </div>

          {/* Why Organic Section */}
          <div id="why-organic" className="mt-16 glass-card p-10 rounded-2xl animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Users className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Why Organic Matters</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Organic farming is not just about growing food without chemicals — it's about nurturing the soil, 
                    protecting biodiversity, and ensuring food security for future generations.
                  </p>
                  <ul className="space-y-2 list-disc list-inside ml-4">
                    <li>Healthier food with higher nutritional value</li>
                    <li>Reduced environmental pollution and carbon footprint</li>
                    <li>Better farmer livelihoods and rural development</li>
                    <li>Preservation of traditional farming knowledge</li>
                    <li>Sustainable water and soil management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
