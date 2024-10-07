"use client"; // This line enables the component to use hooks

import { useEffect, useState } from 'react';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/product'); // Ensure this API route is correct
      const data = await response.json();
      console.log(data); // Check the fetched data structure
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img 
            src="/image/images (6).jpg" 
            alt="Clothing Store"
            className="mt-5 w-1/2 h-auto rounded-lg shadow-lg" 
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-xl font-semibold">Price: ${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
