'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  '/products/dyeing1.jpg',
  '/products/dyeing2.jpg',
  '/products/dyeing3.jpg'
];

export default function BrandStorySlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative aspect-[4/5] overflow-hidden" aria-label="Heritage silk weaving image slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentImage}
        >
          <Image
            src={image}
            alt={`Heritage silk weaving process - image ${index + 1}`}
            fill
            loading={index === 0 ? 'eager' : 'lazy'}
            className="object-cover"
          />
        </div>
      ))}

      <button
        onClick={prevImage}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
      >
        ‹
      </button>
      <button
        onClick={nextImage}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="Image navigation">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            role="tab"
            aria-selected={index === currentImage}
            aria-label={`Go to image ${index + 1}`}
            className={`h-6 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white w-6' : 'bg-white/50 w-6'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
