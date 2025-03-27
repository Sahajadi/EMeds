import React, { useState, useEffect } from 'react';
import { createProduct, getProducts } from '../api';

// Sample Products List (This could be fetched from an API in a real app)
const AdminPanel = () => {
    useEffect(() => {
        // Fetch products from the API
        const getProduct = async () => {
            const response = await getProducts();
            console.log("Products: ", response);
            setProducts(response);
        }

        getProduct();
        // setProducts(response.data);
    }, []);
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        manufacturer: '',
        inStock: false,
        prescription: false,
        image: ''
    });

    // Handle form input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission to add a product
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = { ...formData, id: products.length + 1 };
        setProducts([...products, newProduct]);

        // Clear form after submission
        setFormData({
            name: '',
            description: '',
            price: '',
            category: '',
            manufacturer: '',
            inStock: false,
            prescription: false,
            image: ''
        });

        const response = await createProduct(e, { productdata: formData });
        console.log("Data Added: ", response);

        alert(`${formData.name} has been added!`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-6 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    <p className="mt-1 text-sm text-gray-500">Manage your products and inventory</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Add Product Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New Product</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows="3"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-2 text-gray-500">$</span>
                                            <input
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
                                        <input
                                            type="text"
                                            name="manufacturer"
                                            value={formData.manufacturer}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                                        <input
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div className="flex space-x-6">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="inStock"
                                                checked={formData.inStock}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
                                            />
                                            <span className="text-sm text-gray-700">In Stock</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="prescription"
                                                checked={formData.prescription}
                                                onChange={handleChange}
                                                className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500"
                                            />
                                            <span className="text-sm text-gray-700">Prescription Required</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Product Stats */}
                    <div>
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Stats</h2>
                            <div className="space-y-4">
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">Total Products</p>
                                    <p className="text-2xl font-bold text-purple-600">{products.length}</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-500">In Stock</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {products.filter(p => p.inStock).length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product List */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Product List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                        <span className="text-lg font-bold text-purple-600">${product.price}</span>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{product.category}</span>
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                            product.inStock 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-red-100 text-red-800'
                                        }`}>
                                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
