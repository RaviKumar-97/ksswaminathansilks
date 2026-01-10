  import { notFound } from 'next/navigation';
  import { allProducts } from '../../../src/data/products';
  import ProductClient from './ProductClient';
  import Breadcrumb from '../../../components/Breadcrumb';

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
