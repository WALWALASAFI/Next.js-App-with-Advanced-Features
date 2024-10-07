import ProductGrid from './page/products/productGrid';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center text-center">
      <div className="flex-grow">
        <h1 className="text-3xl font-bold">Welcome to the W~Safi Store</h1>
        <p className="mt-5">Find the best Korean Traditional clothes for you!</p>
        <img 
          src="/image/images (6).jpg" 
          alt="Clothing Store"
          className="mt-5 w-1/2 h-auto rounded-lg shadow-lg" 
        />
      </div>
      <ProductGrid />
    </div>
  );
}
