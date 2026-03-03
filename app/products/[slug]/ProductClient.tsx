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
  const [isClient, setIsClient] = useState(false);

  const [relatedIndex, setRelatedIndex] = useState(() => {
    // Start at a position that shows clean 4-product groups on desktop
    return Math.floor(relatedProducts.length / 4) * 4;
  });
  const relatedCarouselRef = useRef(null);

  const tripleRelatedProducts = [...relatedProducts, ...relatedProducts, ...relatedProducts];

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextRelated();
    }
    if (touchStart - touchEnd < -50) {
      prevRelated();
    }
  };

  const [whatsappMessage, setWhatsappMessage] = useState('');

  /* ---------- SAFE MOBILE CHECK ---------- */
  useEffect(() => {
    setIsClient(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  /* ---------- WHATSAPP MESSAGE ---------- */
  useEffect(() => {
    const message = encodeURIComponent(
      `Hello,

I am interested in the following saree:

• Name: ${product.name}
${product.price ? `• Price: ${product.price}` : ''}
${product.tagline ? `• Category: ${product.tagline}` : ''}

Product Link:
${window.location.href}

Kindly share availability, blouse details, and delivery timeline.

Thank you.`
    );
    setWhatsappMessage(message);
  }, [product.name, product.price, product.tagline]);

  const nextRelated = () => {
    setRelatedIndex(prev => prev + 1);
  };

  const prevRelated = () => {
    setRelatedIndex(prev => prev - 1);
  };

  useEffect(() => {
    const carousel = relatedCarouselRef.current;
    if (!carousel) return;

    const handleTransitionEnd = () => {
      if (relatedIndex >= relatedProducts.length * 2) {
        carousel.style.transition = 'none';
        setRelatedIndex(relatedProducts.length);
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 10);
      } else if (relatedIndex <= 0) {
        carousel.style.transition = 'none';
        setRelatedIndex(relatedProducts.length);
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-in-out';
        }, 10);
      }
    };

    carousel.addEventListener('transitionend', handleTransitionEnd);
    return () => carousel.removeEventListener('transitionend', handleTransitionEnd);
  }, [relatedIndex]);

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

  /* ---------- MOBILE ZOOM ---------- */
  const [mobileZoom, setMobileZoom] = useState({ scale: 1, x: 0, y: 0 });
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = (e: React.TouchEvent) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      e.preventDefault();
      if (mobileZoom.scale === 1) {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
          const x = ((e.touches[0]?.clientX || e.changedTouches[0].clientX) - rect.left) / rect.width;
          const y = ((e.touches[0]?.clientY || e.changedTouches[0].clientY) - rect.top) / rect.height;
          setMobileZoom({ scale: 2.5, x: x * 100, y: y * 100 });
        }
      } else {
        setMobileZoom({ scale: 1, x: 0, y: 0 });
      }
    }
    setLastTap(now);
  };


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
              onTouchStart={e => {
                handleDoubleTap(e);
                if (mobileZoom.scale === 1) setTouchStartX(e.touches[0].clientX);
              }}
              onTouchEnd={e => {
                if (mobileZoom.scale > 1 || touchStartX === null) return;
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
                  style={isMobile && mobileZoom.scale > 1 ? {
                    transform: `scale(${mobileZoom.scale})`,
                    transformOrigin: `${mobileZoom.x}% ${mobileZoom.y}%`,
                    transition: 'transform 0.3s ease'
                  } : {}}
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

              {index > 0 && mobileZoom.scale === 1 && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setIndex(index - 1);
                  }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-white shadow-lg z-10"
                >
                  ‹
                </button>
              )}

              {index < gallery.length - 1 && mobileZoom.scale === 1 && (
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setIndex(index + 1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:bg-white shadow-lg z-10"

                >
                  ›
                </button>
              )}

              {isMobile && mobileZoom.scale > 1 && (
                <button
                  onClick={() => setMobileZoom({ scale: 1, x: 0, y: 0 })}
                  className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm z-10"
                >
                  Reset Zoom
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

            {product.originalPrice && product.discountedPrice ? (
              <div className="mt-10 flex items-center gap-3">
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                <span className="text-2xl font-medium text-red-600">{product.discountedPrice}</span>
              </div>
            ) : product.price && (
              <p className="mt-10 text-2xl font-medium">{product.price}</p>
            )}

            {product.description && (
              <p className="mt-10 text-gray-600 leading-loose max-w-sm">
                {product.description}
              </p>
            )}

            {/* STOCK STATUS */}
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div className="absolute inset-0 w-5 h-5 bg-green-600 rounded-full animate-ping opacity-75"></div>
                </div>
                <p className="text-green-600 font-medium">In stock</p>
              </div>
              <p className="text-sm text-amber-800 mt-1">Only <span className="text-red-600">1 item(s)</span> left in stock</p>
            </div>

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
  href={`https://wa.me/919944541985?text=${whatsappMessage}`}
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
      <section className="max-w-[90rem] mx-auto px-6 md:px-10 pb-24">
        <h2 className="text-3xl font-serif mb-14 text-center">
          Related Products
        </h2>

        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden ">
            <div
              ref={relatedCarouselRef}
              className="flex gap-6"
              style={{
                transform: `translateX(-${relatedIndex * (isClient && isMobile ? 280 : 336)}px)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {tripleRelatedProducts.map((rp, idx) => (
                <div key={`${rp.slug}-${idx}`} className="flex-shrink-0 w-64 md:w-80">
                  <Link href={`/products/${rp.slug}`}>
                    <div className="relative h-64 md:h-80 bg-[#faf7f2] mb-4 overflow-hidden">
                      <Image
                        src={rp.image}
                        alt={rp.name}
                        fill
                        className="object-cover hover:scale-105 transition"
                      />
                    </div>
                    <h3 className="font-serif text-base md:text-lg">{rp.name}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{rp.tagline}</p>
                    {rp.originalPrice && rp.discountedPrice ? (
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs md:text-sm text-gray-400 line-through">{rp.originalPrice}</span>
                        <span className="font-medium text-sm md:text-base text-red-600">{rp.discountedPrice}</span>
                      </div>
                    ) : rp.price && (
                      <p className="mt-2 font-medium text-sm md:text-base">{rp.price}</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevRelated}
            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 w-12 h-12 rounded-full items-center justify-center text-2xl hover:bg-white shadow-lg z-10"
          >
            ‹
          </button>
          <button
            onClick={nextRelated}
            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 w-12 h-12 rounded-full items-center justify-center text-2xl hover:bg-white shadow-lg z-10"
          >
            ›
          </button>
        </div>
      </section>
    </>
  );
}
