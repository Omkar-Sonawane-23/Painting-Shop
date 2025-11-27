import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Star, ShoppingCart, Search } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/products';

const Shop = ({ addToCart }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCat, setActiveCat] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = activeCat === 'All' || p.category === activeCat;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      
      {/* Header / Filter Bar */}
      <div className="bg-zinc-50 border-b border-zinc-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-zinc-900 uppercase tracking-tighter mb-4">
            Product Catalog
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input 
                type="text" 
                placeholder="Search colors, codes..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-shadow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden px-6 py-3 bg-white border border-zinc-200 rounded-xl font-bold text-zinc-700 flex items-center gap-2"
            >
              <Filter size={18} /> Filters
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* --- SIDEBAR FILTERS --- */}
          <aside className={`md:w-64 flex-shrink-0 ${filterOpen ? 'block' : 'hidden md:block'}`}>
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Categories</h3>
                <div className="space-y-1">
                  <button 
                    onClick={() => setActiveCat('All')}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${activeCat === 'All' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
                  >
                    All Products
                  </button>
                  {CATEGORIES.map(cat => (
                    <button 
                      key={cat.id} 
                      onClick={() => setActiveCat(cat.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition-colors ${activeCat === cat.id ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-4">Finish</h3>
                <div className="space-y-3">
                  {['Metallic', 'Pearlescent', 'Color Shift', 'Holographic'].map(type => (
                    <label key={type} className="flex items-center gap-3 text-sm font-medium text-zinc-600 cursor-pointer group">
                      <div className="w-4 h-4 border-2 border-zinc-300 rounded flex items-center justify-center group-hover:border-zinc-900">
                        {/* Checkbox mock */}
                      </div>
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- PRODUCT GRID --- */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => (
                <div key={product.id} className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  
                  {/* Image */}
                  <Link to={`/product/${product.id}`} className="aspect-square relative bg-zinc-100 overflow-hidden border-b border-zinc-100">
                    <div 
                      className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                      style={{ background: product.imageColor }}
                    ></div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-zinc-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Details
                      </span>
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider bg-zinc-50 px-2 py-1 rounded">{product.code}</span>
                      <div className="flex text-yellow-500 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} fill="currentColor" className={i >= Math.floor(product.rating) ? 'text-zinc-200' : ''} />
                        ))}
                      </div>
                    </div>
                    
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-lg font-bold text-zinc-900 leading-tight group-hover:text-rose-600 transition-colors mb-2">{product.name}</h3>
                    </Link>
                    
                    <p className="text-xs text-zinc-500 line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
                    
                    <div className="mt-auto pt-4 border-t border-zinc-50 flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] text-zinc-400 uppercase font-bold">Price</span>
                        <span className="text-lg font-black text-zinc-900">₹{product.price}</span>
                      </div>
                      <button 
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                        className="w-10 h-10 flex items-center justify-center bg-zinc-900 text-white rounded-xl hover:bg-rose-500 transition-colors shadow-md active:scale-90"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filtered.length === 0 && (
              <div className="text-center py-20 bg-zinc-50 rounded-3xl border border-dashed border-zinc-200">
                <p className="text-zinc-400 font-bold">No pigments found matching your search.</p>
                <button onClick={() => {setActiveCat('All'); setSearchTerm('')}} className="mt-4 text-rose-500 text-sm font-bold underline">Clear Filters</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;