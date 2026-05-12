'use client';

import { useState } from 'react';
import RollingText from './RollingText';

export default function ContactSection() {
  return (
    <section className="bg-primary py-24 px-6 md:px-12 lg:px-24 font-clash border-b border-black/10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side */}
        <div className="flex flex-col pl-[20%]">
          <h2 className="text-[64px] font-medium leading-[1.1] tracking-tighter mb-6">
            Get in touch.
          </h2>
          <p className="text-xl opacity-60 font-medium max-w-md leading-relaxed">
            Whether you have questions or just want to explore what’s possible, we’re here to help.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="max-w-xl">
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Full name *</label>
              <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors font-medium text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Email Address *</label>
              <input type="email" placeholder="hello@example.com" className="w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors font-medium text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">Phone number (optional)</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors font-medium text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40">How can we help you?</label>
              <textarea placeholder="Tell us about your project" rows={4} className="w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors resize-none font-medium text-lg"></textarea>
            </div>

            <div className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 accent-black" />
              <p className="text-[10px] font-medium opacity-40 leading-relaxed">
                By submitting, you agree to our <a href="/terms-of-service" className="underline font-bold">Terms</a> and <a href="/privacy-policy" className="underline font-bold">Privacy Policy</a> and give your permission to process your personal data for the purposes specified in our Privacy Policy.
              </p>
            </div>

            <button className="bg-black text-[#5bfb7a] px-12 py-5 rounded-none font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-black/90 active:scale-95 group overflow-hidden relative">
               <RollingText text="Submit" className="font-bold" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
