import React from 'react';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-black">
        <h2 className="text-3xl font-black italic mb-4">YOUR CART IS EMPTY</h2>
        <Link to="/shop" className="text-sky-500 hover:text-sky-600 font-bold uppercase tracking-widest border-b border-sky-500">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-black italic uppercase mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="bg-gray-50 p-4 flex items-center border border-gray-200 rounded-sm shadow-sm">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mr-6 rounded-sm" />
                <div className="flex-1">
                  <h3 className="text-black font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-black font-mono text-lg mb-2 font-bold">₹{item.price}</p>
                  <button 
                    onClick={() => onRemoveItem(index)}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center ml-auto font-medium"
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 border border-gray-200 sticky top-24 rounded-sm shadow-md">
              <h2 className="text-xl font-bold text-black uppercase mb-6">Order Summary</h2>
              <div className="flex justify-between text-gray-600 mb-4">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-6">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-black font-bold text-xl mb-8">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-sky-500 transition-colors shadow-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;