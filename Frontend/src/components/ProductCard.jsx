import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  // Helper to safely get category name for display
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name || 'Pearl';

  return (
    <div className="group relative bg-white border-2 border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] transition-all duration-200 h-full flex flex-col">
      
      {/* Image Section */}
      <div className="relative aspect-square border-b-2 border-zinc-800 bg-stone-100 overflow-hidden">
        <div 
          className="w-full h-full transform group-hover:scale-110 transition-transform duration-500" 
          style={{ background: product.imageColor }}
        ></div>
        
        {/* Overlay Pattern (Wireframe style) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] pointer-events-none"></div>

        <Link 
          to={`/product/${product.id}`}
          className="absolute inset-0 z-10"
        />

        <span className="absolute top-3 left-3 bg-white/90 border-2 border-zinc-800 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest z-20">
          {categoryName.split(' ')[0]}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="block group-hover:text-rose-500 transition-colors">
           <h3 className="text-lg font-black text-zinc-900 mb-1 leading-tight">{product.name}</h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
           <div className="flex text-yellow-400">
             {[...Array(5)].map((_, i) => (
               <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} strokeWidth={2.5} className="text-yellow-400" />
             ))}
           </div>
           <span className="text-xs font-bold text-zinc-400 pt-0.5">(24)</span>
        </div>

        <p className="text-xs font-medium text-zinc-500 line-clamp-2 mb-6 leading-relaxed">
          {product.description || "Premium automotive grade pearl pigment. High UV resistance and excellent coverage."}
        </p>

        <div className="mt-auto flex items-center justify-between">
           <div>
             <span className="block text-[10px] font-bold text-zinc-400 uppercase">Price / 100g</span>
             <span className="text-xl font-black text-zinc-900 font-mono">₹{product.price}</span>
           </div>
           
           <button 
             onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
             className="w-10 h-10 bg-yellow-400 hover:bg-yellow-300 border-2 border-zinc-800 rounded-lg flex items-center justify-center transition-colors text-zinc-900 active:scale-95"
             title="Add to Cart"
           >
             <ShoppingCart size={20} strokeWidth={2.5} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;