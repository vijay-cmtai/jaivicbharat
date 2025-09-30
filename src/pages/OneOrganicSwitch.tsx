import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, Heart, Sprout } from "lucide-react";

const OneOrganicSwitch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold">
            #OneOrganicSwitch
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Small changes, big impact. Start your organic journey today.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-display font-bold mb-6">
              What is #OneOrganicSwitch?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              #OneOrganicSwitch is a nationwide movement encouraging every
              citizen to make a simple yet powerful choice: switch just one item
              in their daily consumption to a certified organic alternative.
              Whether it's your tea, rice, spices, or vegetables, one small
              switch contributes to a healthier you, a prosperous farmer, and a
              cleaner planet.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
              alt="Fresh organic salad in a bowl"
              className="rounded-2xl shadow-xl hover-lift"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-12">
            Why Make the Switch?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8">
              <Heart className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">For Your Health</h3>
              <p className="text-muted-foreground">
                Enjoy nutrient-rich, chemical-free food that tastes better and
                is better for you and your family.
              </p>
            </div>
            <div className="p-8">
              <Sprout className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">For the Farmer</h3>
              <p className="text-muted-foreground">
                Your choice supports farmers who practice sustainable
                agriculture, ensuring they get a fair price for their produce.
              </p>
            </div>
            <div className="p-8">
              <ShoppingCart className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">For the Planet</h3>
              <p className="text-muted-foreground">
                Organic farming regenerates soil, conserves water, and protects
                biodiversity, creating a healthier environment for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center container mx-auto">
        <h2 className="text-4xl font-display font-bold mb-6">
          Join the #OneOrganicSwitch Challenge
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Ready to make your switch? Find participating organic brands and
          stores near you.
        </p>
        <Button asChild variant="hero" size="lg" className="group">
          <Link to="/programs/organic-corners">
            Find an Organic Corner
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

export default OneOrganicSwitch;
