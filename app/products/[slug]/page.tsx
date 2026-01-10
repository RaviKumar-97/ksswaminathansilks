import { notFound } from 'next/navigation';
import { allProducts } from '../../../src/data/products';
import ProductClient from './ProductClient';

export function generateStaticParams() {
  return allProducts.map(product => ({
    slug: product.slug
  }));
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ VERY IMPORTANT

  const product = allProducts.find(p => p.slug === slug);

  if (!product) notFound();

  return <ProductClient product={product} />;
}
