import { useState } from "react";
import { Link } from "react-router-dom";
import { Megaphone, Users, TrendingUp, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const joinOptions = [
  {
    icon: Megaphone,
    title: "Join as Advertiser",
    description: "Promote organic campaigns & reach our community",
    cta: "Register as Advertiser",
    type: "advertiser",
    color: "gradient-primary",
  },
  {
    icon: Users,
    title: "Join as Subscriber",
    description: "Get updates, programs & member benefits",
    cta: "Become a Subscriber",
    type: "subscriber",
    color: "gradient-accent",
  },
  {
    icon: TrendingUp,
    title: "Join as Investor",
    description: "Invest in projects & farmer transition programs",
    cta: "Register as Investor",
    type: "investor",
    color: "gradient-primary",
  },
  {
    icon: Heart,
    title: "Donate",
    description: "Support wellness & community initiatives",
    cta: "Donate Now",
    type: "donor",
    color: "gradient-accent",
  },
];

const Join = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCardClick = (type: string) => {
    setSelectedType(type);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll get back to you shortly via email.",
    });
    setIsDialogOpen(false);
  };

  const renderForm = () => {
    if (!selectedType) return null;

    const isMembership = selectedType === "advertiser" || selectedType === "subscriber";
    const isDonor = selectedType === "donor";

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" required placeholder="Enter your full name" />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required placeholder="your.email@example.com" />
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input id="phone" type="tel" required placeholder="+91 1234567890" />
          </div>

          {isMembership && (
            <>
              <div>
                <Label htmlFor="organization">Organization {selectedType === "advertiser" && "*"}</Label>
                <Input id="organization" required={selectedType === "advertiser"} placeholder="Company name" />
              </div>

              <div>
                <Label htmlFor="plan">Membership Plan *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="silver">Silver - ₹999/year</SelectItem>
                    <SelectItem value="gold">Gold - ₹2,999/year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {isDonor && (
            <div>
              <Label htmlFor="amount">Donation Amount (₹) *</Label>
              <Input id="amount" type="number" required placeholder="1000" min="100" />
            </div>
          )}

          {!isMembership && !isDonor && (
            <>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input id="city" required placeholder="Enter your city" />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your interest..." rows={4} />
              </div>
            </>
          )}
        </div>

        <Button type="submit" variant="hero" size="lg" className="w-full">
          Submit {selectedType === "donor" ? "Donation" : "Registration"}
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Join the Movement
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose how you want to participate — Advertiser, Subscriber, Investor or Donor
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {joinOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={option.type}
                    className="glass-card hover-lift border-2 cursor-pointer group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handleCardClick(option.type)}
                  >
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl ${option.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-primary-foreground" size={32} />
                      </div>
                      <CardTitle className="text-2xl font-display">{option.title}</CardTitle>
                      <CardDescription className="text-base">{option.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="secondary" className="w-full group-hover:shadow-lg">
                        {option.cta}
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Dialog/Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {selectedType === "advertiser" && "Advertiser Registration"}
              {selectedType === "subscriber" && "Subscriber Registration"}
              {selectedType === "investor" && "Investor Registration"}
              {selectedType === "donor" && "Make a Donation"}
            </DialogTitle>
            <DialogDescription>
              Fill in your details below. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          {renderForm()}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Join;
