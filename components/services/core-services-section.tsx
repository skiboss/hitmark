"use client"

import React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Megaphone, TrendingUp, Brain, ArrowRight, X } from "lucide-react"

export default function CoreServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState<number | null>(null)

  // useEffect(() => {
  //   const scrollToHash = () => {
  //     if (window.location.hash) {
  //       const id = window.location.hash.replace("#", "")
  //       const el = document.getElementById(id)
  //       if (el) {
  //         const yOffset = -100 // Adjust this value to match your navbar height
  //         const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
  //         window.scrollTo({ top: y, behavior: "smooth" })
  //       }
  //     }
  //   }
  //   window.addEventListener("hashchange", scrollToHash)
  //   scrollToHash()
  //   return () => window.removeEventListener("hashchange", scrollToHash)
  // }, [])

  const services = [
    {
      icon: Megaphone,
      title: "Media Buying",
      id: "media",
      description:
        "We build and manage scalable paid media campaigns across Meta, Google, YouTube, Display, Native, and more — optimized daily for maximum efficiency and ROI.",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      iconColor: "text-blue-600",
      fullDescription: `By leveraging a data-first targeting approach, we zero in on your ideal customers with precision and deliver measurable growth.

      **What We Do:**
      • Strategic campaign planning backed by deep audience research
      • Cross-platform campaign setup, continuous optimization, and scaling
      • Advanced targeting with first-party data and lookalike audiences
      • Creative testing and performance-driven optimization
      • Real-time bid management and intelligent budget allocation
      • Transparent, comprehensive reporting and actionable insights

      **Platforms We Master:**
      • Meta (Facebook & Instagram)
      • Google Ads (Search, Display, YouTube)
      • LinkedIn Ads (B2B-focused targeting)
      • Native Advertising Networks
      • Programmatic Display Advertising

      **Results You Can Expect:**
      • 3-5x improvement in ROAS
      • 40-60% reduction in cost per acquisition
      • Scalable campaign structures designed for sustainable, long-term growth`,
    },
    {
      icon: TrendingUp,
      title: "Performance SEO",
      id: "seo",
      description:
        "SEO is more than rankings — it’s about driving measurable growth and revenue. Our holistic approach combines cutting-edge technical optimization, conversion-focused content, and modern link strategies to fuel your online success.",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      iconColor: "text-purple-600",
      fullDescription: `Leveraging AI-powered keyword clustering and content optimization, we stay ahead of the curve — just like the top performance marketing agencies.

      **Our Comprehensive SEO Services:**
      • Full-Site Audits and Technical SEO: Identify and resolve issues affecting site speed, mobile usability, Core Web Vitals, schema markup, and indexing to deliver a seamless user experience and strong search performance.
      • AI-Driven Keyword Research & Clustering: Use advanced AI tools to uncover strategic keyword groups that match user intent and maximize content relevance.
      • Conversion-Optimized Content Creation: Develop engaging, authoritative content designed to attract, educate, and convert your ideal audience.
      • Competitive & Content Gap Analysis: Pinpoint opportunities to outperform competitors and fill content gaps that drive targeted traffic.

      **Content Strategy:**
      • White-Hat Link Building & Digital PR: Build your domain authority ethically through outreach, brand mentions, partnerships, and content-driven link earning. 
      • Continuous Performance Monitoring & Reporting: Track key metrics and optimize campaigns in real-time, adapting quickly to changes in algorithms and market conditions.
      • Strategic Manual Bidding & Rules-Based Automation: Implement data-driven bidding strategies combined with automated rules to maximize ROI once enough performance data is collected.

      **Performance Metrics:**
      • 150-300% increase in organic traffic
      • 2-4x improvement in conversion rates
      • Top 3 rankings for target keywords within 6 months`,
    },
    {
      icon: Brain,
      title: "AI-Powered Lead Generation",
      id: "ai",
      description:
        "At Hitmark Digital, we don't just generate leads — we create sales-ready conversations.",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
      iconColor: "text-indigo-600",
      fullDescription: `AI-driven outreach systems blend hyper-personalized messaging with intelligent automation to deliver qualified prospects directly to your inbox.

      **Our AI Lead Generation System Includes:**
      • Advanced Prospect Research and Qualification: Utilize AI tools to identify and assess high-potential leads based on intent data and behavioral signals.
      • Personalized Multi-Channel Outreach: Deploy tailored messaging across Email, LinkedIn, and SMS to engage prospects where they are most active.
      • Automated Follow-Up Sequences: Implement intelligent follow-ups that adapt based on prospect interactions, ensuring timely and relevant communication.
      • CRM Integration and Lead Nurturing: Seamlessly integrate with your CRM to automate lead scoring, segmentation, and nurturing workflows.
      • Behavioural Trigger-Based Campaigns: Launch campaigns that respond to specific prospect actions, increasing engagement and conversion rates.

      **Smart Automation:**
      • Dynamic Content Personalization: Deliver content that resonates with individual prospects, enhancing relevance and response rates.
      • A/B Testing and Optimization: Continuously test and refine messaging, channels, and sequences to improve performance over time.
      • Real-Time Performance Monitoring: Track key metrics and adjust strategies in real-time to maximize ROI.

      **Lead Qualification:**
      • AI-Powered Lead Scoring Models: Leverage machine learning to prioritize leads based on their likelihood to convert.
      • Automated Qualification Questionnaires: Use intelligent forms to assess lead quality and readiness, streamlining the qualification process.

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
      <section ref={ref} id="core-services" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        {/* Background animated elements */}
        {/* <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
          className="absolute top-20 right-20 w-24 h-24 bg-blue-100 rounded-full opacity-20"
        /> */}

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
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-3xl border border-gray-400 relative overflow-hidden group cursor-pointer"
                onClick={() => openModal(index)}
              >
                {/* Animated background gradient */}
                {/* <motion.div
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
                /> */}

                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div
                    // whileHover={{
                      // rotate: 360,
                      // scale: 1.1,
                    // }}
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
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
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
              {(() => {
                const text = services[selectedService].fullDescription
                const lines = text
                  .split("\n")
                  .map((line) => line.trim())
                  .filter((line) => line.length > 0)
                const elements: React.ReactNode[] = []
                let currentBullets: string[] = []

                const flushBullets = (key: React.Key | null | undefined) => {
                  if (currentBullets.length > 0) {
                    elements.push(
                      <ul key={key} className="list-disc list-inside space-y-2 mb-6 ml-4">
                        {currentBullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="text-gray-600 leading-relaxed">
                            {bullet}
                          </li>
                        ))}
                      </ul>,
                    )
                    currentBullets = []
                  }
                }

                lines.forEach((line, index) => {
                  console.log(`Line ${index}: "${line}"`) // Debug log

                  // Check for headings: lines that start and end with **
                  if (line.startsWith("**") && line.includes(":")) {
                    flushBullets(`bullets-before-${index}`)

                    // Remove ** and : to get clean heading text
                    const headingText = line
                      .replace(/^\*\*/, "")
                      .replace(/\*\*:?$/, "")
                      .replace(":", "")
                    console.log(`Found heading: "${headingText}"`) // Debug log

                    elements.push(
                      <h3 key={`heading-${index}`} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {headingText}
                      </h3>,
                    )
                  }
                  // Check for bullet points
                  else if (line.startsWith("•")) {
                    const bulletText = line.replace(/^•\s*/, "")
                    console.log(`Found bullet: "${bulletText}"`) // Debug log
                    currentBullets.push(bulletText)
                  }
                  // Regular paragraph
                  else {
                    flushBullets(`bullets-before-para-${index}`)
                    console.log(`Found paragraph: "${line}"`) // Debug log

                    elements.push(
                      <p key={`para-${index}`} className="text-gray-600 leading-relaxed mb-4">
                        {line}
                      </p>,
                    )
                  }
                })

                // Flush any remaining bullets
                flushBullets("final-bullets")

                return elements
              })()}
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