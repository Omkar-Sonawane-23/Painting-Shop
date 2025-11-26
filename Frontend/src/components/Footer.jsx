import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-black text-white tracking-tighter mb-4">XTREME KOLORZ</h4>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Premium automotive pearls engineered for depth, durability, and head-turning brilliance.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Contact</h5>
            <ul className="space-y-3 text-zinc-500 text-sm">
              <li className="flex items-start"><MapPin size={16} className="mr-2 mt-0.5 text-yellow-500"/> Pune, Maharashtra 411048</li>
              <li className="flex items-center"><Phone size={16} className="mr-2 text-yellow-500"/> +91 777 50 777 52</li>
              <li className="flex items-center"><Mail size={16} className="mr-2 text-yellow-500"/> info@kustomkoats.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-900 pt-8 text-center">
          <p className="text-zinc-600 text-xs">© 2025 Kustom Koats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;