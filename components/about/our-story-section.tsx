"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Search, Share2, Sparkle, Target, Zap } from "lucide-react"

export default function OurStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    { icon: Sparkle, label: "Search Engine", color: "text-purple-600", bg: "#9333ea" },
    { icon: Sparkle, label: "Social Media", color: "text-green-600", bg: "#16a34a" },
    { icon: Sparkle, label: "Lead Generation", color: "text-blue-600", bg: "#2563eb" },
    { icon: Sparkle, label: "AI Powered", color: "text-pink-600", bg: "#db2777" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block bg-[#F6F6F6] text-gray-900 px-6 py-2 rounded-full text-md font-light mb-6 drop-shadow-lg">
            Our Story
          </div>

          <h2 className="text-2xl md:text-2xl font-normal text-gray-900 mb-6 leading-relaxed">
            Hitmark Digital is a modern performance marketing agency built for growth-focused brands. Hitmark was founded on 
            a simple belief: Founders and growth leads don’t need another agency to manage — they need a growth system that 
            runs itself. We work through elite fulfillment partners and manage everything through a single expert point of contact.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full"
            >
              <service.icon className={`w-6 h-6 ${service.color}`} fill={`${service.bg}`} />
              <span className="text-gray-700 font-medium">{service.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
            onClick={() => (window.location.href = "#")}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
