import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GetStarted = ({ addToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddToCart = (medicine) => {
        addToCart({
            id: medicine.id,
            name: medicine.name,
            price: medicine.price
        });
        alert(`${medicine.name} added to cart!`);
    };

    const medicines = [
        {
            id: 1,
            name: "Paracetamol",
            description: "For pain relief & fever",
            price: 5,
            category: "Pain Relief",
            image: "https://i.pinimg.com/736x/31/39/f1/3139f1cd7df8b844d0a7a649e32f7b91.jpg"
        },
        {
            id: 2,
            name: "Ibuprofen",
            description: "Anti-inflammatory & pain relief",
            price: 8,
            category: "Pain Relief",
            image: "https://i.pinimg.com/236x/50/dc/16/50dc162da849452efc2b278ae6a3e725.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Search */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center text-white mb-10">
                        <h1 className="text-4xl font-bold mb-4">Find Your Medicines</h1>
                        <p className="text-xl">Search from our wide range of medications</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200">
                            <input
                                type="text"
                                placeholder="Search Medication ..."
                                className="flex-grow px-6 py-3 rounded-l-full text-gray-600 focus:outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="px-6 py-3 text-purple-600 font-semibold rounded-r-full hover:text-purple-700">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Pain Relief', 'Antibiotics', 'Vitamins'].map((category) => (
                        <div key={category} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{category}</h3>
                            <Link to={`/category/${category}`} className="text-blue-600 hover:text-blue-800">
                                View All →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Medicines */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8">Featured Medicines</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {medicines.map((medicine) => (
                        <div key={medicine.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                            <img src={medicine.image} alt={medicine.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{medicine.name}</h3>
                                <p className="text-gray-600 mb-4">{medicine.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-purple-600 font-bold">${medicine.price}</span>
                                    <button 
                                        onClick={() => handleAddToCart(medicine)}
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* About Us Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        About Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                                Your Trusted Online Pharmacy
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                EMeds is committed to providing accessible and affordable healthcare solutions.
                                With our wide range of medicines and professional service, we ensure that your
                                health needs are met with utmost care and convenience.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full text-white mr-4">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">24/7 Customer Support</h4>
                                        <p className="text-gray-600">Always here when you need us</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full text-white mr-4">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Licensed Pharmacy</h4>
                                        <p className="text-gray-600">Certified healthcare providers</p>
                                    </div>
                                </div>
                                <div className="flex items-center bg-white p-4 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full text-white mr-4">✓</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                                        <p className="text-gray-600">Quick and reliable service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl transform rotate-6 scale-105 opacity-20"></div>
                                <img 
                                    src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg" 
                                    alt="About Us" 
                                    className="relative rounded-xl shadow-2xl max-w-md transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;