import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center font-black text-black">K</div>
             <h4 className="text-xl font-black text-white tracking-tighter">XTREME KOLORZ</h4>
          </div>
          <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
            Premium automotive pearls engineered for depth, durability, and head-turning brilliance. Designed for professional painters.
          </p>
        </div>
        
        <div>
          <h5 className="text-white font-bold uppercase tracking-wider mb-6 text-xs">Quick Links</h5>
          <ul className="space-y-3 text-zinc-500 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">Shop All Colors</li>
            <li className="hover:text-yellow-500 cursor-pointer">Mixing Ratios</li>
            <li className="hover:text-yellow-500 cursor-pointer">Shipping Policy</li>
            <li className="hover:text-yellow-500 cursor-pointer">Returns</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold uppercase tracking-wider mb-6 text-xs">Contact</h5>
          <ul className="space-y-4 text-zinc-500 text-sm">
            <li className="flex items-start"><MapPin size={16} className="mr-3 mt-0.5 text-yellow-500 flex-shrink-0"/> Pune, Maharashtra 411048</li>
            <li className="flex items-center"><Phone size={16} className="mr-3 text-yellow-500 flex-shrink-0"/> +91 777 50 777 52</li>
            <li className="flex items-center"><Mail size={16} className="mr-3 text-yellow-500 flex-shrink-0"/> info@kustomkoats.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-600 text-xs">© 2025 Kustom Koats. All rights reserved.</p>
        <div className="flex gap-4">
           {['Visa', 'Mastercard', 'UPI', 'PayPal'].map(p => (
             <div key={p} className="text-zinc-600 text-[10px] font-bold border border-zinc-800 px-2 py-1 rounded bg-zinc-900">{p}</div>
           ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;