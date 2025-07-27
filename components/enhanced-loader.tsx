"use client"

import { motion } from "framer-motion"
import { Target, Mail, Phone, MessageCircle } from "lucide-react"

export default function EnhancedLoader() {
  const icons = [Mail, Phone, MessageCircle, Target]

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-blue-50"
    >
      <div className="text-center">
        {/* Animated Icons Circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
              animate={{
                rotate: 360,
                x: Math.cos((index * Math.PI * 2) / 4) * 40,
                y: Math.sin((index * Math.PI * 2) / 4) * 40,
              }}
              transition={{
                rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                x: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                y: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-24px",
                marginTop: "-24px",
              }}
            >
              <Icon className="w-6 h-6 text-purple-600" />
            </motion.div>
          ))}

          {/* Center Logo */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl"
          >
            <Target className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">HITMARK</h2>
          <p className="text-gray-600 mb-4">DIGITAL</p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-purple-600 font-medium"
          >
            Connecting you to growth...
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-6 max-w-xs mx-auto"
        />
      </div>
    </motion.div>
  )
}
