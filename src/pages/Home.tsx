import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  Users,
  Target,
  CheckCircle,
  Quote,
  Sprout,
  Tractor,
  ShoppingBasket,
  HeartHandshake,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PeopleAssociated from "@/components/PeopleAssociated";
import PillerSection from "@/components/PillerSection";
import DiveDeeperSection from "@/components/DiveDeeperSection";
import TangibleImpactSection from "@/components/TangibleImpactSection";
import StakeholderSection from "@/components/StakeholderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in order-2 md:order-1">
                <span className="text-secondary font-semibold uppercase tracking-wider">
                  Our Commitment
                </span>
                <h2 className="text-4xl font-display font-bold my-4 text-foreground">
                  A Return to Nature's Wisdom
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe the foundation of a healthy nation lies in healthy
                  soil. We're not just practicing organic farming; we're
                  re-establishing a deeper connection between India's
                  agricultural heritage, its people, and the earth.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Purity & Authenticity:
                      </span>{" "}
                      A promise of chemical-free, natural goodness in every
                      product.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Farmer Prosperity:
                      </span>{" "}
                      Ensuring a sustainable and dignified livelihood for our
                      food creators.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-secondary w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">
                        Planetary Wellness:
                      </span>{" "}
                      Adopting practices that heal and rejuvenate our planet.
                    </span>
                  </li>
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="gradient-primary text-primary-foreground hover-lift"
                >
                  <Link to="#explore">Explore Our Movement</Link>
                </Button>
              </div>
              <div className="animate-fade-in order-1 md:order-2">
                <img
                  src="https://thumbs.dreamstime.com/b/cultivating-healthy-soil-sustainable-future-world-soil-day-organic-farming-practices-hand-protection-world-soil-day-356038920.jpg"
                  alt="Farmer holding healthy soil"
                  className="rounded-2xl shadow-medium w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </section>

        <PillerSection />
        <DiveDeeperSection />
        <PeopleAssociated />
        <StakeholderSection />
        <TestimonialsSection />

        <FaqSection />

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Join the Organic Revolution
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're a citizen, farmer, business, or supporter —
                there's a place for you in our movement.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  className="gradient-accent text-accent-foreground hover-lift"
                  size="lg"
                >
                  <Link to="/join">Join the Movement</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover-lift"
                >
                  <Link to="/stakeholders">Explore Opportunities</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <TangibleImpactSection />
      <Footer />
    </div>
  );
};

export default Home;
