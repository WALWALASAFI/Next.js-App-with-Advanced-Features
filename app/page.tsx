import Link from 'next/link';
import ProductGrid from './page/products/productGrid';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-center">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold">Welcome to the W~Safi Store</h1>
        <p className="mt-5">Find the best Korean Traditional clothes for you!</p>
        <img 
          src="/image/images (6).jpg"  // Ensure this path is correct
          alt="Clothing Store"
          className="mt-5 w-1/2 h-auto rounded-lg shadow-lg" 
        />
      </div>
      <Link href="/products">
        <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded">
          View All Products
        </button>
      </Link>
      <ProductGrid /> 
    </div>
  );
}
