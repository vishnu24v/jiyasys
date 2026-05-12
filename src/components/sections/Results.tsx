'use client';

import { motion } from 'framer-motion';

const results = [
  {
    client: '45 Degrees',
    desc: "45 Degrees transformed their luxury travel operations by implementing Source's automation platform — eliminating bottlenecks in itinerary creation, supplier coordination, and client communication that were threatening their ability to scale.",
    metrics: [
      { label: 'reduction in manual coordination', val: '70%' },
      { label: 'faster client response times', val: '2x' }
    ]
  },
  {
    client: 'Clandestine',
    desc: "Clandestine cut fraud false positives by 43% and slashed investigation time by implementing Source's adaptive machine learning system — moving from reactive rule-checking to intelligent, real-time risk assessment.",
    metrics: [
      { label: 'reduction in false positives', val: '43%' },
      { label: 'faster case resolution', val: '60%' }
    ]
  },
  {
    client: 'GlobalBank',
    desc: "Facing mounting customer demand for faster financial services, GlobalBank turned to Source to modernize its lending operations. The result: a unified, AI-powered system that cuts decision times from days to hours while strengthening compliance and customer trust.",
    metrics: [
      { label: 'compliance accuracy', val: '99.2%' },
      { label: 'reduction in manual review steps', val: '45%' }
    ]
  },
  {
    client: 'Railspeed',
    desc: "Railspeed eliminated 42% of operational delays by replacing reactive maintenance schedules with AI-driven predictive systems — turning scattered logistics data into a unified command center for their growing European rail network.",
    metrics: [
      { label: 'reduction in delays', val: '42%' },
      { label: 'less manual scheduling', val: '30%' }
    ]
  }
];

export default function Results() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
            Client Impact
          </span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            Results <span className="opacity-30">that move</span> <br />
            Businesses Forward.
          </h2>
          <p className="max-w-2xl mx-auto opacity-50 font-medium text-lg leading-relaxed">
            From startups to global enterprises, our clients trust Source® to build automation strategies that create efficiency and long-term value.
          </p>
        </div>

        <div className="space-y-12">
          {results.map((item, idx) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-20 rounded-[60px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">{item.client}</h3>
                <p className="text-lg opacity-60 font-medium leading-relaxed mb-10">
                  {item.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {item.metrics.map(m => (
                  <div key={m.label} className="p-8 glass rounded-3xl border-primary/10">
                    <div className="text-5xl font-black text-primary mb-2">{m.val}</div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 leading-tight">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
