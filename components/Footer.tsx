'use client'

import Link from 'next/link'
import { useTranslations } from '../hooks/useTranslations'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif mb-4">{t.brand.name}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <p>{t.footer.address}</p>
              <p>{t.footer.phone}</p>
              <p>{t.footer.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">{t.navigation.home}</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition">{t.navigation.collection}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">{t.navigation.heritage}</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">{t.navigation.contact}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition">{t.footer.privacyPolicy}</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-300 hover:text-white transition">{t.footer.termsConditions}</Link></li>
              <li><Link href="/return-policy" className="text-gray-300 hover:text-white transition">{t.footer.returnPolicy}</Link></li>
              <li><Link href="/shipping-policy" className="text-gray-300 hover:text-white transition">{t.footer.shippingPolicy}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {t.brand.name}. {t.footer.allRightsReserved}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://wa.me/919944541985" target="_blank" className="hover:text-white transition">
              {t.footer.whatsapp}
            </a>
            <span>|</span>
            <a href="mailto:info@ksswaminathansilks.com" className="hover:text-white transition">
              {t.footer.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}