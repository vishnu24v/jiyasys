'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Launch',
    price: '$1,199',
    annualPrice: '$959',
    desc: 'For teams starting their AI automation journey.',
    features: ['3-Tool Automation', 'Pre-Built Templates', 'Workflow analytics', 'Monthly Insights', 'Standard Support', 'Secure Hosting']
  },
  {
    name: 'Scale',
    price: '$2,399',
    annualPrice: '$1,919',
    desc: 'For growing teams expanding automation across systems.',
    features: ['Unlimited Integrations', 'Dedicated Manager', 'Priority onboarding', 'Weekly Reports', 'Slack Support', 'Strategy Sessions'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$4,999',
    annualPrice: '$3,999',
    desc: 'For teams with 50+ employees or advanced needs.',
    features: ['Advanced Workflows', 'Enterprise Security', 'Custom AI', 'Private Deployment', '24/7 Support', 'Executive Reports']
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">
            Pricing Models
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10">
            The Right Plan <br />
            <span className="opacity-30">to Power Your Progress</span>
          </h2>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 transition-colors duration-500">
            <span className={`text-xs font-bold ${!isAnnual ? 'text-foreground' : 'opacity-40'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 glass rounded-full relative p-1 transition-all"
            >
              <motion.div 
                animate={{ x: isAnnual ? 28 : 0 }}
                className="w-5 h-5 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"
              />
            </button>
            <span className={`text-xs font-bold ${isAnnual ? 'text-foreground' : 'opacity-40'}`}>Annual <span className="text-primary ml-2 text-[10px]">Save 20%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`glass-card p-12 rounded-[40px] flex flex-col relative ${plan.popular ? 'border-primary/50' : ''}`}
            >
              {plan.popular && (
                <span className="absolute top-8 right-8 px-4 py-1 bg-primary text-black text-[10px] font-black uppercase rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-black uppercase mb-2">{plan.name}</h3>
              <p className="text-sm opacity-50 mb-10 font-medium">{plan.desc}</p>
              
              <div className="mb-10">
                <span className="text-5xl font-black">{isAnnual ? plan.annualPrice : plan.price}</span>
                <span className="text-sm opacity-40 ml-2">/ Month</span>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-30 mb-6">Includes:</p>
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check size={14} className="text-primary" />
                    <span className="text-sm font-medium opacity-70">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all ${plan.popular ? 'bg-primary text-black shadow-[0_0_20px_var(--primary)]' : 'glass hover:bg-foreground hover:text-background'}`}>
                Select {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
