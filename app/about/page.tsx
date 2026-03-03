'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeritageSection from '../../components/HeritageSection';
import BrandStorySlider from '../../components/BrandStorySlider';

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] bg-gradient-to-b from-[#2C1810] to-[#8B7355]">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
          }} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6"
        >
          <div className="w-1 h-16 bg-[#C9A961] mx-auto mb-6" />
          <h1 className="font-serif text-5xl md:text-6xl tracking-wide mb-6">
            Our Heritage
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            A legacy of authentic Kanchipuram silk weaving, passed down through generations
          </p>
        </motion.div>
      </section>

      {/* Heritage Section */}
      <HeritageSection />

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] mb-6">
                A Legacy Woven in Silk
              </h2>
              <div className="w-16 h-px bg-[#C9A961] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Zari Ragam, every saree tells a story of heritage, craftsmanship, and timeless elegance. 
                Rooted in tradition and guided by excellence, our collection reflects the soul of Kanchipuram weaving.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For generations, we have preserved the art of handloom silk, bringing you sarees that embody 
                grace, purity, and cultural richness.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each piece is meticulously crafted by master weavers in our own looms, ensuring authenticity 
                and the highest quality standards.
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

      {/* Craftsmanship Section */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] mb-6">
              The Art of Weaving
            </h2>
            <div className="w-16 h-px bg-[#C9A961] mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every saree takes weeks to complete, with each thread carefully chosen and woven by hand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Traditional Techniques',
                desc: 'We use time-honored weaving methods passed down through generations, ensuring each saree maintains the authentic Kanchipuram character.'
              },
              {
                title: 'Master Artisans',
                desc: 'Our skilled weavers have decades of experience, bringing unmatched expertise and attention to detail to every piece.'
              },
              {
                title: 'Pure Materials',
                desc: 'Only the finest mulberry silk and genuine zari threads are used, all certified by the Silk Mark authority.'
              },
              {
                title: 'Quality Assurance',
                desc: 'Each saree undergoes rigorous quality checks to ensure it meets our exacting standards before reaching you.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-luxury"
              >
                <h3 className="font-serif text-2xl text-[#2C1810] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C1810] text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Experience the Difference
          </h2>
          <p className="text-white/90 mb-8">
            Discover our exclusive collection of handloom Kanchipuram silk sarees
          </p>
          <a
            href="/products"
            className="inline-block bg-[#C9A961] text-white px-12 py-5 text-sm tracking-[0.2em] hover:bg-white hover:text-[#2C1810] transition-all duration-300 shadow-luxury"
          >
            EXPLORE COLLECTION
          </a>
        </motion.div>
      </section>
    </>
  );
}
