import React from 'react';
import { ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ProductPage = ({ product, onBack, onAddToCart }) => {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <button onClick={onBack} className="flex items-center text-zinc-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase">
        <ChevronRight className="rotate-180 mr-2" size={16} /> Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border border-zinc-800 bg-zinc-900">
          <div className="w-full h-full" style={{ background: product.imageColor }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/60"></div>
        </div>

        <div className="flex flex-col pt-4">
          <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-4">{categoryName}</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-8">
            <div className="flex text-yellow-500 mr-4 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < product.rating ? "currentColor" : "none"} className={i >= product.rating ? "text-zinc-800" : ""} />
              ))}
            </div>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed font-light mb-10">
            {product.description || `Premium ${categoryName} pigment.`}
          </p>

          <div className="mt-auto bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-white">₹{product.price}</span>
              <span className="text-zinc-600 text-lg uppercase font-bold">Per 100ml</span>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-white hover:bg-zinc-200 text-black font-black py-5 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-3 text-lg uppercase"
            >
              <ShoppingCart size={22} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;