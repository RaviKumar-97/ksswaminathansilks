'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif mb-4">KS Swaminathan Silks</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Authentic Kanchipuram silk sarees crafted with heritage, tradition, and timeless elegance for generations.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>123 Silk Street, Kanchipuram, Tamil Nadu 631502</p>
              <p>+91 99999 99999</p>
              <p>info@ks.swaminathansilks.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition">Collection</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">Our Heritage</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link href="/return-policy" className="text-gray-300 hover:text-white transition">Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="text-gray-300 hover:text-white transition">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} KS Swaminathan Silks. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://wa.me/919944541985" target="_blank" className="hover:text-white transition">
              WhatsApp
            </a>
            <span>|</span>
            <a href="mailto:info@ksswaminathansilks.com" className="hover:text-white transition">
              info@ks.swaminathansilks.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}