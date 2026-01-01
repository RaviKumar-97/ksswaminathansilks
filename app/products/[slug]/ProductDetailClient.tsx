'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Breadcrumb from '../../../components/Breadcrumb'
import en from '../../../messages/en.json'
import ta from '../../../messages/ta.json'

type Lang = 'en' | 'ta'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function ProductDetailClient({ slug }: { slug: string }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = lang === 'en' ? en : ta

  const productMap: Record<string, { name: string; description: string }> = {
    'kanchipuram-silk': {
      name:
        lang === 'en'
          ? 'Classic Kanchipuram Silk'
          : 'பாரம்பரிய காஞ்சிபுரம் பட்டு',
      description:
        lang === 'en'
          ? 'A pure silk saree woven with traditional zari and timeless elegance.'
          : 'பாரம்பரிய ஜரியுடன் நெசவான தூய பட்டுப்புடவை.',
    },
  }

  const product = productMap[slug]

  if (!product) {
    return <p className="p-10">Product not found</p>
  }

  return (
    <main className="font-serif text-[#2b2b2b]">
      {/* Language Switch */}
      <div className="fixed top-6 right-6 z-50 bg-white border px-4 py-2 text-sm">
        <button onClick={() => setLang('en')}>EN</button> |{' '}
        <button onClick={() => setLang('ta')}>தமிழ்</button>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Collection', href: '/products' },
            { label: product.name },
          ]}
        />
      </div>

      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div className="h-96 bg-[#f1ece4] flex items-center justify-center text-gray-500">
            Image Coming Soon
          </div>

          <div>
            <h1 className="text-3xl mb-6">{product.name}</h1>

            <p className="leading-relaxed mb-10">
              {product.description}
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="inline-block px-8 py-4 border border-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition"
            >
              {t.products.enquire}
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
