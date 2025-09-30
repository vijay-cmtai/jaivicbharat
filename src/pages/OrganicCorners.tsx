import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Store, CheckCircle, Users } from "lucide-react";

const OrganicCorners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1974&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            Organic Corners
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Bringing certified organic products closer to you, one store at a
            time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              Your Neighborhood Hub for Organic Goods
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Organic Corners is a collaborative initiative where we partner
              with local kirana stores, supermarkets, and retailers to create
              dedicated, branded sections for Jaivic Bharat certified organic
              products. This makes organic food more visible, accessible, and
              trustworthy for consumers everywhere.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop"
              alt="A modern kitchen with fresh produce"
              className="rounded-2xl shadow-xl hover-lift"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-12">
            Benefits of Partnering with Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-card rounded-2xl shadow-soft">
              <CheckCircle className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-2">For Retailers</h3>
              <p className="text-muted-foreground">
                Attract new customers, increase sales with high-demand organic
                products, and receive marketing support from a trusted national
                brand.
              </p>
            </div>
            <div className="p-8 bg-card rounded-2xl shadow-soft">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">For Consumers</h3>
              <p className="text-muted-foreground">
                Easily find and purchase a wide range of certified organic
                products at your favorite local store, with the assurance of
                quality and authenticity.
              </p>
            </div>
            <div className="p-8 bg-card rounded-2xl shadow-soft">
              <Store className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-2">For Farmers</h3>
              <p className="text-muted-foreground">
                Gain a wider, more reliable market for your produce, leading to
                better income stability and growth for your organic farm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center container mx-auto">
        <h2 className="text-4xl font-display font-bold mb-6">
          Become an Organic Corner Partner
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Are you a retailer passionate about healthy living? Join our network.
        </p>
        <Button asChild variant="hero" size="lg" className="group">
          <Link to="/contact-us">
            Partner With Us
            <ArrowRight
              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default OrganicCorners;
