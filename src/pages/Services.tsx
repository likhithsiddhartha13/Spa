import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-spa-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Offerings</span>
          <h1 className="text-5xl md:text-6xl mb-6">Sacred Treatments</h1>
          <div className="w-20 h-1 bg-spa-gold mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-stone-500 font-light text-lg">
            Experience the ancient wisdom of Ayurveda blended with modern luxury. Our treatments are designed to restore balance and harmony to your body, mind, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-8 bg-spa-cream p-8 rounded-[2rem] hover:shadow-xl transition-all group"
            >
              <div className="lg:w-1/3 aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-spa-olive">
                  {service.icon}
                  <h3 className="text-2xl font-serif">{service.title}</h3>
                </div>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-stone-200">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Duration</span>
                    <span className="text-stone-800 font-medium">{service.duration}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Price</span>
                    <span className="text-spa-olive font-serif font-bold text-xl">{service.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Packages */}
        <div className="mt-24 bg-spa-olive rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl mb-6">Bespoke Wellness Packages</h2>
            <p className="max-w-2xl mx-auto text-white/70 mb-10 text-lg">
              Allow our expert consultants to curate a personalized wellness journey tailored to your specific needs and dosha balance.
            </p>
            <button className="btn-primary bg-white text-spa-olive hover:bg-spa-cream">Inquire Now</button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        </div>
      </div>
    </div>
  );
}
