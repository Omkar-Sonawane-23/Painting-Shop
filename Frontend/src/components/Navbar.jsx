// File: Frontend/src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About Us', path: '/about' }, // New Link
    { name: 'Shop Colors', path: '/shop' },
    { name: 'Services', path: '/services' }, // Updated Link
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Top Banner: Adjusted for better mobile wrapping and visibility */}
      <div className="bg-black text-sky-400 text-[10px] sm:text-xs font-bold text-center py-2 px-4 tracking-wide sm:tracking-widest overflow-hidden">
        HUGE SAVINGS UP TO 30% SITEWIDE | FREE SHIPPING ON ORDERS OVER ₹5000
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
          <div className="hidden lg:flex flex-1 max-w-lg mx-8 relative">
            <input
              type="text"
              placeholder="Search for Adamantium, Blue Dream..."
              className="w-full bg-gray-100 text-black rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-500 border border-gray-200"
            />
            <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-black hover:text-sky-500 font-bold uppercase tracking-wider text-sm transition-colors ${
                  location.pathname === '/' ? 'text-sky-500' : ''
                }`}>Home</Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-black hover:text-sky-500 font-bold uppercase tracking-wider text-sm transition-colors ${
                  location.pathname === link.path ? 'text-sky-500' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <User className="h-6 w-6 text-black cursor-pointer hover:text-sky-500 transition-colors" />
              <Link to="/cart" className="relative group p-1 -m-1">
                <ShoppingCart className="h-6 w-6 text-black group-hover:text-sky-500 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-black rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button & Cart icon */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-black hover:text-sky-500 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-black rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-sky-500 p-1 -m-1">
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-black font-bold border-b border-gray-100 hover:text-sky-500 uppercase">Home</Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-3 text-black font-bold border-b border-gray-100 hover:text-sky-500 uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;