// Frontend/src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'Partner', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg">
                <span className="text-white font-black text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-slate-900 tracking-tighter leading-none">XTREME</span>
                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.2em] leading-none">
                  Kolorz
                </span>
              </div>
            </Link>
          </div>

          {/* Center nav – ALWAYS visible on desktop */}
          <nav className="hidden md:flex flex-1 items-center justify-center">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-yellow-600 ${
                      location.pathname === link.path ? 'text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Order button - desktop only */}
            <Link
              to="/shop"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 
              bg-rose-200 hover:bg-rose-300 text-rose-900 
              border-2 border-rose-900 rounded-lg 
              shadow-[2px_2px_0px_rgba(159,18,57,1)]
              active:translate-y-[1px] active:shadow-none 
              transition-all text-sm font-black uppercase tracking-wide"
            >
              Order
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-slate-800 hover:text-yellow-600 transition-colors"
              aria-label="View Cart"
            >
              <ShoppingCart size={26} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-md"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-xl">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-2 py-3 text-slate-700 font-bold uppercase rounded-lg hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/shop"
              className="mt-2 flex justify-center px-6 py-3 w-full 
              bg-rose-200 text-rose-900 border-2 border-rose-900 
              rounded-lg font-black uppercase 
              shadow-[2px_2px_0px_rgba(159,18,57,1)]
              active:translate-y-[1px] active:shadow-none"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
