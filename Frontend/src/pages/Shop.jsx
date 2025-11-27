import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

const Shop = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Solid Pearls', 'Interference Pearls', 'Carbon Pearls', 'OEM+ Pearls', 'Special Effect Pearls', 'Chroma Pearls'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-black italic uppercase mb-4">Shop All Colors</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our complete catalog of automotive grade pearls. Filter by type to find your perfect finish.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 sticky top-24 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-black font-bold uppercase tracking-wider flex items-center">
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </h3>
              </div>
              
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${
                      activeCategory === cat 
                        ? 'bg-sky-500 text-white font-bold shadow-md' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500 text-sm">Showing {filteredProducts.length} results</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>Sort by:</span>
                <button className="flex items-center font-bold text-black hover:text-sky-500 transition-colors">
                  Featured <ChevronDown className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;