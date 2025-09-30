import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Sprout,
  CheckCircle,
  BarChart3,
} from "lucide-react";

const FarmerToolkits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1974&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Farmer Transition Toolkits
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Empowering farmers with the knowledge and resources for a successful
            organic journey.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Your Guide to Organic Farming
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transitioning from conventional to organic farming can be
              challenging. Our Farmer Transition Toolkits are comprehensive
              resource packages designed to make this journey smooth,
              profitable, and sustainable. We provide step-by-step guidance,
              from soil preparation to market linkage.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38AD449?q=80&w=2070&auto=format&fit=crop"
              alt="A farmer's hands holding healthy soil"
              className="rounded-2xl shadow-xl hover-lift"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">
            What's Inside the Toolkit?
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sprout className="text-secondary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Organic Farming Guide
                </h3>
                <p className="text-muted-foreground">
                  A detailed manual on crop cycles, natural pest control,
                  composting, and soil health management.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-secondary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Certification Support
                </h3>
                <p className="text-muted-foreground">
                  Assistance with the documentation and processes required to
                  obtain official organic certification.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart3 className="text-secondary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Market Linkage Access
                </h3>
                <p className="text-muted-foreground">
                  Connection to our network of buyers, retailers, and the Carbon
                  Credit Marketplace for better income opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center container mx-auto">
        <h2 className="text-4xl font-display font-bold mb-6">
          Ready to Start Your Organic Journey?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Download our introductory toolkit or contact our farmer support team.
        </p>
        <Button asChild variant="hero" size="lg" className="group">
          <Link to="/contact-us">
            Get Your Toolkit
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default FarmerToolkits;
