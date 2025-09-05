"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, FileText, Rocket, BarChart3 } from "lucide-react"

export default function ServiceProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Discovery & Strategy",
      description: "We start with a comprehensive audit of your current marketing efforts and business goals.",
      details: ["Business audit & competitor analysis", "Goal setting & KPI definition", "Custom strategy development"],
      color: "bg-blue-500",
    },
    {
      icon: FileText,
      number: "02",
      title: "Planning & Setup",
      description: "We create detailed execution plans and set up all necessary tools and tracking systems.",
      details: [
        "Campaign planning & creative brief",
        "Tool setup & integration",
        "Tracking & analytics implementation",
      ],
      color: "bg-purple-500",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Execute",
      description: "We launch your campaigns and begin executing the strategy with precision and focus.",
      details: ["Campaign launch & monitoring", "Initial optimization & testing", "Performance tracking & reporting"],
      color: "bg-green-500",
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Optimize & Scale",
      description: "We continuously optimize performance and scale successful campaigns for maximum ROI.",
      details: ["Data analysis & optimization", "Scaling successful campaigns", "Ongoing strategy refinement"],
      color: "bg-orange-500",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology that delivers consistent results for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center relative overflow-hidden group"
            >
              {/* Step number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                {step.number}
              </div>

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}
              >
                <step.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

              <ul className="space-y-2 text-sm text-gray-500">
                {step.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              {/* <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${step.color.replace("bg-", "").replace("-500", "")}, transparent 70%)`,
                }}
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
