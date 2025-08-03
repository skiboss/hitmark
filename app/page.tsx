import HeroSection from "@/components/home/hero-section"
import MetricsSection from "@/components/home/metrics-section"
import WhoWeAreSection from "@/components/home/who-we-are-section"
import CoreServicesSection from "@/components/home/core-services-section"
import WhyBrandsSection from "@/components/home/why-brands-section"
import ProcessSection from "@/components/home/process-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import PartnersSection from "@/components/home/partners-section"
import ReadyToScaleSection from "@/components/home/ready-to-scale-section"
import EnhancedBackground from "@/components/enhanced-background"
import ClientHomePage from "@/components/client-home-page"
import ProcessFlow from "@/components/process-flow"
import ProcessFlow1 from "@/components/process-flow1"
import HowItWorks from "@/components/how-it-works"

export default function HomePage() {
  return (
<ClientHomePage>
      <EnhancedBackground />
      <HeroSection />
      <MetricsSection />
      <WhoWeAreSection />
      <CoreServicesSection />
      {/* <ProcessSection /> */}
      <HowItWorks />
      <ProcessFlow />
      {/* <ProcessFlow1 /> */}
      <WhyBrandsSection />
      <TestimonialsSection />
      <PartnersSection />
      <ReadyToScaleSection />
    </ClientHomePage>
  )
}