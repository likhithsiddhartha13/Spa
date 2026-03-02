import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, ChevronRight } from 'lucide-react';
import { NAV_LINKS, SERVICES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-spa-cream border-t border-spa-gold/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-spa-olive rounded-full flex items-center justify-center text-white">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="text-xl font-serif font-bold tracking-wider text-spa-olive">SPA</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              Dedicated to the art of holistic healing and the preservation of ancient Indian wellness traditions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-spa-gold hover:border-spa-gold transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-spa-gold hover:border-spa-gold transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-spa-gold hover:border-spa-gold transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-stone-500 text-sm hover:text-spa-gold transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Treatments</h4>
            <ul className="space-y-4">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link to="/services" className="text-stone-500 text-sm hover:text-spa-gold transition-colors">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Newsletter</h4>
            <p className="text-stone-500 text-sm mb-6">Subscribe to receive wellness tips and exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-white border border-stone-200 px-4 py-2 rounded-l-full outline-none focus:border-spa-gold w-full text-sm" />
              <button className="bg-spa-olive text-white px-6 py-2 rounded-r-full hover:bg-spa-earth transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">© 2026 Spa. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-stone-400 hover:text-spa-gold">Privacy Policy</a>
            <a href="#" className="text-xs text-stone-400 hover:text-spa-gold">Terms of Service</a>
            <a href="#" className="text-xs text-stone-400 hover:text-spa-gold">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
