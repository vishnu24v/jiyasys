'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Strategy',
    desc: 'We begin by understanding your organization’s goals, pain points, and existing systems. Together, we define a clear roadmap that aligns automation with measurable business outcomes.'
  },
  {
    num: '02',
    title: 'Architect',
    desc: 'Our team designs a custom automation framework tailored to your tools, data, and workflows—ensuring scalability, reliability, and effortless integration across your ecosystem.'
  },
  {
    num: '03',
    title: 'Launch',
    desc: 'From prototypes to full-scale rollouts, we implement, test, and refine intelligent systems that deliver immediate efficiency gains and lasting operational impact.'
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'After deployment, we continuously optimize performance, expand capabilities, and help your teams harness automation to drive sustained growth and innovation.'
  }
];

export default function Process() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-32">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
            The Source Process
          </span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
            Turning Ideas <br />
            <span className="opacity-30">into Intelligent</span> <br />
            Systems.
          </h2>
          <p className="text-lg opacity-50 font-medium leading-relaxed">
            Source® guides you through a focused, four-step process that blends strategic insight, technical precision, and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="text-6xl font-black opacity-10 mb-8 group-hover:text-primary group-hover:opacity-100 transition-all duration-500">
                {step.num}
              </div>
              <h3 className="text-2xl font-black uppercase mb-6 tracking-tight">{step.title}</h3>
              <p className="text-sm opacity-50 leading-relaxed font-medium">
                {step.desc}
              </p>
              
              {/* Connector Line for Desktop */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-8 left-[100%] w-full h-[1px] bg-white/5" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
