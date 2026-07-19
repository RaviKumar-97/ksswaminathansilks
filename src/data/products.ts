export interface Product {
  slug: string
  name: string
  // tagline: string
  image: string;
  images?: string[];
  price?: string
  originalPrice?: string
  discountedPrice?: string
  description?: string
  featured?: boolean
  preOrder?: boolean
  deliveryDays?: string
  stock?: number
  inStock?: boolean


  details?: {
    fabric: string
    zari: string
    border: string
    care?: string
  }

  // heritage?: {
  //   title: string
  //   story: string
  //   location?: string
  //   years?: string
  // }
}

export const allProducts: Product[] = [
  {
    slug: 'ZR0001',
    name: 'Deep Maroon with Pink Contrast Border by Zari Ragam',
    // tagline: '',
    price: '₹16,999',
    originalPrice: '₹19,999',
    discountedPrice: '₹16,999',
    image: '/products/ZR0001/cover.jpg',
    images: [
      '/products/ZR0001/cover.jpg',
      '/products/ZR0001/pallu.jpg',
    ],
    description: 'Handwoven Kanchipuram silk with rich zari borders',
    featured: true,
    stock: 1,
    inStock: true,
    details: {
      fabric: 'Deep maroon traditional silk saree with elegant gold woven motifs',
      zari: 'Rich gold zari weaving with intricate traditional craftsmanship',
      border: 'Broad gold zari border with vibrant pink contrast finish',
      care: 'Dry clean only. Store in a soft cotton cloth away from direct sunlight.'
    },
  },
  {
    slug: 'ZR0002',
    name: 'Emerald Green Silk Saree with Gold Peacock Motif by Zari Ragam',
    // tagline: 'Inspired by heritage temple motifs',
    price: '₹14,299',
    originalPrice: '₹16,499',
    discountedPrice: '₹14,299',
    image: '/products/ZR0002/cover.jpg',
    images: [
      '/products/ZR0002/cover.jpg',
      '/products/ZR0002/pallu.jpg',
    ],
    description: 'Elegant silk saree with graceful peacock motifs',
    featured: true,
    stock: 2,
    inStock: true,
    details: {
      fabric: 'Pure Mulberry Silk handwoven in Kanchipuram',
      zari: 'Authentic gold zari with traditional weaving',
      border: 'Elegant gold zari border with peacock motif',
      care: 'Dry clean only. Store in a soft cotton cloth.'
    },

  },
  
  {
    slug: 'ZR0009',
    name: 'Peach & Maroon Silk by Zari Ragam', 
    price: '₹17,499',
    originalPrice: '₹25,499',
    discountedPrice: '₹17,499',
    image: '/products/ZR0009/cover.jpg',
    images: [
      '/products/ZR0009/cover.jpg',
      '/products/ZR0009/pallu.jpg',
      '/products/ZR0009/border.jpg',
    ],
    description: 'Elegant silk with rich floral zari.',
    stock: 1,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Rich gold zari with intricate floral weaving',
    border: 'Maroon border with traditional floral zari',
    care: 'Dry clean only. Store in cotton cloth.'
    },

  },
  {
    slug: 'ZR0010',
    name: 'Golden Zari & Magenta Silk',
    price: '₹17,499',
    originalPrice: '₹23,499',
    discountedPrice: '₹17,499',
    image:
      '/products/ZR0010/cover.jpg',
    images: [
      '/products/ZR0010/cover.jpg',
      '/products/ZR0010/pallu.jpg',
      '/products/ZR0010/border.jpg',
    ],
    description: 'Rich silk with grand zari weaving.',
    stock: 3,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Rich gold zari with traditional paisley motifs',
    border: 'Magenta border with intricate gold zari',
    care: 'Dry clean only. Store in cotton cloth.'
    },
    featured: true,
  },
  {
    slug: 'ZR0011',
    name:  'Golden Floral Zari Silk by Zari Ragam',
    price: '₹19,499',
    originalPrice: '₹27,999',
    discountedPrice: '₹19,499',
    image:
      '/products/ZR0011/cover.jpg',
    images: [
      '/products/ZR0011/cover.jpg',
      '/products/ZR0011/border.jpg',
    ],
    description: 'Grand silk with floral zari weaving.',
    stock: 2,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Rich gold zari with floral motifs',
    border: 'Broad traditional gold zari border',
    care: 'Dry clean only. Store in cotton cloth.'
    },
    featured: true,
  },
  {
    slug: 'ZR0012',
    name: 'Red Bridal Zari Silk',
    price: '₹19,499',
    originalPrice: '₹25,499',
    discountedPrice: '₹19,499',
    image:
      '/products/ZR0012/cover.jpg',
    images: [
      '/products/ZR0012/cover.jpg',
      '/products/ZR0012/pallu.jpg',
    ],
    description: 'Grand bridal silk with rich zari.',
    stock: 1,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Rich gold zari with floral and paisley motifs',
    border: 'Broad traditional gold zari border',
    care: 'Dry clean only. Store in cotton cloth.'
    },
    // heritage: {
    //   title: 'A Legacy Woven in Kanchipuram',
    //   story:
    //     'This saree is handwoven by master weavers from Kanchipuram, a town renowned for its silk heritage for over 400 years. Every motif reflects temple architecture and sacred traditions passed through generations.',
    //   location: 'Kanchipuram, Tamil Nadu',
    //   years: '400+ years of weaving heritage'
    // },
    featured: true,
  },
  {
    slug: 'ZR0003',
    name: 'Bright Pink Silk Saree with Rich Gold Zari Border by Zari Ragam',
    price: '₹13,999',
    originalPrice: '₹15,499',
    discountedPrice: '₹13,999',
    image: '/products/ZR0003/cover.jpg',
    images: [
      '/products/ZR0003/cover.jpg',
      '/products/ZR0003/pallu.jpg',
    ],
    description: 'Elegant silk saree with rich gold zari border.',
    featured: true,
    stock: 2,
    inStock: true,
    details: {
       fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Authentic gold zari with traditional weaving',
    border: 'Broad gold zari border with classic design',
    care: 'Dry clean only. Store in cotton cloth.'
    },

  },
  {
    slug: 'ZR0004',
    name: 'Royal Red Peacock Silk Saree by Zari Ragam', 
    price: '₹12,999',
    originalPrice: '₹14,499',
    discountedPrice: '₹12,999',
    image: '/products/ZR0004/cover.jpg',
    images: [
      '/products/ZR0004/cover.jpg',
      '/products/ZR0004/pallu.jpg',
    ],
    description: 'Elegant silk with a majestic peacock motif.',
    stock: 1,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Rich gold zari with peacock motif',
    border: 'Broad gold zari border',
    care: 'Dry clean only. Store in cotton cloth.'
    },
  },
  {
    slug: 'ZR0005',
    name: 'Purple Silk – Maroon Stripes by Zari Ragam',
    price: '₹11,999',
    originalPrice: '₹14,499',
    discountedPrice: '₹11,999',
    image:
      '/products/ZR0005/cover.jpg',
    images: [
      '/products/ZR0005/cover.jpg',
      '/products/ZR0005/pallu.jpg',
    ],
    description: 'Elegant silk with fine zari stripes.',
    stock: 3,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Fine gold zari woven across the pallu',
    border: 'Plain purple border with striped maroon pallu',
    care: 'Dry clean only. Store in cotton cloth.'
    },
  },
  {
    slug: 'ZR0006',
    name: 'Parrot Green & Royal Blue Silk by Zari Ragam',
    price: '₹10,499',
    originalPrice: '₹14,499',
    discountedPrice: '₹10,499',
    image:
      '/products/ZR0006/cover.jpg',

    images: [
      '/products/ZR0006/cover.jpg',
      '/products/ZR0006/pallu.jpg',
      '/products/ZR0006/border.jpg',
    ],
    description: 'Elegant silk with contrast color design.',
    stock: 2,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Fine gold zari stripes woven throughout',
    border: 'Royal blue border with parrot green body',
    care: 'Dry clean only. Store in cotton cloth.'
    },
    featured: true,
  },
  {
    slug: 'ZR0007',
    name: 'Mustard Gold & Maroon Silk by Zari Ragam',
    price: '₹11,999',
    originalPrice: '₹14,499',
    discountedPrice: '₹11,999',
    image:
      '/products/ZR0007/cover.jpg',
    images: [
      '/products/ZR0007/cover.jpg',
      '/products/ZR0007/pallu.jpg',
    ],
    description: 'Classic silk with elegant zari stripes.',
    featured: true,
    stock: 1,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Fine gold zari stripes with traditional motif',
    border: 'Deep maroon border with mustard gold body',
    care: 'Dry clean only. Store in cotton cloth.'
    },

  },
  {
    slug: 'ZR0008',
    name: 'Royal Blue & Magenta Silk by Zari Ragam',
    price: '₹12,499',
    originalPrice: '₹15,499',
    discountedPrice: '₹12,499',
    image:
      '/products/ZR0008/cover.jpg',
    images: [
      '/products/ZR0008/cover.jpg',
      '/products/ZR0008/pallu.jpg',
    ],
    description: 'Elegant silk with rich contrast colors.',
    stock: 2,
    inStock: true,
    details: {
      fabric: 'Pure mulberry silk handwoven in Kanchipuram',
    zari: 'Fine gold zari checks with traditional weaving',
    border: 'Magenta border with royal blue body',
    care: 'Dry clean only. Store in cotton cloth.'
    },
  }
];
