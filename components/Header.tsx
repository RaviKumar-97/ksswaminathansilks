'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 border-b border-gray-200 bg-white z-40">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center relative">

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden absolute right-6 flex flex-col gap-1 p-2 min-w-[44px] min-h-[44px] items-center justify-center"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        <Link href="/" className="font-serif text-2xl md:text-3xl text-primary tracking-wide">
          Zari Ragam
        </Link>
      </div>

      <nav aria-label="Main navigation" className="hidden md:flex items-center justify-center gap-10 text-sm tracking-wider py-3 border-t border-gray-100">
        <Link
          href="/"
          className={`hover:text-primary transition-colors pb-1 ${
            isActive('/') ? 'text-primary border-b-2 border-primary font-medium' : ''
          }`}
        >
          Home
        </Link>
        <Link
          href="/products"
          className={`hover:text-primary transition-colors pb-1 ${
            isActive('/products') ? 'text-primary border-b-2 border-primary font-medium' : ''
          }`}
        >
          Collection
        </Link>
        <Link
          href="/about"
          className={`hover:text-primary transition-colors pb-1 ${
            isActive('/about') ? 'text-primary border-b-2 border-primary font-medium' : ''
          }`}
        >
          Our Heritage
        </Link>
        <Link
          href="/contact"
          className={`hover:text-primary transition-colors pb-1 ${
            isActive('/contact') ? 'text-primary border-b-2 border-primary font-medium' : ''
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[#ffffff] shadow-lg 
  transform transition-transform duration-300 z-50 
  rounded-l-[80px] 
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="min-h-[95%] m-3 border border-[#c8a995] rounded-l-[70px] relative p-6">

          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
            className="absolute top-4 right-4 text-2xl min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            ×
          </button>

          <div className="mt-10 mb-8">
            <Link
              href="/"
              className="font-serif text-2xl text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Zari Ragam
            </Link>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col divide-y text-sm tracking-wider">
            <Link
              href="/"
              className={`py-4 hover:text-primary ${isActive('/') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`py-4 hover:text-primary ${isActive('/products') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </Link>
            <Link
              href="/about"
              className={`py-4 hover:text-primary ${isActive('/about') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Heritage
            </Link>
            <Link
              href="/contact"
              className={`py-4 hover:text-primary ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
