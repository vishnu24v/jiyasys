'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-background flex items-center justify-center pt-32 pb-20 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image - Matches Screenshot */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src="/hero-image.jpg" 
              alt="Team Jiyasys" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Buy Template Buttons - Matches Screenshot */}
          <div className="absolute -bottom-10 -right-10 hidden lg:flex flex-col gap-2 z-20">
            <button className="flex items-center gap-4 px-6 py-4 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
              Buy Template <ChevronRight size={14} />
            </button>
            <button className="flex items-center gap-4 px-6 py-4 bg-white text-black border border-black/5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
              Made in Jiyasys <ChevronRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Text - Matches Screenshot */}
        <div className="flex flex-col items-start text-left">
          {/* OpenAI Partner Pill - Now Clickable */}
          <Link href="/news/openai-partner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-4 py-2 bg-black text-white rounded-lg mb-8 group cursor-pointer hover:bg-primary hover:text-black transition-all"
            >
              <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center p-1">
                <div className="w-full h-full border border-white/20 rounded-sm" />
              </div>
              <span className="text-[11px] font-bold tracking-tight">
                Jiyasys joins the OpenAI Services Partner Program
              </span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-[10vw] md:text-[8vw] lg:text-[6.5vw] font-black leading-[0.9] tracking-[-0.03em] text-foreground mb-12 uppercase transition-colors duration-500"
          >
            Designing <br />
            intelligent <br />
            systems for <br />
            teams that <br />
            move fast.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg opacity-40 font-medium max-w-md leading-relaxed text-foreground transition-colors duration-500">
              We design automation systems that help companies cut manual work, connect their tools, and operate more efficiently.
            </p>
            <Link 
              href="/contact"
              className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-foreground transition-colors duration-500"
            >
              Learn more <div className="w-12 h-[2px] bg-foreground group-hover:w-20 transition-all" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>
    </section>
  );
}
