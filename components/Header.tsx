'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
  import { useTranslations } from '../hooks/useTranslations'

export default function Header() {
  const { lang, setLang } = useLanguage()
  const t = useTranslations()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  return (
    <header className="border-b border-[#e6dfd4] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

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
          <Link href="/" className="hover:opacity-70">{t.navigation.home}</Link>
          <Link href="/products" className="hover:opacity-70">{t.navigation.collection}</Link>
          <Link href="/about" className="hover:opacity-70">{t.navigation.heritage}</Link>
          <Link href="/contact" className="hover:opacity-70">{t.navigation.contact}</Link>
          
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="text-sm border px-4 py-2 hover:opacity-70 flex items-center gap-2"
            >
              Language
              <span className={`transform transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {isLangDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border shadow-lg rounded min-w-[120px] z-50">
                <button
                  onClick={() => {
                    setLang('en')
                    setIsLangDropdownOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                    lang === 'en' ? 'font-semibold bg-gray-100' : ''
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLang('ta')
                    setIsLangDropdownOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                    lang === 'ta' ? 'font-semibold bg-gray-100' : ''
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">
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
            <Link href="/" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>{t.navigation.home}</Link>
            <Link href="/products" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>{t.navigation.collection}</Link>
            <Link href="/about" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>{t.navigation.heritage}</Link>
            <Link href="/contact" className="hover:opacity-70" onClick={() => setIsMenuOpen(false)}>{t.navigation.contact}</Link>
            
            {/* Language Dropdown in Mobile Menu */}
            <div className="mt-2">
              <span className="text-sm font-medium">Language</span>
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-2 text-sm border rounded ${
                    lang === 'en' ? 'bg-black text-white border-black' : 'bg-white border-gray-300'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('ta')}
                  className={`px-3 py-2 text-sm border rounded ${
                    lang === 'ta' ? 'bg-black text-white border-black' : 'bg-white border-gray-300'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {(isMenuOpen || isLangDropdownOpen) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setIsMenuOpen(false)
            setIsLangDropdownOpen(false)
          }}
        ></div>
      )}
    </header>
  )
}
