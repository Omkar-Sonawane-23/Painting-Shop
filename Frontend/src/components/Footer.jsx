import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black italic text-black mb-6">
              XTREME <span className="text-sky-500">KOLORZ</span>
            </h2>
            <p className="text-sm mb-6 text-gray-500">
              Showcasing the finest automotive grade pearls. Non-toxic, inert, and rust-free mica-based pearls for the ultimate finish.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-sky-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-sky-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-sky-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-500 transition-colors">Solid Pearls</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Interference Pearls</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Carbon Pearls</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Chroma Pearls</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-500 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">Distributors</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-sky-500 flex-shrink-0" />
                <span>Pune, Maharashtra, India<br />411048</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-sky-500" />
                <span>+91 777 50 777 52</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sky-500" />
                <span>info@kustomkoats.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-16 pt-8 text-center text-xs text-gray-400">
          <p>&copy; 2025 Xtreme Kolorz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;