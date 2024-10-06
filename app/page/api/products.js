import Link from 'next/link';

export default async function ProductsPage() {
  const res = await fetch('https://api.example.com/products'); // Replace with your API
  const products = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover mt-2" />
              <p className="mt-2">Price: ${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
