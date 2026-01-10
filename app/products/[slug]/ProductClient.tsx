'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../../../src/data/products';
import { useState } from 'react';


export default function ProductClient({ product }: {
    product: Product;
}) {
    const gallery = product.images ?? [product.image];

    const [activeImage, setActiveImage] = useState(gallery[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* IMAGE */}


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* IMAGE GALLERY */}
                    <div className="grid grid-cols-1 md:grid-cols-[90px_1fr] gap-6 md:gap-10">

                        {/* THUMBNAILS */}
                        <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible">
                            {gallery.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative h-20 w-20 flex-shrink-0 overflow-hidden border transition
          ${activeImage === img ? 'border-black' : 'border-gray-200'}
        `}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* MAIN IMAGE */}
                        <motion.div
                            key={activeImage}
                            initial={{ opacity: 0.8, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => {
                                setCurrentIndex(gallery.indexOf(activeImage));
                                setIsOpen(true);
                            }}
                            className="relative  h-[420px] sm:h-[520px] md:h-[600px] bg-[#faf7f2] overflow-hidden cursor-zoom-in group order-1 md:order-2"
                        >
                            <Image
                                src={activeImage}
                                alt={product.name}
                                fill
                                priority
                                className="
        object-cover 
        transition-transform 
        duration-700 
        md:group-hover:scale-110
      "
                            />

                            {/* SOFT LUXURY OVERLAY */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 md:group-hover:opacity-100 transition" />
                        </motion.div>

                    </div>



                </motion.div>



                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
                        {product.name}
                    </h1>

                    <p className="mt-3 text-gray-600 leading-relaxed">
                        {product.tagline}
                    </p>

                    {product.price && (
                        <p className="mt-6 text-2xl font-medium leading-relaxed">
                            {product.price}
                        </p>
                    )}

                    {product.description && (
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                    )}

                    {/* CTA */}
                    {/* <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href={`https://wa.me/919999999999?text=Hi, I am interested in ${product.name}`}
              target="_blank"
              className="bg-black text-white px-8 py-4 tracking-widest hover:bg-gray-800 transition"
            >
              ORDER ON WHATSAPP
            </a>

            <Link
              href="/products"
              className="border border-black px-8 py-4 tracking-widest hover:bg-black hover:text-white transition"
            >
              BACK TO COLLECTIONS
            </Link>
          </div> */}

                    <div className="mt-12 flex gap-6 flex-wrap">
                        <a
                            href={`https://wa.me/919999999999?text=Hi, I am interested in ${product.name}`}
                            target="_blank"
                            className="bg-black text-white px-10 py-4 tracking-[0.2em] text-sm hover:bg-gray-800 transition"
                        >
                            ORDER VIA WHATSAPP
                        </a>

                        <Link
                            href="/products"
                            className="px-10 py-4 border border-black tracking-[0.2em] text-sm hover:bg-black hover:text-white transition"
                        >
                            BACK TO COLLECTIONS
                        </Link>
                    </div>

                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    >
                        {/* CLOSE */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white text-3xl"
                        >
                            ✕
                        </button>

                        {/* PREVIOUS */}
                        {currentIndex > 0 && (
                            <button
                                onClick={() => setCurrentIndex((i) => i - 1)}
                                className="absolute left-6 text-white text-4xl"
                            >
                                ‹
                            </button>
                        )}

                        {/* NEXT */}
                        {currentIndex < gallery.length - 1 && (
                            <button
                                onClick={() => setCurrentIndex((i) => i + 1)}
                                className="absolute right-6 text-white text-4xl"
                            >
                                ›
                            </button>
                        )}

                        {/* IMAGE */}
                        <div className="relative w-[90vw] h-[85vh]">
                            <Image
                                src={gallery[currentIndex]}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
