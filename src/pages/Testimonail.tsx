import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Mr. Rajesh Thapa",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "Lawyers’ Point provided exceptional guidance in our corporate structuring. Their attention to detail and timely support was invaluable.",
  },
  {
    id: 2,
    name: "Ms. Sunita Sharma",
    role: "NGO Director",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "The team at Lawyers’ Point helped us draft clear and compliant policies for our NGO. Highly professional and reliable!",
  },
  {
    id: 3,
    name: "Mr. Jyoti Adhikari",
    role: "Property Owner",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    testimonial:
      "Excellent service in property dispute resolution. Their mediation approach saved us time and stress. Truly recommendable!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = testimonialsData.length;

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
          What Our Clients Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialsData[currentIndex].id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border flex flex-col items-center gap-4"
            >
              <Quote className="h-8 w-8 text-secondary mb-2" />
              <p className="text-muted-foreground text-lg italic leading-relaxed">
                "{testimonialsData[currentIndex].testimonial}"
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="w-12 h-12 rounded-full border-2 border-secondary"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">
                    {testimonialsData[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonialsData[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-secondary/20 hover:bg-secondary text-secondary-foreground p-3 rounded-full transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-secondary/20 hover:bg-secondary text-secondary-foreground p-3 rounded-full transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary"
                    : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
