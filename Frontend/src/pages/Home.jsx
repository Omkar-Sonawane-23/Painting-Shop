import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const Home = ({ onShopNow, onCategoryClick }) => (
  <>
    {/* Hero Section */}
    <div className="relative bg-zinc-950 overflow-hidden h-[500px] flex items-center border-b border-zinc-800">
      <div className="absolute inset-0">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950 opacity-40"></div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/10 to-transparent"></div>
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
        <div className="max-w-2xl animate-in slide-in-from-bottom-10 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">New Collection 2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            THE ART OF <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">AUTOMOTIVE</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-8 max-w-md">Transform your vehicle with our premium grade pearls. Engineered for depth, durability, and head-turning brilliance.</p>
          <div className="flex gap-4">
            <button onClick={onShopNow} className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 flex items-center gap-2 transition-transform active:scale-95">
              Shop Now <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-800 transition-colors">
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Categories Row */}
      <div className="mb-20">
        <div className="flex justify-between items-end mb-8">
           <h2 className="text-2xl font-black text-white uppercase tracking-wide">Shop By Category</h2>
           <button onClick={onShopNow} className="text-yellow-500 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">View All <ArrowRight size={16}/></button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(cat.id)}
              className="group cursor-pointer flex flex-col items-center text-center gap-4"
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${cat.color} p-1 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-zinc-800 group-hover:ring-yellow-500/50`}>
                 <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${cat.color} opacity-80`}></div>
                 </div>
              </div>
              <span className="text-sm font-bold text-zinc-400 group-hover:text-white uppercase tracking-wider">{cat.name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default Home;