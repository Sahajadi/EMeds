import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        // Medicines
        {
            id: 1,
            name: "Paracetamol",
            category: "medicines",
            description: "For pain relief & fever",
            price: 5,
            image: "https://i.pinimg.com/736x/31/39/f1/3139f1cd7df8b844d0a7a649e32f7b91.jpg"
        },
        {
            id: 2,
            name: "Ibuprofen",
            category: "medicines",
            description: "Anti-inflammatory & pain relief",
            price: 8,
            image: "https://i.pinimg.com/236x/50/dc/16/50dc162da849452efc2b278ae6a3e725.jpg"
        },
        {
            id: 3,
            name: "Cough Syrup",
            category: "medicines",
            description: "Relieves cough & throat irritation",
            price: 10,
            image: "https://i.pinimg.com/236x/9d/5d/c9/9d5dc91fa25b2a6c369d512271e898fb.jpg"
        },
        {
            id: 4,
            name: "Antibiotics",
            category: "medicines",
            description: "Treats bacterial infections",
            price: 15,
            image: "https://i.pinimg.com/236x/e3/cf/38/e3cf3810276f695bc8cc7df434d4159e.jpg"
        },
        {
            id: 5,
            name: "Vitamin C",
            category: "medicines",
            description: "Boosts immunity & skin health",
            price: 7,
            image: "https://i.pinimg.com/736x/08/c2/5a/08c25a319d43fdca48fda1f8fe27d3d2.jpg"
        },
        {
            id: 6,
            name: "Antacid",
            category: "medicines",
            description: "Relieves acidity & heartburn",
            price: 6,
            image: "https://i.pinimg.com/236x/f7/c0/f6/f7c0f63540492b13cc39a2baca1fa19d.jpg"
        },
        // Healthcare Equipment
        {
            id: 7,
            name: "Digital Thermometer",
            category: "equipment",
            description: "Accurate temperature measurement",
            price: 15,
            image: "https://i.pinimg.com/564x/6b/5e/fa/6b5efa3319b1f6b6589ae3ec27afb1f1.jpg"
        },
        {
            id: 8,
            name: "Blood Pressure Monitor",
            category: "equipment",
            description: "Home BP monitoring device",
            price: 45,
            image: "https://i.pinimg.com/564x/d7/0e/8c/d70e8c9ad144a2c56de0b2792a593a66.jpg"
        },
        {
            id: 9,
            name: "Pulse Oximeter",
            category: "equipment",
            description: "Measures oxygen saturation",
            price: 25,
            image: "https://i.pinimg.com/564x/f2/93/b5/f293b5c4e7a9105f3667c9734a899676.jpg"
        },
    ];

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'medicines', name: 'Medicines' },
        { id: 'equipment', name: 'Healthcare Equipment' },
        { id: 'personal-care', name: 'Personal Care' },
        { id: 'wellness', name: 'Wellness Products' }
    ];

    const filteredProducts = products.filter(product =>
        (selectedCategory === 'all' || product.category === selectedCategory) &&
        (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    useEffect(() => {
        const searchFromParams = searchParams.get('search');
        if (searchFromParams) {
            setSearchTerm(searchFromParams);
        }
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-gray-50">
           
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white text-center mb-8">Healthcare Products</h1>
                    
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search products..."
                                className="w-full px-6 py-4 bg-white rounded-full shadow-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        selectedCategory === category.id
                                            ? 'bg-white text-purple-600 shadow-lg'
                                            : 'bg-purple-500 bg-opacity-50 text-white hover:bg-white hover:text-purple-600'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

         
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <div className="relative">
                                <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    ${product.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs text-purple-600 font-semibold mb-2 uppercase tracking-wider">
                                    {categories.find(cat => cat.id === product.category)?.name}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
