"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimal?: boolean
}

function Counter({ end, duration = 2, suffix = "", prefix = "", decimal = false }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        if (decimal) {
          setCount(progress * end)
        } else {
          setCount(Math.floor(progress * end))
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, decimal])

  const displayValue = decimal ? count.toFixed(1) : count.toLocaleString()

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

export default function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 px-4 bg-purple-50 relative overflow-hidden">
      {/* Enhanced animated background patterns */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          opacity: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.4, 1],
          opacity: [0.05, 0.25, 0.05],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          opacity: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-green-300 to-purple-300 rounded-full blur-xl"
      />

      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{
              duration: 3,
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
          >
            Join over 300 brands across SaaS,
          </motion.h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900">eComm, fintech & health care</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Enhanced metric cards with more sophisticated animations */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              rotateX: 5,
              z: 50,
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
            }}
            className="text-center relative group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Multi-layered pulsing effects */}
            <motion.div
              animate={{
                // scale: [1, 1.3, 1],
                // opacity: [0.1, 0.4, 0.1],
                // rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-sm"
            />

            {/* <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute inset-0 bg-blue-400 rounded-2xl blur-xs"
            /> */}

            <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <motion.div
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-2"
                animate={
                  isInView
                    ? {
                        color: ["#1f2937", "#3b82f6", "#8b5cf6", "#1f2937"],
                        textShadow: [
                          "0 0 0px rgba(59,130,246,0)",
                          "0 0 20px rgba(59,130,246,0.5)",
                          "0 0 0px rgba(59,130,246,0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              >
                <Counter end={6.5} suffix="M" decimal={true} />
              </motion.div>
              <p className="text-gray-600 font-medium">Ad served</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              rotateX: 5,
              z: 50,
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
            }}
            className="text-center relative group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{
                // scale: [1, 1.3, 1],
                // opacity: [0.1, 0.4, 0.1],
                // rotate: [0, -180, -360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-sm"
            />

            <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <motion.div
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-2"
                animate={
                  isInView
                    ? {
                        color: ["#1f2937", "#8b5cf6", "#ec4899", "#1f2937"],
                        textShadow: [
                          "0 0 0px rgba(139,92,246,0)",
                          "0 0 20px rgba(139,92,246,0.5)",
                          "0 0 0px rgba(139,92,246,0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              >
                <Counter end={2.6} suffix="M+" decimal={true} />
              </motion.div>
              <p className="text-gray-600 font-medium">Revenue generated</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              rotateX: 5,
              z: 50,
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
            }}
            className="text-center relative group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{
                // scale: [1, 1.3, 1],
                // opacity: [0.1, 0.4, 0.1],
                // rotate: [0, 270, 360],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1.4,
              }}
              className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl blur-sm"
            />

            <div className="relative z-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
              <motion.div
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-2"
                animate={
                  isInView
                    ? {
                        color: ["#1f2937", "#10b981", "#3b82f6", "#1f2937"],
                        textShadow: [
                          "0 0 0px rgba(16,185,129,0)",
                          "0 0 20px rgba(16,185,129,0.5)",
                          "0 0 0px rgba(16,185,129,0)",
                        ],
                      }
                    : {}
                }
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5,
                }}
              >
                <Counter end={21} suffix="+" />
              </motion.div>
              <p className="text-gray-600 font-medium">Brands Served</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
