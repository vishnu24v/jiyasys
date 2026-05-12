'use client';

import Navbar from "@/components/shared/Navbar";
import PageTransition from "@/components/shared/Transition";
import { ArrowLeft, Share2, Send, Briefcase, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function OpenAIPartnerPage() {
  return (
    <PageTransition>
      <main className="bg-background min-h-screen">
        <Navbar />
        
        {/* Article Header */}
        <section className="pt-40 pb-20 border-b border-black/5">
          <div className="container mx-auto px-6">
            <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity mb-12 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>

            <div className="max-w-4xl">
              <span className="px-4 py-1 bg-black text-white text-[10px] font-black uppercase rounded-full mb-8 inline-block">
                News | Oct 7, 2025
              </span>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                Source joins the OpenAI Services Partner Program
              </h1>

              <div className="flex flex-wrap items-center gap-8 py-8 border-y border-black/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center font-black">OG</div>
                  <div>
                    <h4 className="text-sm font-black uppercase">Oliver Grant</h4>
                    <p className="text-[10px] opacity-40 font-bold uppercase">CEO & Founder</p>
                  </div>
                </div>
                
                <div className="h-8 w-[1px] bg-black/10 hidden md:block" />

                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black uppercase opacity-30">Share directly to:</span>
                  <div className="flex gap-3">
                    <button className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-primary transition-all"><Send size={14} /></button>
                    <button className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-primary transition-all"><Briefcase size={14} /></button>
                    <button className="w-8 h-8 glass rounded-full flex items-center justify-center hover:bg-primary transition-all"><Globe size={14} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Main Text */}
              <div className="lg:col-span-8 space-y-12">
                <p className="text-2xl font-medium leading-relaxed">
                  At Source, our mission has always been simple — to help teams move faster through thoughtful automation. Today, we’re taking another step toward that goal: Source has officially joined the OpenAI Services Partner Program.
                </p>

                <div className="prose prose-lg max-w-none text-black/70 font-medium leading-relaxed space-y-8">
                  <p>This partnership recognizes our growing expertise in designing and implementing AI systems that deliver real business value — from workflow automation to intelligent customer operations.</p>
                  
                  <h2 className="text-3xl font-black uppercase tracking-tighter text-black mt-16 mb-8">Why this partnership matters</h2>
                  <p>Joining the OpenAI Services Partner Program isn’t just about access — it’s about alignment. We’ve been building automations powered by OpenAI technologies for years, helping teams turn manual, time-consuming work into seamless, intelligent systems.</p>
                  
                  <p>Through this partnership, we gain:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>Early access to OpenAI’s latest tools and APIs</li>
                    <li>Direct collaboration opportunities on enterprise-level projects</li>
                    <li>Best practices and compliance support from OpenAI’s dedicated partner network</li>
                  </ul>

                  <h2 className="text-3xl font-black uppercase tracking-tighter text-black mt-16 mb-8">Raising the standard for automation</h2>
                  <p>Modern automation is no longer about scripts or one-off workflows. It’s about integrated intelligence — systems that can understand context, reason through complexity, and adapt in real time.</p>
                  
                  <p>By combining Source’s engineering expertise with OpenAI’s language and reasoning capabilities, we’re able to:</p>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>Build AI copilots that empower customer-facing teams</li>
                    <li>Automate data-heavy operations across departments</li>
                    <li>Create custom GPT-based solutions tailored to unique business processes</li>
                  </ul>

                  <h2 className="text-3xl font-black uppercase tracking-tighter text-black mt-16 mb-8">What this means for our clients</h2>
                  <p>For our existing partners, nothing changes overnight — but everything improves quietly in the background. We’ll be expanding our internal AI infrastructure, launching new integration frameworks, and offering strategic AI assessments for all Source clients.</p>
                </div>
              </div>

              {/* Sidebar / CTA */}
              <div className="lg:col-span-4">
                <div className="sticky top-40 space-y-8">
                  <div className="glass p-10 rounded-[40px] border-primary/20">
                    <h3 className="text-xl font-black uppercase mb-6">Stay in the loop</h3>
                    <p className="text-sm opacity-50 mb-8 font-medium">Join our newsletter for case studies and actionable AI tips.</p>
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      className="w-full bg-white border border-black/5 p-4 rounded-xl mb-4 text-sm"
                    />
                    <button className="w-full py-4 bg-black text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-primary transition-all">
                      Join Newsletter
                    </button>
                  </div>

                  <div className="glass p-10 rounded-[40px]">
                    <h3 className="text-xl font-black uppercase mb-6">Ready to scale?</h3>
                    <p className="text-sm opacity-50 mb-8 font-medium">Whether you have questions or just want to explore what's possible, we're here to help.</p>
                    <Link href="/contact" className="w-full py-4 bg-[#4ADE80] text-black font-black text-xs uppercase tracking-widest rounded-xl block text-center">
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
