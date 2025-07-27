"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Megaphone, TrendingUp, Brain, ArrowRight, X } from "lucide-react"

export default function CoreServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const services = [
    {
      icon: Megaphone,
      title: "Media Buying",
      description:
        "We build scalable paid media campaigns across Meta, Google, YouTube, Display & Native channels — optimized daily for efficiency and ROI. Using data-first targeting, we laser-focus on your ideal customers.",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      iconColor: "text-blue-600",
      fullDescription: `Our media buying service combines strategic planning with tactical execution to maximize your advertising ROI across all major platforms.

      **What We Do:**
      • Strategic campaign planning and audience research
      • Cross-platform campaign setup and optimization
      • Advanced targeting using first-party and lookalike audiences
      • Creative testing and performance optimization
      • Real-time bid management and budget allocation
      • Comprehensive reporting and insights

      **Platforms We Master:**
      • Meta (Facebook & Instagram)
      • Google Ads (Search, Display, YouTube)
      • LinkedIn Ads for B2B targeting
      • Native advertising networks
      • Programmatic display advertising

      **Results You Can Expect:**
      • 3-5x improvement in ROAS within 90 days
      • 40-60% reduction in cost per acquisition
      • Scalable campaign structures for long-term growth`,
    },
    {
      icon: TrendingUp,
      title: "Performance SEO",
      description:
        "Our SEO combines technical optimization, conversion-first content, and modern link strategies to fuel real growth. • Like leading performance agencies, we use AI for keyword clustering and content optimization.",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      iconColor: "text-purple-600",
      fullDescription: `Performance SEO that drives revenue, not just rankings. We focus on technical excellence and content that converts visitors into customers.

      **Technical SEO Foundation:**
      • Comprehensive site audits and optimization
      • Core Web Vitals optimization
      • Schema markup implementation
      • Mobile-first indexing optimization
      • Site speed and performance enhancement

      **Content Strategy:**
      • AI-powered keyword research and clustering
      • Conversion-focused content creation
      • Topic authority building
      • User intent optimization
      • Content gap analysis and competitive research

      **Link Building & Authority:**
      • White-hat link acquisition strategies
      • Digital PR and brand mention campaigns
      • Industry partnership development
      • Content-driven link earning

      **Performance Metrics:**
      • 150-300% increase in organic traffic
      • 2-4x improvement in conversion rates
      • Top 3 rankings for target keywords within 6 months`,
    },
    {
      icon: Brain,
      title: "AI-Powered Lead Generation",
      description:
        "We develop hyper-personalized outreach systems using advanced AI tools. • To intent-driven, high-touch automation that delivers qualified conversations straight to your inbox.",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      iconColor: "text-indigo-600",
      fullDescription: `Leverage cutting-edge AI technology to automate and scale your lead generation while maintaining personalization at scale.

      **AI-Powered Outreach:**
      • Advanced prospect research and qualification
      • Personalized message generation at scale
      • Multi-channel outreach sequences (Email, LinkedIn, SMS)
      • Intent data analysis and lead scoring
      • Automated follow-up sequences

      **Smart Automation:**
      • CRM integration and lead nurturing
      • Behavioral trigger-based campaigns
      • Dynamic content personalization
      • A/B testing and optimization
      • Real-time performance monitoring

      **Lead Qualification:**
      • AI-powered lead scoring models
      • Automated qualification questionnaires
      • Intent signal detection
      • Prospect behavior analysis
      • Sales-ready lead handoff

      **Expected Outcomes:**
      • 5-10x increase in qualified leads
      • 70-80% reduction in manual outreach time
      • 25-40% improvement in response rates
      • Scalable systems that grow with your business`,
    },
  ]

  const openModal = (index: number) => {
    setSelectedService(index)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedService(null)
    document.body.style.overflow = "unset"
  }

  return (
    <>
      <section ref={ref} id="core-services" className="py-20 px-4 bg-[#FAFAFA] relative overflow-hidden">
        {/* Background animated elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-20"
        />

        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every Service We Offer, Is Tied Directly To Business Outcomes:
              <br />
              <span className="font-semibold">Leads, Revenue, And Long-Term Scale.</span>
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-3xl border border-gray-100 relative overflow-hidden group cursor-pointer"
                onClick={() => openModal(index)}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.color.replace("bg-", "").replace("-500", "")}, transparent)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`w-16 h-16 md:w-20 md:h-20 ${service.color} ${service.hoverColor} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                      whileHover={{
                        color: service.color.includes("blue")
                          ? "#3b82f6"
                          : service.color.includes("purple")
                            ? "#8b5cf6"
                            : "#6366f1",
                      }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      className={`inline-flex items-center space-x-2 ${service.iconColor} font-semibold hover:underline`}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color.replace("bg-", "").replace("-500", "")}, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                // boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full relative overflow-hidden"
                onClick={() => (window.location.href = "/contact")}
              >
                <span className="relative z-10">Get Your Custom Growth Plan</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-4xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex items-start space-x-6 mb-6">
              <div
                className={`w-20 h-20 ${services[selectedService].color} rounded-2xl flex items-center justify-center shadow-lg`}
              >
                {React.createElement(services[selectedService].icon, {
                  className: "w-10 h-10 text-white",
                })}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{services[selectedService].title}</h2>
                <p className="text-gray-600">{services[selectedService].description}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {services[selectedService].fullDescription.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith(":**")) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  )
                } else if (paragraph.includes("•")) {
                  const lines = paragraph.split("\n")
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-4">
                      {lines
                        .filter((line) => line.includes("•"))
                        .map((line, lineIndex) => (
                          <li key={lineIndex} className="text-gray-600">
                            {line.replace("• ", "")}
                          </li>
                        ))}
                    </ul>
                  )
                } else {
                  return (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  )
                }
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full"
                onClick={() => (window.location.href = "/contact")}
              >
                Get Started with {services[selectedService].title}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
