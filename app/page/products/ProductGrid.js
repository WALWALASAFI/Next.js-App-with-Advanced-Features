"use client"; // This line is crucial for enabling hooks in Next.js

import { useEffect, useState } from 'react';
import { products } from './products'; // Adjust the path based on your structure

export default function ProductGrid() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products); // Set the hardcoded data
  }, []);

  return (
    <div>
      {productData.length > 0 ? (
        productData.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <img 
              src={`/images/${product.image}`} // Ensure this matches your image path
              alt={product.title} 
              className="h-40 w-full object-cover" 
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-xl font-semibold">Price: ${product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
          </div>
        ))
      ) : (
        <p> products available.</p>
      )}
    </div>
  );
}
