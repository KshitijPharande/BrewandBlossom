"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/hero-cafe.png", alt: "Cafe interior with warm morning light" },
  { src: "/images/barista-pouring.png", alt: "Barista crafting latte art" },
  { src: "/images/coffee-flatlay.png", alt: "Coffee and pastry on wooden table" },
  { src: "/images/cafe-terrace.png", alt: "Outdoor terrace with string lights" },
  { src: "/images/coffee-beans.png", alt: "Freshly roasted coffee beans" },
  { src: "/images/cafe-exterior.png", alt: "Cafe exterior at golden hour" },
];

export default function GalleryStrip() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10">
      <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-cream-dark/50 group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/80 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cream"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/80 text-espresso flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-cream"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-300 ${
              i === currentIndex ? "w-8 bg-espresso" : "w-2 bg-espresso/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
