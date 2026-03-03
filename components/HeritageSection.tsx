'use client';

import { motion } from 'framer-motion';

export default function HeritageSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="w-1 h-12 bg-[#C9A961] mx-auto mb-4" />
            <p className="text-xs tracking-[0.3em] text-[#8B7355] uppercase">Our Promise</p>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] mb-6 leading-tight">
            From Our Looms to You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We are not resellers. Every saree is woven in our own looms by master artisans, 
            carrying forward a legacy of authentic Kanchipuram craftsmanship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Direct from Manufacturer',
              desc: 'No middlemen. Pure authenticity from our looms to your wardrobe.',
              icon: '🏭'
            },
            {
              title: 'Pure Handloom Silk',
              desc: 'Every thread woven by hand, preserving centuries-old techniques.',
              icon: '🧵'
            },
            {
              title: 'Silk Mark Certified',
              desc: 'Government-certified pure silk. Guaranteed quality and authenticity.',
              icon: '✓'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-[#2C1810] mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white px-8 py-6 shadow-luxury rounded-sm">
            <p className="text-sm text-[#8B7355] mb-2 tracking-widest uppercase">Limited Stock</p>
            <p className="font-serif text-2xl text-[#2C1810]">Each piece is exclusive</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
