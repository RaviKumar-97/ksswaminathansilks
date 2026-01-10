'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../../../src/data/products';
import { allProducts } from '../../../src/data/products';
import { useRef, useState, useEffect } from 'react';

export default function ProductClient({ product }: { product: Product }) {
  const gallery = product.images ?? [product.image];
  const relatedProducts = allProducts.filter(p => p.slug !== product.slug);

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] =
    useState<'fabric' | 'zari' | 'border' | 'care'>('fabric');

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [relatedIndex, setRelatedIndex] = useState(0);

  /* ---------- SAFE MOBILE CHECK ---------- */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const nextRelated = () =>
    setRelatedIndex(prev => (prev + 1) % relatedProducts.length);

  const prevRelated = () =>
    setRelatedIndex(prev =>
      (prev - 1 + relatedProducts.length) % relatedProducts.length
    );

  /* ---------- DESKTOP ZOOM ---------- */
  const [zoom, setZoom] = useState({ x: 50, y: 50, show: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    setZoom({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      show: true,
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello,

I am interested in the following saree:

• Name: ${product.name}
${product.price ? `• Price: ${product.price}` : ''}
${product.tagline ? `• Category: ${product.tagline}` : ''}

Product Link:
${typeof window !== 'undefined' ? window.location.href : ''}

Kindly share availability, blouse details, and delivery timeline.

Thank you.`
  );


  return (
    <>
      {/* ================= PRODUCT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* ================= IMAGE COLUMN ================= */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoom(z => ({ ...z, show: false }))}
              onClick={() => !isMobile && setIsOpen(true)}
              onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={e => {
                if (touchStartX === null) return;
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (diff > 50 && index < gallery.length - 1) setIndex(index + 1);
                if (diff < -50 && index > 0) setIndex(index - 1);
                setTouchStartX(null);
              }}
              className="relative aspect-[3/4] bg-[#faf7f2] overflow-hidden cursor-zoom-in"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.8, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={gallery[index]}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    priority
                    className="object-cover"
                  />

                  {!isMobile && zoom.show && (
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url(${gallery[index]})`,
                        backgroundSize: '220%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {index > 0 && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setIndex(index - 1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 text-3xl"
                >
                  ‹
                </button>
              )}

              {index < gallery.length - 1 && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setIndex(index + 1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-4 py-2 text-3xl"
                >
                  ›
                </button>
              )}
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-5 mt-8">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-20 h-24 border ${i === index ? 'border-black' : 'border-gray-200'
                    }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* ================= CONTENT COLUMN ================= */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-4xl md:text-5xl tracking-[0.08em] leading-tight">

              {product.name}
            </h1>

            <p className="mt-8 text-gray-500 max-w-sm leading-relaxed">{product.tagline}</p>

            {product.price && (
              <p className="mt-10 text-2xl font-medium">{product.price}</p>
            )}

            {product.description && (
              <p className="mt-10 text-gray-600 leading-loose max-w-sm">

                {product.description}
              </p>
            )}

            {/* DETAILS */}
            {product.details && (
              <div className="mt-14">
                <div className="flex gap-8 border-b text-sm tracking-widest uppercase">
                  {(['fabric', 'zari', 'border', 'care'] as const).map(
                    tab =>
                      product.details?.[tab] && (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-3 ${activeTab === tab
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
                  className="mt-6 text-gray-600 max-w-md"
                >
                  {product.details[activeTab]}
                </motion.div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-20 flex flex-col gap-8">
             <a
  href={`https://wa.me/919999999999?text=${whatsappMessage}`}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white px-10 py-4 tracking-[0.25em] text-sm hover:bg-neutral-900 transition"
>
  ORDER VIA WHATSAPP
</a>

              <Link
                href="/products"
                className="text-xs tracking-[0.3em] text-gray-500 hover:text-black transition"
              >
                ← BACK TO COLLECTIONS
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

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

      {/* ================= RELATED PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-serif mb-14 text-center">
          Related Products
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${relatedIndex * (isMobile ? 280 : 336)
                  }px)`,
              }}
            >
              {relatedProducts.map(rp => (
                <div key={rp.slug} className="flex-shrink-0 w-64 md:w-80">
                  <Link href={`/products/${rp.slug}`}>
                    <div className="relative h-80 bg-[#faf7f2] mb-4 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-cover hover:scale-105 transition"
                      />
                    </div>
                    <h3 className="font-serif text-lg">{rp.name}</h3>
                    <p className="text-gray-600 text-sm">{rp.tagline}</p>
                    {rp.price && (
                      <p className="mt-2 font-medium">{rp.price}</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {relatedIndex > 0 && (
            <button
              onClick={prevRelated}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl"
            >
              ‹
            </button>
          )}

          {relatedIndex < relatedProducts.length - 1 && (
            <button
              onClick={nextRelated}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 text-2xl"
            >
              ›
            </button>
          )}
        </div>
      </section>
    </>
  );
}
