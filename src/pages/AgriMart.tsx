import React, { useState } from 'react';

export const AgriMart: React.FC = () => {
  const fallbackImage = 'https://via.placeholder.com/150'; // Placeholder for missing images

  const [products, setProducts] = useState([
    { id: 1, name: 'Wheat', price: 100, image: '/path-to-wheat.jpg' },
    { id: 2, name: 'Rice', price: 120, image: '/path-to-rice.jpg' },
    { id: 3, name: 'Corn', price: 90, image: 'https://via.placeholder.com/150?text=Corn' },
    { id: 4, name: 'Barley', price: 110, image: '/path-to-barley.jpg' },
    { id: 5, name: 'Soybeans', price: 130, image: 'https://via.placeholder.com/150?text=Soybeans' },
    { id: 6, name: 'Sugarcane', price: 80, image: 'https://pin.it/1YIKRNUDr' },
    { id: 7, name: 'Cotton', price: 150, image: 'https://via.placeholder.com/150?text=Cotton' },
    { id: 8, name: 'Millet', price: 95, image: 'https://via.placeholder.com/150?text=Millet' },
    { id: 9, name: 'Peanuts', price: 140, image: 'https://images.app.goo.gl/8md44rYBbtJSgncU6' },
    { id: 10, name: 'Potatoes', price: 60, image: fallbackImage },
    { id: 11, name: 'Onions', price: 70, image: '/path-to-onions.jpg' },
    { id: 12, name: 'Tomatoes', price: 50, image: 'https://via.placeholder.com/150?text=Tomatoes' },
    { id: 13, name: 'Urea Fertilizer', price: 300, image: '/path-to-urea.jpg' },
    { id: 14, name: 'DAP Fertilizer', price: 500, image: '/path-to-dap.jpg' },
    { id: 15, name: 'Organic Compost', price: 200, image: '/path-to-compost.jpg' },
    { id: 16, name: 'Neem Oil', price: 250, image: '/path-to-neem-oil.jpg' },
    { id: 17, name: 'Insecticide', price: 400, image: '/path-to-insecticide.jpg' },
    { id: 18, name: 'Fungicide', price: 350, image: '/path-to-fungicide.jpg' },
    { id: 19, name: 'Apples', price: 180, image: '/path-to-apples.jpg' },
    { id: 20, name: 'Bananas', price: 50, image: '/path-to-bananas.jpg' },
    { id: 21, name: 'Oranges', price: 120, image: '/path-to-oranges.jpg' },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const addProduct = () => {
    const newProductEntry = {
      ...newProduct,
      id: products.length + 1,
      price: parseInt(newProduct.price),
      image: newProduct.image || fallbackImage,
    };
    setProducts([...products, newProductEntry]);
    setNewProduct({ name: '', price: '', image: '' });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUyiWgyZbOA4HfkcWaDfHLHvvDkGbUFpk36w&s')`,
      }}
    >
      <h1 className="text-3xl font-bold text-white text-center py-4 bg-black bg-opacity-50">
        AgriMart
      </h1>
      <div className="grid grid-cols-3 gap-6 p-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
              onError={(e) => (e.currentTarget.src = fallbackImage)}
            />
            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>
            <button className="mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white">Add a Product</h2>
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            placeholder="Product Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={addProduct}
            className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};
