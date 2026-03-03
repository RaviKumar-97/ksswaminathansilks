'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { allProducts } from '../src/data/products';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BrandStorySlider from '../components/BrandStorySlider';
import HeritageSection from '../components/HeritageSection';

const featuredProducts = allProducts.filter(p => p.featured).slice(0, 4);
const bestSellers = allProducts.slice(0, 8);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* HERITAGE SECTION */}
      <HeritageSection />

      {/* FEATURED COLLECTIONS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Featured Collections
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                A Legacy Woven in Silk
              </h2>
              <div className="w-16 h-px bg-accent mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Zari Ragam, every saree tells a story of heritage, 
                craftsmanship, and timeless elegance. Rooted in tradition and guided 
                by excellence, our collection reflects the soul of Kanchipuram weaving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For generations, we have preserved the art of handloom silk, 
                bringing you sarees that embody grace, purity, and cultural richness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <BrandStorySlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Best Sellers
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border border-primary text-primary px-10 py-3 text-sm tracking-widest hover:bg-primary hover:text-white transition-colors duration-300"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-px bg-accent mx-auto mb-8" />
            <p className="font-serif text-2xl md:text-3xl text-gray-900 italic mb-6">
              "The quality and craftsmanship of these sarees are unmatched. 
              A true celebration of our heritage."
            </p>
            <p className="text-sm tracking-widest text-gray-600">— PRIYA SHARMA</p>
            <div className="w-16 h-px bg-accent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Personalized Assistance
          </h2>
          <p className="text-white/90 mb-8">
            Connect with us on WhatsApp for exclusive guidance and curated recommendations.
          </p>
          <a
            href="https://wa.me/919944541985"
            target="_blank"
            className="inline-block bg-white text-primary px-10 py-4 text-sm tracking-widest hover:bg-accent hover:text-white transition-colors duration-300"
          >
            CHAT ON WHATSAPP
          </a>
        </motion.div>
      </section>
    </>
  );
}
