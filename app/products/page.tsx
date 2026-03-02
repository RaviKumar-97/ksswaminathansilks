'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCard from '../../components/ProductCard';
import { allProducts } from '../../src/data/products';
import { useState, useEffect } from 'react';

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const productsPerPage = isMobile ? 8 : 9;
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = allProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products' }
          ]}
        />
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Our Silk Collections
            </h1>
            <div className="w-16 h-px bg-accent mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover handwoven silk sarees crafted with tradition, purity, and timeless luxury.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-6 py-2 border border-primary text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
              >
                Previous
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 border transition-colors ${
                      currentPage === page
                        ? 'bg-primary text-white border-primary'
                        : 'border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-6 py-2 border border-primary text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-white transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Need help choosing the perfect saree?
          </h2>
          <p className="text-white/90 mb-8">
            Our experts are available on WhatsApp to assist you personally.
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
