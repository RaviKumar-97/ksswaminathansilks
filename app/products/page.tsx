'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import en from '../../messages/en.json'
import ta from '../../messages/ta.json'
import Breadcrumb from '../../components/Breadcrumb'

type Lang = 'en' | 'ta'

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
}

export default function ProductsPage() {
    const [lang, setLang] = useState<Lang>('en')
    const t = lang === 'en' ? en : ta

    return (
        <main className="w-full font-serif text-[#2b2b2b]">
            <div className="max-w-6xl mx-auto px-6 pt-10">
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Collection' }
                    ]}
                />
            </div>


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

            {/* ================= HEADER ================= */}
            <section className="py-32 px-6 text-center bg-[#faf7f2]">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl mb-6">
                        {t.products.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {t.products.subtitle}
                    </p>
                </motion.div>
            </section>

            {/* ================= PRODUCT GRID ================= */}
            <section className="py-32 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-16">
                    {t.products.items.map(
                        (
                            item: { name: string; description: string },
                            index: number
                        ) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                transition={{ duration: 0.8 }}
                                className="border p-10 text-center hover:shadow-xl transition"
                            >
                                {/* Image Placeholder */}
                                <div className="h-56 bg-[#f1ece4] mb-6 flex items-center justify-center text-sm text-gray-500">
                                    Image Coming Soon
                                </div>

                                <h2 className="text-xl mb-4">
                                    {item.name}
                                </h2>

                                <p className="text-sm text-gray-600 mb-6">
                                    {item.description}
                                </p>

                                {/* <a
                                    href="https://wa.me/91XXXXXXXXXX"
                                    target="_blank"
                                    className="inline-block px-6 py-3 border border-[#8b6f47] hover:bg-[#8b6f47] hover:text-white transition"
                                >
                                    {t.products.enquire}
                                </a> */}
                                <a
  href={`/products/kanchipuram-silk`}
  className="inline-block px-6 py-3 border border-[#8b6f47]"
>
  View Details
</a>

                            </motion.div>
                        )
                    )}
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="py-12 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} {t.brand.name}
            </footer>

        </main>
    )
}
