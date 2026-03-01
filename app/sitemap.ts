import { MetadataRoute } from 'next'
import { allProducts } from '../src/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ksswaminathansilks.com'
  
  const productUrls = allProducts.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...productUrls,
  ]
}