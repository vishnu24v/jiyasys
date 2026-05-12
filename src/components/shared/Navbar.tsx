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
  const [isDark, setIsDark] = useState(false);
  const [time, setTime] = useState('7:15 AM');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-[#fbf9ef]/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 h-20">
      <div className="flex h-full items-stretch">
        
        {/* Logo Section */}
        <div className="flex items-center px-12 border-r border-black/10 dark:border-white/10">
          <Link href="/">
            <img 
              src="https://www.jiyasys.com/logo.png" 
              alt="JIYASYS" 
              className={`h-8 w-auto ${isDark ? 'brightness-200 invert' : ''}`} 
            />
          </Link>
        </div>

        {/* Space filler */}
        <div className="flex-grow" />

        {/* Info Section */}
        <div className="hidden lg:flex items-center px-8 border-l border-black/10 dark:border-white/10 text-[11px] font-bold uppercase tracking-widest gap-2">
          <span>London, UK</span>
          <div className="w-2 h-2 bg-[#5bfb7a] rounded-full" />
          <span>{time}</span>
        </div>

        {/* Menu Items */}
        {Object.keys(menuData).map((item) => (
          <div key={item} className="hidden lg:flex relative h-full border-l border-black/10 dark:border-white/10 group">
            <button 
              onClick={() => setActiveMenu(activeMenu === item ? null : item)}
              className={`px-10 h-full flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-colors ${activeMenu === item ? 'bg-black text-white' : 'hover:bg-black/5'}`}
            >
              {item} <ChevronDown size={12} className={activeMenu === item ? 'rotate-180' : ''} />
            </button>
            
            <AnimatePresence>
              {activeMenu === item && (
                <motion.div 
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  className="absolute top-full left-0 w-64 bg-black text-white p-8 z-[1001] border-t border-white/10"
                >
                  <div className="flex flex-col gap-4">
                    {menuData[item as keyof typeof menuData].map((sub) => (
                      <Link key={sub} href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-all">
                        {sub}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="flex items-center px-6 border-l border-black/10 dark:border-white/10 hover:bg-black/5 transition-colors"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        {/* Contact Button */}
        <div className="flex items-stretch border-l border-black/10 dark:border-white/10">
          <Link href="/contact" className="bg-[#5bfb7a] text-black px-12 flex items-center font-bold text-[11px] uppercase tracking-[0.2em] hover:brightness-110 transition-all">
            <RollingText text="Contact" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center px-6 border-l border-black/10">
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
}
