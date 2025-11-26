import React from 'react';
import { ChevronRight, ShieldCheck, Droplet, Layers } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const Home = ({ onShopNow, onCategoryClick }) => {
  return (
    <>
      <div className="relative bg-zinc-950 overflow-hidden h-[600px] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10"></div>
          {/* Use a local image or URL here */}
          <div className="w-full h-full bg-zinc-900 opacity-50"></div> 
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
              <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">Premium Grade Pigments</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              PAINT THE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">IMPOSSIBLE</span>
            </h1>
            <button 
              onClick={onShopNow}
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 flex items-center gap-2"
            >
              Explore Colors <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-10">PEARL TYPES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => onCategoryClick(cat.id)}
              className="group bg-zinc-900 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all border border-zinc-800 hover:border-yellow-500/50 h-48 flex flex-col justify-between relative overflow-hidden"
            >
              <div className={`absolute -top-8 -right-8 w-32 h-32 ${cat.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <h3 className="text-base font-bold text-white uppercase relative z-10">{cat.name}</h3>
              <p className="text-[10px] text-zinc-500 relative z-10">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;