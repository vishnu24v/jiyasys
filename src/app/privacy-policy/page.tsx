'use client';

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactSection from "@/components/shared/ContactSection";
import PageTransition from "@/components/shared/Transition";

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <main className="bg-background min-h-screen font-clash">
        <Navbar />
        
        <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-8">
              Privacy Policy
            </h1>
            <div className="flex items-center gap-4 text-sm font-bold opacity-40 uppercase tracking-widest mb-16">
              <span>Last updated:</span>
              <span className="text-black">Oct 31, 2025</span>
            </div>

            <div className="space-y-12 text-lg leading-relaxed opacity-80">
              <p>
                Source ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website, source.so (the "Site").
              </p>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">1. Information We Collect</h2>
                <h3 className="text-xl font-bold">1.1 Personal Information</h3>
                <p>When you interact with our Site, we may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Any other details you share when contacting us or requesting information about our services</li>
                </ul>
                <h3 className="text-xl font-bold mt-8">1.2 Non-Personal Information</h3>
                <p>We also automatically collect certain non-personal data when you use our Site, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Referring URL</li>
                  <li>Pages viewed and time spent on the Site</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and improve our digital products and services</li>
                  <li>Respond to inquiries or requests for information</li>
                  <li>Personalize and enhance your experience on our Site</li>
                  <li>Analyze Site usage and performance</li>
                  <li>Maintain security and prevent unauthorized access</li>
                  <li>Send relevant updates about Source, our work, or our services</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">3. How We Share Your Information</h2>
                <p>We do not sell your personal data. However, we may share it in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><strong>Service Providers:</strong> We may share information with trusted third parties who assist in Site operations, analytics, email delivery, or client communications.</li>
                  <li><strong>Legal Compliance:</strong> We may disclose information when required by law or to protect our rights and interests.</li>
                  <li><strong>Business Transfers:</strong> If Source undergoes a merger, acquisition, or other business transfer, your information may be part of that transaction.</li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">4. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to improve your browsing experience, measure engagement, and gather analytics. You can control cookie preferences in your browser settings. Some Site features may not function correctly if cookies are disabled.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">5. Data Retention</h2>
                <p>We retain personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer period is required or permitted by law.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">6. Security</h2>
                <p>We take reasonable measures to protect your personal data. However, no online system or transmission is completely secure. You share your information with us at your own risk.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">7. Third-Party Links</h2>
                <p>Our Site may include links to other websites or platforms. We are not responsible for their privacy practices. Please review their policies before providing any personal data.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">8. Your Rights and Choices</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for processing</li>
                </ul>
                <p className="mt-4">To exercise these rights, please contact us at hello@source.com.</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-black opacity-100">9. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. The latest version will always be posted on this page, along with the effective date. Continued use of the Site means you accept the updated terms.</p>
              </div>

              <div className="pt-12 border-t border-black/10">
                 <h2 className="text-2xl font-bold mb-6">Contact information</h2>
                 <p className="mb-8">Source Ltd. is the controller of the personal data covered in this Privacy Policy. If you have any questions regarding the processing of your personal data or this Privacy Policy, please contact us at:</p>
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
