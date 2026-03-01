'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/products/hero-silk.jpg',
    title: 'Luxury Silk Sarees',
    subtitle: 'Handcrafted elegance for every occasion'
  },
  {
    image: '/products/saree3.jpg',
    title: 'Traditional Craftsmanship',
    subtitle: 'Timeless designs with modern appeal'
  },
  {
    image: '/products/saree5.jpg',
    title: 'Premium Collection',
    subtitle: 'Discover our finest silk creations'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        key={`content-${currentSlide}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-serif tracking-[0.08em] leading-tight">
          {slides[currentSlide].title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl opacity-90">
          {slides[currentSlide].subtitle}
        </p>

        <Link
          href="/products"
className="mt-10 inline-block border border-white px-12 py-4 text-xs tracking-[0.3em] hover:bg-white hover:text-black transition"        >
          Explore Collection
        </Link>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}