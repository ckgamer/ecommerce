"use client"
import React from 'react';
import { useEffect, useState } from 'react';

export default function Products() {
  const [productForm, setproductForm] = useState({});
  const [products, setproducts] = useState([])
  const [alert, setalert] = useState('')
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/product')
      let res = await response.json()
      setproducts(res.products)
    }
    fetchProducts()

  }, [searchTerm])
  const handleChange = (e) => {
    setproductForm({ ...productForm, [e.target.name]: e.target.value })
  }
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productForm),
      });

      // Check the response from your API
      if (response.ok) {
        const responseData = await response.json();
        console.log('Product added successfully');
        setalert('Your Product has been added!');
        setproductForm({});
      } else {
        const errorData = await response.json();
        console.log('Error adding product');
      }
    } catch (error) {
      console.error("Error:", error);
    }

  }

  const onDropdown = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/search?query=${searchTerm}`);
        const res = await response.json();
        setDropdown(res.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm !== '') {
      fetchData();
    } else {
      // Handle the case when the search term is empty (optional)
      setDropdown([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="container my-6 mx-auto">
        <h6 className='text-green-500 text-center'>{alert}</h6>
        <h2 className="text-2xl font-bold mb-4">Search Products</h2>
        <div className="w-full flex">
          <div className="mb-4 mr-6 w-full">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="searchTerm"
              name="searchTerm"
              placeholder="Enter search term"
              value={searchTerm}
              onChange={onDropdown}
            />
          </div>
          <div className="mb-4">
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
        </div>
        {loading && <div className='w-full flex justify-center'> <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="none"
          stroke="#87CEEB"
          stroke-width="4"
          stroke-linecap="round"
        >
          <circle cx="50" cy="50" r="10" stroke-dasharray="64" stroke-dashoffset="0">
            <animate
              attributeName="stroke-dashoffset"
              dur="2s"
              keyTimes="0;1"
              values="0;256"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
        </div>
        }
        {dropdown.map(item => {
          return <div key={item.productName} className="bg-purple-100 mb-2 container text-center flex">
            <span className="productName w-1/3">{item.productName}</span>
            <span className="price w-1/3">{item.price}</span>
            <span className="price w-1/3">{item.quantity}</span>
          </div>
        })}
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add a product</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="productName">
              Product Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="productName"
              name="productName"
              placeholder="Enter product name"
              value={productForm?.productName || ''}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="quantity">
              Quantity
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Enter quantity"
              value={productForm?.quantity || ''}
              onChange={handleChange}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="price">
              Price
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="number"
              id="price"
              name="price"
              placeholder="Enter price"
              value={productForm?.price || ''}
              onChange={handleChange}
            />
          </div>

          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
            onClick={addProduct}
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
            {products.map((product, index) => (
              <tr key={index} className='text-center'>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">₹ {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
