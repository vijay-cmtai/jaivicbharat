import { useState } from "react";
import { ExternalLink, Youtube, FileText, Headphones, Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mediaItems = [
  {
    type: "video",
    title: "Organic Farming Revolution in India",
    description: "Documentary on the impact of organic farming",
    date: "March 2025",
    thumbnail: "🎥",
    url: "https://youtube.com",
  },
  {
    type: "article",
    title: "Times of India: Jaivic Bharat Movement",
    description: "Feature article on our community programs",
    date: "February 2025",
    thumbnail: "📰",
    url: "#",
  },
  {
    type: "podcast",
    title: "Sustainable India Talks",
    description: "Interview with Jaivic Bharat founders",
    date: "January 2025",
    thumbnail: "🎙️",
    url: "#",
  },
  {
    type: "video",
    title: "Farmer Success Stories",
    description: "Transformative journeys to organic farming",
    date: "December 2024",
    thumbnail: "🎬",
    url: "https://youtube.com",
  },
];

const Media = () => {
  const [filter, setFilter] = useState("all");

  const filteredMedia = filter === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.type === filter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Youtube size={20} />;
      case "article":
        return <FileText size={20} />;
      case "podcast":
        return <Headphones size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="media" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Media & Press
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Latest coverage, interviews, and content about our movement
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="video" onClick={() => setFilter("video")}>Video</TabsTrigger>
              <TabsTrigger value="article" onClick={() => setFilter("article")}>News</TabsTrigger>
              <TabsTrigger value="podcast" onClick={() => setFilter("podcast")}>Podcast</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Media Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {filteredMedia.map((item, index) => (
              <Card
                key={index}
                className="glass-card hover-lift border-2 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.thumbnail}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeIcon(item.type)}
                        <span className="text-xs font-semibold uppercase text-muted-foreground">
                          {item.type}
                        </span>
                      </div>
                      <CardTitle className="text-lg font-display group-hover:text-secondary transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-3">{item.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        View
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Admin Add Media Button (placeholder) */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              <Plus size={20} className="mr-2 group-hover:rotate-90 transition-transform" />
              Add Media (Admin)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
