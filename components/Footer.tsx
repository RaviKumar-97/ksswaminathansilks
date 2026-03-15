'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">Zari Ragam</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Manufacturers of original Kanchipuram silk sarees, crafted with tradition and heritage.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              {/* <p>123 Silk Street, Kanchipuram, Tamil Nadu 631502</p>
              <p>+91 99445 41985</p> */}
              <p>info@zariragam.in</p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="text-white/80 hover:text-white transition">Collection</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition">Our Heritage</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="font-serif text-lg mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="text-white/80 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-white/80 hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/return-policy" className="text-white/80 hover:text-white transition">Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="text-white/80 hover:text-white transition">Shipping Policy</Link></li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Zari Ragam. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://wa.me/919944541985" target="_blank" className="hover:text-white transition">
              WhatsApp
            </a>
            <span>|</span>
            <a href="mailto:info@zariragam.com" className="hover:text-white transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}