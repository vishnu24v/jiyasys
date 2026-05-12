'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const imageUrl = "https://framerusercontent.com/images/TyaUbMGncOBrq3gBsLs0oNCJeE.jpg?scale-down-to=1024&width=3580&height=2574";

  return (
    <section className="relative min-h-screen w-full bg-[#fbf9ef] flex items-center pt-20 pb-20 overflow-hidden font-clash">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image with Angled Shape */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full aspect-[4/5] lg:aspect-[1.1/1]"
        >
          <div 
            className="w-full h-full overflow-hidden bg-gray-200"
            style={{ 
              clipPath: 'polygon(0 0, 82% 0, 100% 18%, 100% 100%, 0 100%)',
            }}
          >
            <img 
              src={imageUrl} 
              alt="Designing intelligent systems" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start pl-4 lg:pl-12">
          {/* Badge */}
          <Link href="/news/openai-partner">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-4 py-3 bg-black text-white rounded-none mb-10 group cursor-pointer"
            >
              <div className="w-5 h-5 bg-[#5bfb7a] rounded-sm flex items-center justify-center p-1">
                <div className="w-full h-full border border-black/20" />
              </div>
              <span className="text-[12px] font-bold tracking-tight uppercase">
                Source joins the OpenAI Services Partner Program
              </span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-[clamp(3.5rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-black"
          >
            Designing <br />
            intelligent <br />
            systems for <br />
            teams that <br />
            move fast.
          </motion.h1>
        </div>
      </div>

    </section>
  );
}
