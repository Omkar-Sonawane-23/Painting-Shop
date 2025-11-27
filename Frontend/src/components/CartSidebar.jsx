import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, onClose, cartItems, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full bg-white shadow-2xl flex flex-col">
          
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
            <h2 className="text-lg font-bold text-black uppercase tracking-wider">Your Cart</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-black transition-colors">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <p>Your cart is empty.</p>
                <button onClick={onClose} className="mt-4 text-sky-500 hover:text-sky-600 font-bold uppercase text-sm">
                  Start Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cartItems.map((item, index) => (
                  <li key={`${item.id}-${index}`} className="flex py-2 border-b border-gray-100 pb-4 last:border-0">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-black">
                          <h3>{item.name}</h3>
                          <p className="ml-4 font-mono font-bold">₹{item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty 1</p>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(index)}
                          className="font-medium text-red-500 hover:text-red-600 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-black mb-4">
                <p>Subtotal</p>
                <p className="font-mono font-bold">₹{total}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                to="/cart"
                onClick={onClose}
                className="flex items-center justify-center rounded-sm border border-transparent bg-sky-500 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-sky-600 uppercase tracking-widest w-full transition-colors"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;