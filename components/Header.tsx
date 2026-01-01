'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [lang, setLang] = useState<'en' | 'ta'>('en')

  return (
    <header className="border-b border-[#e6dfd4] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="KS Swaminathan Silks"
            width={140}
            height={60}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <Link href="/" className="hover:opacity-70">Home</Link>
          <Link href="/products" className="hover:opacity-70">Collection</Link>
          <Link href="/about" className="hover:opacity-70">Our Heritage</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
        </nav>

        {/* Language Switch */}
        <div className="text-sm border px-4 py-2">
          <button
            onClick={() => setLang('en')}
            className={lang === 'en' ? 'font-semibold' : ''}
          >
            EN
          </button>
          <span className="mx-2">|</span>
          <button
            onClick={() => setLang('ta')}
            className={lang === 'ta' ? 'font-semibold' : ''}
          >
            தமிழ்
          </button>
        </div>

      </div>
    </header>
  )
}
