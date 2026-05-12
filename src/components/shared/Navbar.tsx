'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import RollingLink from '@/components/shared/RollingLink';

const menuData = {
  Company: [
    'Home', 'About', 'Pricing', 'Newsroom', 'Connect', 'Our Experts', 'Careers', '404'
  ],
  Portfolio: [
    '2025', '45 Degress', 'Clandestine', 'GlobalBank', 'Railspeed', 'Neuralon', 'Elasticwear',
    '2024', 'EnnLabs', 'Leapyear', 'EasyTax', 'Eightball'
  ],
  Expertise: [
    'Our services', 'Workflow Automation', 'Custom AI Solutions', 'Data Infrastructure & Integration', 
    'Predictive Analytics & Insights', 'AI Strategy & Consulting'
  ]
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('6:49 AM');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 bg-background/80 backdrop-blur-md`}>
      {/* Central Vertical Line (Visual Only in Header) */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/10 -translate-x-1/2 pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-4 flex items-stretch h-16 border-b border-black/10 relative">
        
        {/* Left Side: Info */}
        <div className="flex-1 flex items-center justify-end pr-12 lg:pr-24">
          <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider opacity-60 border border-black/5 px-6 py-2 rounded-full">
            <span className="flex items-center gap-2">London, UK <div className="w-2 h-2 bg-[#5bfb7a] rounded-full" /></span>
            <span>{time}</span>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex-1 flex items-center justify-start pl-12 lg:pl-24 gap-4">
          {Object.keys(menuData).map((item) => (
            <div key={item} className="relative group h-full flex items-center">
              <button 
                onClick={() => toggleMenu(item)}
                className={`flex items-center gap-2 px-6 py-2 border border-black/5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeMenu === item ? 'bg-black text-white' : 'hover:bg-black/5'}`}
              >
                {item} <ChevronDown size={12} className={`transition-transform duration-300 ${activeMenu === item ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeMenu === item && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-4 left-0 w-64 bg-black text-white p-6 rounded-2xl shadow-2xl z-[1001]"
                  >
                    <div className="flex flex-col gap-3">
                      {menuData[item as keyof typeof menuData].map((sub) => (
                        <Link key={sub} href="#" className="text-sm font-medium opacity-60 hover:opacity-100 hover:translate-x-1 transition-all">
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <RollingLink 
            text="Contact"
            href="/contact"
            className="bg-[#5bfb7a] text-black px-8 py-2 rounded-full font-bold text-[11px] uppercase tracking-wider border border-black/5 transition-transform hover:scale-105 active:scale-95"
          />
        </div>

        {/* Mobile Toggle (Simplified for brevity as user focused on desktop layout) */}
        <div className="lg:hidden flex items-center ml-auto">
           <Menu size={24} />
        </div>
      </div>
    </footer>
  );
}
