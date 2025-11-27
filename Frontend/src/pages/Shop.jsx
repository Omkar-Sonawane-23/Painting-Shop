// Frontend/src/pages/Shop.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

const Shop = ({ addToCart }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCat, setActiveCat] = useState('All');

  const filtered = activeCat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCat);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shop Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-6 border-b border-slate-200">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Product Catalog</h1>
            <p className="text-slate-500 mt-2">Showing {filtered.length} premium pigments</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button 
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-md text-sm font-bold"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter size={16} /> Filters
            </button>
            <div className="relative">
              <select className="appearance-none bg-white border border-slate-300 text-slate-700 py-2 pl-4 pr-10 rounded-md text-sm font-medium focus:outline-none focus:border-slate-900 cursor-pointer">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <aside className={`md:w-64 flex-shrink-0 ${filterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-28">
              <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">Categories</h3>
              <div className="space-y-1">
                {['All', ...CATEGORIES.map(c => c.id)].map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCat(cat)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeCat === cat ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    {cat === 'All' ? 'All Products' : CATEGORIES.find(c => c.id === cat)?.name}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-wider">Effect Type</h3>
                <div className="space-y-2">
                  {['Metallic', 'Pearlescent', 'Color Shift', 'Ghost'].map(type => (
                    <label key={type} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-slate-900">
                      <input type="checkbox" className="rounded border-gray-300 text-slate-900 focus:ring-slate-900" />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(product => (
              <div key={product.id} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="aspect-square relative bg-slate-100 overflow-hidden border-b border-slate-100">
                  <div 
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                    style={{ background: product.imageColor }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Link to={`/product/${product.id}`} className="absolute inset-0"></Link>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{product.code}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className={i >= Math.floor(product.rating) ? 'text-gray-300' : ''} />)}
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-yellow-600 transition-colors mb-2">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{product.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-bold">Per 100g</span>
                      <span className="text-lg font-black text-slate-900">₹{product.price}</span>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white rounded-md hover:bg-yellow-600 transition-colors"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;