import React from 'react';
import { X, ShoppingCart, Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onCheckout }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleViewFullCart = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-[#FAF9F6] border-l-2 border-zinc-800 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-6 border-b-2 border-zinc-800 flex justify-between items-center bg-[#FAF9F6]">
          <h2 className="text-xl font-black text-zinc-800 uppercase tracking-wide flex items-center gap-2 font-handwriting-style">
            Your Cart <span className="text-sm text-zinc-500 font-sans normal-case">({cartItems.length} Items)</span>
          </h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-red-500 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
              <ShoppingCart size={64} className="opacity-20" />
              <p className="text-lg font-medium">Your cart is feeling light.</p>
              <button onClick={onClose} className="text-rose-500 font-bold hover:underline">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${item.selectedSize}-${idx}`} className="flex gap-4 bg-white p-4 rounded-xl border-2 border-zinc-200 shadow-sm relative group">
                
                {/* Image */}
                <div className="h-20 w-20 rounded-lg bg-stone-100 border border-zinc-200 overflow-hidden flex-shrink-0 relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
                    <div className="w-full h-full transform scale-75 rounded-full shadow-inner" style={{ background: item.imageColor }}></div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-zinc-900 font-bold text-sm line-clamp-1 font-handwriting-style text-lg">{item.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="text-[10px] font-bold uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200 text-zinc-600">
                         {item.selectedSize || '1 Ltr'}
                       </span>
                       <span className="text-xs text-zinc-400 capitalize">{item.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mt-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center bg-white border-2 border-zinc-200 rounded-lg h-8">
                       <button 
                         onClick={() => onUpdateQuantity(idx, -1)}
                         className="px-2 h-full hover:bg-zinc-100 text-zinc-500 disabled:opacity-50"
                         disabled={item.quantity <= 1}
                       >
                         <Minus size={12} />
                       </button>
                       <span className="px-2 text-xs font-bold font-mono">{item.quantity}</span>
                       <button 
                         onClick={() => onUpdateQuantity(idx, 1)}
                         className="px-2 h-full hover:bg-zinc-100 text-zinc-500"
                       >
                         <Plus size={12} />
                       </button>
                    </div>

                    <span className="text-zinc-900 font-mono font-bold">₹{item.price * item.quantity}</span>
                  </div>
                </div>

                {/* Delete */}
                <button 
                   onClick={() => onRemove(idx)} 
                   className="absolute -top-2 -right-2 bg-white text-zinc-400 hover:text-red-500 border-2 border-zinc-200 p-1.5 rounded-full shadow-sm transition-colors"
                >
                    <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 bg-white border-t-2 border-zinc-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 font-bold uppercase tracking-wider text-xs">Subtotal</span>
              <span className="text-2xl font-black text-zinc-900 font-mono">₹{total}</span>
            </div>
            
            <div className="space-y-3">
                <button 
                onClick={onCheckout} 
                className="w-full bg-rose-300 hover:bg-rose-400 text-zinc-900 font-bold py-4 rounded-xl border-2 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] transition-all flex items-center justify-center gap-2"
                >
                Proceed to Checkout <ArrowRight size={18}/>
                </button>
                
                <button 
                onClick={handleViewFullCart}
                className="w-full bg-white hover:bg-zinc-50 text-zinc-900 font-bold py-3 rounded-xl border-2 border-zinc-900 transition-colors"
                >
                View Full Cart
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;