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
  const lastTapRef = useRef<number>(0);
  const [fsSwipeStartX, setFsSwipeStartX] = useState<number | null>(null);

  /* ---------- PINCH TO ZOOM ---------- */
  const [pinchScale, setPinchScale] = useState(1);
  const [pinchOrigin, setPinchOrigin] = useState({ x: 50, y: 50 });
  const pinchStartDistRef = useRef<number | null>(null);
  const pinchStartScaleRef = useRef(1);
  const fsImageRef = useRef<HTMLDivElement>(null);

  const getPinchDist = (touches: React.TouchList) =>
    Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );

  const handleFsTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchStartDistRef.current = getPinchDist(e.touches);
      pinchStartScaleRef.current = pinchScale;
    } else {
      setFsSwipeStartX(e.touches[0].clientX);
    }
  };

  const handleFsTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStartDistRef.current !== null) {
      const rect = fsImageRef.current?.getBoundingClientRect();
      const newScale = Math.min(4, Math.max(1,
        pinchStartScaleRef.current * (getPinchDist(e.touches) / pinchStartDistRef.current)
      ));
      setPinchScale(newScale);
      if (rect) {
        const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        setPinchOrigin({
          x: ((midX - rect.left) / rect.width) * 100,
          y: ((midY - rect.top) / rect.height) * 100,
        });
      }
    }
  };

  const handleFsTouchEnd = (e: React.TouchEvent) => {
    pinchStartDistRef.current = null;
    if (pinchScale <= 1.05) {
      setPinchScale(1);
      if (fsSwipeStartX !== null && e.changedTouches.length > 0) {
        const diff = fsSwipeStartX - e.changedTouches[0].clientX;
        if (diff > 50 && index < gallery.length - 1) setIndex(i => i + 1);
        if (diff < -50 && index > 0) setIndex(i => i - 1);
      }
    }
    setFsSwipeStartX(null);
  };

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

Product Link:
${window.location.href}

Kindly share availability, blouse details, and delivery timeline.

Thank you.`
    );
    setWhatsappMessage(message);
  }, [product.name, product.price]);

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


  return (
    <>
      {/* ================= PRODUCT ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">

          {/* ================= IMAGE COLUMN ================= */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoom(z => ({ ...z, show: false }))}
              onClick={() => { if (!isMobile) setIsOpen(true); }}
              onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={e => {
                if (touchStartX === null) return;
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                  if (diff > 50 && index < gallery.length - 1) setIndex(index + 1);
                  if (diff < -50 && index > 0) setIndex(index - 1);
                } else {
                  // double tap detection
                  const now = Date.now();
                  if (now - lastTapRef.current < 300) setIsOpen(true);
                  lastTapRef.current = now;
                }
                setTouchStartX(null);
              }}
              className="relative aspect-[3/4] bg-[#faf7f2] overflow-hidden cursor-zoom-in shadow-luxury hover:shadow-luxury-hover transition-shadow duration-500"
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
                  onClick={e => { e.stopPropagation(); setIndex(index - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 w-[32px] h-[32px] rounded-full flex items-center justify-center text-2xl hover:bg-white shadow-lg z-10"
                >
                  ‹
                </button>
              )}

              {index < gallery.length - 1 && (
                <button
                  onClick={e => { e.stopPropagation(); setIndex(index + 1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 w-[32px] h-[32px] rounded-full flex items-center justify-center text-2xl hover:bg-white shadow-lg z-10"

                >
                  ›
                </button>
              )}
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 mt-8">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`relative w-20 h-24 border-2 transition-all duration-300 ${
                    i === index 
                      ? 'border-[#C9A961] shadow-md scale-105' 
                      : 'border-gray-200 hover:border-[#E8DCC4]'
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
            {isMobile && (
              <p className="mt-3 text-center text-xs text-gray-400 tracking-wide">Double tap image to view fullscreen • Swipe to browse</p>
            )}

            {/* AUTHENTICITY BADGES */}
            <div className="mt-10 p-6 bg-white rounded-sm shadow-luxury">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏅</span>
                <div>
                  <p className="font-serif text-sm text-[#2C1810]">Original Handloom saree </p>
                  <p className="text-xs text-gray-500">100% pure Kanchipuram Silk</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏭</span>
                <div>
                  <p className="font-serif text-sm text-[#2C1810]">Woven in Our Looms</p>
                  <p className="text-xs text-gray-500">Direct from Manufacturer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTENT COLUMN ================= */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            {/* Limited Edition Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2C1810] text-white px-4 py-2 text-xs tracking-widest mb-6">
              <span>💎</span>
              <span>LIMITED EDITION</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl tracking-[0.04em] leading-tight text-[#2C1810]">
              {product.name}
            </h1>


            {product.originalPrice && product.discountedPrice ? (
              <div className="mt-8 flex items-baseline gap-4">
                <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
                <span className="text-3xl font-serif text-[#C9A961]">{product.discountedPrice}</span>
              </div>
            ) : product.price && (
              <p className="mt-8 text-3xl font-serif text-[#2C1810]">{product.price}</p>
            )}

            {product.description && (
              <p className="mt-10 text-gray-600 leading-loose max-w-sm">
                {product.description}
              </p>
            )}

            {/* STOCK STATUS */}
            <div className={`mt-8 p-5 border-l-4 ${product.inStock === false ? 'bg-gray-50 border-gray-400' : 'bg-gradient-to-r from-amber-50 to-orange-50 border-[#C9A961]'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className={`w-3 h-3 rounded-full ${product.inStock === false ? 'bg-gray-400' : 'bg-[#C9A961]'}`} />
                  {product.inStock !== false && (
                    <div className="absolute inset-0 w-3 h-3 bg-[#C9A961] rounded-full animate-ping opacity-75" />
                  )}
                </div>
                <p className={`font-medium tracking-wide ${product.inStock === false ? 'text-gray-500' : 'text-[#8B7355]'}`}>
                  {product.inStock === false ? 'Currently Unavailable' : 'Exclusive Availability'}
                </p>
              </div>
              {product.inStock === false ? (
                <p className="text-sm text-gray-500">This saree is <span className="font-serif">out of stock</span> — Contact us to be notified</p>
              ) : (
                <p className="text-sm text-amber-900">Only <span className="font-serif text-[#C9A961]">{product.stock ?? 1} {product.stock === 1 ? 'piece' : 'pieces'}</span> in stock — Reserve yours today</p>
              )}
            </div>

            {/* DETAILS */}
            {product.details && (
              <div className="mt-12">
                <div className="flex gap-8 border-b border-[#E8DCC4] text-xs tracking-[0.2em] uppercase">
                  {(['fabric', 'zari', 'border', 'care'] as const).map(
                    tab =>
                      product.details?.[tab] && (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`pb-4 transition-all duration-300 ${
                            activeTab === tab
                              ? 'border-b-2 border-[#C9A961] text-[#2C1810]'
                              : 'text-gray-400 hover:text-[#8B7355]'
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
            <div className="mt-16 space-y-5">
              {product.inStock === false ? (
                <a
                  href={`https://wa.me/919944541985?text=${encodeURIComponent(`Hello,\n\nI am interested in the following saree and would like to be notified when it is back in stock:\n\n• Name: ${product.name}\n\nProduct Link:\n${typeof window !== 'undefined' ? window.location.href : ''}\n\nThank you.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gray-700 text-white px-12 py-5 tracking-[0.2em] text-sm hover:bg-[#25D366] transition-all duration-300 shadow-luxury transform hover:-translate-y-1"
                >
                  NOTIFY ME WHEN AVAILABLE
                </a>
              ) : (
                <a
                  href={`https://wa.me/919944541985?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#2C1810] text-white px-12 py-5 tracking-[0.2em] text-sm hover:bg-[#C9A961] transition-all duration-300 shadow-luxury hover:shadow-luxury-hover transform hover:-translate-y-1"
                >
                  ORDER VIA WHATSAPP
                </a>
              )}
              
              {/* <p className="text-center text-xs text-gray-500 italic">
                Handcrafted exclusively for you • Ships within 2-3 days
              </p> */}

              <Link
                href="/products"
                className="block text-center text-xs tracking-[0.25em] text-[#8B7355] hover:text-[#2C1810] transition"
              >
                ← EXPLORE MORE COLLECTIONS
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
            onTouchStart={handleFsTouchStart}
            onTouchMove={handleFsTouchMove}
            onTouchEnd={handleFsTouchEnd}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-white hover:bg-white/20 backdrop-blur-sm w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-black text-2xl md:text-3xl transition-all z-50 active:scale-95"
              aria-label="Close fullscreen"
            >
              ✕
            </button>

            {index > 0 && (
              <button
                onClick={() => { setIndex(index - 1); setPinchScale(1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm w-[32px] h-[32px] rounded-full flex items-center justify-center text-black text-3xl hover:bg-white/30 transition z-50 active:scale-95"
              >
                ‹
              </button>
            )}

            {index < gallery.length - 1 && (
              <button
                onClick={() => { setIndex(index + 1); setPinchScale(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm w-[32px] h-[32px] rounded-full flex items-center justify-center text-black text-3xl hover:bg-white/30 transition z-50 active:scale-95"
              >
                ›
              </button>
            )}

            {/* PINCH-ZOOMABLE IMAGE */}
            <div ref={fsImageRef} className="relative w-[90vw] h-[85vh] overflow-hidden">
              <div
                style={{
                  transform: `scale(${pinchScale})`,
                  transformOrigin: `${pinchOrigin.x}% ${pinchOrigin.y}%`,
                  transition: pinchScale === 1 ? 'transform 0.2s ease' : 'none',
                  width: '100%',
                  height: '100%',
                }}
              >
                <Image
                  src={gallery[index]}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* DOT INDICATORS */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIndex(i); setPinchScale(1); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40'
                  }`}
                />
              ))}
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
