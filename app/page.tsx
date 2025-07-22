"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/home/hero-section"
import MetricsSection from "@/components/home/metrics-section"
import WhoWeAreSection from "@/components/home/who-we-are-section"
import CoreServicesSection from "@/components/home/core-services-section"
import WhyBrandsSection from "@/components/home/why-brands-section"
import ProcessSection from "@/components/home/process-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import PartnersSection from "@/components/home/partners-section"
import ReadyToScaleSection from "@/components/home/ready-to-scale-section"
import Loader from "@/components/loader"
import EnhancedBackground from "@/components/enhanced-background"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <EnhancedBackground />
      <HeroSection />
      <MetricsSection />
      <WhoWeAreSection />
      <CoreServicesSection />
      <WhyBrandsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <ReadyToScaleSection />
    </motion.div>
  )
}
