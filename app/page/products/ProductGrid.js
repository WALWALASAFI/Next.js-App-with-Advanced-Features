"use client"; // Important for using hooks in Next.js

import { useEffect, useState } from 'react';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products'); // Ensure this route is correct
      const data = await response.json();
      console.log(data); // Check the structure of the fetched data
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
              src={`/images/${product.image}`} // Use the correct path to the image
              alt={product.title} 
              className="h-40 w-full object-cover" 
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
