import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const productRes = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!productRes.ok) {
            throw new Error('Product not found');
          }
          const productData = await productRes.json();
          setProduct(productData);
        } catch (error) {
          console.error(error);
          setProduct(null);
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mb-8 p-4">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <img src={product.image} alt={product.title} className="h-64 w-full object-cover mt-4" />
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Buy Now
      </button>
      <p className="text-md mt-2">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}
