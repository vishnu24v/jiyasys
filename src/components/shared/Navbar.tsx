'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';
import RollingText from './RollingText';
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
  const [time, setTime] = useState('7:49 AM');

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-[#fbf9ef] border-b border-black h-20 font-clash">
      <div className="flex h-full items-stretch">
        
        {/* LEFT HALF (50%) */}
        <div className="flex-[1] flex items-stretch border-r border-black">
          {/* Logo Box */}
          <div className="flex items-center px-12 border-r border-black">
            <Link href="/">
              <img 
                src="https://www.jiyasys.com/logo.png" 
                alt="JIYASYS" 
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {/* London / Time Box */}
          <div className="flex-grow flex items-center justify-center px-8 gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-black">
            <span>London, UK</span>
            <div className="w-2.5 h-2.5 bg-[#5bfb7a] rounded-full" />
            <span>{time}</span>
          </div>
        </div>

        {/* RIGHT HALF (50%) */}
        <div className="flex-[1] flex items-stretch">
          {/* Company Box */}
          <div className="flex-[1] relative group border-r border-black">
            <button 
              onClick={() => setActiveMenu(activeMenu === 'Company' ? null : 'Company')}
              className={`w-full h-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${activeMenu === 'Company' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
            >
              Company <ChevronDown size={12} className={activeMenu === 'Company' ? 'rotate-180' : ''} />
            </button>
            <AnimatePresence>
              {activeMenu === 'Company' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-full left-0 w-64 bg-black text-white p-8 z-[1001] border-t border-white/10">
                  <div className="flex flex-col gap-4">
                    {menuData.Company.map((sub) => (
                      <Link key={sub} href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-all">{sub}</Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio Box */}
          <div className="flex-[1] relative group border-r border-black">
            <button 
              onClick={() => setActiveMenu(activeMenu === 'Portfolio' ? null : 'Portfolio')}
              className={`w-full h-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${activeMenu === 'Portfolio' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
            >
              Portfolio <ChevronDown size={12} className={activeMenu === 'Portfolio' ? 'rotate-180' : ''} />
            </button>
            <AnimatePresence>
              {activeMenu === 'Portfolio' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-full left-0 w-64 bg-black text-white p-8 z-[1001] border-t border-white/10">
                  <div className="flex flex-col gap-4">
                    {menuData.Portfolio.map((sub) => (
                      <Link key={sub} href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-all">{sub}</Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Expertise Box */}
          <div className="flex-[1] relative group border-r border-black">
            <button 
              onClick={() => setActiveMenu(activeMenu === 'Expertise' ? null : 'Expertise')}
              className={`w-full h-full flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${activeMenu === 'Expertise' ? 'bg-black text-white' : 'hover:bg-black/5'}`}
            >
              Expertise <ChevronDown size={12} className={activeMenu === 'Expertise' ? 'rotate-180' : ''} />
            </button>
            <AnimatePresence>
              {activeMenu === 'Expertise' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-full left-0 w-64 bg-black text-white p-8 z-[1001] border-t border-white/10">
                  <div className="flex flex-col gap-4">
                    {menuData.Expertise.map((sub) => (
                      <Link key={sub} href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-all">{sub}</Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Box */}
          <div className="flex-[1] flex items-stretch">
            <Link href="/contact" className="w-full bg-[#5bfb7a] text-black flex items-center justify-center font-bold text-[11px] uppercase tracking-[0.2em] hover:brightness-110 transition-all">
              <RollingText text="Contact" />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center px-6 border-l border-black">
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
}
