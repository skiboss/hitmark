"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Loader from "@/components/loader"
import EnhancedLoader from "./enhanced-loader"

export default function ClientHomePage({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <EnhancedLoader />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {children}
    </motion.div>
  )
}
