import { HeroSection } from "@/components/hero-section-1";
import Features from "@/components/Features";
import InvestorsSection from "@/components/InvestorsSection";
import { Pricing } from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Features />
      <InvestorsSection />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;