"use client"

import { motion } from "framer-motion"

export default function EnhancedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-30"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          rotate: [0, -180, -360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/2 right-1/3 w-6 h-6 bg-purple-300 rounded-full opacity-25"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          rotate: [0, 90, 180],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-green-300 rounded-full opacity-35"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 40, 0],
          rotate: [0, 270, 360],
          scale: [1, 0.6, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-3/4 right-1/4 w-5 h-5 bg-yellow-300 rounded-full opacity-20"
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.2, 0.05],
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-xl"
      />
    </div>
  )
}
