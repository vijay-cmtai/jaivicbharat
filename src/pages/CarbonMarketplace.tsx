import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Globe, Sprout, Building } from "lucide-react";

const CarbonMarketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576236399066-501431b9888a?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Carbon Credit Marketplace
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Connecting sustainable agriculture with climate action.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Rewarding Farmers, Restoring the Planet
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our Carbon Credit Marketplace is a pioneering platform that
              monetizes the positive environmental impact of organic farming. By
              practicing regenerative agriculture, our farmers capture carbon in
              their soil. We quantify this impact, convert it into certified
              carbon credits, and connect them with businesses committed to
              offsetting their carbon footprint.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <img
              src="https://images.unsplash.com/photo-1611273643729-d5c9c494f134?q=80&w=1964&auto=format&fit=crop"
              alt="Lush green landscape representing a healthy planet"
              className="rounded-2xl shadow-xl hover-lift"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-bold">Measure & Verify</h3>
              </div>
              <p className="text-muted-foreground">
                We use advanced technology to measure carbon sequestered in the
                soil of our partner farms and get it verified by global
                standards.
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-bold">Create Credits</h3>
              </div>
              <p className="text-muted-foreground">
                Each tonne of CO2 captured is converted into a high-quality,
                traceable carbon credit on our secure platform.
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-bold">Connect & Transact</h3>
              </div>
              <p className="text-muted-foreground">
                Businesses can purchase these credits to offset their emissions,
                directly supporting farmers and funding climate action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center container mx-auto">
        <h2 className="text-4xl font-display font-bold mb-6">
          Invest in a Greener Future
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Are you a business looking to achieve your sustainability goals?
          Explore our marketplace.
        </p>
        <Button asChild variant="hero" size="lg" className="group">
          <Link to="/contact-us">
            Offset Your Carbon Footprint
            <ArrowRight
              className="ml-2 group-hover/translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default CarbonMarketplace;
