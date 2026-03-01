'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import { allProducts } from '../../src/data/products';

export default function ProductsPage() {
  return (
    <>
      {/* HEADER */}
      {/* <Header /> */}

      {/* BREADCRUMB */}
      <div className="max-w-[90rem] mx-auto px-6 mt-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products' }
          ]}
        />
      </div>

      {/* PAGE TITLE */}
      <section className="pb-16 px-2 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-5xl font-serif"
        >
          Our Silk Collections
        </motion.h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover handwoven silk sarees crafted with tradition, purity, and timeless luxury.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="pb-24">
        <div className="max-w-[90rem] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {allProducts .map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative h-[420px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="pt-4">
                    <h3 className="font-serif text-lg">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {product.description}
                    </p>
                    <p className="mt-2 font-medium">
                      {product.price}
                    </p>

                    <span className="inline-block mt-3 text-sm tracking-widest border-b border-black pb-1">
                      VIEW DETAILS
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="py-16 bg-[#faf7f2] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif mb-4">
            Need help choosing the perfect saree?
          </h2>
          <p className="text-gray-600 mb-8">
            Our experts are available on WhatsApp to assist you personally.
          </p>
          <a
            href="https://wa.me/919944541985"
            target="_blank"
            className="inline-block bg-black text-white px-10 py-4 tracking-widest hover:bg-gray-800 transition"
          >
            CHAT ON WHATSAPP
          </a>
        </motion.div>
      </section>
    </>
  );
}
