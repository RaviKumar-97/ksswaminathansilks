'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../../../src/data/products';
import { allProducts } from '../../../src/data/products';
import { useRef, useState , useEffect } from 'react';

export default function ProductClient({ product }: { product: Product }) {
  const gallery = product.images ?? [product.image];
  const relatedProducts = allProducts.filter(p => p.slug !== product.slug);
  const [relatedIndex, setRelatedIndex] = useState(0);

  const nextRelated = () => {
    setRelatedIndex((prev) => (prev + 1) % relatedProducts.length);
  };

  const prevRelated = () => {
    setRelatedIndex((prev) => (prev - 1 + relatedProducts.length) % relatedProducts.length);
  };

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'fabric' | 'zari' | 'border' | 'care'
  >('fabric');

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  /* DESKTOP FABRIC ZOOM */
  const [zoom, setZoom] = useState({ x: 50, y: 50, show: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoom({ x, y, show: true });
  };
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener('resize', check);
  return () => window.removeEventListener('resize', check);
}, []);


  return (
    <>
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* ================= IMAGE SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* MAIN IMAGE */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoom((z) => ({ ...z, show: false }))}

            /* DESKTOP CLICK → FULLSCREEN */
            onClick={() => {
              if (window.matchMedia('(pointer: fine)').matches) {
                setIsOpen(true);
              }
            }}

            /* MOBILE SWIPE */
            onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;

              const diff = touchStartX - e.changedTouches[0].clientX;

              if (diff > 50 && index < gallery.length - 1) {
                setIndex(index + 1);
              } else if (diff < -50 && index > 0) {
                setIndex(index - 1);
              }

              setTouchStartX(null);
            }}
            className="relative h-[420px] sm:h-[520px] md:h-[620px] bg-[#faf7f2] overflow-hidden group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0.7, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.7, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={gallery[index]}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  priority
                  className="object-cover"
                />

                {/* DESKTOP FABRIC ZOOM */}
                {zoom.show && (
                  <div
                    className="hidden md:block absolute inset-0"
                    style={{
                      backgroundImage: `url(${gallery[index]})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '200%',
                      backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                    }}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* DESKTOP ARROWS */}
            {index > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(index - 1);
                }}
className="absolute left-4 top-1/2 -translate-y-1/2 
           bg-white/80 backdrop-blur px-4 py-2 text-3xl
           md:text-4xl"
              >
                ‹
              </button>
            )}

            {index < gallery.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(index + 1);
                }}
className="absolute right-4 top-1/2 -translate-y-1/2 
           bg-white/80 backdrop-blur px-4 py-2 text-3xl
           md:text-4xl"
              >
                ›
              </button>
            )}

            {/* MOBILE VIEW BUTTON */}
            {/* <button
              onClick={() => setIsOpen(true)}
              className="md:hidden absolute bottom-4 right-4 bg-black/70 text-white text-xs px-4 py-2 tracking-widest"
            >
              VIEW
            </button> */}
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 overflow-x-auto">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative h-20 w-20 border overflow-hidden ${
                  i === index ? 'border-black' : 'border-gray-200'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-600">{product.tagline}</p>

          {product.price && (
            <p className="mt-6 text-2xl font-medium">{product.price}</p>
          )}

          {product.description && (
            <p className="mt-6 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* DETAILS */}
          {product.details && (
            <div className="mt-12">
              <div className="flex gap-6 border-b text-sm tracking-widest uppercase">
                {(['fabric', 'zari', 'border', 'care'] as const).map(
                  (tab) =>
                    product.details?.[tab] && (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 transition ${
                          activeTab === tab
                            ? 'border-b-2 border-black'
                            : 'text-gray-400 hover:text-black'
                        }`}
                      >
                        {tab}
                      </button>
                    )
                )}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-gray-600"
              >
                {product.details[activeTab]}
              </motion.div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 flex gap-6 flex-wrap">
            <a
              href={`https://wa.me/919999999999?text=Hi, I am interested in ${product.name}`}
              target="_blank"
              className="bg-black text-white px-10 py-4 tracking-[0.2em] text-sm"
            >
              ORDER VIA WHATSAPP
            </a>

            <Link
              href="/products"
              className="px-10 py-4 border border-black tracking-[0.2em] text-sm"
            >
              BACK TO COLLECTIONS
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ================= FULLSCREEN ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {index > 0 && (
              <button
                onClick={() => setIndex(index - 1)}
                className="absolute left-6 text-white text-5xl"
              >
                ‹
              </button>
            )}

            {index < gallery.length - 1 && (
              <button
                onClick={() => setIndex(index + 1)}
                className="absolute right-6 text-white text-5xl"
              >
                ›
              </button>
            )}

            <div className="relative w-[90vw] h-[85vh]">
              <Image
                src={gallery[index]}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    {/* ================= RELATED PRODUCTS ================= */}
    <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
      <h2 className="text-3xl font-serif mb-12 text-center">Related Products</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex gap-4 md:gap-8 transition-transform duration-500"
style={{ transform: `translateX(-${relatedIndex * (isMobile ? 280 : 336)}px)` }}
          >
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.slug}
                className="flex-shrink-0 w-64 md:w-80 group"
              >
                <Link href={`/products/${relatedProduct.slug}`}>
                  <div className="relative h-80 bg-[#faf7f2] overflow-hidden mb-4">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-serif">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{relatedProduct.tagline}</p>
                  {relatedProduct.price && (
                    <p className="text-lg font-medium mt-2">{relatedProduct.price}</p>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {relatedIndex > 0 && (
          <button
            onClick={prevRelated}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl hover:bg-white shadow-lg"
          >
            ‹
          </button>
        )}
        {relatedIndex < relatedProducts.length - 1 && (
          <button
            onClick={nextRelated}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl hover:bg-white shadow-lg"
          >
            ›
          </button>
        )}
      </div>
    </section>
    </>
  );
}
