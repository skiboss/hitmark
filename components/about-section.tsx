"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    "Data-driven marketing strategies",
    "Proven track record of success",
    "Expert team of marketing professionals",
    "Customized solutions for every business",
  ]

  const stats = [
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: TrendingUp, value: "150%", label: "Average ROI" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">Hitmark Digital?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just another marketing agency. We're your growth partners, committed to delivering results that
              matter to your business.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </motion.div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  </motion.div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"
              />

              <h3 className="text-2xl font-bold mb-4">Ready to Scale?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how we can help your brand hit its growth targets with precision marketing strategies.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Schedule a Call
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
