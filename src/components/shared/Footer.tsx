'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
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
      {/* Central Vertical Line Placeholder */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-black/10 -translate-x-1/2 pointer-events-none hidden lg:block" />

      {/* Social Links Bar */}
      <div className="bg-black text-white py-6 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="hover:text-primary transition-colors">Twitter (X)</Link>
            <Link href="#" className="hover:text-primary transition-colors">YouTube</Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="mailto:ashutosh.bhardwaj@jiyasys.com" className="hover:text-primary transition-colors">ashutosh.bhardwaj@jiyasys.com</Link>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#5bfb7a] rounded-full" />
              <span>+91 93517 18236</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upper Green Section */}
      <div className="py-24 px-6 md:px-12 lg:px-24 border-b border-black/10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative">
          
          {/* Left: Branding & Newsletter with 20% margin */}
          <div className="flex flex-col pl-[20%]">
            <h2 className="text-[48px] font-medium leading-[120%] tracking-[-0.02em] mb-12 max-w-2xl">
              Source — Your source for smart automations.
            </h2>
            
            <div className="relative mb-12">
               <button 
                 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                 className="w-14 h-14 bg-black text-white flex items-center justify-center rounded-lg hover:scale-110 transition-transform"
               >
                 <ArrowUp size={24} />
               </button>
            </div>

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
                  <Link href="#" className="bg-[#171412] text-white flex items-center justify-between cursor-pointer group h-[64px] w-[300px] px-8 transition-all hover:brightness-125 rounded-none">
                    <RollingText 
                      text="Join newsletter" 
                      className="text-sm font-bold uppercase tracking-wider"
                    />
                    <div className="transition-transform duration-300 group-hover:rotate-[360deg]">
                      <ArrowUpRight size={24} />
                    </div>
                  </Link>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <input type="checkbox" className="w-5 h-5 rounded-sm border-2 border-black/20 accent-black cursor-pointer" />
                  </div>
                  <p className="text-[12px] font-medium opacity-60 leading-relaxed">
                    By submitting, you agree to our <Link href="/terms-of-service" className="underline font-bold">Terms</Link> and <Link href="/privacy-policy" className="underline font-bold">Privacy Policy</Link> and give your permission to process your personal data for the purposes specified in our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links moved further right */}
          <div className="grid grid-cols-2 gap-16 lg:pl-64">
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

      {/* Bottom Black Bar - Taller & Word Spacing */}
      <div className="bg-[#171412] py-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright & Rights */}
          <div className="flex items-center gap-8 text-[#fbf9ef]/60 font-medium text-[16px] leading-[140%] font-clash uppercase tracking-[0.3em] pl-[20%]">
            <span>© 2026 SOURCE® LLC</span>
            <div className="w-[12px] h-[12px] bg-[#5bfb7a] rounded-full flex-none" />
            <span>All rights reserved.</span>
          </div>
          
          {/* Bottom Links */}
          <div className="flex items-center gap-16 text-[#fbf9ef]/60 font-medium text-[16px] leading-[140%] font-clash uppercase tracking-[0.3em] pr-4 lg:pr-12">
            <Link href="/privacy-policy" className="hover:text-[#fbf9ef] transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#fbf9ef] transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
