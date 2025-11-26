import React from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';

const Navbar = ({ cartCount, activePage, setActivePage, isMobileMenuOpen, setIsMobileMenuOpen, onOpenCart }) => {
  const navItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* 1. Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => { setActivePage('home'); setIsMobileMenuOpen(false); }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-600 rounded-lg mr-3 flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <span className="font-black text-black text-xl">K</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none text-white">XTREME</span>
              <span className="font-bold text-[10px] text-yellow-500 tracking-[0.4em] leading-none mt-1">KOLORZ</span>
            </div>
          </div>

          {/* 2. Search Bar */}
          <div className="flex-1 max-w-xl px-4 hidden md:block">
            <div className="relative group">
              <input 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2.5 pl-5 pr-12 text-sm text-zinc-200 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all placeholder-zinc-500" 
                placeholder="Search for paints, pearls, or pigments..." 
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-zinc-800 p-1.5 rounded-full text-zinc-400 hover:text-yellow-500 hover:bg-zinc-700 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* 3. Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden lg:flex items-center gap-2 cursor-pointer group hover:text-white text-zinc-400">
               <User size={20} className="group-hover:text-yellow-500 transition-colors"/>
               <div className="flex flex-col text-xs">
                 <span className="font-light">Welcome</span>
                 <span className="font-bold text-white group-hover:text-yellow-500">Sign In</span>
               </div>
            </div>

            <button className="text-zinc-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-zinc-900 hidden sm:block">
               <Heart size={22} />
            </button>

            <button 
              className="relative text-zinc-400 hover:text-yellow-500 transition-colors p-2 rounded-full hover:bg-zinc-900 group"
              onClick={onOpenCart}
            >
              <ShoppingCart size={22} className="group-hover:scale-110 transition-transform"/>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center border-2 border-zinc-950 animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="hidden md:block border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex space-x-8 py-3 overflow-x-auto">
              {navItems.map((item) => (
                <button 
                  key={item}
                  onClick={() => setActivePage(item.toLowerCase())}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === item.toLowerCase() ? 'text-yellow-500' : 'text-zinc-500 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full z-50 shadow-2xl animate-in slide-in-from-top-5">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 px-4 text-sm text-white mb-4" placeholder="Search..." />
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActivePage(item.toLowerCase()); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-bold ${activePage === item.toLowerCase() ? 'bg-zinc-900 text-yellow-500' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;