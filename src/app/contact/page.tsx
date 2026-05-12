'use client';

import Navbar from "@/components/shared/Navbar";
import PageTransition from "@/components/shared/Transition";
import Link from 'next/link';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@jiyasys.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <main className="bg-background min-h-screen">
        <Navbar />
        
        {/* Contact Hero */}
        <section className="pt-40 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
                Get in touch
              </span>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                Got a question? <br />
                <span className="opacity-30">We’re here</span> <br />
                to help.
              </h1>
              <p className="text-xl opacity-50 font-medium max-w-xl leading-relaxed">
                Whether you have questions or just want to explore what’s possible, we’re here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-32">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Info */}
            <div className="lg:col-span-5 space-y-12">
              <div className="glass p-12 rounded-[40px] border-primary/20">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-black mb-8">
                  <Mail size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest opacity-30 mb-4">Email Us</h3>
                <p className="text-2xl font-black uppercase mb-8">hello@jiyasys.com</p>
                <button 
                  onClick={copyEmail}
                  className="flex items-center gap-3 px-6 py-3 glass rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  {copied ? <><Check size={14} className="text-primary" /> COPIED TO CLIPBOARD</> : <><Copy size={14} /> COPY ADDRESS</>}
                </button>
              </div>

              <div className="glass p-12 rounded-[40px]">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-8">
                  <Phone size={24} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest opacity-30 mb-4">Call Us</h3>
                <p className="text-2xl font-black uppercase">(415) 555-8247</p>
              </div>

              <div className="space-y-6 pt-8">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] opacity-30">Follow Us</h4>
                <div className="flex flex-wrap gap-4">
                  {['LinkedIn', 'Instagram', 'Facebook', 'Twitter (X)', 'YouTube'].map(social => (
                    <button key={social} className="text-xs font-black uppercase tracking-widest hover:text-primary transition-colors">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <div className="glass p-12 md:p-20 rounded-[60px]">
                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-30">Full name *</label>
                      <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-primary outline-none transition-colors" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-30">Email Address *</label>
                      <input type="email" placeholder="hello@example.com" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-primary outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-30">Phone number (optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-primary outline-none transition-colors" />
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-30">How can we help you?</label>
                    <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-transparent border-b border-foreground/10 py-4 focus:border-primary outline-none transition-colors resize-none"></textarea>
                  </div>

                  <div className="flex items-start gap-4">
                    <input type="checkbox" className="mt-1 accent-primary" />
                    <p className="text-[10px] font-medium opacity-40 leading-relaxed">
                      By submitting, you agree to our <Link href="#" className="underline">Terms and Privacy Policy</Link> and give your permission to process your personal data for the purposes specified in our Privacy Policy.
                    </p>
                  </div>

                  <button className="px-16 py-6 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all">
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
