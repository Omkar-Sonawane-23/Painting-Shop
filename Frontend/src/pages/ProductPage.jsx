import React from 'react';
import { ChevronRight, Star, ShoppingCart, ShieldCheck, Droplet, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ProductPage = ({ product, onBack, onAddToCart }) => {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={onBack} className="flex items-center text-zinc-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase group">
        <ChevronRight className="rotate-180 mr-2 group-hover:-translate-x-1 transition-transform" size={16} /> Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border border-zinc-800 bg-zinc-900 group">
          <div className="w-full h-full group-hover:scale-105 transition-transform duration-1000" style={{ background: product.imageColor }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/60 pointer-events-none"></div>
        </div>

        {/* Details */}
        <div className="flex flex-col pt-4">
          <div className="flex items-center gap-3 mb-4">
             <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 font-bold tracking-widest uppercase text-[10px]">{categoryName}</span>
             {product.rating >= 5 && <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold uppercase text-[10px]">Best Seller</span>}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center mb-8 space-x-6 border-b border-zinc-900 pb-8">
            <div className="flex text-yellow-500 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={i < product.rating ? "currentColor" : "none"} className={i >= product.rating ? "text-zinc-800" : ""} />
              ))}
            </div>
            <span className="text-zinc-500 text-sm font-medium">124 Reviews</span>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed font-light mb-10">
            {product.description || `Experience the intense depth and brilliance of our ${categoryName}. Engineered for smooth application and extreme durability.`}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 mb-10">
             {['UV Resistant', 'High Coverage', 'Automotive Grade'].map((feat, i) => (
               <div key={i} className="flex flex-col items-center text-center p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  {i === 0 && <ShieldCheck className="text-zinc-400 mb-2" size={24}/>}
                  {i === 1 && <Droplet className="text-zinc-400 mb-2" size={24}/>}
                  {i === 2 && <Layers className="text-zinc-400 mb-2" size={24}/>}
                  <span className="text-xs font-bold text-zinc-300 uppercase">{feat}</span>
               </div>
             ))}
          </div>

          <div className="mt-auto bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-white">₹{product.price}</span>
              <span className="text-zinc-600 text-lg uppercase font-bold">Per 100ml</span>
            </div>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-white hover:bg-zinc-200 text-black font-black py-5 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-3 text-lg uppercase transition-all hover:-translate-y-1 active:scale-95"
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