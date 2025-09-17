"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Zap } from "lucide-react"

export default function ServicesHeroSection() {
  const services = [
    { icon: Target, label: "Media Buying", color: "text-blue-600" },
    { icon: TrendingUp, label: "Performance SEO", color: "text-purple-600" },
    { icon: Zap, label: "AI-Powered Leads", color: "text-indigo-600" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden min-h-screen flex items-center">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      />
      
      {/* Background decorative elements */}
      {/* <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30"
      /> */}

      {/* <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-30"
      /> */}

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 py-6 leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "#7C3BED",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Growth System - Delivered
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We don’t just run ads  — we build performance systems that drive leads, revenue, and scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100"
              >
                <service.icon className={`w-5 h-5 ${service.color}`} />
                <span className="text-gray-700 font-medium">{service.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
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
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-xl"
                onClick={() => (window.location.href = "/contact#contact-form")}
              >
                Get Your Free Growth Plan
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
