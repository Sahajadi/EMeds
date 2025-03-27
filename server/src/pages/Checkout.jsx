import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [paymentDetails, setPaymentDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        address: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        // Format card number
        if (name === 'cardNumber') {
            formattedValue = value.replace(/\D/g, '').slice(0, 16);
            formattedValue = formattedValue.replace(/(\d{4})/g, '$1 ').trim();
        }
        // Format expiry date
        else if (name === 'expiryDate') {
            formattedValue = value.replace(/\D/g, '').slice(0, 4);
            if (formattedValue.length > 2) {
                formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
            }
        }
        // Format CVV
        else if (name === 'cvv') {
            formattedValue = value.replace(/\D/g, '').slice(0, 3);
        }
        // Format phone
        else if (name === 'phone') {
            formattedValue = value.replace(/\D/g, '').slice(0, 10);
            if (formattedValue.length >= 6) {
                formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(3, 6)}-${formattedValue.slice(6)}`;
            } else if (formattedValue.length >= 3) {
                formattedValue = `${formattedValue.slice(0, 3)}-${formattedValue.slice(3)}`;
            }
        }

        setPaymentDetails(prev => ({
            ...prev,
            [name]: formattedValue
        }));
    };

    // Update the input fields in the form to use the state:
    <input 
        type="text" 
        name="cardNumber"
        value={paymentDetails.cardNumber}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        placeholder="1234 5678 9012 3456"
        required
    />
    const location = useLocation();
    const cartItems = location.state?.cart || [];
    
    const total = cartItems.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    const handlePayment = (e) => {
        e.preventDefault();
        // Here you would typically integrate with a payment gateway
        // For now, we'll just simulate a successful payment
        alert('Payment successful!');
        // Redirect to order confirmation page
        navigate('/order-confirmation');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
                    Secure Checkout
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Order Summary
                        </h2>
                        <div className="space-y-4">
                            {cartItems.map((item, index) => (
                                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                    <div className="flex items-center gap-3">
                                        <span className="font-medium">{item.name}</span>
                                        <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full font-semibold">
                                            x{item.quantity}
                                        </span>
                                    </div>
                                    <span className="text-purple-600 font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="border-t border-gray-200 pt-4 mt-4">
                                <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl">
                                    <span className="text-xl font-bold text-gray-800">Total</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handlePayment} className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Payment Details
                        </h2>
                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-gray-700 mb-2 font-medium">Card Number</label>
                                <input 
                                    type="text"
                                    name="cardNumber"
                                    value={paymentDetails.cardNumber}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">Expiry Date</label>
                                    <input 
                                        type="text"
                                        name="expiryDate"
                                        value={paymentDetails.expiryDate}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2 font-medium">CVV</label>
                                    <input 
                                        type="text"
                                        name="cvv"
                                        value={paymentDetails.cvv}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                                        placeholder="123"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">Name on Card</label>
                                <input 
                                    type="text"
                                    name="name"
                                    value={paymentDetails.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl
                                hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl
                                flex items-center justify-center gap-2"
                            >
                                <span>Pay ${total.toFixed(2)}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;