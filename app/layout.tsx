import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'KS Swaminathan Silks | Luxury Heritage Silk Sarees',
    template: '%s | KS Swaminathan Silks'
  },
  description:
    'KS Swaminathan Silks offers authentic Kanchipuram and heritage silk sarees crafted with tradition, elegance, and timeless quality.',
  keywords: [
    'Kanchipuram silk sarees',
    'heritage silk sarees',
    'pure silk sarees',
    'wedding silk sarees',
    'KS Swaminathan Silks'
  ],
  openGraph: {
    title: 'KS Swaminathan Silks',
    description:
      'Discover heritage silk sarees crafted with timeless elegance.',
    type: 'website',
    locale: 'en_IN'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
