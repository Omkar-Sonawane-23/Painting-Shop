import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Shadow on scroll
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md py-2' : 'border-b border-gray-200 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* --- LEFT: LOGO --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-black text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-zinc-900 leading-none tracking-tighter">XTREME</span>
                <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-[0.25em] leading-none">Kolorz</span>
              </div>
            </Link>
          </div>

          {/* --- CENTER: DESKTOP NAV (Visible on md+) --- */}
          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <nav className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors hover:text-yellow-600 whitespace-nowrap ${
                      location.pathname === link.path ? 'text-zinc-900' : 'text-zinc-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-zinc-300 text-[10px]">|</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>

          {/* --- RIGHT: ACTIONS --- */}
          <div className="flex items-center justify-end gap-3 lg:gap-6">
            
            {/* Order Button (Visible on md+) */}
            <Link 
              to="/shop" 
              className="hidden md:flex items-center justify-center px-5 py-2 bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-200 rounded-full shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span className="text-xs font-black uppercase tracking-wider">Order</span>
            </Link>

            {/* Cart Icon */}
            <Link 
              to="/cart"
              className="relative p-2 text-zinc-700 hover:bg-zinc-100 rounded-full transition-colors"
              aria-label="View Cart"
            >
              <ShoppingCart size={24} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle (Hidden on md+) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 text-zinc-700 hover:bg-zinc-100 rounded-md"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && (
        <div className="absolute top-[100%] left-0 right-0 bg-white border-t border-zinc-100 shadow-2xl md:hidden flex flex-col z-50 animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="flex items-center justify-between px-4 py-4 text-zinc-600 font-bold uppercase text-sm border-b border-zinc-50 hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
              >
                {link.name}
                <ChevronRight size={16} className="text-zinc-300" />
              </Link>
            ))}
            <div className="pt-6 mt-2">
              <Link 
                to="/shop" 
                className="flex w-full justify-center px-6 py-4 bg-rose-500 text-white rounded-xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;