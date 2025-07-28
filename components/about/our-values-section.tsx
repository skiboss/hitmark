"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Target, Handshake, Zap, BarChart3 } from "lucide-react"

export default function OurValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      imgSrc: "target",
      title: "Precision over volume",
      description: "We scale what works, not what looks impressive in reports.",
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/25",
      borderColor: "border-blue-200",
    },
    {
      icon: Handshake,
      imgSrc: "partnership",
      title: "Ownership over excuses",
      description: "We take accountability. Always.",
      color: "bg-green-500",
      glowColor: "shadow-green-500/25",
      borderColor: "border-green-200",
    },
    {
      icon: Zap,
      imgSrc: "speed",
      title: "Speed over bureaucracy",
      description: "Fast execution beats perfect strategy delayed.",
      color: "bg-yellow-500",
      glowColor: "shadow-yellow-500/25",
      borderColor: "border-yellow-200",
    },
    {
      icon: BarChart3,
      imgSrc: "data",
      title: "Data-driven decision making",
      description: "Every move is backed by insights, not guesswork.",
      color: "bg-purple-500",
      glowColor: "shadow-purple-500/25",
      borderColor: "border-purple-200",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          x: { duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-30"
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            animate={
              isInView
                ? {
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }
                : {}
            }
            transition={{
              duration: 4,
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
            Our Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every Service We Offer, Is Tied Directly To Business Outcomes:
            <br />
            <span className="font-semibold">Leads, Revenue, And Long-Term Scale.</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                z: 50,
              }}
              className={`bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-2 ${value.borderColor} text-center relative overflow-hidden group`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  background: `conic-gradient(from 0deg, ${value.color.replace("bg-", "").replace("-500", "")}, transparent, ${value.color.replace("bg-", "").replace("-500", "")})`,
                }}
              />

              {/* Floating particles */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full"
              />

              <motion.div
                whileHover={{
                //   rotate: [0, 360],
                  scale: 1.2,
                  rotateY: 180,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
                className={`w-16 h-16 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 relative z-10 ${value.glowColor} drop-shadow-lg`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  // animate={{
                  //   rotate: [0, 360],
                  // }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <img src={`/images/${value.imgSrc}.png`} className="w-20 h-20 object-cover" />
                  {/* <value.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" /> */}
                </motion.div>

                {/* Icon glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${value.color.replace("bg-", "").replace("-500", "")}40`,
                      `0 0 40px ${value.color.replace("bg-", "").replace("-500", "")}60`,
                      `0 0 20px ${value.color.replace("bg-", "").replace("-500", "")}40`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.h3
                className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4"
                whileHover={{
                  scale: 1.05,
                  color: value.color.includes("blue")
                    ? "#3b82f6"
                    : value.color.includes("green")
                      ? "#10b981"
                      : value.color.includes("yellow")
                        ? "#f59e0b"
                        : "#8b5cf6",
                }}
              >
                {value.title}
              </motion.h3>
              <motion.p className="text-gray-600 text-sm lg:text-base leading-relaxed" whileHover={{ scale: 1.02 }}>
                {value.description}
              </motion.p>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${value.color.replace("bg-", "").replace("-500", "")}, transparent, ${value.color.replace("bg-", "").replace("-500", "")}) border-box`,
                  WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "exclude",
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              // boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full relative overflow-hidden shadow-xl"
              onClick={() => (window.location.href = "#")}
            >
              <span className="relative z-10 font-semibold">Let's Talk Growth</span>

              {/* Button glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
