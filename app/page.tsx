import Link from 'next/link';
import { allProducts } from '../src/data/products';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BrandStorySlider from '../components/BrandStorySlider';
import HeritageSection from '../components/HeritageSection';
import GoogleReviews from '../components/GoogleReviews';
import StoreLocation from '../components/StoreLocation';

const featuredProducts = allProducts.filter(p => p.featured).slice(0, 4);
const bestSellers = allProducts.slice(0, 8);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* HERITAGE SECTION */}
      <HeritageSection minimal />

      {/* FEATURED COLLECTIONS */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto p-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Featured Collections
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                A Legacy Woven in Silk
              </h2>
              <div className="w-16 h-px bg-accent mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Zari Ragam, every saree tells a story of heritage, 
                craftsmanship, and timeless elegance. Rooted in tradition and guided 
                by excellence, our collection reflects the soul of Kanchipuram weaving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For generations, we have preserved the art of handloom silk, 
                bringing you sarees that embody grace, purity, and cultural richness.
              </p>
            </div>

            <div>
              <BrandStorySlider />
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Best Sellers
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block border border-primary text-primary px-10 py-3 text-sm tracking-widest rounded-full shadow-md hover:bg-primary hover:text-white transition-colors duration-300"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>

      {/* PRE-ORDER BANNER */}
      <section className="py-14 bg-[#2C1810] text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-amber-400 mb-3">DIRECT FROM OUR LOOMS</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            We Are the Manufacturers
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every saree is handwoven by our master weavers. 
            Can't find your colour or design? Place a <span className="text-amber-400 font-medium">Pre-Order</span> and 
            we'll weave it exclusively for you — delivered in 15–20 days.
          </p>
          <a
            href="https://wa.me/919944541985?text=Hi%2C%20I%20would%20like%20to%20place%20a%20pre-order%20for%20a%20custom%20saree."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-amber-400 text-amber-400 px-10 py-3 text-sm tracking-widest hover:bg-amber-400 hover:text-[#2C1810] transition-all duration-300"
          >
            PLACE A PRE-ORDER
          </a>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>

          <GoogleReviews />
        </div>
      </section>

      {/* STORE LOCATION */}
      <StoreLocation />

      {/* WHATSAPP CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Personalized Assistance
          </h2>
          <p className="text-white/90 mb-8">
            Connect with us on WhatsApp for exclusive guidance and curated recommendations.
          </p>
          <a
            href="https://wa.me/919944541985"
            target="_blank"
            className="inline-block rounded-full bg-white text-primary px-10 py-4 text-sm tracking-widest hover:bg-accent hover:text-white transition-colors duration-300"
          >
            CHAT ON WHATSAPP
          </a>
        </div>
      </section>
    </>
  );
}
