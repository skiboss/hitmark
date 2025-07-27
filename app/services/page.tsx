import ServicesHeroSection from "@/components/services/services-hero-section"
import CoreServicesSection from "@/components/services/core-services-section"
import CaseStudiesSection from "@/components/services/case-studies-section"
import ServiceProcessSection from "@/components/services/service-process-section"
import PricingSection from "@/components/services/pricing-section"
import ReadyToScaleSection from "@/components/home/ready-to-scale-section"
import EnhancedBackground from "@/components/enhanced-background"
import ClientServicesPage from "@/components/client-services-page"

export default function ServicesPage() {
  return (
    <ClientServicesPage>
      <EnhancedBackground />
      <ServicesHeroSection />
      <CoreServicesSection />
      <CaseStudiesSection />
      <ServiceProcessSection />
      {/* <PricingSection /> */}
      <ReadyToScaleSection />
    </ClientServicesPage>
  )
}
