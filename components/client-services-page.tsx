"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import EnhancedLoader from "@/components/enhanced-loader"
import EnhancedLoad from "./load"

export default function ClientServicesPage({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const scrollToHash = () => {
        if (window.location.hash) {
          const id = window.location.hash.replace("#", "")
          const el = document.getElementById(id)
          if (el) {
            const yOffset = -170 // Adjust this value to match your navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
          }
        }
      };
      window.addEventListener("hashchange", scrollToHash);
      // Increase delay to ensure DOM and navbar are rendered
      setTimeout(() => {
        scrollToHash();
      }, 300);
      return () => window.removeEventListener("hashchange", scrollToHash);
    }
  }, [isLoading])

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
      <div>{children}</div>
    </motion.div>
  )
}
