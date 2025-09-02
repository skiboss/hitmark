"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Loader from "@/components/loader"
import EnhancedLoader from "./enhanced-loader"
import EnhancedLoad from "./load"

export default function ClientHomePage({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <EnhancedLoad />
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
