import React from 'react';
import { Leaf, Droplets, Sparkles, Wind } from 'lucide-react';

export const SERVICES = [
  {
    id: 1,
    title: "Abhyanga Massage",
    description: "A traditional Ayurvedic full-body massage using warm herbal oils to balance the doshas and promote longevity.",
    duration: "90 min",
    price: "₹4,500",
    icon: <Leaf className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Shirodhara Therapy",
    description: "A rhythmic pouring of warm oil on the forehead to induce deep relaxation and mental clarity.",
    duration: "60 min",
    price: "₹3,800",
    icon: <Droplets className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Himalayan Salt Scrub",
    description: "Exfoliating treatment using pure Himalayan pink salt and essential oils for glowing, revitalized skin.",
    duration: "45 min",
    price: "₹2,500",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Vedic Facial",
    description: "A rejuvenating facial using ancient Indian herbs and natural extracts to restore youthful radiance.",
    duration: "75 min",
    price: "₹3,200",
    icon: <Wind className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  }
];

export const LOCATIONS = [
  {
    city: "New Delhi",
    address: "123 Lotus Lane, Shanti Vihar, New Delhi - 110001",
    phone: "+91 11 2345 6789"
  },
  {
    city: "Mumbai",
    address: "45 Marine Breeze Road, Juhu Enclave, Mumbai - 400049",
    phone: "+91 22 9876 5432"
  },
  {
    city: "Bangalore",
    address: "88 Gardenia Heights, Indiranagar, Bangalore - 560038",
    phone: "+91 80 5555 1234"
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Locations', href: '/locations' },
  { name: 'Contact', href: '/contact' },
];
