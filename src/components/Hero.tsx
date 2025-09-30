import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-organic-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Organic farming fields with sustainable practices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>

      <div className="absolute top-1/4 right-1/4 animate-glow opacity-20 hidden md:block">
        <Leaf size={120} className="text-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20">
            <Leaf className="text-secondary" size={20} />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Citizen-Led Movement
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight [text-shadow:2px_2px_8px_rgba(0,0,0,0.3)]">
            A Citizen-Led Movement for{" "}
            <span className="text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Organic India
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Empowering Bharat with Wealth, Wellness & Sustainable Growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="gradient-accent text-accent-foreground shadow-lg shadow-accent/20 hover-lift"
            >
              <Link to="/join" className="group">
                Join the Movement
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 hover-lift"
            >
              <Link to="/#explore">Explore Programs</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { label: "Community Members", value: "10,000+" },
              { label: "Organic Farms", value: "500+" },
              { label: "Carbon Credits", value: "2M+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-colors duration-300"
              >
                <div className="text-4xl font-display font-bold text-accent mb-2 [text-shadow:1px_1px_4px_rgba(0,0,0,0.2)]">
                  {stat.value}
                </div>
                <div className="text-base text-foreground font-semibold [text-shadow:1px_1px_2px_rgba(0,0,0,0.1)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
