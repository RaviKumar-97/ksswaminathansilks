export interface Product {
  slug: string
  name: string
  tagline: string
  image: string;        // main image (used in grids)
  images?: string[];    // 👈 gallery images
  price?: string
  description?: string
  featured?: boolean
}

export const allProducts: Product[] = [
  {
    slug: 'kanchipuram-silk-red',
    name: 'Kanchipuram Pure Silk – Ruby Red',
    tagline: 'Handwoven Kanchipuram silk with rich zari borders',
    price: '₹32,000',
    image: '/products/saree1.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree1.jpg',
      '/products/saree1.jpg'
    ],
    description: 'Handwoven Kanchipuram silk with rich zari borders',
    featured: true
  },
  {
    slug: 'bridal-silk-gold',
    name: 'Bridal Silk – Royal Gold',
    tagline: 'Inspired by heritage temple motifs',
    price: '₹45,000',
    image: '/products/saree3.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree4.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Grand bridal silk crafted for timeless weddings',
    featured: true
  },
  {
    slug: 'temple-border-maroon',
    name: 'Temple Border Silk – Maroon',
    tagline: 'Classic weaves passed through generations',
    price: '₹28,500',
    image: '/products/saree3.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree4.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Traditional temple design with heritage elegance',
    featured: true
  },
  {
    slug: 'soft-silk-pastel',
    name: 'Soft Silk – Pastel Pink',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree4.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree4.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury'
  }
];
