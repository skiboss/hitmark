"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, TrendingUp, Users, Zap, BarChart3, Rocket } from "lucide-react"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your ideal customers with laser-focused campaigns that convert.",
    },
    {
      icon: TrendingUp,
      title: "Growth Marketing",
      description: "Scale your business with data-driven strategies that deliver measurable results.",
    },
    {
      icon: Users,
      title: "Customer Acquisition",
      description: "Turn prospects into loyal customers with optimized conversion funnels.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Maximize ROI with continuous testing and optimization of your campaigns.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Make informed decisions with comprehensive reporting and analytics.",
    },
    {
      icon: Rocket,
      title: "Brand Acceleration",
      description: "Accelerate your brand growth with innovative marketing solutions.",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to hit your growth targets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden group"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
