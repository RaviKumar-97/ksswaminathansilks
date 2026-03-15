'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const slides = [
  '/products/hero-silder.jpg',
  '/products/hero-silder2.jpg',
  '/products/hero-silder3.jpg'
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero image slider"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide}
            alt={`Luxury Silk Sarees - slide ${index + 1}`}
            fill
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
        <div className="mb-4">
          <p className="text-xs tracking-[0.4em] text-white/90 uppercase">Handloom Heritage</p>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl tracking-wide mb-6">
          Timeless Elegance
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
          Pure Kanchipuram silk sarees manufactured in our own looms.
        </p>
        <Link
          href="/products"
          className="bg-white text-[#2C1810] border border-[#886d2f] px-12 py-5 text-sm tracking-[0.2em] rounded-full hover:bg-[#C9A961] hover:text-white transition-all duration-300 shadow-luxury"
        >
          EXPLORE COLLECTION
        </Link>
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full items-center justify-center text-2xl transition-colors"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full items-center justify-center text-2xl transition-colors"
      >
        ›
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" role="tablist" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-6 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-6'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
