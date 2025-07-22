"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
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

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const metrics = [
    { value: 100000, suffix: "", label: "Adspend", prefix: "$" },
    { value: 100000, suffix: "+", label: "Revenue generated", prefix: "$" },
    { value: 300, suffix: "+", label: "Brands Served" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Join over{" "}
            <motion.span
              animate={
                isInView
                  ? {
                      color: ["#1f2937", "#3b82f6", "#1f2937"],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
              className="text-blue-600"
            >
              <Counter end={300} />
            </motion.span>{" "}
            brands across
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600"
          >
            SaaS, eComm, fintech & health care
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden"
            >
              {/* Animated background element */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-50"
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              >
                <Counter end={metric.value} suffix={metric.suffix} prefix={metric.prefix} duration={2.5} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-gray-600 font-medium"
              >
                {metric.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
