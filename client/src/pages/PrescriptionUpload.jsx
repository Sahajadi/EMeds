import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { useNavigate } from 'react-router-dom';

const availableMedicines = [
    { id: 1, name: "Paracetamol", price: 5 },
    { id: 2, name: "Ibuprofen", price: 8 },
    { id: 3, name: "Amoxicillin", price: 12 },
    { id: 4, name: "Cough Syrup", price: 10 },
    { id: 5, name: "Antibiotics", price: 15 },
    { id: 6, name: "Vitamin C", price: 7 },
    { id: 7, name: "Antacid", price: 6 },
];

const PrescriptionUpload = ({ addToCart }) => {
    const navigate = useNavigate();
    // Add loading state
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [extractedText, setExtractedText] = useState("");
    const [recommendedMedicines, setRecommendedMedicines] = useState([]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            processOCR(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setImage(URL.createObjectURL(file));
            processOCR(file);
        }
    };

    const matchMedicines = (text) => {
        // Split text into lines and find medicine names from table-like format
        const lines = text.split('\n');
        const potentialMedicines = lines.map(line => {
            // Look for words at the start of each line that might be medicine names
            const words = line.trim().split(/\s+/);
            if (words.length > 0) {
                // Take first word or two as potential medicine name
                return words.slice(0, 2).join(' ').trim();
            }
            return '';
        }).filter(name => name.length > 0);

        // Match with available medicines
        const matched = availableMedicines.filter(med => 
            potentialMedicines.some(potential => {
                const potentialLower = potential.toLowerCase();
                const medNameLower = med.name.toLowerCase();
                return potentialLower.includes(medNameLower) || 
                       medNameLower.includes(potentialLower);
            })
        );

        setRecommendedMedicines(matched.length > 0 
            ? matched 
            : [{ name: "No exact match found, consult your doctor.", price: "N/A" }]
        );
    };

    const processOCR = async (file) => {
        setLoading(true);
        try {
            // Optimize image before OCR
            const image = new Image();
            image.src = URL.createObjectURL(file);
            await new Promise(resolve => {
                image.onload = resolve;
            });

            // Create canvas for image processing
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            
            // Enhance image for better OCR
            ctx.drawImage(image, 0, 0);
            ctx.filter = 'contrast(1.2) brightness(1.1)';
            ctx.drawImage(canvas, 0, 0);

            const result = await Tesseract.recognize(canvas.toDataURL(), "eng", {
                logger: () => {}, 
                workerPath: 'https://unpkg.com/tesseract.js@v4.0.0/dist/worker.min.js',
                langPath: 'https://tessdata.projectnaptha.com/4.0.0_best',
                corePath: 'https://unpkg.com/tesseract.js-core@v4.0.0/tesseract-core.wasm.js',
                rectangle: false,
                tessedit_pageseg_mode: '6', // Assume uniform text block
                tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ',
            });
            
            setExtractedText(result.data.text);
            matchMedicines(result.data.text);
        } catch (error) {
            console.error('OCR Error:', error);
            setExtractedText('Error processing image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddToCart = (medicine) => {
        addToCart(medicine);
        navigate('/checkout');
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">Upload Prescription</h1>

            <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-500 transition-all duration-300"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <label className="cursor-pointer block">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        className="hidden" 
                    />
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                        <h3 className="text-xl text-gray-700">Drop your prescription here</h3>
                        <p className="text-gray-500">or click to browse</p>
                    </div>
                </label>
            </div>

            {image && (
                <>
                    <div className="mt-8">
                        <img src={image} alt="Prescription Preview" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    
                    {loading ? (
                        <div className="mt-4 text-center">
                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
                            <p className="mt-2 text-gray-600">Processing prescription...</p>
                        </div>
                    ) : extractedText && (
                        <div className="mt-4">
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold mb-4">Extracted Text</h3>
                                <p className="text-gray-700">{extractedText}</p>
                            </div>
                        </div>
                    )}
                </>
            )}

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Instruction</h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-800">Step 1</p>
                        <p className="text-gray-600">Click to upload image of prescription or desired product.</p>
                    </div>
                    <div>
                        <p className="text-gray-800">Step 2</p>
                        <p className="text-gray-600">Request for the quotation</p>
                    </div>
                    <div>
                        <p className="text-gray-800">Step 3</p>
                        <p className="text-gray-600">You will receive a notification to confirm billing.</p>
                    </div>
                    <div>
                        <p className="text-gray-800">Step 4</p>
                        <p className="text-gray-600">Confirm order and billing in Orders section</p>
                    </div>
                </div>
            </div>

            {extractedText && (
                <div className="mt-8">
                    <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold mb-4">Recommended Medicines</h3>
                        <div className="space-y-3">
                            {recommendedMedicines.map((med, index) => (
                                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                                    <div>
                                        <span className="font-medium">{med.name}</span>
                                        <span className="ml-4 text-blue-600">${med.price}</span>
                                    </div>
                                    {med.price !== "N/A" && (
                                        <button 
                                            onClick={() => handleAddToCart(med)}
                                            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300"
                                        >
                                            Add to Cart
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrescriptionUpload;
