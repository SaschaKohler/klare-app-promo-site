"use client";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import RealAppShowcaseSection from "@/components/sections/new/RealAppShowcaseSection";
import KlareMethodExplained from "@/components/sections/KlareMethodExplained";
import ClearMethodExplained from "@/components/sections/ClearMethodExplained";
import FaqSection from "@/components/sections/FaqSection";
import CallToAction from "@/components/sections/CallToAction";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const isEnglish =
    pathname.startsWith("/en") ||
    (typeof window !== "undefined" &&
      window.location.hostname.startsWith("en."));

  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />
      <FeaturesSection />
      <RealAppShowcaseSection />
      {isEnglish ? <ClearMethodExplained /> : <KlareMethodExplained />}
      <FaqSection />
      <CallToAction />
    </main>
  );
}
