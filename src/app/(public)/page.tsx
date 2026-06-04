// src/app/(public)/page.tsx

import { HeroSection } from "@/features/home/sections/hero-section";
import { FeaturedProductsSection } from "@/features/home/sections/featured-products-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedProductsSection />
    </>
  );
}
