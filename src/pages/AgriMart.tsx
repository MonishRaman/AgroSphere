import React from 'react';

export const AgriMart: React.FC = () => {
  const products = [
    { id: 1, name: 'Wheat', price: 100, image: '/path-to-wheat.jpg' },
    { id: 2, name: 'Rice', price: 120, image: '/path-to-rice.jpg' },
    // Add more products
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700 text-center py-4">AgriMart</h1>
      <div className="grid grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>
            <button className="mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};