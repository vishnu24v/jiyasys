'use client';

import { motion } from 'framer-motion';
import { Bot, Zap, Database, TrendingUp, Search } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Workflow Automation',
    desc: 'We streamline operations by designing intelligent workflows that automate repetitive processes, reduce human error, and enhance team productivity.',
    icon: <Zap className="text-primary" size={32} />,
    tags: ['Intelligent Workflows', 'Process Orchestration', 'Ops Efficiency']
  },
  {
    title: 'Custom AI Solutions',
    desc: 'Our engineers build bespoke AI systems tailored to your data, tools, and business goals — from intelligent assistants to fully automated decision platforms.',
    icon: <Bot className="text-primary" size={32} />,
    tags: ['Applied AI', 'Model Engineering']
  },
  {
    title: 'Data Infrastructure',
    desc: 'We consolidate your scattered data into clean, unified systems, ensuring seamless connections between platforms and enabling powerful AI performance.',
    icon: <Database className="text-primary" size={32} />,
    tags: ['Unified Data Pipelines', 'System Connectivity']
  },
  {
    title: 'Predictive Analytics',
    desc: 'Using advanced machine learning models, we transform your data into forward-looking insights that drive better decisions and measurable business outcomes.',
    icon: <TrendingUp className="text-primary" size={32} />,
    tags: ['Forecasting Intelligence', 'Real-Time Insights']
  },
  {
    title: 'AI Strategy & Consulting',
    desc: 'We help organizations define clear AI adoption strategies, assess readiness, and align automation goals with long-term operational objectives.',
    icon: <Search className="text-primary" size={32} />,
    tags: ['AI Roadmapping', 'Transformation Strategy']
  }
];

export default function Services() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
              Building Intelligent Foundations
            </span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
              Modernizing <br />
              <span className="opacity-30">Operations for the</span> <br />
              Modern Enterprise.
            </h2>
            <p className="max-w-xl opacity-50 font-medium text-lg leading-relaxed">
              We help you modernize operations through custom AI systems, automated processes, and data-driven insights built to scale with your goals.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12 rounded-[40px] group flex flex-col h-full"
            >
              <div className="mb-10 w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">{service.title}</h3>
              <p className="text-sm opacity-50 mb-10 leading-relaxed font-medium flex-grow">
                {service.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 glass rounded-full opacity-40">
                    # {tag}
                  </span>
                ))}
              </div>

              <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <div className="w-10 h-[1px] bg-primary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
