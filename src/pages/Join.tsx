import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const joinOptions = [
  {
    icon: Megaphone,
    title: "Join as Advertiser",
    description: "Promote organic campaigns & reach our conscious community.",
    type: "advertiser",
    borderColor: "border-primary",
  },
  {
    icon: Users,
    title: "Join as Subscriber",
    description: "Get updates on programs, events, and member benefits.",
    type: "subscriber",
    borderColor: "border-secondary",
  },
  {
    icon: TrendingUp,
    title: "Join as Investor",
    description:
      "Invest in high-impact projects and farmer transition programs.",
    type: "investor",
    borderColor: "border-accent",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Support our wellness initiatives and community-building programs directly.",
    type: "donor",
    borderColor: "border-secondary",
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
      title: "Submission Successful!",
      description:
        "Thank you for your interest. We will get back to you shortly.",
    });
    setIsDialogOpen(false);
  };

  const renderForm = () => {
    if (!selectedType) return null;

    const isMembership =
      selectedType === "advertiser" || selectedType === "subscriber";
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
            <Input
              id="email"
              type="email"
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+91 1234567890"
            />
          </div>
          {isMembership && (
            <>
              <div>
                <Label htmlFor="organization">
                  Organization {selectedType === "advertiser" && "*"}
                </Label>
                <Input
                  id="organization"
                  required={selectedType === "advertiser"}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <Label htmlFor="plan">Membership Plan *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free Tier</SelectItem>
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
              <Input
                id="amount"
                type="number"
                required
                placeholder="1000"
                min="100"
              />
            </div>
          )}
          {selectedType === "investor" && (
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your investment interest..."
                rows={4}
              />
            </div>
          )}
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full">
          Submit {selectedType === "donor" ? "Donation" : "Registration"}
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-foreground">
                Become a Part of the Change
              </h1>
              <p className="text-xl text-muted-foreground">
                Every contribution, big or small, fuels the organic revolution.
                Choose the path that aligns with your vision and join us in
                building a healthier, more sustainable India.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {joinOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={option.type}
                    className={`bg-card hover-lift cursor-pointer group animate-fade-in overflow-hidden shadow-soft border-t-4 ${option.borderColor} transition-all duration-300 hover:shadow-lg`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handleCardClick(option.type)}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-4">
                          <Icon className="text-primary" size={32} />
                        </div>
                        <ArrowRight className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-2xl font-display">
                        {option.title}
                      </CardTitle>
                      <CardDescription className="text-base min-h-[48px]">
                        {option.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span className="font-semibold text-secondary">
                        {option.cta}
                      </span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
                  alt="Community support"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div
                className="animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <h2 className="text-3xl font-display font-bold mb-6">
                  Why Your Support Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Your involvement directly contributes to a virtuous cycle of
                  positive change:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Empower Farmers:</span>{" "}
                      Provide them with the resources to thrive through
                      sustainable practices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Promote Health:</span>{" "}
                      Increase access to nutritious, chemical-free food for
                      communities across India.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-secondary w-6 h-6 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold">Restore Ecosystems:</span>{" "}
                      Help heal the soil, conserve water, and protect
                      biodiversity for future generations.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display">
              {joinOptions.find((o) => o.type === selectedType)?.cta}
            </DialogTitle>
            <DialogDescription>
              Fill in your details below. Fields marked with * are required.
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
