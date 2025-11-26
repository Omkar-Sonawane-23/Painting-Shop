import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name.split(' ')[0] || 'Pearl';

  return (
    <div 
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/30 transition-all duration-300 group flex flex-col shadow-lg cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-800">
        <div 
          className="w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
          style={{ background: product.imageColor }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-3 right-3 bg-white text-black p-3 rounded-full shadow-xl translate-y-12 group-hover:translate-y-0 transition-all duration-300 hover:bg-yellow-400 z-10"
        >
          <ShoppingCart size={18} />
        </button>
        
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
          {categoryName}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
           <h3 className="text-base font-bold text-white truncate pr-2">{product.name}</h3>
           <div className="flex text-yellow-500 text-[10px] items-center gap-0.5 bg-yellow-500/10 px-1.5 py-0.5 rounded">
              <span>{product.rating}</span> <Star size={10} fill="currentColor"/>
           </div>
        </div>
        <p className="text-zinc-500 text-xs line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
        
        <div className="mt-auto flex justify-between items-center pt-3 border-t border-zinc-800/50">
          <p className="text-lg font-bold text-white font-mono">₹{product.price}</p>
          <span className="text-[10px] text-zinc-500 uppercase">In Stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;