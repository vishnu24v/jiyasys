'use client';

import { motion } from 'framer-motion';

const logos = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Adobe', 'Salesforce'
];

export default function TrustedBy() {
  return (
    <section className="py-24 border-y border-white/5 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-2">
          Global Enterprise Partners
        </span>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx}
              className="text-3xl md:text-5xl font-black text-white/20 hover:text-primary transition-colors cursor-default grayscale hover:grayscale-0"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
