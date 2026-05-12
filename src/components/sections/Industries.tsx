'use client';

import { motion } from 'framer-motion';

const industries = [
  { title: 'Healthcare', size: 'col-span-1 md:col-span-2 row-span-1', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
  { title: 'Finance', size: 'col-span-1 md:col-span-1 row-span-2', img: 'https://images.unsplash.com/photo-1611974717482-aa8a29486c0e?auto=format&fit=crop&q=80&w=800' },
  { title: 'Retail', size: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
  { title: 'Logistics', size: 'col-span-1 md:col-span-1 row-span-1', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
  { title: 'Education', size: 'col-span-1 md:col-span-2 row-span-1', img: 'https://images.unsplash.com/photo-1523050338692-7b835a07973f?auto=format&fit=crop&q=80&w=800' },
];

export default function Industries() {
  return (
    <section className="py-32 relative bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
            Domain Expertise
          </span>
          <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            Industries <span className="opacity-30">We Power</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {industries.map((industry, idx) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl glass group ${industry.size}`}
            >
              <img 
                src={industry.img} 
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
