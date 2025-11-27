// Frontend/src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Shield } from 'lucide-react';

const Cart = ({ items, removeFromCart }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-20 h-20 bg-white rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center mb-6">
          <ShoppingCart className="text-slate-300" size={32} />
        </div>
        <h2 className="text-xl font-bold text-slate-900">Your Cart is Empty</h2>
        <p className="text-slate-500 mt-2 mb-8">Looks like you haven't added any pigments yet.</p>
        <Link to="/shop" className="px-6 py-3 bg-slate-900 text-white font-bold text-sm uppercase rounded-md">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-10">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Items */}
          <div className="flex-1 space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-6 shadow-sm">
                <div className="w-20 h-20 rounded-lg bg-slate-100 flex-shrink-0 overflow-hidden" style={{ background: item.imageColor }}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                      <p className="text-sm text-slate-500 uppercase tracking-wider">{item.category} Pearl</p>
                    </div>
                    <span className="font-mono font-bold text-slate-900">₹{item.price}</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded font-medium">100g Pack</span>
                    <button onClick={() => removeFromCart(idx)} className="text-xs text-red-500 font-bold hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg sticky top-28">
              <h3 className="font-bold text-slate-900 text-lg mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6 pb-6 border-b border-slate-100 text-sm text-slate-600">
                <div className="flex justify-between"><span>Subtotal</span><span>₹{total}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Calculated next</span></div>
                <div className="flex justify-between"><span>Tax (18%)</span><span>₹{(total * 0.18).toFixed(0)}</span></div>
              </div>
              <div className="flex justify-between font-black text-xl text-slate-900 mb-8">
                <span>Total</span>
                <span>₹{(total * 1.18).toFixed(0)}</span>
              </div>
              <button className="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase rounded-md transition-colors">
                Proceed to Checkout
              </button>
              <div className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                <Shield size={12}/> Secure B2B Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;