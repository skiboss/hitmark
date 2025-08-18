"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Search, Share2, Sparkle, Target, Zap } from "lucide-react"

export default function WhoWeAreSection() {
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
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-block bg-[#FBFBFB] text-gray-900 px-6 py-2 rounded-full text-md font-medium mb-6 md:mb-8 drop-shadow-lg">
            Who We Are?
          </div>

          <h2 className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
            <span className="font-semibold">Hitmark Digital is a modern performance marketing agency built for growth-focused brands.</span> We specialize in
            precision media buying, revenue-driven SEO, and AI-powered lead generation — helping businesses in
            ecommerce, SaaS, healthcare and fintech scale with clarity, speed, and results.
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
              <service.icon className={`w-5 h-5 ${service.color}`} fill={`${service.bg}`}/>
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-20 py-4 rounded-full"
            onClick={() => (window.location.href = "#")}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
