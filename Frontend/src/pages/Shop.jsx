import React, { useMemo } from 'react';
import { Filter, Loader } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../data/products';

const Shop = ({ products, loading, activeCategory, setActiveCategory, onViewDetails, onAddToCart }) => {
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sticky top-24">
            <div className="flex items-center mb-6 pb-4 border-b border-zinc-800">
              <Filter size={18} className="mr-2 text-yellow-500" />
              <h3 className="font-bold text-lg text-white tracking-wide">FILTERS</h3>
            </div>
            <div className="space-y-1">
              <button onClick={() => setActiveCategory('all')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${activeCategory === 'all' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}>ALL PEARLS</button>
              {CATEGORIES.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${activeCategory === cat.id ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}>{cat.name}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 md:hidden">
             <span className="text-white font-bold">{filteredProducts.length} Products</span>
             <button className="flex items-center text-sm text-yellow-500 font-bold gap-2"><Filter size={16}/> Filter</button>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
              <Loader size={40} className="animate-spin mb-4 text-yellow-500" />
              <p className="text-sm font-bold uppercase tracking-widest">Loading Pigments...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} onViewDetails={onViewDetails} onAddToCart={onAddToCart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;