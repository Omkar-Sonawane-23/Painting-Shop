import React from 'react';
import { ShoppingCart, X } from 'lucide-react';

const Cart = ({ cartItems, onRemove, onCheckout, onStartShopping }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 min-h-screen">
      <h2 className="text-3xl font-black text-white mb-8 uppercase">Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-32 bg-zinc-900 rounded-3xl border border-zinc-800">
          <ShoppingCart size={64} className="mx-auto text-zinc-800 mb-6" />
          <p className="text-zinc-500 text-lg font-medium mb-6">Your cart is feeling light.</p>
          <button onClick={onStartShopping} className="px-8 py-3 bg-white text-black font-bold rounded-xl">Start Shopping</button>
        </div>
      ) : (
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex items-center p-6 border-b border-zinc-800 gap-6">
              <div className="h-20 w-20 rounded-xl shadow-md" style={{ background: item.imageColor }}></div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest mt-1">100ml Pack</p>
              </div>
              <div className="text-white font-mono font-bold text-xl">₹{item.price}</div>
              <button onClick={() => onRemove(idx)} className="p-2 text-zinc-600 hover:text-red-500">
                <X size={20} />
              </button>
            </div>
          ))}
          <div className="p-8 bg-zinc-950 border-t border-zinc-800">
            <div className="flex justify-between text-2xl font-black text-white mb-8">
              <span>TOTAL</span>
              <span>₹{total}</span>
            </div>
            <button onClick={onCheckout} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl text-lg">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;