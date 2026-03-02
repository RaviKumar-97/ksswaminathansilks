'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Product } from '../src/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <h3 className="font-serif text-lg text-gray-900">
            {product.name}
          </h3>
          
          {product.originalPrice && product.discountedPrice ? (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400 line-through">{product.originalPrice}</span>
              <span className="text-primary font-medium">{product.discountedPrice}</span>
            </div>
          ) : product.price && (
            <p className="text-sm text-gray-600">{product.price}</p>
          )}
          
          <button className="text-xs tracking-widest text-primary border-b border-primary pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            VIEW DETAILS
          </button>
        </div>
      </Link>
    </motion.div>
  );
}
