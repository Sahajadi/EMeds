import { Link } from 'react-router-dom';


const OrderConfirmation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12">
            <div className="max-w-2xl mx-auto p-12 bg-white rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-lg">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Order Confirmed!
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                        <p className="text-gray-600 text-lg">
                            Thank you for your purchase. Your order has been confirmed.
                        </p>
                    </div>
                    <div className="mt-12">
                        <Link 
                            to="/" 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full 
                                hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300
                                shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                        >
                            <span>Continue Shopping</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;