'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import RollingText from './RollingText';

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Expertise', href: '#' },
  { name: 'News', href: '/news/openai-partner' },
];

const resourceLinks = [
  { name: 'Portfolio', href: '#' },
  { name: 'Experts', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Contact', href: '/contact' },
  { name: '404', href: '#' },
];

export default function Footer() {
  const textColor = "rgb(23, 20, 18)";

  return (
    <footer className="w-full bg-primary font-clash relative" style={{ color: textColor }}>
      {/* Central Vertical Line Placeholder (Visual Only in Footer) */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/10 -translate-x-1/2 pointer-events-none hidden lg:block" />

      {/* Upper Green Section */}
      <div className="py-24 px-6 md:px-12 lg:px-24 border-b border-black/10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
          
          {/* Left: Branding & Newsletter */}
          <div className="flex flex-col pl-4 lg:pl-12">
            <h2 className="text-[clamp(3.5rem,10vw,6.5rem)] font-medium leading-[0.85] tracking-[-0.04em] mb-32 max-w-2xl uppercase">
              source for smart <br /> automations.
            </h2>
            
            <div className="max-w-md mt-auto">
              <p className="text-lg font-medium mb-10 leading-snug">
                Subscribe to our newsletter for Software and AI industry insights and company news!
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="relative group border-b border-black/30 pb-4 flex items-center justify-between">
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    className="bg-transparent border-none w-full text-2xl font-medium placeholder:text-black/20 focus:outline-none"
                  />
                  <Link href="#" className="bg-[#171412] text-white rounded-full flex items-center justify-between cursor-pointer group h-[64px] w-[300px] px-8 transition-all hover:scale-105 active:scale-95">
                    <RollingText 
                      text="Join newsletter" 
                      className="text-sm font-bold uppercase tracking-wider"
                    />
                    <div className="transition-transform duration-700 group-hover:rotate-[360deg]">
                      <ArrowUpRight size={24} />
                    </div>
                  </Link>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <input type="checkbox" className="w-5 h-5 rounded-sm border-2 border-black/20 accent-black cursor-pointer" />
                  </div>
                  <p className="text-[12px] font-medium opacity-60 leading-relaxed">
                    By submitting, you agree to our <Link href="#" className="underline font-bold">Terms</Link> and <Link href="#" className="underline font-bold">Privacy Policy</Link> and give your permission to process your personal data for the purposes specified in our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-2 gap-16 lg:pl-48">
            <div className="flex flex-col gap-8">
              <span className="text-sm font-bold opacity-30 uppercase tracking-[0.2em] mb-4">Company</span>
              {companyLinks.map(link => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="footer-link text-[24px] font-medium leading-[120%] w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <span className="text-sm font-bold opacity-30 uppercase tracking-[0.2em] mb-4">Resources</span>
              {resourceLinks.map(link => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="footer-link text-[24px] font-medium leading-[120%] w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-[#171412] py-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright & Rights */}
          <div className="flex items-center gap-4 text-[#fbf9ef]/60 font-medium text-[16px] leading-[140%] font-clash uppercase pl-4 lg:pl-12">
            <span>© 2026 SOURCE® LLC</span>
            <div className="w-[12px] h-[12px] bg-[#5bfb7a] rounded-full flex-none" />
            <span>All rights reserved.</span>
          </div>
          
          {/* Bottom Links */}
          <div className="flex items-center gap-12 text-[#fbf9ef]/60 font-medium text-[16px] leading-[140%] font-clash uppercase pr-4 lg:pr-12">
            <Link href="#" className="hover:text-[#fbf9ef] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#fbf9ef] transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
