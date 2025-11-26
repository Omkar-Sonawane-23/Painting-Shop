import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => (
  <div className="max-w-7xl mx-auto py-16 px-4 min-h-screen">
    <h2 className="text-4xl font-black text-white mb-8 uppercase">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-6">
        <p className="text-zinc-400 text-lg leading-relaxed">Have questions about custom colors or mixing ratios? Our team of experts is ready to help.</p>
        
        <div className="flex items-start gap-4">
          <div className="bg-zinc-900 p-3 rounded-xl text-yellow-500 border border-zinc-800"><MapPin size={24}/></div>
          <div>
             <h4 className="text-white font-bold">Visit Us</h4>
             <p className="text-zinc-500">Pune, Maharashtra 411048</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-zinc-900 p-3 rounded-xl text-yellow-500 border border-zinc-800"><Phone size={24}/></div>
          <div>
             <h4 className="text-white font-bold">Call Us</h4>
             <p className="text-zinc-500">+91 777 50 777 52</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-zinc-900 p-3 rounded-xl text-yellow-500 border border-zinc-800"><Mail size={24}/></div>
          <div>
             <h4 className="text-white font-bold">Email Us</h4>
             <p className="text-zinc-500">info@kustomkoats.in</p>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        <form className="space-y-5">
          <div className="space-y-2">
             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
             <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white outline-none focus:border-yellow-500 transition-colors" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email Address</label>
             <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white outline-none focus:border-yellow-500 transition-colors" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
             <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Message</label>
             <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white outline-none focus:border-yellow-500 transition-colors" placeholder="How can we help you?"></textarea>
          </div>
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase hover:bg-zinc-200 transition-colors">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
);

export default Contact;