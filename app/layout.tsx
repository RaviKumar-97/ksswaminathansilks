import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'
import WhatsAppFloat from '../components/WhatsAppFloat'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Zari Ragam | Premium Kanchipuram Silk Sarees Online',
    template: '%s | Zari Ragam'
  },
  description: 'Buy authentic Kanchipuram silk sarees online at Zari Ragam. Premium quality wedding silk sarees, traditional designs, pure silk with gold zari work. Free shipping across India.',
  keywords: [
    'Kanchipuram silk sarees online',
    'buy silk sarees online',
    'wedding silk sarees',
    'pure silk sarees',
    'traditional silk sarees',
    'gold zari sarees',
    'bridal silk sarees',
    'Zari Ragam',
    'silk sarees India',
    'authentic Kanchipuram sarees'
  ],
  authors: [{ name: 'Zari Ragam' }],
  creator: 'Zari Ragam',
  publisher: 'Zari Ragam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zariragam.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zari Ragam | Premium Kanchipuram Silk Sarees',
    description: 'Discover authentic Kanchipuram silk sarees with traditional craftsmanship. Premium quality wedding and bridal silk sarees online.',
    url: 'https://zariragam.com',
    siteName: 'Zari Ragam',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zari Ragam - Premium Kanchipuram Silk Sarees',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zari Ragam | Premium Kanchipuram Silk Sarees',
    description: 'Authentic Kanchipuram silk sarees with traditional craftsmanship',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://zariragam.com" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tamil Nadu, India" />
        <meta name="geo.position" content="11.1271;78.6569" />
        <meta name="ICBM" content="11.1271, 78.6569" />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
