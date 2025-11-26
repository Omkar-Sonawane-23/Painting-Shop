import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  // Helper to safely get category name
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name.split(' ')[0] || 'Pearl';

  return (
    <div 
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 group flex flex-col shadow-lg cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <div 
          className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          style={{ background: product.imageColor }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/20 opacity-90"></div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-3 right-3 bg-white text-black p-3 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-yellow-400 active:scale-95 z-10"
        >
          <ShoppingCart size={18} />
        </button>
        
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 shadow-sm">
          {categoryName}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{product.name}</h3>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} className={i >= product.rating ? "text-zinc-700" : ""} />
            ))}
          </div>
        </div>
        <div className="mt-auto flex justify-between items-end pt-4 border-t border-zinc-800/50">
          <div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold mb-0.5">Per 100ml</p>
            <p className="text-xl font-bold text-white font-mono tracking-tight">₹{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;