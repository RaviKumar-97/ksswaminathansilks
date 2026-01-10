'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import { allProducts } from '../src/data/products';

const featuredProducts = allProducts.filter(
  (product) => product.featured
);

export default function HomePage() {
  const t = useTranslations();


  return (
    <>
      {/* HEADER */}
      {/* <Header /> */}



      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/products/hero-silk.jpg"
          alt="Luxury Silk Sarees"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide">
            {t.home.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl opacity-90">
            {t.home.heroSubtitle}
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            {t.home.exploreButton}
          </Link>
        </motion.div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white p-4"
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
              </motion.div>
            ))}
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
            href="https://wa.me/919999999999"
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
