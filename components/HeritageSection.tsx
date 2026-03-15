'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeritageSection({ minimal = false }: { minimal?: boolean }) {
  if (minimal) {
    return (
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-[#8B7355] uppercase mb-3">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] mb-4">
              From Our Looms to You
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We are not resellers. Every saree is woven in our own looms by master artisans.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: 'Direct from Manufacturer',
                icon: (
                  <svg viewBox="0 0 64 64" className="w-12 h-12 mx-auto" fill="none" stroke="#2C1810" strokeWidth="2">
                    <rect x="4" y="28" width="56" height="32" rx="1" />
                    <path d="M4 28 L32 8 L60 28" />
                    <rect x="22" y="40" width="10" height="20" />
                    <rect x="32" y="40" width="10" height="20" />
                    <rect x="10" y="34" width="8" height="8" />
                    <rect x="46" y="34" width="8" height="8" />
                  </svg>
                )
              },
              {
                title: 'Original Handloom Saree',
                icon: <Image src="/products/handloomlogo.jpg" alt="Handloom" width={48} height={48} className="mx-auto object-contain" />
              },
              {
                title: 'Silk Mark Certified',
                icon: <Image src="/products/silkmarklogo.png" alt="Silk Mark" width={48} height={48} className="mx-auto object-contain" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-serif text-lg text-[#2C1810]">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="text-sm tracking-widest text-[#8B7355] border-b border-[#8B7355] pb-1 hover:text-[#2C1810] hover:border-[#2C1810] transition"
            >
              DISCOVER OUR HERITAGE →
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#FAF7F2]">
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
              icon: (
                <svg viewBox="0 0 64 64" className="w-14 h-14 mx-auto" fill="none" stroke="#2C1810" strokeWidth="2">
                  <rect x="4" y="28" width="56" height="32" rx="1" />
                  <path d="M4 28 L32 8 L60 28" />
                  <rect x="22" y="40" width="10" height="20" />
                  <rect x="32" y="40" width="10" height="20" />
                  <rect x="10" y="34" width="8" height="8" />
                  <rect x="46" y="34" width="8" height="8" />
                </svg>
              )
            },
            {
              title: 'Original Handloom Saree',
              desc: 'Pure handloom sarees carefully woven by our weavers with traditional methods.',
              icon: <Image src="/products/handloomlogo.jpg" alt="Handloom" width={56} height={56} className="mx-auto object-contain" />
            },
            {
              title: 'Silk Mark Certified',
              desc: 'Government-certified pure silk. Guaranteed quality and authenticity.',
              icon: <Image src="/products/silkmarklogo.png" alt="Silk Mark" width={56} height={56} className="mx-auto object-contain" />
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
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
