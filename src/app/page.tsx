import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import RealAppShowcaseSection from "@/components/sections/new/RealAppShowcaseSection";
import KlareMethodExplained from "@/components/sections/KlareMethodExplained";
import FaqSection from "@/components/sections/FaqSection";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <RealAppShowcaseSection />
      <KlareMethodExplained />
      <FaqSection />
      <CallToAction />
    </main>
  );
}
