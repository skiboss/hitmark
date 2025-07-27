"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function WhatMakesUsDifferentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const leftColumnItems = [
    {
      title: "No bloated teams or junior handoffs.",
      subtitle: "We keep it lean and senior-led.",
      delay: 0.2,
    },
    {
      title: "Real KPIs. Real ROI. Real Fast.",
      subtitle: "We focus on performance from day one.",
      delay: 0.6,
    },
  ]

  const rightColumnItems = [
    {
      title: "No Fluff or Vanity Metrics.",
      subtitle: "We don't pad reports with empty numbers.",
      delay: 0.4,
    },
    {
      title: "Systems, Not Just Services.",
      subtitle: "We build systems tailored to your business.",
      delay: 0.8,
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-20"
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            What Makes Us Different?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            From strategy to execution,
            <br />
            we do things differently
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile Layout - Stack cards vertically */}
          <div className="block lg:hidden space-y-6">
            {[...leftColumnItems, ...rightColumnItems].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </motion.div>
            ))}

            {/* Team image for mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/team-photo.png" alt="Hitmark Digital Team" fill className="object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - 3 Column Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center min-h-[500px]">
            {/* Left Column - 2 Rows */}
            <div className="space-y-4">
              {leftColumnItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.subtitle}</p>
                  </motion.div>

                  {/* Card accent */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute top-3 right-3 w-3 h-3 bg-blue-400 rounded-full"
                  />

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, transparent)",
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Middle Column - Team Image (spans 2 rows) */}
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                }}
                className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl z-10"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image src="/images/team-photo.png" alt="Hitmark Digital Team" fill className="object-cover" />

                {/* Animated border glow */}
                <motion.div
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-3xl border-4 border-blue-400/30"
                />

                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
              </motion.div>
            </div>

            {/* Right Column - 2 Rows */}
            <div className="space-y-6">
              {rightColumnItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                  className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5 + 1,
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.subtitle}</p>
                  </motion.div>

                  {/* Card accent */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3 + 0.5,
                    }}
                    className="absolute top-3 right-3 w-3 h-3 bg-purple-400 rounded-full"
                  />

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, transparent)",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
