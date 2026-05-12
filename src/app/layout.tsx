import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/shared/SmoothScroll";
import CustomCursor from "@/components/shared/CustomCursor";
import AIChatbot from "@/components/shared/AIChatbot";
import ContactSection from "@/components/shared/ContactSection";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Jiyasys | AI-Powered IT Solutions & Enterprise Innovation",
  description: "Transforming Businesses with AI, Innovation & Scalable Digital Solutions. Jiyasys delivers enterprise-grade AI, mobile, blockchain, SaaS, and custom software solutions.",
  keywords: ["AI Development", "Blockchain", "SaaS", "IT Consulting", "Mobile Apps", "Enterprise Solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="antialiased noise-bg relative">
        {/* Global Central Vertical Line */}
        <div className="fixed top-0 left-1/2 w-[1px] h-full bg-black/5 -translate-x-1/2 pointer-events-none z-[1] hidden lg:block" />
        
        <SmoothScroll>
          <CustomCursor />
          <AIChatbot />
          {children}
          <ContactSection />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
