import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CtaSection } from "@/components/CtaSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
