// Frontend/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-4 border-yellow-600 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-slate-900 font-black text-lg">K</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">XTREME KOLORZ</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Premium automotive grade pearls engineered for depth, durability, and head-turning brilliance. Proudly manufactured in Pune, India.
          </p>
          <div className="flex gap-4">
            <Facebook size={20} className="hover:text-yellow-500 cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-yellow-500 cursor-pointer transition-colors" />
            <Linkedin size={20} className="hover:text-yellow-500 cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Products</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="/shop" className="hover:text-white transition-colors">Solid Pearls</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Interference</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Carbon Series</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Chroma Shift</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Support</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="#" className="hover:text-white transition-colors">Technical Data Sheets (TDS)</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Mixing Ratios</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Shipping Policy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Distributor Application</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-600 mt-0.5" />
              <span>Near Trinity College, Yevlewadi, Pune, Maharashtra 411048</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-600" />
              <span>+91 777 50 777 52</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-600" />
              <span>info@kustomkoats.in</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        &copy; 2025 Kustom Koats. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;