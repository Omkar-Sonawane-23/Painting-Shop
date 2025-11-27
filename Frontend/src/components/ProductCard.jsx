import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-sm overflow-hidden border border-gray-200 hover:border-sky-500 shadow-sm hover:shadow-md transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        {product.tag && (
          <span className="absolute top-2 left-2 bg-sky-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
            {product.tag}
          </span>
        )}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
          />
        </div>
        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-black text-white font-bold py-2 px-6 uppercase text-sm tracking-widest hover:bg-sky-500 transition-colors">
            View Details
          </span>
        </div>
      </Link>
      
      <div className="p-4">
        <p className="text-xs text-sky-500 font-bold uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-black text-lg font-bold mb-1 truncate group-hover:text-sky-600 transition-colors">{product.name}</h3>
        <p className="text-gray-500 text-xs mb-4 line-clamp-1">{product.description}</p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-black font-mono text-lg font-bold">₹{product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="text-gray-400 hover:text-sky-500 transition-colors p-2 hover:bg-gray-50 rounded-full"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;