// src/pages/Join.jsx (Poora, sahi kiya hua code)

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Megaphone,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Slices se actions import karein (Apne project ke path ke anusaar badlein)
import {
  register,
  reset as resetAuth,
} from "@/redux/features/authSlice/authSlice";
import {
  createPaymentOrder,
  verifyPayment,
  resetPayment,
} from "@/redux/features/payment/paymentSlice";

// Custom Hook: Razorpay script ko dynamically load karne ke liye
const useRazorpay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return isLoaded;
};

// Component Data
const joinOptions = [
  {
    icon: Megaphone,
    title: "Join as Advertiser",
    description: "Promote organic campaigns & reach our conscious community.",
    type: "advertiser",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920",
  },
  {
    icon: Users,
    title: "Join as Subscriber",
    description: "Get updates on programs, events, and member benefits.",
    type: "subscriber",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1920",
  },
  {
    icon: TrendingUp,
    title: "Join as Investor",
    description:
      "Invest in high-impact projects and farmer transition programs.",
    type: "investor",
    image:
      "https://images.unsplash.com/photo-1631160299919-6a175aa6d169?q=80&w=1920",
  },
  {
    icon: Heart,
    title: "Donate",
    description:
      "Support our wellness initiatives and community-building programs.",
    type: "donor",
    image:
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1920",
  },
];
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Join = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const isRazorpayLoaded = useRazorpay();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading: authIsLoading,
    isError: authIsError,
    isSuccess: authIsSuccess,
    message: authMessage,
  } = useSelector((state) => state.auth);
  const { isLoading: paymentIsLoading } = useSelector((state) => state.payment);
  const combinedIsLoading = authIsLoading || paymentIsLoading;

  useEffect(() => {
    if (authIsError) {
      toast({
        title: "Error",
        description: authMessage,
        variant: "destructive",
      });
    }
    if (authIsSuccess) {
      toast({
        title: "Registration Successful!",
        description: "Welcome! You are now logged in.",
      });
      setIsDialogOpen(false);
      navigate("/admin");
    }
    dispatch(resetAuth());
  }, [authIsError, authIsSuccess, authMessage, navigate, dispatch, toast]);

  const handleCardClick = (type) => {
    setSelectedType(type);
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (data.password && data.password !== data.confirmPassword) {
      toast({ title: "Passwords do not match!", variant: "destructive" });
      return;
    }

    const userData = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      role: selectedType,
      organization: data.organization,
      membershipPlan: data.membershipPlan,
    };

    let amount = 0;
    if (selectedType === "donor") amount = Number(data.amount);
    else if (data.membershipPlan === "silver") amount = 999;
    else if (data.membershipPlan === "gold") amount = 2999;

    if (amount <= 0) {
      try {
        await dispatch(register(userData)).unwrap();
      } catch (error) {
        // Error will be handled by the useEffect toast
      }
      return;
    }

    if (!isRazorpayLoaded) {
      toast({
        title: "Payment gateway is loading. Please wait.",
        variant: "destructive",
      });
      return;
    }

    try {
      const order = await dispatch(createPaymentOrder({ amount })).unwrap();

      const options = {
        // ======================= YEH LINE THEEK KI GAYI HAI =======================
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Vite ka sahi tareeka
        // =========================================================================
        amount: order.amount,
        currency: order.currency,
        name: "Jaivik Bharat",
        description: `Payment for ${selectedType}`,
        order_id: order.id,
        handler: async (response) => {
          try {
            const verificationData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };
            await dispatch(verifyPayment(verificationData)).unwrap();

            toast({
              title: "Payment Verified!",
              description: "Completing registration...",
            });
            await dispatch(register(userData)).unwrap();
          } catch (verificationError) {
            toast({
              title: "Payment Verification Failed",
              description: String(verificationError),
              variant: "destructive",
            });
          }
        },
        prefill: {
          name: userData.fullName,
          email: userData.email,
          contact: userData.phone,
        },
        theme: { color: "#4CAF50" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      dispatch(resetPayment());
    } catch (orderError) {
      toast({
        title: "Payment Error",
        description: String(orderError),
        variant: "destructive",
      });
    }
  };

  const renderForm = () => {
    if (!selectedType) return null;
    const isMembership =
      selectedType === "advertiser" || selectedType === "subscriber";
    const isDonor = selectedType === "donor";
    const needsPassword = true;

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              name="fullName"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              name="phone"
              type="tel"
              required
              placeholder="+91 1234567890"
            />
          </div>

          {needsPassword && (
            <>
              <div>
                <Label htmlFor="password">Password *</Label>
                <Input
                  name="password"
                  type="password"
                  required
                  placeholder="Create a strong password"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="Confirm your password"
                />
              </div>
            </>
          )}

          {isMembership && (
            <>
              <div>
                <Label htmlFor="organization">
                  Organization {selectedType === "advertiser" && "*"}
                </Label>
                <Input
                  name="organization"
                  required={selectedType === "advertiser"}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <Label htmlFor="membershipPlan">Membership Plan *</Label>
                <Select name="membershipPlan" required defaultValue="">
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
                name="amount"
                type="number"
                required
                min="100"
                placeholder="1000"
              />
            </div>
          )}
          {selectedType === "investor" && (
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                name="message"
                placeholder="Tell us about your investment interest..."
              />
            </div>
          )}
        </div>
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="w-full"
          disabled={combinedIsLoading}
        >
          {combinedIsLoading
            ? "Processing..."
            : `Submit ${selectedType === "donor" ? "Donation" : "Registration"}`}
        </Button>
      </form>
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800">
        <main className="overflow-x-hidden">
          {/* ... Aapka baaki ka JSX (Hero, Join Options, etc.) ... */}
          <motion.section
            className="py-24 md:py-32 bg-gradient-to-b from-green-50 to-white relative"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  Become a Part of the Change
                </motion.h1>
                <motion.p className="text-xl text-gray-600">
                  Every contribution fuels the organic revolution. Choose a path
                  that aligns with your vision and join us in building a
                  healthier, sustainable India.
                </motion.p>
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {joinOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={option.type}
                      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-80"
                      onClick={() => handleCardClick(option.type)}
                    >
                      <img
                        src={option.image}
                        alt={option.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                          <Icon className="text-lime-300" size={32} />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">
                          {option.title}
                        </h3>
                        <p className="text-white/80 text-lg">
                          {option.description}
                        </p>
                        <ArrowRight
                          className="absolute top-6 right-6 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300"
                          size={28}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
          <motion.section
            className="py-24 bg-green-50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <motion.div variants={itemVariants}>
                  <img
                    src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2070&auto=format&fit=crop"
                    alt="Community support"
                    className="rounded-2xl shadow-xl aspect-square object-cover"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h2 className="text-4xl font-bold mb-6 text-green-800">
                    Why Your Support Matters
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Your involvement directly contributes to a virtuous cycle of
                    positive change:
                  </p>
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Empower Farmers",
                        text: "Provide them with resources to thrive through sustainable practices.",
                      },
                      {
                        title: "Promote Health",
                        text: "Increase access to nutritious, chemical-free food for communities.",
                      },
                      {
                        title: "Restore Ecosystems",
                        text: "Help heal the soil, conserve water, and protect biodiversity.",
                      },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-4"
                        variants={itemVariants}
                      >
                        <CheckCircle className="text-lime-500 w-7 h-7 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-bold text-gray-800">
                            {item.title}:
                          </span>{" "}
                          {item.text}
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Join as {selectedType}
              </DialogTitle>
              <DialogDescription>
                Fill in your details below. Fields with * are required.
              </DialogDescription>
            </DialogHeader>
            {renderForm()}
          </DialogContent>
        </Dialog>
      </div>
      <Footer />
    </>
  );
};

export default Join;
