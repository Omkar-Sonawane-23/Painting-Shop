import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-12 mt-auto">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Layout - Matches Sketch (Links Left, Contact Right) */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
          
          {/* Left Column: Links */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full"></span>
            </h3>
            
            <ul className="space-y-3 text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">Colors</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">Technology</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">Benefits</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">Partner</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors border-l-2 border-transparent hover:border-yellow-500 pl-0 hover:pl-3 transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Right Column: Contact Us */}
          <div className="flex-1 md:pl-12 md:border-l border-zinc-900">
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-rose-500 rounded-full"></span>
            </h3>

            <div className="space-y-6 text-zinc-400">
              {/* Phone & Email */}
              <div className="space-y-2">
                <p className="flex items-center gap-3">
                   <span className="text-white font-semibold w-20">Phone No:</span> 
                   <a href="tel:+917775077752" className="hover:text-yellow-500 transition-colors">+91 777 50 777 52</a>
                </p>
                <p className="flex items-center gap-3">
                   <span className="text-white font-semibold w-20">Email:</span> 
                   <a href="mailto:info@kustomkoats.in" className="hover:text-yellow-500 transition-colors">info@kustomkoats.in</a>
                </p>
              </div>

              {/* Socials */}
              <div className="space-y-2 pt-4">
                <p className="flex items-center gap-3">
                   <Instagram size={18} className="text-rose-500" />
                   <span className="text-white font-semibold w-20">Instagram:</span>
                   <a href="#" className="hover:text-rose-400 transition-colors">@kustomkoats</a>
                </p>
                <p className="flex items-center gap-3">
                   <MessageCircle size={18} className="text-green-500" />
                   <span className="text-white font-semibold w-20">Whatsapp:</span>
                   <a href="https://wa.me/917775077752" className="hover:text-green-400 transition-colors">+91 777 50 777 52</a>
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-900">
                 <p className="text-xs text-zinc-600">
                   Pune, Maharashtra 411048, India
                 </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-sm">© 2025 Kustom Koats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;