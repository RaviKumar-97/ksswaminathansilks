'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Kavipriya Durairaj",
    rating: 5,
    date: "9 months ago",
    text: "Beautiful collection of silk sarees with great quality. The colors and designs are elegant, with reasonable price. Very much satisfied with my purchase. Totally worth the money & Highly recommend!",
    avatar: "KD"
  },
  {
    name: "Ishwaryaeswar",
    rating: 4.5,
    date: "2 months ago",
    text: "Such a wonderful new collections and admiring designs. In low price plenty of quality sarees, must visit.",
    avatar: "IE"
  },
  {
    name: "saranya r",
    rating: 5,
    date: "2 months ago",
    text: "Best place for handloom silk sarees",
    avatar: "SR"
  },
  {
    name: "Charumathi MK",
    rating: 4,
    date: "2 months ago",
    text: "Bought a handloom silk bridal saree for my friend's wedding. Great quality at an affordable price! Highly recommend for anyone looking for a beautiful and budget friendly saree.",
    avatar: "CM"
  },
  {
    name: "Jayashree Ravichandran",
    rating: 4,
    date: "2 weeks ago",
    text: "Recently, I purchased this saree and I'm extremely happy with the quality. It is pure silk, looks elegant, and feels premium. I would give it a 10/10 for quality. This has now become my favorite saree shop, and I will definitely recommend it to everyone. It is also very budget-friendly.",
    avatar: "JR"
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextReview();
    }
    if (isRightSwipe) {
      prevReview();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`}>★</span>);
    }
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative inline-block">
          <span className="text-gray-300">★</span>
          <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>★</span>
        </span>
      );
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    return stars;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Google Rating Summary */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-5xl font-bold text-gray-900">4.7</span>
          <div>
            <div className="flex gap-1 text-yellow-400 text-xl">
              {renderStars(4.7)}
            </div>
            <p className="text-sm text-gray-600 mt-1">Based on {reviews.length} Google Reviews</p>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/K.S.Swaminathan+Silks/@12.4990244,79.2497421,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          View all reviews on Google
        </a>
      </div>

      {/* Review Carousel */}
      <div 
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-6 md:p-12 rounded-lg shadow-sm"
          >
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 text-2xl mb-4 justify-center">
              {renderStars(reviews[currentIndex].rating)}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-center">
              "{reviews[currentIndex].text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                {reviews[currentIndex].avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{reviews[currentIndex].name}</p>
                <p className="text-sm text-gray-500">{reviews[currentIndex].date}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Hidden on mobile */}
        <button
          onClick={prevReview}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 transition text-2xl"
          aria-label="Previous review"
        >
          ‹
        </button>
        <button
          onClick={nextReview}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center hover:bg-gray-100 transition text-2xl"
          aria-label="Next review"
        >
          ›
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Swipe Hint - Mobile only */}
        <p className="md:hidden text-center text-xs text-gray-400 mt-4">
          Swipe to see more reviews
        </p>
      </div>
    </div>
  );
}
