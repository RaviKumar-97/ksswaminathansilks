import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProducts } from '../../../src/data/products';
import ProductClient from './ProductClient';
import Breadcrumb from '../../../components/Breadcrumb';

export function generateStaticParams() {
  return allProducts.map(product => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find(p => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Premium Kanchipuram Silk Saree Online`,
    description: `Buy ${product.name} online at KS Swaminathan Silks. ${product.description} Premium quality silk saree with authentic craftsmanship. Free shipping across India.`,
    keywords: [
      product.name,
      'Kanchipuram silk saree',
      'buy silk saree online',
      'wedding saree',
      'bridal saree',
      'pure silk saree',
      'traditional saree'
    ],
    openGraph: {
      title: `${product.name} | KS Swaminathan Silks`,
      description: `${product.description} - Premium quality Kanchipuram silk saree`,
      images: [{
        url: product.image,
        width: 800,
        height: 600,
        alt: product.name,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | KS Swaminathan Silks`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

  export default async function ProductPage({
    params
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const { slug } = await params;

    const product = allProducts.find(p => p.slug === slug);

    if (!product) notFound();

    return (
      <>
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Products', href: '/products' },
              { label: product.name }
            ]}
          />
        </div>
        <ProductClient product={product} />
      </>
    );
  }
