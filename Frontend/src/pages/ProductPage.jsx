// Frontend/src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Star, ShoppingCart, ShieldCheck, Droplet, Layers, Download, CheckCircle } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = PRODUCTS.find(p => p.id === productId);
    setProduct(foundProduct);
    window.scrollTo(0,0);
  }, [id]);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name;

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-slate-400 hover:text-slate-900 mb-8 transition-colors text-xs font-bold uppercase group"
        >
          <ChevronRight className="rotate-180 mr-1 group-hover:-translate-x-1 transition-transform" size={14} /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
               <div className="w-full h-full" style={{ background: product.imageColor }}></div>
               {/* Zoom Hint */}
               <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm pointer-events-none">
                 High Definition Pearl
               </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="aspect-square rounded-lg border border-slate-200 bg-slate-50 cursor-pointer hover:border-slate-900"></div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wide">
                {categoryName}
              </span>
              <span className="text-xs font-bold text-green-600 flex items-center gap-1"><CheckCircle size={12}/> In Stock</span>
            </div>
            
            <h1 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">{product.name}</h1>
            <p className="text-sm font-mono text-slate-500 mb-6">SKU: {product.code}</p>

            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
              <div>
                <span className="text-3xl font-black text-slate-900">₹{product.price}</span>
                <span className="text-sm text-slate-500 ml-2">/ 100g</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="text-sm text-slate-600">
                <strong>Bulk Price:</strong> <span className="text-yellow-600 cursor-pointer hover:underline">Login for trade rates</span>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {product.description} Ideal for automotive finishes, liquid wraps, and industrial powder coating.
            </p>

            {/* Technical Specs */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
              <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase">Product Features</h4>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {product.features?.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> {f}
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> Non-Toxic</li>
                <li className="flex items-center gap-2 text-sm text-slate-600"><div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div> 600°F Temp Res</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-slate-300 rounded-md w-32">
                <button className="px-3 py-2 text-slate-500 hover:bg-slate-100 font-bold">-</button>
                <input type="text" defaultValue="1" className="w-full text-center text-slate-900 font-bold outline-none border-x border-slate-300 h-full" readOnly />
                <button className="px-3 py-2 text-slate-500 hover:bg-slate-100 font-bold">+</button>
              </div>
              <button onClick={() => addToCart(product)} className="flex-1 py-4 bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 rounded-md shadow-xl shadow-yellow-500/10 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all">
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>

            <div className="flex items-center gap-4">
               <button className="flex-1 py-3 bg-white text-slate-600 border border-slate-300 hover:border-slate-900 rounded-md font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-all">
                 <Download size={16} /> Download TDS
               </button>
               <button className="flex-1 py-3 bg-white text-slate-600 border border-slate-300 hover:border-slate-900 rounded-md font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-2 transition-all">
                 <Download size={16} /> Download SDS
               </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;