import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandTrustSection } from "@/components/sections/BrandTrustSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PainSection } from "@/components/sections/PainSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { OEMBrandsSection } from "@/components/sections/OEMBrandsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "OEM-Certified Auto Body & Collision Repair in Orlando · Free Estimate",
  description:
    "Family-owned for 45+ years. OEM-certified for 13 brands. We work directly with your insurance and back every repair with a lifetime warranty. Free estimate at Collision Center Orlando.",
  openGraph: {
    title:
      "Collision Center Orlando — OEM-Certified Auto Body Repair",
    description:
      "45+ years family-owned. OEM-certified for 13 brands. Direct insurance billing. Lifetime warranty.",
    url: "https://book.collisionorlando.com",
    siteName: "Collision Center Orlando",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Above-fold trust bar: 13 OEM brand-logo marquee (2026-05-19) */}
        <BrandTrustSection />
        <StatsSection />
        <PainSection />
        <AuthoritySection />
        <ServicesSection />
        {/* Cert-plaque marquee — sits after the services block where the
            OEM-certified service detail row provides context (2026-05-19). */}
        <OEMBrandsSection />
        <ProcessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
