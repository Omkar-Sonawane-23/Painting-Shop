import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-zinc-900 border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <h2 className="text-xl font-black text-white uppercase tracking-wide flex items-center gap-2">
            <ShoppingCart size={20} className="text-yellow-500" /> Your Cart
          </h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500">
              <ShoppingCart size={48} className="mb-4 opacity-50" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50">
                <div className="h-20 w-20 rounded-lg bg-zinc-800 shadow-sm flex-shrink-0" style={{ background: item.imageColor }}></div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider">100ml Pack</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-yellow-500 font-mono font-bold">₹{item.price}</span>
                    <button 
                      onClick={() => onRemove(idx)}
                      className="text-zinc-600 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-zinc-950 border-t border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400 text-sm uppercase font-bold">Subtotal</span>
              <span className="text-2xl font-bold text-white">₹{total}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl uppercase tracking-wide transition-transform hover:-translate-y-1 active:scale-95"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;