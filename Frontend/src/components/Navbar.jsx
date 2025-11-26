import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount, isMobileMenuOpen, setIsMobileMenuOpen, onOpenCart }) => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'Partner', path: '#' }, // Placeholder for Partner page
    { name: 'FAQ', path: '#' },     // Placeholder for FAQ page
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 sticky top-0 z-50 shadow-xl font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo (Left) */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/50 rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(234,179,8,0.2)]">
               {/* Simple Logo Pattern resembling the sketch's hatched box */}
               <span className="font-black text-yellow-500 text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight leading-none">XTREME</span>
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase leading-none">Kolorz</span>
            </div>
          </Link>

          {/* 2. Center Navigation (As per sketch) */}
          <div className="hidden md:flex items-center justify-center space-x-8">
             {navItems.map((item) => (
               <NavLink 
                 key={item.name}
                 to={item.path}
                 className={({ isActive }) => 
                   `text-sm font-medium transition-colors hover:text-yellow-500 ${isActive && item.path !== '#' ? 'text-yellow-500' : 'text-zinc-400'}`
                 }
               >
                 {item.name}
               </NavLink>
             ))}
          </div>

          {/* 3. Right Section: Order Button + Cart (As per sketch) */}
          <div className="hidden md:flex items-center gap-6">
             {/* "Order" Button - Pinkish/Red style from sketch */}
             <Link 
               to="/shop" 
               className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-bold rounded-full shadow-lg shadow-rose-900/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
             >
               Order
             </Link>

             {/* Cart Icon */}
             <button 
               className="relative text-zinc-300 hover:text-white transition-colors group"
               onClick={onOpenCart}
             >
               <ShoppingCart size={24} strokeWidth={2} />
               {cartCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-zinc-950">
                   {cartCount}
                 </span>
               )}
             </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full z-50">
          <div className="px-6 pt-4 pb-8 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-lg font-medium text-zinc-300 hover:text-yellow-500"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
               <Link 
                 to="/shop"
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="px-6 py-2 bg-rose-500 text-white font-bold rounded-full text-sm"
               >
                 Order Now
               </Link>
               <button onClick={onOpenCart} className="flex items-center gap-2 text-zinc-300">
                  <ShoppingCart size={20} /> <span>Cart ({cartCount})</span>
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;