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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
                The Pillars of Our Movement
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built on a foundation of respect for people and the planet.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 max-w-7xl mx-auto pt-8">
              {[
                {
                  icon: Sprout,
                  title: "Ecological Farming",
                  description:
                    "Promoting farming techniques that enhance biodiversity and regenerate soil health naturally.",
                },
                {
                  icon: HeartHandshake,
                  title: "Farmer Empowerment",
                  description:
                    "Creating a fair and transparent ecosystem that ensures financial stability for farmers.",
                },
                {
                  icon: Users,
                  title: "Community Wellness",
                  description:
                    "Providing access to safe, nutritious food and raising awareness about conscious consumption.",
                },
                {
                  icon: Globe,
                  title: "Sustainable Legacy",
                  description:
                    "Building a resilient food system that protects our planet for the generations to come.",
                },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="relative bg-card p-8 pt-16 text-center rounded-2xl hover-lift animate-fade-in border border-transparent hover:border-secondary transition-colors duration-300 shadow-soft"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <pillar.icon
                        className="text-primary-foreground"
                        size={40}
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="explore" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Dive Deeper into Our Movement
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore every facet of our initiative and see how we're building
                a sustainable India, together.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="glass-card border-2 hover-lift group animate-fade-in overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">About Us</CardTitle>
                  <CardDescription className="text-base">
                    Learn about our core philosophy, the dedicated team driving
                    this change, and our unwavering commitment to a sustainable
                    future.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn w-full justify-between"
                  >
                    <Link to="/about">
                      Learn More{" "}
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="glass-card border-2 hover-lift group animate-fade-in overflow-hidden relative"
                style={{ animationDelay: "100ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Leaf className="text-primary-foreground" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Our Foundation</CardTitle>
                  <CardDescription className="text-base">
                    Discover the four fundamental pillars that guide our every
                    action: Wealth, Wellness, Education, and Sustainability.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn w-full justify-between"
                  >
                    <Link to="/foundation">
                      Explore Pillars{" "}
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="glass-card border-2 hover-lift group animate-fade-in overflow-hidden relative"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="text-secondary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Our Programs</CardTitle>
                  <CardDescription className="text-base">
                    Explore our on-the-ground initiatives, from farmer training
                    workshops to urban organic markets and policy advocacy.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn w-full justify-between"
                  >
                    <Link to="/programs">
                      View Programs{" "}
                      <ArrowRight
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                        size={20}
                      />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                  A Tangible Impact
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our collective efforts are creating measurable change across
                  India.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Users, number: "50K+", label: "Active Citizens" },
                  { icon: Leaf, number: "5K+", label: "Organic Farmers" },
                  { icon: Sprout, number: "20K+", label: "Hectares Converted" },
                  {
                    icon: HeartHandshake,
                    number: "150+",
                    label: "Community Partners",
                  },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    className="glass-card p-6 md:p-8 rounded-2xl text-center hover-lift animate-fade-in"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center">
                        <stat.icon
                          className="text-primary-foreground"
                          size={32}
                        />
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Voices from the Fields
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real stories from the heart of our movement.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  quote:
                    "Joining Jaivic Bharat was the best decision for my farm. My soil is healthier, my crops are better, and my income has stabilized. I am now farming with pride.",
                  name: "Ramesh Patel",
                  location: "Gujarat",
                  img: "/images/farmer-1.jpg",
                },
                {
                  quote:
                    "As a consumer, I feel empowered. Knowing where my food comes from and that it's grown without chemicals gives me peace of mind for my family's health.",
                  name: "Priya Sharma",
                  location: "Delhi",
                  img: "/images/consumer-1.jpg",
                },
                {
                  quote:
                    "This isn't just about farming; it's about preserving our traditions and our planet for future generations. I am proud to be a part of this change.",
                  name: "Sunita Devi",
                  location: "Punjab",
                  img: "/images/farmer-2.jpg",
                },
              ].map((testimonial, i) => (
                <Card
                  key={i}
                  className="glass-card border-2 hover-lift animate-fade-in flex flex-col"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <Quote className="w-12 h-12 text-accent/30 mb-4" />
                    <blockquote className="text-muted-foreground italic flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4 pt-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
                Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about our movement.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-full animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What does 'organic' mean to Jaivic Bharat?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  For us, organic is more than just chemical-free. It's a
                  holistic system that respects the soil, biodiversity, farmers'
                  livelihoods, and consumer health. It's about working in
                  harmony with nature.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg">
                  How can I join the movement?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  You can join us as a citizen member, a farmer partner, or a
                  volunteer. Visit our 'Join Us' page to find the best way for
                  you to contribute to a healthier India.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg">
                  Where can I buy produce from your farmers?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  We are building a network of 'Organic Corners' in cities
                  across the country. You can find a list of our partner stores
                  and farmers' markets on our 'Programs' page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

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
      <Footer />
    </div>
  );
};

export default Home;
