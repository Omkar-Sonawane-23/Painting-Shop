import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Star, ShoppingCart, ShieldCheck, Droplet, Layers, Loader } from 'lucide-react';
import { CATEGORIES, INITIAL_PRODUCTS } from '../data/products';

const ProductPage = ({ addToCart, products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = products.find(p => p.id === productId) || INITIAL_PRODUCTS.find(p => p.id === productId);
    setProduct(foundProduct);
    window.scrollTo(0,0);
  }, [id, products]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin text-yellow-500" size={40} />
      </div>
    );
  }

  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name;

  return (
    <div className="max-w-7xl mx-auto py-6 md:py-12 px-4 sm:px-6 lg:px-8 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-zinc-400 hover:text-white mb-6 md:mb-8 transition-colors text-xs md:text-sm font-bold uppercase group"
      >
        <ChevronRight className="rotate-180 mr-1 md:mr-2 group-hover:-translate-x-1 transition-transform" size={14} /> Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-square border border-zinc-800 bg-zinc-900 group">
          <div className="w-full h-full group-hover:scale-105 transition-transform duration-1000" style={{ background: product.imageColor }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/60 pointer-events-none"></div>
        </div>

        {/* Details */}
        <div className="flex flex-col pt-2 md:pt-4">
          <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
             <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-500 font-bold tracking-widest uppercase text-[10px]">{categoryName}</span>
             {product.rating >= 5 && <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold uppercase text-[10px]">Best Seller</span>}
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">{product.name}</h1>
          
          <div className="flex items-center mb-6 md:mb-8 space-x-6 border-b border-zinc-900 pb-6 md:pb-8">
            <div className="flex text-yellow-500 gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i < product.rating ? "currentColor" : "none"} className={i >= product.rating ? "text-zinc-800" : ""} />
              ))}
            </div>
            <span className="text-zinc-500 text-xs md:text-sm font-medium">124 Reviews</span>
          </div>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-10">
            {product.description || `Experience the intense depth and brilliance of our ${categoryName}. Engineered for smooth application and extreme durability.`}
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10">
             {['UV Resistant', 'High Coverage', 'Automotive Grade'].map((feat, i) => (
               <div key={i} className="flex flex-col items-center text-center p-3 md:p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                  {i === 0 && <ShieldCheck className="text-zinc-400 mb-2 w-5 h-5 md:w-6 md:h-6" />}
                  {i === 1 && <Droplet className="text-zinc-400 mb-2 w-5 h-5 md:w-6 md:h-6" />}
                  {i === 2 && <Layers className="text-zinc-400 mb-2 w-5 h-5 md:w-6 md:h-6" />}
                  <span className="text-[10px] md:text-xs font-bold text-zinc-300 uppercase leading-tight">{feat}</span>
               </div>
             ))}
          </div>

          <div className="mt-auto bg-zinc-900/50 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-zinc-800">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-black text-white">₹{product.price}</span>
              <span className="text-zinc-600 text-xs md:text-lg uppercase font-bold">Per 100ml</span>
            </div>
            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-white hover:bg-zinc-200 text-black font-black py-4 md:py-5 px-8 rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center gap-3 text-base md:text-lg uppercase transition-all hover:-translate-y-1 active:scale-95"
            >
              <ShoppingCart size={20} className="md:w-[22px] md:h-[22px]" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;