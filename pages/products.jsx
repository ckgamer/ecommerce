import React, { useState } from 'react';

export default function Products() {
  const [newProduct, setNewProduct] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [currentStock, setCurrentStock] = useState([
    { id: 1, name: 'Product 1', quantity: 10, price: 20.99 },
    { id: 2, name: 'Product 2', quantity: 5, price: 15.49 },
    // Add more products as needed
  ]);

  const [searchCategory, setSearchCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (newProduct.trim() !== '' && newQuantity.trim() !== '') {
      const newProductObj = {
        id: currentStock.length + 1,
        name: newProduct,
        quantity: parseInt(newQuantity, 10),
        // You can add price logic here if needed
      };

      setCurrentStock([...currentStock, newProductObj]);
      setNewProduct('');
      setNewQuantity('');
    }
  };

  const handleSearch = () => {
    // Add logic for searching based on searchTerm and searchCategory
    // For now, let's just console log the search criteria
    console.log('Searching for:', searchTerm, 'in category:', searchCategory);
  };

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <h2 className="text-2xl font-bold mb-4">Add a product</h2>
        <form onSubmit={handleAddProduct}>
          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="productName">
            Product Name
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="productName"
            name="productName"
            placeholder="Enter product name"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
          />

          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="number"
            id="quantity"
            name="quantity"
            placeholder="Enter quantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
          />

          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="container my-6 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Display current stock</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {currentStock.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container my-6 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Search</h2>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="category">
            Category
          </label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            id="category"
            name="category"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Product 1</option>
            <option value="clothing">Product 2</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="searchTerm">
            Search Term
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="searchTerm"
            name="searchTerm"
            placeholder="Enter search term"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}
