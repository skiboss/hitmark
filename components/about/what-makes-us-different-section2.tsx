"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Target, Lightbulb, Map, Monitor, Users, PenTool, TrendingUp, BarChart3, Settings } from "lucide-react"

export default function WhatMakesUsDifferentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Search,
      title: "Brand Discovery & Market Positioning",
      description: "Uncover what makes your brand unique and craft a compelling market position that sets you apart.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      icon: Target,
      title: "Ideal Client Persona Development",
      description: "Define your dream customers with precision to tailor messaging that truly resonates.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      delay: 0.2,
    },
    {
      icon: Lightbulb,
      title: "Problem-Solution Frameworks",
      description: "Identify core challenges your audience faces and develop targeted solutions that drive engagement.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50",
      delay: 0.3,
    },
    {
      icon: Map,
      title: "Audience Journey Mapping & Offer Planning",
      description:
        "Strategically plan audience segments and craft offers that move prospects through every stage of the funnel.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      delay: 0.4,
    },
    {
      icon: Monitor,
      title: "Landing Page Design & Optimization",
      description: "Create high-converting landing pages optimized for engagement and lead capture.",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      delay: 0.5,
    },
    {
      icon: Users,
      title: "In-Depth Keyword & Audience Research",
      description: "Leverage advanced tools to uncover valuable keywords and precisely target ideal audiences.",
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50",
      delay: 0.6,
    },
    {
      icon: PenTool,
      title: "Compelling Ad Copywriting & Creative Design",
      description: "Develop persuasive ad content and visuals that capture attention and drive action.",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50",
      delay: 0.7,
    },
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization & Testing",
      description: "Continuously test and refine landing pages and funnels to maximize conversions.",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50",
      delay: 0.8,
    },
    {
      icon: BarChart3,
      title: "Performance Reporting & Lead Quality Analysis",
      description: "Monitor qualified leads and opportunities to inform ongoing campaign improvements.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      delay: 0.9,
    },
    {
      icon: Settings,
      title: "Manual Bidding & Automated Rules Management",
      description:
        "Implement data-driven manual bidding strategies combined with rules-based automation once reliable data is established.",
      gradient: "from-slate-500 to-gray-500",
      bgGradient: "from-slate-50 to-gray-50",
      delay: 1.0,
    },
  ]

  return (
    <section ref={ref} id="different" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
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
        className="absolute top-20 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-20"
      />

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-15"
      />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              Our Comprehensive Approach
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            10 Strategic Steps to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology combines strategic thinking with tactical execution to deliver measurable results for
            your business.
          </p>
        </motion.div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: service.delay,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className={`w-full bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-lg border border-white/50 backdrop-blur-sm relative overflow-hidden group cursor-pointer`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
                />

                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-sm font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">{service.description}</p>
                  </div>

                  {/* Decorative element */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className={`hidden md:block w-3 h-3 rounded-full bg-gradient-to-br ${service.gradient} shadow-lg`}
                  />
                </div>

                {/* Progress indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{
                    duration: 1,
                    delay: service.delay + 0.5,
                    ease: "easeOut",
                  }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's implement these strategic steps to accelerate your business growth and maximize your ROI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
