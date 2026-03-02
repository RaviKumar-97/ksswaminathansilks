'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 border-b border-gray-200 bg-white z-40">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center relative">

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute left-6 flex flex-col gap-1 p-2"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        <Link href="/" className="font-serif text-2xl md:text-3xl text-primary tracking-wide">
          Zari Ragam
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider absolute right-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/products" className="hover:text-primary transition-colors">Collection</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Our Heritage</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>

      </div>

      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-2xl"
          >
            ×
          </button>
          <div className="mt-8 mb-8">
            <Link href="/" className="font-serif text-2xl text-primary" onClick={() => setIsMenuOpen(false)}>
              Zari Ragam
            </Link>
          </div>
          <nav className="flex flex-col gap-6 text-sm tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Collection</Link>
            <Link href="/about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Our Heritage</Link>
            <Link href="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}
