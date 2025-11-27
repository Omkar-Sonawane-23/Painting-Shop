import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Banner - Kept Red for contrast as per original branding, or can be light blue if preferred. Keeping it red for 'Sale' urgency but clean. */}
      <div className="bg-black text-white text-xs font-bold text-center py-2 px-4 tracking-widest">
        HUGE SAVINGS UP TO 30% SITEWIDE | BLACK FRIDAY IS LIVE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <h1 className="text-2xl font-black italic tracking-tighter text-black group-hover:text-sky-500 transition-colors">
              XTREME <span className="text-sky-500">KOLORZ</span>
            </h1>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
            <input
              type="text"
              placeholder="Search for Adamantium, Blue Dream..."
              className="w-full bg-gray-100 text-black rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500 border border-gray-200"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-black hover:text-sky-500 font-bold uppercase tracking-wider text-sm transition-colors">Shop Colors</Link>
            <Link to="/contact" className="text-black hover:text-sky-500 font-bold uppercase tracking-wider text-sm transition-colors">Contact</Link>
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-black cursor-pointer hover:text-sky-500 transition-colors" />
              <Link to="/cart" className="relative group">
                <ShoppingCart className="h-6 w-6 text-black group-hover:text-sky-500 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-sky-500">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" className="block px-3 py-3 text-black font-bold border-b border-gray-100 hover:text-sky-500">Home</Link>
            <Link to="/shop" className="block px-3 py-3 text-black font-bold border-b border-gray-100 hover:text-sky-500">Shop All Colors</Link>
            <Link to="/contact" className="block px-3 py-3 text-black font-bold hover:text-sky-500">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;