"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Megaphone, TrendingUp, Bot } from "lucide-react"

export default function CoreServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Megaphone,
      imgSrc: "media",
      title: "Media Buying",
      subtitle: "Meta, Google",
      description: "We launch and scale high-performance ad campaigns on Meta and Google—optimized for conversions",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: TrendingUp,
      imgSrc: "seo",
      title: "Performance SEO",
      subtitle: "Rankings that drive real revenue",
      description:
        "Technical audits and content strategy to dominate search results and turn traffic into paying customers",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      icon: Bot,
      imgSrc: "ai-powered",
      title: "AI-Powered Leads",
      subtitle: "Automated outreach pipelines",
      description: "Automated, personalized email and sequences that fill your pipeline with prospects",
      color: "bg-indigo-500",
      hoverColor: "hover:bg-indigo-600",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every Service We Offer, Is Tied Directly To Business Outcomes: Leads, Revenue, And Long-Term Scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
                z: 50,
                boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
              }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.color.replace("bg-", "").replace("-500", "")}, transparent)`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              {/* Floating particles effect */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
              />

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                  rotateY: 180,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                // ${service.hoverColor}
                className={`w-20 h-20  rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <img src={`/images/${service.imgSrc}.png`} className="w-16 h-16 object-cover" />
                  {/* <service.icon className="w-10 h-10 text-white" /> */}
                </motion.div>
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-gray-900 mb-2"
                whileHover={{
                  scale: 1.05,
                  color: service.color.includes("blue")
                    ? "#3b82f6"
                    : service.color.includes("purple")
                      ? "#8b5cf6"
                      : "#6366f1",
                }}
              >
                {service.title}
              </motion.h3>
              <motion.p className="text-gray-600 font-medium mb-4" whileHover={{ scale: 1.02 }}>
                {service.subtitle}
              </motion.p>
              <motion.p className="text-gray-600 leading-relaxed" whileHover={{ scale: 1.01 }}>
                {service.description}
              </motion.p>

              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${service.color.replace("bg-", "").replace("-500", "")}, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt:12 md:mt-16"
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-24 py-4 rounded-full relative overflow-hidden"
              onClick={() => (window.location.href = "/services")}
            >
              <span className="relative z-10">Explore Services</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
