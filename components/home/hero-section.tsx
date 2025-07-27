"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Scale your Brand with Precision Marketing that hits the mark"
  const [showCursor, setShowCursor] = useState(true)
    const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    let index = 0
    const timer = setInterval(
      () => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        // Hide cursor after 1 second delay
        setTimeout(() => setShowCursor(false), 1000)
      }
    },
      isMobile ? 30 : 50,
    ) // Faster typing on mobile

    return () => clearInterval(timer)
  }, [fullText, isMobile])

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Gradient overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30" />

      {/* Enhanced Background decorative elements - hidden on mobile */}
      {!isMobile && (
        <>
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full opacity-60"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          y: { duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full opacity-60"
      />
      {/* <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-400/20 rounded-full"
      /> */}
      {/* <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-60 right-1/4 w-8 h-8 bg-yellow-400/20 rounded-full opacity-70"
      /> */}
      </>
      )}

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight min-h-[150px] md:min-h-[240px]"
          style={{
            textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          {displayedText}
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block w-1 h-8 md:h-16 bg-blue-400 ml-2 shadow-lg"
            />
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          Turn Clicks Into Customers With Tailored Marketing Solutions That Deliver Real Results
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              // boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size={isMobile ? "default" : "lg"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-4 text-base md:text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 relative overflow-hidden border-2 border-blue-500/20"
              onClick={() => (window.location.href = "#")}
            >
              <span className="relative z-10 font-semibold">Get Your Free Growth Plan</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
