'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 border-b border-[#e6dfd4] bg-white z-40">
      <div className="max-w-[90rem] mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="KS Swaminathan Silks"
            width={100}
            height={20}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <Link href="/" className="hover:opacity-70">Home</Link>
          <Link href="/products" className="hover:opacity-70">Collection</Link>
          <Link href="/about" className="hover:opacity-70">Our Heritage</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

      </div>

      {/* Mobile Navigation Slider */}
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
          <nav className="flex flex-col gap-6 mt-12 text-sm tracking-wide">
            <Link href="/" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/products" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Collection</Link>
            <Link href="/about" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Our Heritage</Link>
            <Link href="/contact" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}
