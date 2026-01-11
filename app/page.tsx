'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { allProducts } from '../src/data/products';
import HeroSlider from '../components/HeroSlider';
import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';

const featuredProducts = allProducts.filter(
  (product) => product.featured
);

export default function HomePage() {
  const t = useTranslations();
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const nextFeatured = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevFeatured = () => {
    setFeaturedIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };


  return (
    <>
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <Breadcrumb
          items={[
            { label: 'Home' }
          ]}
        />
      </div>

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
            {t.home.storyTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t.home.storyDescription}
          </p>
        </motion.div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-serif mb-12"
          >
            {t.home.featuredTitle}
          </motion.h2>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div 
                className="flex gap-8 transition-transform duration-500"
                style={{ transform: `translateX(-${featuredIndex * 336}px)` }}
              >
                {featuredProducts.map((product) => (
                  <div
                    key={product.slug}
                    className="flex-shrink-0 w-80 group bg-white p-4"
                  >
                    <Link href={`/products/${product.slug}`}>
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <h3 className="mt-4 font-serif text-lg">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {product.tagline}
                      </p>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {featuredIndex > 0 && (
              <button
                onClick={prevFeatured}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl hover:bg-white shadow-lg"
              >
                ‹
              </button>
            )}
            {featuredIndex < featuredProducts.length - 3 && (
              <button
                onClick={nextFeatured}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl hover:bg-white shadow-lg"
              >
                ›
              </button>
            )}
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
            {t.home.whatsappTitle}
          </h2>
          <p className="text-gray-600 mb-8">
            {t.home.whatsappSubtitle}
          </p>
          <a
            href="https://wa.me/919944541985"
            target="_blank"
            className="inline-block bg-black text-white px-10 py-4 tracking-widest hover:bg-gray-800 transition"
          >
            {t.home.whatsappButton}
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        {/* © {new Date().getFullYear()} K S Swaminathan Silks. All rights reserved. */}
        © {new Date().getFullYear()} {t.brand?.name ?? 'K S Swaminathan Silks'}

      </footer>
    </>
  );
}
