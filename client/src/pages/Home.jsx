import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import GetStarted from '../pages/GetStarted';


// Keep this top-level medicines array



const medicines = [
    {
        id: 1,
        name: "Paracetamol",
        description: "For pain relief & fever",
        price: 5,
        image: "https://i.pinimg.com/736x/31/39/f1/3139f1cd7df8b844d0a7a649e32f7b91.jpg"
    },
    {
        id: 2,
        name: "Ibuprofen",
        description: "Anti-inflammatory & pain relief",
        price: 8,
        image: "https://i.pinimg.com/236x/50/dc/16/50dc162da849452efc2b278ae6a3e725.jpg"
    },
    {
        id: 3,
        name: "Cough Syrup",
        description: "Relieves cough & throat irritation",
        price: 10,
        image: "https://i.pinimg.com/236x/9d/5d/c9/9d5dc91fa25b2a6c369d512271e898fb.jpg"
    },
    {
        id: 4,
        name: "Antibiotics",
        description: "Treats bacterial infections",
        price: 15,
        image: "https://i.pinimg.com/236x/e3/cf/38/e3cf3810276f695bc8cc7df434d4159e.jpg"
    },
    {
        id: 5,
        name: "Vitamin C",
        description: "Boosts immunity & skin health",
        price: 7,
        image: "https://i.pinimg.com/736x/08/c2/5a/08c25a319d43fdca48fda1f8fe27d3d2.jpg"
    },
    {
        id: 6,
        name: "Antacid",
        description: "Relieves acidity & heartburn",
        price: 6,
        image: "https://i.pinimg.com/236x/f7/c0/f6/f7c0f63540492b13cc39a2baca1fa19d.jpg"
    },
    {
        id: 7,
        name: "Digital Thermometer",
        description: "Accurate temperature measurement",
        price: 15,
        image: "https://i.pinimg.com/564x/6b/5e/fa/6b5efa3319b1f6b6589ae3ec27afb1f1.jpg"
    },
    {
        id: 8,
        name: "Blood Pressure Monitor",
        description: "Home BP monitoring device",
        price: 45,
        image: "https://i.pinimg.com/564x/d7/0e/8c/d70e8c9ad144a2c56de0b2792a593a66.jpg"
    },
    {
        id: 9,
        name: "Pulse Oximeter",
        description: "Measures oxygen saturation",
        price: 25,
        image: "https://i.pinimg.com/564x/f2/93/b5/f293b5c4e7a9105f3667c9734a899676.jpg"
    }
];
const Home = ({ addToCart }) => {
    // Remove the duplicate medicines array from here
    // Remove unused navigate constant since it's not being used
    
    const handleAddToCart = (medicine) => {
        addToCart({
            id: medicine.id,
            name: medicine.name,
            price: medicine.price
        });
        alert(`${medicine.name} added to cart!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
            {/* Enhanced Hero Section */}
            <header className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 overflow-hidden rounded-[3rem] shadow-xl mx-4 mt-4">
                {/* Animated background patterns */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/7b/a9/2b/7ba92b75c5b5c671f2b88407853f9a5f.jpg')] opacity-10 bg-repeat rounded-[3rem]"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-[3rem]"></div>
                </div>

                {/* Floating shapes */}
                <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                    <div className="absolute -top-16 -left-16 w-48 h-48 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                {/* Rest of the hero section content remains the same */}
                <div className="relative max-w-5xl mx-auto text-center px-4">
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                            Welcome to{' '}
                            <span className="inline-block animate-text-shimmer bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300 bg-[200%_auto] bg-clip-text text-transparent">
                                EMeds
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Your trusted online pharmacy for medicines, prescriptions, and healthcare needs.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link to="/get-started" 
                                className="group inline-flex items-center px-6 py-3 rounded-full bg-white text-purple-600 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get Started
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Enhanced Products Section */}
            <section className="py-20 px-4">
                <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Popular Medicines
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Discover our wide range of high-quality medicines and healthcare products
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {medicines.map((med) => (
                        <div key={med.id} 
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                            <div className="relative overflow-hidden rounded-t-2xl">
                                <img 
                                    src={med.image} 
                                    alt={med.name} 
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    ${med.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{med.name}</h3>
                                <p className="text-gray-600 mb-4">{med.description}</p>
                                <button 
                                    onClick={() => handleAddToCart(med)}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Enhanced Contact Section */}
            {/* After the products section and before the footer */}
            <section className="py-20 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Contact & Hours
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Cards */}
                        <div className="space-y-8">
                            {/* Email Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-1">Email Us</h3>
                                        <p className="text-purple-600 hover:text-purple-700 text-lg">support@emeds.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-1">Call Us</h3>
                                        <p className="text-purple-600 hover:text-purple-700 text-lg">+000 000000000</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full">
                                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-1">Visit Us</h3>
                                        <p className="text-purple-600 hover:text-purple-700 text-lg">Itahari, Sunsari!!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business Hours Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Business Hours</h3>
                                <p className="text-purple-600">We're here to serve you</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <span className="text-gray-700 font-medium">Sunday - Thursday</span>
                                    </div>
                                    <span className="text-purple-600 font-semibold">9:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <span className="text-gray-700 font-medium">Friday - Saturday</span>
                                    </div>
                                    <span className="text-purple-600 font-semibold">10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="mt-8 p-4 bg-purple-50 rounded-xl">
                                    <p className="text-purple-700 text-center">
                                        24/7 Emergency Support Available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */}
            <footer className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-white/90">© 2025 EMeds. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
