import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 min-h-screen">
      <h2 className="text-4xl font-black text-white mb-8 uppercase">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-zinc-900 p-3 rounded-xl text-yellow-500"><MapPin size={24}/></div>
            <p className="text-zinc-500">Pune, Maharashtra 411048</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-zinc-900 p-3 rounded-xl text-yellow-500"><Phone size={24}/></div>
            <p className="text-zinc-500">+91 777 50 777 52</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-zinc-900 p-3 rounded-xl text-yellow-500"><Mail size={24}/></div>
            <p className="text-zinc-500">info@kustomkoats.in</p>
          </div>
        </div>
        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
          <form className="space-y-5">
            <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none" placeholder="Name" />
            <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none" placeholder="Email" />
            <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none" placeholder="Message"></textarea>
            <button className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;