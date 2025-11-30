// File: Frontend/src/pages/Shop.jsx
import React, { useState, useEffect } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = ({ onAddToCart }) => {
  const location = useLocation();
  
  // Use state from navigation, defaulting to 'All'
  const initialCategory = location.state?.category || 'All';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortMethod, setSortMethod] = useState('Featured'); // 'Featured', 'PriceLow', 'PriceHigh'
  
  // Update category if navigation state changes (e.g., coming from Home page links)
  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  const categories = ['All', 'Solid Pearls', 'Interference Pearls', 'Carbon Pearls', 'OEM+ Pearls', 'Special Effect Pearls', 'Chroma Pearls'];

  // 1. Filtering
  let filteredProducts = activeCategory === 'All' 
    ? [...products] 
    : products.filter(p => p.category === activeCategory);

  // 2. Sorting
  if (sortMethod === 'PriceLow') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortMethod === 'PriceHigh') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  // 'Featured' (default order from products.js) is used otherwise

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
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-black font-black uppercase tracking-wider flex items-center">
                  <Filter className="h-4 w-4 mr-2" /> Categories
                </h3>
              </div>
              
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                      activeCategory === cat 
                        ? 'bg-black text-white font-black shadow-md' 
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
              
              {/* Sort Dropdown */}
              <div className="relative text-sm text-gray-500">
                <label className="mr-2 hidden sm:inline">Sort by:</label>
                <select
                    value={sortMethod}
                    onChange={(e) => setSortMethod(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 py-2 pl-3 pr-8 rounded-md text-black font-bold focus:outline-none focus:ring-1 focus:ring-sky-500 cursor-pointer"
                >
                    <option value="Featured">Featured</option>
                    <option value="PriceLow">Price: Low to High</option>
                    <option value="PriceHigh">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
              {filteredProducts.length === 0 && (
                 <div className="col-span-full text-center py-10 bg-gray-50 rounded-lg text-gray-500">
                    No products found in this category.
                 </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;