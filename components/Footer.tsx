'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">Zari Ragam</h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Manufacturers of original Kanchipuram silk sarees, crafted with tradition and heritage.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/90">
              <p>info@zariragam.in</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-white/90 hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="text-white/90 hover:text-white transition">Collection</Link></li>
              <li><Link href="/about" className="text-white/90 hover:text-white transition">Our Heritage</Link></li>
              <li><Link href="/contact" className="text-white/90 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/90">
          <p>© {new Date().getFullYear()} Zari Ragam. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://wa.me/919944541985"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Zari Ragam on WhatsApp (opens in new tab)"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="mailto:info@zariragam.com"
              aria-label="Send email to Zari Ragam"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
