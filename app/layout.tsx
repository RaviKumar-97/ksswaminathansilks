import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'
import SEODebug from '../components/SEODebug'
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
    default: 'KS Swaminathan Silks | Premium Kanchipuram Silk Sarees Online',
    template: '%s | KS Swaminathan Silks'
  },
  description: 'Buy authentic Kanchipuram silk sarees online at KS Swaminathan Silks. Premium quality wedding silk sarees, traditional designs, pure silk with gold zari work. Free shipping across India.',
  keywords: [
    'Kanchipuram silk sarees online',
    'buy silk sarees online',
    'wedding silk sarees',
    'pure silk sarees',
    'traditional silk sarees',
    'gold zari sarees',
    'bridal silk sarees',
    'KS Swaminathan Silks',
    'silk sarees India',
    'authentic Kanchipuram sarees'
  ],
  authors: [{ name: 'KS Swaminathan Silks' }],
  creator: 'KS Swaminathan Silks',
  publisher: 'KS Swaminathan Silks',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ksswaminathansilks.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KS Swaminathan Silks | Premium Kanchipuram Silk Sarees',
    description: 'Discover authentic Kanchipuram silk sarees with traditional craftsmanship. Premium quality wedding and bridal silk sarees online.',
    url: 'https://ksswaminathansilks.com',
    siteName: 'KS Swaminathan Silks',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KS Swaminathan Silks - Premium Kanchipuram Silk Sarees',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KS Swaminathan Silks | Premium Kanchipuram Silk Sarees',
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
        <link rel="canonical" href="https://ksswaminathansilks.com" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Tamil Nadu, India" />
        <meta name="geo.position" content="11.1271;78.6569" />
        <meta name="ICBM" content="11.1271, 78.6569" />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <StructuredData />
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
        <SEODebug />
      </body>
    </html>
  )
}
