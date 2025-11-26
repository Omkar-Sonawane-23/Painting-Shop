import React from 'react';
import { ShoppingCart, Trash2, ArrowRight, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, onRemove, onUpdateQuantity, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = total * 0.18;
  const shipping = total > 5000 ? 0 : 150;
  const grandTotal = total + tax + shipping;

  // Empty State
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-4 min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-zinc-100 border-2 border-zinc-800 rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)]">
           <ShoppingCart size={40} className="text-zinc-800" />
        </div>
        <h2 className="text-2xl font-black text-zinc-900 mb-2 font-handwriting-style">Your cart is empty</h2>
        <p className="text-zinc-500 mb-8 max-w-md">Looks like you haven't added any pigments to your cart yet.</p>
        <Link to="/shop" className="px-8 py-3 bg-rose-300 text-zinc-900 border-2 border-zinc-800 font-bold rounded-xl hover:bg-rose-400 transition-all shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] active:translate-y-[2px] active:shadow-none">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#FAF9F6]">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-zinc-800 mb-2 font-handwriting-style">Cart</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        
        {/* 1. Cart Items List (Wireframe style) */}
        <div className="flex-1 space-y-6">
          {cartItems.map((item, idx) => (
            <div key={`${item.id}-${item.selectedSize}-${idx}`} className="flex flex-col sm:flex-row gap-6 p-6 bg-white border-2 border-zinc-800 rounded-2xl items-center shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] relative">
              
              {/* Image */}
              <div className="w-full sm:w-40 h-32 bg-blue-50/50 border-2 border-zinc-800 rounded-xl overflow-hidden relative flex-shrink-0">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
                 <div className="w-full h-full transform scale-75 rounded-full shadow-2xl" style={{ background: item.imageColor }}></div>
              </div>

              {/* Details */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-black text-zinc-800 font-handwriting-style">{item.name}</h3>
                        <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Category: {item.category}</p>
                    </div>
                    <button 
                        onClick={() => onRemove(idx)}
                        className="p-2 text-white bg-red-500 border-2 border-zinc-900 hover:bg-red-600 rounded-lg transition-colors shadow-sm"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                {/* Size Selector Display (Wireframe style) */}
                <div className="flex gap-2 my-3">
                    {['1 Ltr', '2 Ltr', '3 Ltr'].map(size => (
                        <div key={size} className={`px-3 py-1 rounded-lg border-2 text-xs font-bold ${item.selectedSize === size ? 'bg-blue-200 border-zinc-800 text-zinc-900' : 'bg-transparent border-zinc-300 text-zinc-400'}`}>
                            {size}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-mono font-bold text-zinc-800">₹ {item.price} / Ltr</span>
                    
                    {/* Quantity */}
                    <div className="flex items-center bg-zinc-100 border-2 border-zinc-800 rounded-lg h-10">
                        <button onClick={() => onUpdateQuantity(idx, -1)} className="px-3 h-full hover:bg-zinc-200 border-r-2 border-zinc-800" disabled={item.quantity <= 1}><Minus size={14}/></button>
                        <span className="px-4 font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(idx, 1)} className="px-3 h-full hover:bg-zinc-200 border-l-2 border-zinc-800"><Plus size={14}/></button>
                    </div>
                </div>
              </div>
            </div>
          ))}

          {/* Action Buttons (Wireframe specific) */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <button onClick={onCheckout} className="w-full max-w-md bg-rose-300 hover:bg-rose-400 text-zinc-900 font-bold py-4 rounded-xl border-2 border-zinc-800 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] transition-all uppercase tracking-widest">
                Proceed to Checkout
            </button>
            <Link to="/shop" className="w-full max-w-md bg-white hover:bg-zinc-50 text-zinc-900 font-bold py-4 rounded-xl border-2 border-zinc-800 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] transition-all uppercase tracking-widest text-center">
                Continue Shopping
            </Link>
          </div>
        </div>

        {/* 2. Right Column (Summary / Links - Matching wireframe structure) */}
        <div className="hidden lg:block w-96 flex-shrink-0">
             {/* This space is essentially empty in the specific 'cart page' wireframe 
                 aside from the footer links shown in the screenshot. 
                 I've integrated the summary logic into the main flow or could put it here. 
                 Given the wireframe is centered, I focused the main content above. 
                 For a real app, you usually want a summary here. */}
             <div className="bg-white border-2 border-zinc-800 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)]">
                <h3 className="font-black text-xl mb-4 font-handwriting-style">Summary</h3>
                <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between"><span>Subtotal</span><span>₹{total}</span></div>
                    <div className="flex justify-between"><span>Tax</span><span>₹{tax.toFixed(0)}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span>{shipping}</span></div>
                </div>
                <div className="border-t-2 border-zinc-800 pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span><span>₹{grandTotal.toFixed(0)}</span>
                </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;