import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Star, ShoppingCart, ShieldCheck, Droplet, Layers, Download, CheckCircle, ArrowLeft } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    // Find product by ID (handle string/number mismatch)
    const foundProduct = PRODUCTS.find(p => p.id.toString() === id);
    setProduct(foundProduct);
    
    // Force scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-zinc-200 border-t-zinc-900 rounded-full animate-spin"></div>
        <p className="text-zinc-500 font-medium">Loading Pigment...</p>
      </div>
    );
  }

  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name || "Premium Pearl";

  return (
    <div className="min-h-screen bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Breadcrumb Header */}
      <div className="bg-zinc-50 border-b border-zinc-200 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-500">
            <button onClick={() => navigate('/')} className="hover:text-zinc-900 transition-colors">Home</button>
            <ChevronRight size={12} />
            <button onClick={() => navigate('/shop')} className="hover:text-zinc-900 transition-colors">Shop</button>
            <ChevronRight size={12} />
            <span className="text-zinc-900 truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="space-y-4 lg:space-y-6">
            <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200 relative shadow-sm group">
               <div 
                 className="w-full h-full transition-transform duration-700 group-hover:scale-110" 
                 style={{ background: product.imageColor }}
               ></div>
               
               {/* Shine Overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/30 pointer-events-none"></div>
               
               <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                 <span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-widest shadow-sm border border-white/50">
                   {product.code}
                 </span>
               </div>
            </div>
            
            <div className="grid grid-cols-4 gap-3 lg:gap-4">
              {[0, 1, 2, 3].map((i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-xl border-2 overflow-hidden transition-all ${activeImage === i ? 'border-zinc-900 scale-95 ring-2 ring-zinc-200' : 'border-transparent hover:border-zinc-300'}`}
                >
                  <div className="w-full h-full" style={{ background: product.imageColor, opacity: 0.7 + (i * 0.1) }}></div>
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="flex flex-col h-full">
            <div className="mb-6 lg:mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-rose-50 text-rose-600 border border-rose-100 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {categoryName}
                </span>
                <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold bg-yellow-50 px-2 py-1 rounded-full border border-yellow-100">
                  <Star size={12} fill="currentColor" /> <span>{product.rating} (128 Reviews)</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-900 mb-4 tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-base lg:text-lg text-zinc-600 leading-relaxed font-normal pl-4 border-l-4 border-yellow-400">
                {product.description} Engineered for professional automotive refinishing, custom motorcycles, and industrial applications.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-8">
              {product.features?.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3 lg:p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:bg-zinc-100 transition-colors">
                  <CheckCircle size={16} className="text-zinc-400 flex-shrink-0" />
                  <span className="text-xs lg:text-sm font-bold text-zinc-700">{feat}</span>
                </div>
              ))}
            </div>

            {/* Pricing & Cart */}
            <div className="p-6 lg:p-8 bg-zinc-900 rounded-2xl lg:rounded-3xl text-white shadow-xl mb-8 mt-auto relative overflow-hidden group">
              {/* Subtle texture */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
              
              <div className="relative z-10 flex items-end justify-between mb-6">
                <div>
                  <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-1">Retail Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl lg:text-4xl font-black tracking-tight">₹{product.price}</span>
                    <span className="text-zinc-500 font-medium">/ 100g</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-emerald-400 font-bold mb-1 flex items-center justify-end gap-1">
                    <CheckCircle size={12} fill="currentColor" className="text-emerald-900"/> In Stock
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wide">Ships in 24hrs</span>
                </div>
              </div>

              <button 
                onClick={() => addToCart(product)}
                className="relative z-10 w-full py-4 bg-white text-zinc-900 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-lg active:scale-[0.98]"
              >
                <ShoppingCart size={20} /> Add to Order
              </button>
            </div>

            {/* Downloads */}
            <div className="flex gap-3 lg:gap-4">
              <button className="flex-1 py-3 border border-zinc-200 rounded-lg text-[10px] lg:text-xs font-bold text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                <Download size={14}/> Tech Data Sheet
              </button>
              <button className="flex-1 py-3 border border-zinc-200 rounded-lg text-[10px] lg:text-xs font-bold text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                <Download size={14}/> Safety Data Sheet
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;