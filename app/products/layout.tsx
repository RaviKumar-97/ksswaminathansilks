import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silk Saree Collection - Premium Kanchipuram Sarees Online',
  description: 'Browse our exclusive collection of authentic Kanchipuram silk sarees. Premium quality wedding sarees, bridal silk sarees with traditional designs and gold zari work. Shop online with free shipping.',
  keywords: [
    'silk saree collection',
    'Kanchipuram sarees online',
    'wedding silk sarees',
    'bridal sarees',
    'pure silk sarees',
    'traditional sarees',
    'gold zari sarees',
    'buy silk sarees online'
  ],
  openGraph: {
    title: 'Silk Saree Collection | KS Swaminathan Silks',
    description: 'Discover our premium collection of authentic Kanchipuram silk sarees with traditional craftsmanship.',
    images: ['/products/collection-banner.jpg'],
  },
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}