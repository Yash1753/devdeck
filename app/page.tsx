//import Image from "next/image";
import FeaturedProducts from "@/components/landing-page/FeaturedProducts";
import HeroSection from "@/components/landing-page/hero-section";
import RecentLaunch from "@/components/landing-page/RecentLaunch";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentLaunch/>
    </div>
  );
}
