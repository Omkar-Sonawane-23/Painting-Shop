import React from 'react';
import { X, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      <div className={`absolute top-0 right-0 w-full max-w-full sm:max-w-md h-full bg-zinc-950 border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 md:p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <h2 className="text-lg font-black text-white uppercase tracking-wide flex items-center gap-2">
            <ShoppingCart size={18} className="text-yellow-500" /> Your Cart
          </h2>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-900"><X size={20} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-600 space-y-4">
              <ShoppingCart size={48} className="opacity-20" />
              <p className="text-sm">Your cart is empty.</p>
              <button onClick={onClose} className="text-yellow-500 text-sm font-bold hover:underline">Start Shopping</button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800/50 group">
                <div className="h-16 w-16 rounded-lg bg-zinc-800 shadow-sm flex-shrink-0 overflow-hidden relative">
                    <div className="w-full h-full" style={{ background: item.imageColor }}></div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-1">100ml Pack</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-yellow-500 font-mono font-bold text-sm">₹{item.price}</span>
                    <button onClick={() => onRemove(idx)} className="text-zinc-600 hover:text-red-500 transition-colors p-1 -mr-1">
                        <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 md:p-6 bg-zinc-900 border-t border-zinc-800 space-y-4 safe-bottom">
            <div className="flex justify-between items-center">
              <span className="text-zinc-400 text-sm font-medium">Subtotal</span>
              <span className="text-xl font-black text-white">₹{total}</span>
            </div>
            <p className="text-[10px] text-zinc-500 text-center">Shipping & taxes calculated at checkout.</p>
            <button onClick={onCheckout} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl uppercase tracking-wide transition-transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
               Checkout Now <ArrowRight size={18}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;