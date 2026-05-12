'use client';

import { motion } from 'framer-motion';

const experts = [
  { name: 'Oliver Grant', role: 'CEO & Founder', loc: 'London, UK' },
  { name: 'Jonas Richter', role: 'Chief Technology Officer', loc: 'London, UK' },
  { name: 'Mila Kovalenko', role: 'Chief Strategy Officer', loc: 'London, UK' },
  { name: 'David Sato', role: 'Head of AI Engineering', loc: 'Tokyo, Japan' },
  { name: 'Sophia Nguyen', role: 'Automation Architect', loc: 'New York, USA' },
  { name: 'Tobias Keller', role: 'Senior Software Engineer', loc: 'Berlin, Germany' },
  { name: 'Amelia Brooks', role: 'Data Systems Engineer', loc: 'London, UK' },
  { name: 'Isabella Cruz', role: 'AI Engineer & Researcher', loc: 'New York, USA' }
];

export default function Experts() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
              Global Talent
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
              Experts behind <br />
              <span className="opacity-30">the Intelligent</span> Systems.
            </h2>
          </div>
          <p className="max-w-xs opacity-50 font-medium text-sm leading-relaxed mb-4">
            From London to Tokyo, our specialists collaborate seamlessly to design smarter, faster, and more human AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((exp, idx) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glass-card p-10 rounded-[40px] group"
            >
              <div className="w-full aspect-square glass rounded-3xl mb-8 flex items-center justify-center overflow-hidden">
                <div className="text-primary/20 font-black text-6xl uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700">
                  {exp.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                {exp.name}
              </h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">
                {exp.role}
              </p>
              <p className="text-[9px] font-bold opacity-30">
                {exp.loc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
