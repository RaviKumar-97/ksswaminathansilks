'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { allProducts } from '../src/data/products';
import HeroSlider from '../components/HeroSlider';
import Breadcrumb from '../components/Breadcrumb';
import { useState, useEffect, useRef } from 'react';

const featuredProducts = allProducts.filter(
  (product) => product.featured
);

export default function HomePage() {
  const [featuredIndex, setFeaturedIndex] = useState(() => {
    // Start at a position that shows clean 4-product groups on desktop
    return Math.floor(featuredProducts.length / 4) * 4;
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const carouselRef = useRef(null);

  const tripleProducts = [...featuredProducts, ...featuredProducts, ...featuredProducts];

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextFeatured = () => {
    setFeaturedIndex(prev => prev + 1);
  };

  const prevFeatured = () => {
    setFeaturedIndex(prev => prev - 1);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTransitionEnd = () => {
      if (featuredIndex >= featuredProducts.length * 2) {
        carousel.style.transition = 'none';
        setFeaturedIndex(featuredProducts.length);
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 10);
      } else if (featuredIndex <= 0) {
        carousel.style.transition = 'none';
        setFeaturedIndex(featuredProducts.length);
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 10);
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);
    return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
  }, [featuredIndex]);


  return (
    <>
      {/* BREADCRUMB */}
      {/* <div className="max-w-[90rem] mx-auto px-6 mt-6">
        <Breadcrumb
          items={[
            { label: 'Home' }
          ]}
        />
      </div> */}

      {/* HERO SECTION */}
      <HeroSlider />

      {/* BRAND STORY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            A Legacy Woven in Silk
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At K.S. Swaminathan Silks, every saree tells a story of heritage, craftsmanship, and timeless elegance. Rooted in tradition and guided by excellence, our collection reflects the soul of Kanchipuram weaving.
          </p>
        </motion.div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="max-w-[90rem] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-serif mb-12"
          >
            Featured Sarees
          </motion.h2>

          <div className="relative">
            <div className="overflow-hidden ">
              <div
                ref={carouselRef}
                className="flex gap-6"
                style={{ 
                  transform: `translateX(-${featuredIndex * (isClient && isMobile ? 280 : 336)}px)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                {tripleProducts.map((product, idx) => (
                  <div
                    key={`${product.slug}-${idx}`}
                    className="flex-shrink-0 w-64 md:w-80 group bg-white p-4"
                  >
                    <Link href={`/products/${product.slug}`}>
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <h3 className="mt-4 font-serif text-base md:text-lg">
                        {product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        {product.tagline}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl hover:bg-white shadow-lg z-10"
            >
              ‹
            </button>
            <button
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl hover:bg-white shadow-lg z-10"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Personalized Assistance
          </h2>
          <p className="text-gray-600 mb-8">
            Connect with us directly on WhatsApp for exclusive guidance and curated recommendations.
          </p>
          <a
            href="https://wa.me/919944541985"
            target="_blank"
            className="inline-block bg-black text-white px-10 py-4 tracking-widest hover:bg-gray-800 transition"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        {/* © {new Date().getFullYear()} K S Swaminathan Silks. All rights reserved. */}
        © {new Date().getFullYear()} KS Swaminathan Silks

      </footer>
    </>
  );
}
