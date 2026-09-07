import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";

import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import BlogSection from "@/components/home/BlogSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { siteConfig } from "@/lib/site";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

export const metadata: Metadata = {
  title: `${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <WhoWeAreSection/>
      <ServicesGrid />
      <HowItWorks />
      <Testimonials />
      <BlogSection />
      <CTASection />
    </>
  );
}
