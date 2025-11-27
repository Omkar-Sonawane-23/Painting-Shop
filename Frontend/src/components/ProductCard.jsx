import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const ProductCard = ({ product, onAddToCart }) => {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name || 'Pearl';

  return (
    <div className="group relative bg-white border-2 border-zinc-800 rounded-2xl overflow-hidden 
      hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(39,39,42,1)]
      transition-all duration-300 h-full flex flex-col">

      {/* =============================
          IMAGE SECTION (Improved)
      ============================== */}
      <div className="relative aspect-square border-b-2 border-zinc-800 overflow-hidden bg-zinc-100">
        
        {/* If product.image exists → show full image */}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          /* If no image → fallback to color block */
          <div
            className="w-full h-full transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundColor: product.imageColor || '#ccc' }}
          />
        )}

        {/* Texture overlay (low opacity) */}
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none"></div>

        <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" />

        <span className="absolute top-3 left-3 bg-white/90 border-2 border-zinc-800 px-3 py-1 rounded-lg 
          text-[11px] font-black uppercase tracking-widest z-20 text-zinc-900 shadow-sm">
          {categoryName}
        </span>
      </div>

      {/* =============================
          CONTENT SECTION
      ============================== */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Title */}
        <Link to={`/product/${product.id}`} className="group-hover:text-rose-500 transition-colors">
          <h3 className="text-xl font-black text-zinc-900 mb-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < product.rating ? "currentColor" : "none"}
                strokeWidth={2.5}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-zinc-400">(24)</span>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-500 line-clamp-2 mb-6 leading-relaxed">
          {product.description || "Premium automotive-grade pearl pigment with high UV resistance and excellent coverage."}
        </p>

        {/* Price + Add button */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="block text-[11px] font-bold text-zinc-400 uppercase">
              Price / 100g
            </span>
            <span className="text-2xl font-black text-zinc-900 font-mono">
              ₹{product.price}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="w-11 h-11 bg-yellow-400 hover:bg-yellow-300 border-2 border-zinc-800 rounded-lg 
              flex items-center justify-center transition-all text-zinc-900 
              active:scale-95 active:translate-y-[1px]
              shadow-[2px_2px_0px_rgba(39,39,42,1)] active:shadow-none"
            title="Add to Cart"
          >
            <ShoppingCart size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
