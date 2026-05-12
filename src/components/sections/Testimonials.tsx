'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Manual itinerary building and supplier coordination were breaking our operations. Source rebuilt the process — our team moves twice as fast, client communication is seamless, and scaling is finally possible.",
    author: "Daria Simonova",
    role: "Director of Operations, 45 Degrees"
  },
  {
    quote: "We were drowning in false positives and manual reviews. Source’s adaptive ML cut investigation time dramatically and provided real-time risk intelligence, reshaping how our fraud team operates.",
    author: "David Lorne",
    role: "Head of Fraud Strategy, Clandestine"
  },
  {
    quote: "Automation wasn’t just about speed for us — it was about keeping our brand promise. Source helped us create a seamless post-purchase experience that matches the quality and care our customers expect.",
    author: "Jordan Hale",
    role: "Director of Fulfillment & Logistics, Elasticwear"
  },
  {
    quote: "Source modernized our lending operations where internal efforts had stalled. Decision times fell from days to hours, compliance improved, and customers feel the difference immediately.",
    author: "Maria Vogel",
    role: "VP of Digital Transformation, GlobalBank"
  },
  {
    quote: "Source helped us break down the operational silos that were slowing our teams. Their automation layer let our systems communicate instantly, so engineers and managers could spend less time syncing and more time building.",
    author: "Dr. Lila Chen",
    role: "Head of Platform Engineering, EnnLabs"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-black/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
            Client Voices
          </span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            What our <br />
            <span className="opacity-30">Clients Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12 rounded-[40px] relative"
            >
              <Quote className="text-primary mb-8 opacity-20" size={40} />
              <p className="text-lg font-medium leading-relaxed mb-10 opacity-70 italic">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-xl font-black uppercase tracking-tight">{t.author}</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30 mt-2">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
