"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Target, Brain, Rocket, BarChart3 } from "lucide-react"

export default function WhyBrandsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: Target,
      imgSrc: "precision",
      title: "Precision-Driven, Not Basic",
      description: "Every campaign is lean, data-backed, and tailored to your business goals. No generic packages",
      color: "bg-blue-500",
      glowColor: "shadow-blue-500/25",
    },
    {
      icon: Brain,
      imgSrc: "ai_system",
      title: "AI That Works Harder",
      description: "Our proprietary AI systems streamline targeting, lead qualification, and campaign optimization",
      color: "bg-purple-500",
      glowColor: "shadow-purple-500/25",
    },
    {
      icon: Rocket,
      imgSrc: "scale",
      title: "Built For Scale, Not Just Setup",
      description:
        "Whether you're growing a new vertical or expanding globally, we engineer every strategy with scale in mind",
      color: "bg-green-500",
      glowColor: "shadow-green-500/25",
    },
    {
      icon: BarChart3,
      imgSrc: "result",
      title: "Transparent Results",
      description: "We obsess over outcomes that move your bottom line. From CAC and ROAS to pipeline velocity",
      color: "bg-orange-500",
      glowColor: "shadow-orange-500/25",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
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
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30"
      />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
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
            Why Brands Choose Us?
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
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
              className="bg-gray-50 border p-6 rounded-2xl text-center relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
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
                  background: `conic-gradient(from 0deg, ${reason.color.replace("bg-", "").replace("-500", "")}, transparent, ${reason.color.replace("bg-", "").replace("-500", "")})`,
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
                  // rotate: [0, 360],
                  // scale: 1.2,
                  // rotateY: 180,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 200,
                }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 ${reason.glowColor} drop-shadow-lg`}
                // shadow-lg
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  // animate={{
                    // rotate: [0, 360],
                  // }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <img src={`/images/${reason.imgSrc}.png`} className="w-16 h-16 object-cover" />
                  {/* <reason.icon className="w-8 h-8 text-white" /> */}
                </motion.div>

                {/* Icon glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    boxShadow: [
                      `0 0 20px ${reason.color.replace("bg-", "").replace("-500", "")}40`,
                      `0 0 40px ${reason.color.replace("bg-", "").replace("-500", "")}60`,
                      `0 0 20px ${reason.color.replace("bg-", "").replace("-500", "")}40`,
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
                className="text-lg font-bold text-gray-900 mb-3"
                whileHover={{
                  scale: 1.05,
                  color: reason.color.includes("blue")
                    ? "#3b82f6"
                    : reason.color.includes("purple")
                      ? "#8b5cf6"
                      : reason.color.includes("green")
                        ? "#10b981"
                        : "#f59e0b",
                }}
              >
                {reason.title}
              </motion.h3>
              <motion.p className="text-gray-600 text-sm leading-relaxed" whileHover={{ scale: 1.02 }}>
                {reason.description}
              </motion.p>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${reason.color.replace("bg-", "").replace("-500", "")}, transparent, ${reason.color.replace("bg-", "").replace("-500", "")}) border-box`,
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
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              // boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-3 rounded-full relative overflow-hidden"
              onClick={() => (window.location.href = "/contact#contact-form")}
            >
              <span className="relative z-10">Build my custom plan</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
