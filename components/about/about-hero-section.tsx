"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutHeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-100 via-white to-blue-100 relative overflow-hidden min-h-screen flex items-center">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      />
      
      {/* Background decorative blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-200 rounded-full blur-lg"
      />

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl p-4 font-semibold text-gray-900 mb-3 leading-normal"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #1f2937, #8b5cf6, #3b82f6, #1f2937)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Built for Founders. Powered by Experts.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            At Hitmark Digital, we’re not just a digital marketing agency. We are your end-to-end growth partner. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                // boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-xl"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Your Free Growth Plan
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
