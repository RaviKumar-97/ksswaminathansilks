'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import en from '../messages/en.json'
import ta from '../messages/ta.json'

type Lang = 'en' | 'ta'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const t = lang === 'en' ? en : ta

  return (
    <main className="w-full font-serif text-[#2b2b2b]">

      {/* ================= LANGUAGE SWITCH ================= */}
      <div className="fixed top-6 right-6 z-50 text-sm tracking-widest bg-white px-4 py-2 border">
        <button
          onClick={() => setLang('en')}
          className={lang === 'en' ? 'font-semibold underline' : ''}
        >
          EN
        </button>
        {' | '}
        <button
          onClick={() => setLang('ta')}
          className={lang === 'ta' ? 'font-semibold underline' : ''}
        >
          தமிழ்
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[#faf7f2]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <p className="tracking-[0.35em] text-sm text-[#8b6f47] mb-6">
            {t.brand.name}
          </p>

          <h1 className="text-4xl md:text-5xl leading-snug">
            {t.brand.tagline}
          </h1>

          {/* <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-block mt-14 px-12 py-4 border border-[#8b6f47] tracking-wide hover:bg-[#8b6f47] hover:text-white transition"
          >
            {t.buttons.enquire}
          </a> */}
          <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/products"
              className="px-12 py-4 border border-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition"
            >
              View Collection
            </a>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="px-12 py-4 border border-[#8b6f47]"
            >
              {t.buttons.enquire}
            </a>
          </div>

        </motion.div>
      </section>

      {/* ================= HERITAGE ================= */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-3xl mb-10 text-[#8b6f47]">
            {t.sections.heritageTitle}
          </h2>

          <p className="text-lg leading-relaxed">
            {t.sections.heritageText}
          </p>
        </motion.div>
      </section>

      {/* ================= COLLECTIONS ================= */}
      <section className="py-32 px-6 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-3xl text-center mb-20 text-[#8b6f47]">
            {t.sections.collectionsTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {t.sections.collections.map((item: string, index: number) => (
              <div
                key={index}
                className="border p-12 text-center hover:shadow-xl transition"
              >
                <p className="text-xl">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-3xl text-center mb-20 text-[#8b6f47]">
            {t.sections.whyTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-16 text-center">
            {t.sections.why.map(
              (
                item: { title: string; text: string },
                index: number
              ) => (
                <div key={index}>
                  <p className="text-xl mb-4">{item.title}</p>
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center bg-[#faf7f2] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-3xl mb-10">
            {t.sections.ctaTitle}
          </h2>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="inline-block px-14 py-4 border border-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition"
          >
            {t.sections.ctaButton}
          </a>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {t.brand.name}. All rights reserved.
      </footer>

    </main>
  )
}
