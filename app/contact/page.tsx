import ContactHeroSection from "@/components/contact/contact-hero-section"
import ContactFormSection from "@/components/contact/contact-form-section"
import ContactInfoSection from "@/components/contact/contact-info-section"
import FAQSection from "@/components/contact/faq-section"
import EnhancedBackground from "@/components/enhanced-background"
import ClientContactPage from "@/components/client-contact-page"

export default function ContactPage() {
  return (
    <ClientContactPage>
      <EnhancedBackground />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <FAQSection />
    </ClientContactPage>
  )
}

