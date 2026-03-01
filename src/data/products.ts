export interface Product {
  slug: string
  name: string
  tagline: string
  image: string;        // main image (used in grids)
  images?: string[];    // 👈 gallery images
  price?: string
  originalPrice?: string
  discountedPrice?: string
  description?: string
  featured?: boolean

  
  details?: {
    fabric: string
    zari: string
    border: string
    care?: string
  }

  
  heritage?: {
    title: string
    story: string
    location?: string
    years?: string
  }
}

export const allProducts: Product[] = [
  {
    slug: 'kanchipuram-silk-red',
    name: 'Kanchipuram Pure Silk – Ruby Red',
    tagline: 'Handwoven Kanchipuram silk with rich zari borders',
    price: '₹32,000',
    originalPrice: '₹35,000',
    discountedPrice: '₹32,000',
    image: '/products/saree1.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree1.jpg',
      '/products/saree1.jpg'
    ],
    description: 'Handwoven Kanchipuram silk with rich zari borders',
    featured: true,
  details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  },
  {
    slug: 'bridal-silk-gold',
    name: 'Bridal Silk – Royal Gold',
    tagline: 'Inspired by heritage temple motifs',
    price: '₹45,000',
    originalPrice: '₹50,000',
    discountedPrice: '₹45,000',
    image: '/products/saree6.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree5.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Grand bridal silk crafted for timeless weddings',
    featured: true,
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  },
  {
    slug: 'temple-border-maroon',
    name: 'Temple Border Silk – Maroon',
    tagline: 'Classic weaves passed through generations',
    price: '₹28,500',
    image: '/products/saree3.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree5.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Traditional temple design with heritage elegance',
    featured: true,
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  },
  {
    slug: 'soft-silk-pastel',
    name: 'Soft Silk – Pastel Pink',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree8.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree5.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury',
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  }, 
  {
    slug: 'banaras-silks',
    name: 'Soft Silk – Pastel Pink2',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree7.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree10.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury',
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  },
  
  {
    slug: 'soft-silk-pastel3',
    name: 'Soft Silk – Pastel Pink3',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree7.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree11.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury',
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
},
    featured: true,


  },



   {
    slug: 'temple-border-maroon1',
    name: 'Temple Border Silk – Maroon',
    tagline: 'Classic weaves passed through generations',
    price: '₹28,500',
    image: '/products/saree3.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree5.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Traditional temple design with heritage elegance',
    featured: true,
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  },
  {
    slug: 'soft-silk-pastel1',
    name: 'Soft Silk – Pastel Pink',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree8.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree5.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury',
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  }, 
  {
    slug: 'banaras-silks1',
    name: 'Soft Silk – Pastel Pink2',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree7.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree10.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury',
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
}

  },
  
  {
    slug: 'soft-silk-pastel41',
    name: 'Soft Silk – Pastel Pink3',
    tagline: 'Classic weaves passed through generations',
    price: '₹18,900',
    image: '/products/saree7.jpg',
    images: [
      '/products/saree1.jpg',
      '/products/saree11.jpg',
      '/products/saree5.jpg'
    ],
    description: 'Lightweight silk for graceful everyday luxury',
    details: {
    fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic silver zari with traditional weaving',
    border: 'Classic temple border with contrast pallu',
    care: 'Dry clean only. Store in cotton cloth.'
  },
  heritage: {
  title: 'A Legacy Woven in Kanchipuram',
  story:
    'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
  location: 'Kanchipuram, Tamil Nadu',
  years: '400+ years of weaving heritage'
},
    featured: true,


  }
  
];
