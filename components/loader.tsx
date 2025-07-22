"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="mb-4"
        >
          <Target className="w-16 h-16 text-blue-600 mx-auto" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">HITMARK</h2>
          <p className="text-gray-600">DIGITAL</p>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0.5 }}
          className="h-1 bg-blue-600 rounded-full mt-4 max-w-xs mx-auto"
        />
      </div>
    </motion.div>
  )
}
