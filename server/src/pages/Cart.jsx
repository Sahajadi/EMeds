import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const medicines = [
    { id: 1, name: "Paracetamol", price: 5 },
    { id: 2, name: "Ibuprofen", price: 8 },
    { id: 3, name: "Amoxicillin", price: 12 },
    { id: 4, name: "Cough Syrup", price: 10 },
    { id: 5, name: "Antibiotics", price: 15 },
    { id: 6, name: "Vitamin C", price: 7 },
    { id: 7, name: "Antacid", price: 6 },
  ];

  const addToCart = (medicine) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === medicine.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === medicine.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevCart, { ...medicine, quantity: 1 }];
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate('/checkout', { 
        state: { 
          cart: cart,
          total: calculateTotal()
        } 
      });
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Medicine List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Available Medicines
              </h2>
              <div className="space-y-4">
                {medicines.map((med) => (
                  <div
                    key={med.id}
                    className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {med.name}
                      </h3>
                      <p className="text-purple-600 font-bold">${med.price}</p>
                    </div>
                    <button
                      onClick={() => addToCart(med)}
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Shopping Cart
            </h2>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                Your cart is empty
              </p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border-b"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.name}</span>
                        {item.quantity > 1 && (
                          <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                            x{item.quantity}
                          </span>
                        )}
                      </div>
                      <span className="text-purple-600 font-bold">
                        ${item.price * (item.quantity || 1)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-xl font-bold text-gray-800 mb-4">
                    Total: ${calculateTotal()}
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;