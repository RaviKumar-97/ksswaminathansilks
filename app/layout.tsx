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
    default: 'ZARIRAGAM | Premium Kanchipuram Handloom Silk Sarees',
    template: '%s | ZARIRAGAM',
  },
  description:
    'ZARIRAGAM offers authentic Kanchipuram handloom silk sarees, pure silk sarees, bridal silk sarees, and customized silk sarees for weddings, festive occasions, temple wear, and traditional celebrations.',
  keywords: [
    'ZARIRAGAM',
    'Kanchipuram handloom silk sarees',
    'pure silk sarees',
    'bridal silk sarees',
    'traditional silk sarees',
    'handwoven silk sarees',
    'Tamil Nadu silk sarees',
    'customized silk sarees',
    'wedding silk sarees',
  ],
  metadataBase: new URL('https://zariragam.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ZARIRAGAM | Premium Kanchipuram Handloom Silk Sarees',
    description:
      'Authentic handwoven Kanchipuram silk sarees crafted with traditional craftsmanship.',
    url: 'https://zariragam.vercel.app',
    siteName: 'ZARIRAGAM',
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'ZARIRAGAM Premium Kanchipuram Handloom Silk Sarees',
    //   },
    // ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZARIRAGAM | Premium Kanchipuram Handloom Silk Sarees',
    description:
      'Authentic Kanchipuram handloom silk sarees and bridal silk sarees from ZARIRAGAM.',
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'aSQSxGTSJR6La198OjcA8Uj--cAfb-ubm5yUyxGeI4Q',
  },
};

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
      <body className={`${playfair.variable} ${inter.variable} overflow-x-hidden`}>
        <StructuredData />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
