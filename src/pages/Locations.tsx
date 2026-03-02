import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';
import { LOCATIONS } from '../constants';

export default function Locations() {
  return (
    <div className="pt-32 pb-24 bg-stone-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-spa-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Presence</span>
          <h1 className="text-5xl md:text-6xl mb-6">Our Sanctuaries</h1>
          <div className="w-20 h-1 bg-spa-gold mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-stone-400 font-light text-lg">
            Find your nearest escape. Each of our locations is a unique sanctuary designed to reflect the local culture while maintaining our signature serenity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {LOCATIONS.map((loc, index) => (
            <motion.div 
              key={loc.city}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-white/10 rounded-[2.5rem] bg-white/5 hover:border-spa-gold/50 transition-all group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-spa-gold/20 transition-colors">
                <MapPin className="text-spa-gold w-8 h-8" />
              </div>
              <h3 className="text-3xl mb-6 font-serif">{loc.city}</h3>
              <p className="text-stone-400 text-sm mb-8 leading-relaxed h-12">{loc.address}</p>
              <div className="flex items-center gap-3 text-spa-gold mb-8">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">{loc.phone}</span>
              </div>
              <button className="w-full py-4 rounded-full border border-white/20 text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-stone-900 transition-all">
                Get Directions
              </button>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-32 text-center p-16 border border-dashed border-white/10 rounded-[3rem]">
          <h2 className="text-3xl font-serif mb-4">Expanding Our Horizons</h2>
          <p className="text-stone-400">Coming soon to Jaipur, Goa, and Rishikesh.</p>
        </div>
      </div>
    </div>
  );
}
