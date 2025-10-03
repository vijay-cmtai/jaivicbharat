import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

// --- IMAGE ISSUE SOLVED ---
// Maine Unsplash se placeholder images laga di hain.
// Aapko bas in URLs ko apni image ke path se badalna hai (e.g., '/images/people/ramesh-patel.jpg')
const testimonialsData = [
  {
    quote:
      "Joining Jaivic Bharat was the best decision for my farm. My soil is healthier, my crops are better, and my income has stabilized. I am now farming with pride.",
    name: "Ramesh Patel",
    location: "Gujarat",
    img: "https://images.unsplash.com/photo-1560323733-5c4a7a8d3b0d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote:
      "As a consumer, I feel empowered. Knowing where my food comes from and that it's grown without chemicals gives me peace of mind for my family's health.",
    name: "Priya Sharma",
    location: "Delhi",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote:
      "This isn't just about farming; it's about preserving our traditions and our planet for future generations. I am proud to be a part of this change.",
    name: "Sunita Devi",
    location: "Punjab",
    img: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote:
      "The support and training provided have been invaluable. They've helped us connect directly with buyers, which is a game-changer for our community.",
    name: "Karan Singh",
    location: "Rajasthan",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
  },
];

const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <motion.section
      className="py-24 bg-muted/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-foreground">
            Voices from the Fields
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from the heart of our movement.
          </p>
        </div>

        <div className="relative">
          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6" style={{ perspective: "1000px" }}>
              {testimonialsData.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-[45%] pl-6"
                >
                  {/* 3D Tilt Card */}
                  <div
                    className="group relative bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:border-accent hover:shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="transition-transform duration-500 [transform:translateZ(20px)] group-hover:[transform:translateZ(40px)]">
                      {/* Background Quote Icon */}
                      <Quote className="absolute -top-2 -left-2 w-24 h-24 text-gradient opacity-10" />

                      {/* Quote Text */}
                      <blockquote className="relative z-10 text-xl font-medium text-foreground italic leading-relaxed mb-6 h-40">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="border-t border-border/50 pt-6 flex items-center gap-4">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                        />
                        <div>
                          <p className="text-lg font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-card border hover:bg-muted transition-colors disabled:opacity-50"
              disabled={!emblaApi || !emblaApi.canScrollPrev()}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {emblaApi
                ?.scrollSnapList()
                .map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-primary scale-125"
                        : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-card border hover:bg-muted transition-colors disabled:opacity-50"
              disabled={!emblaApi || !emblaApi.canScrollNext()}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
