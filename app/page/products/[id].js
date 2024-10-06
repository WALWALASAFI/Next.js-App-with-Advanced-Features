import { useRouter } from 'next/router';

export default async function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Check if the ID is available
  if (!id) {
    return <div>Loading...</div>;
  }

  const productRes = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await productRes.json();

  // Assuming stock information is part of the product data
  const stock = { available: true }; // You can customize this based on your needs

  return (
    <div className="mb-8 p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-64 w-full object-cover mt-4" />
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>
      <p className="text-md mt-2">{stock.available ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
