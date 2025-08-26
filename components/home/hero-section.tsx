"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Sparkles } from "lucide-react"

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
        <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-6"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    
                  >
                    <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-4 z-auto" />
                  </motion.div>
                </motion.div>
         <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl leading-normal md:leading-normal md:text-6xl font-semibold text-gray-900 mb-6"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            Scale your Brand with{" "} 
          </motion.span>
          <motion.span
            // initial={{ opacity: 0, scale: 0.8 }}
            className="text-4xl md:text-6xl font-semibold text-gray-900 leading-normal md:leading-normal py-2 relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              opacity: 1, scale: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #1f2937, #3b82f6, #8b5cf6, #1f2937)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ delay: 0.8 }}
            // className="text-blue-600 py-2 leading-normal relative"
          >
            Precision Marketing
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 leading-tight origin-left"
            />
          </motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="leading-tight md:leading-normal">
            {" "}
            that hits the mark
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{
            // textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          Turn Clicks Into Customers With Tailored Marketing Solutions That Deliver Real Results
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
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
              onClick={() => (window.location.href = "/contact#contact-form")}
            >
              <span className="relative z-10 font-semibold">Get Your Free Growth Plan</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
