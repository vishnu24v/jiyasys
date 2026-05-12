'use client';

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactSection from "@/components/shared/ContactSection";
import PageTransition from "@/components/shared/Transition";

export default function TermsOfService() {
  return (
    <PageTransition>
      <main className="bg-background min-h-screen font-clash">
        <Navbar />
        
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">
              Terms of Service
            </h1>
            <div className="flex items-center gap-4 text-sm font-bold opacity-40 uppercase tracking-widest mb-16">
              <span>Last updated:</span>
              <span className="text-black">Oct 31, 2025</span>
            </div>

            <div className="space-y-12 text-lg leading-relaxed opacity-80">
              <p>
                These Terms of Service ("Terms") govern your access to and use of source.so (the "Site"). By accessing or using our Site, you agree to be bound by these Terms.
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">1. Use of the Site</h2>
                <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You may not:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Attempt to access, alter, or disrupt any part of the Site or its systems</li>
                  <li>Interfere with the Site’s performance, integrity, or security</li>
                  <li>Misrepresent your identity or affiliation with Source</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">2. Intellectual Property</h2>
                <p>All content on the Site — including but not limited to visuals, copy, layouts, graphics, and code — is the property of Source and is protected by copyright, trademark, and other intellectual property laws.</p>
                <p>You may not reproduce, distribute, modify, or reuse any content without prior written consent from Source.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">3. Service Availability</h2>
                <p>We aim to keep the Site available and up-to-date, but uninterrupted access is not guaranteed. Source reserves the right to update, suspend, or discontinue any aspect of the Site at any time, without prior notice.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">4. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Source will not be liable for any damages resulting from your use or inability to use the Site, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li>Business interruptions or lost revenue</li>
                  <li>Access issues, downtime, or technical errors</li>
                  <li>Content or actions of third parties beyond our control</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">5. Third-Party Services</h2>
                <p>The Site may contain links or integrations with third-party platforms, tools, or content. Source is not responsible for any external services, their availability, or their policies. Accessing third-party resources is at your own risk.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">6. Indemnification</h2>
                <p>You agree to indemnify and hold harmless Source, its team, and partners from any claims, damages, or expenses arising out of your violation of these Terms or misuse of the Site.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">7. Governing Law</h2>
                <p>These Terms are governed by and interpreted in accordance with the laws of Poland. Any legal disputes will be resolved in the competent courts of Warsaw, Poland.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">8. Changes to These Terms</h2>
                <p>We may update these Terms periodically. Any changes will be posted here with a new effective date. Your continued use of the Site after updates are posted means you accept the revised Terms.</p>
              </div>

              <div className="pt-12 border-t border-black/10">
                 <h2 className="text-2xl font-bold mb-6">Contact information</h2>
                 <p className="mb-8">Source Ltd. is the controller of the personal data covered in this Terms of Service. If you have any questions regarding the processing of your personal data or this Terms of Service, please contact us at:</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm font-bold uppercase tracking-widest">
                    <div>
                      <span className="opacity-40 block mb-2">Address</span>
                      <p>Source Ltd.<br />167–169 Great Portland Street<br />London W1W 5PF<br />United Kingdom</p>
                    </div>
                    <div>
                      <span className="opacity-40 block mb-2">Email & Phone</span>
                      <p>hello@source.com<br />(415) 555-8247</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <Footer />
      </main>
    </PageTransition>
  );
}
