import React from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, activePage, setActivePage, isMobileMenuOpen, setIsMobileMenuOpen, onOpenCart }) => {
  const navItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <nav className="bg-zinc-950/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-zinc-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => { setActivePage('home'); setIsMobileMenuOpen(false); }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-600 rounded-lg mr-3 transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.4)] flex items-center justify-center">
              <span className="font-black text-black text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">XTREME</span>
              <span className="font-bold text-[10px] text-yellow-500 tracking-[0.3em] leading-none mt-1">KOLORZ</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button 
                  key={item}
                  onClick={() => setActivePage(item.toLowerCase())} 
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${activePage === item.toLowerCase() ? 'text-yellow-500' : 'text-zinc-400 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div 
              className="relative cursor-pointer hover:text-yellow-500 transition-colors p-2 group"
              onClick={onOpenCart}
            >
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-zinc-950 animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full z-50 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActivePage(item.toLowerCase()); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-4 rounded-xl text-lg font-bold ${activePage === item.toLowerCase() ? 'bg-zinc-900 text-yellow-500 border border-zinc-800' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}
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