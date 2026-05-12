import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Experts from "@/components/sections/Experts";
import Industries from "@/components/sections/Industries";
import PageTransition from "@/components/shared/Transition";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative min-h-screen">
        <Navbar />
        <Hero />
        <TrustedBy />
        
        {/* Intro Text Block */}
        <section className="py-48 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                Building <span className="text-primary">intelligent foundations</span> for the modern <span className="opacity-30">enterprise.</span>
              </h2>
              <div className="space-y-8">
                <p className="text-lg opacity-50 font-medium leading-relaxed">
                  Founded in 2020, Source® has quickly become a trusted partner for companies seeking to integrate AI into their daily operations. Our team blends strategic insight with technical precision to design automation systems that deliver measurable impact.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-10">
                  <div>
                    <div className="text-5xl font-black mb-2">4.9/5</div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Client satisfaction rate</p>
                  </div>
                  <div>
                    <div className="text-5xl font-black mb-2">10+</div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Successful client projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Process />
        <Results />
        <Pricing />
        <Testimonials />
        <Industries />
        <Experts />
        
        {/* Final CTA */}
        <section className="py-64 relative overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-primary/20 rounded-full blur-[200px] pointer-events-none opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-[15vw] md:text-[12vw] font-black uppercase tracking-tighter leading-[0.7] mb-20">
              Build <br />
              The <span className="text-gradient-primary">Future</span>
            </h2>
            <button className="px-16 py-8 bg-white text-black rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-primary transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              Get in Touch
            </button>
          </div>
        </section>

      </main>
    </PageTransition>
  );
}
