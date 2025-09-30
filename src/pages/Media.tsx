import { useState } from "react";
import { Play, Newspaper, Radio, ExternalLink, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mediaHero from "@/assets/media-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mediaItems = [
  {
    type: "video",
    title: "Organic Farming: The Future of Agriculture in India",
    description: "A documentary exploring the organic revolution",
    date: "2024-12-15",
    source: "National Geographic",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop"
  },
  {
    type: "news",
    title: "Jaivic Bharat Empowers 5000 Farmers in Organic Transition",
    description: "Major milestone achieved in farmer support programs",
    date: "2024-12-10",
    source: "The Hindu",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop"
  },
  {
    type: "podcast",
    title: "Building Organic Communities: A Conversation",
    description: "Interview with Jaivic Bharat founder on organic movement",
    date: "2024-12-05",
    source: "India Agriculture Podcast",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop"
  },
  {
    type: "video",
    title: "Success Story: From Chemical to Organic in 3 Years",
    description: "Farmer testimonial on organic transition journey",
    date: "2024-11-28",
    source: "Rural India Channel",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&auto=format&fit=crop"
  },
  {
    type: "news",
    title: "Carbon Credit Marketplace Launches for Organic Farmers",
    description: "New platform enables farmers to monetize sustainable practices",
    date: "2024-11-20",
    source: "Economic Times",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&auto=format&fit=crop"
  },
  {
    type: "podcast",
    title: "Organic Corners: Creating Local Food Hubs",
    description: "Deep dive into community-based organic distribution",
    date: "2024-11-15",
    source: "Sustainability Matters",
    url: "#",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop"
  },
];

const Media = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMedia = mediaItems.filter(
    item => activeFilter === "all" || item.type === activeFilter
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Play size={20} />;
      case "news": return <Newspaper size={20} />;
      case "podcast": return <Radio size={20} />;
      default: return null;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case "video": return "default";
      case "news": return "secondary";
      case "podcast": return "outline";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mediaHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Media & Press
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Stories, coverage, and conversations about the organic revolution
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-20 z-40 border-b border-border/50 glass-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: "all", label: "All Media", icon: null },
              { id: "video", label: "Videos", icon: <Play size={18} /> },
              { id: "news", label: "News", icon: <Newspaper size={18} /> },
              { id: "podcast", label: "Podcasts", icon: <Radio size={18} /> }
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "hero" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="gap-2"
              >
                {filter.icon}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMedia.map((item, index) => (
              <Card 
                key={index}
                className="glass-card border-2 hover-lift overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant={getTypeBadgeVariant(item.type)} className="gap-1">
                      {getTypeIcon(item.type)}
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Calendar size={16} />
                      {new Date(item.date).toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardHeader>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {item.source}
                    </span>
                    <Button variant="ghost" size="sm" className="gap-2 group/btn">
                      View
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Press & Media Inquiries
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              For press kits, interviews, or media partnerships, please contact our communications team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg">
                Download Press Kit
              </Button>
              <Button variant="outline" size="lg">
                Contact Media Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
