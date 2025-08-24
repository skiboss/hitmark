"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function ReadyToScaleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-30"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30"
      />
      <div className="absolute inset-0 bg-[url('/ready-bg.png')] bg-no-repeat bg-cover" />
      <div className="container mx-auto text-center max-w-4xl  relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block bg-[#F6F6F6] text-gray-900 px-6 py-2 rounded-full text-md font-light mb-6 drop-shadow-lg">
            Ready to Scale Smarter?
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
            Let's build a lean, results-driven growth engine tailored to your goals
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => (window.location.href = "https://calendly.com/hitmarkdigital")}
            >
              Book Your Free Strategy Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
