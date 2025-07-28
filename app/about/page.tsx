import AboutHeroSection from "@/components/about/about-hero-section"
import WhyBrandsSection from "@/components/home/why-brands-section"
import WhatMakesUsDifferentSection from "@/components/about/what-makes-us-different-section"
import OurValuesSection from "@/components/about/our-values-section"
import EnhancedBackground from "@/components/enhanced-background"
import ClientAboutPage from "@/components/client-about-page"
import ReadyToScaleSection from "@/components/home/ready-to-scale-section"
import OurStorySection from "@/components/about/our-story-section"
import PartnersSection from "@/components/home/partners-section"

export default function AboutPage() {
  return (
    <ClientAboutPage>
      <EnhancedBackground />
      <AboutHeroSection />
      <OurStorySection />
      <OurValuesSection />
      <WhatMakesUsDifferentSection />
      <PartnersSection />
      <ReadyToScaleSection />
    </ClientAboutPage>
  )
}

