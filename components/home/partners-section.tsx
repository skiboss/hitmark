"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partners = [
    { name: "Partner 1", color: "bg-gray-900", imgSrc: "/images/partner1.png" },
    { name: "Partner 2", color: "bg-red-500", imgSrc: "/images/partner2.png" },
    { name: "Partner 3", color: "bg-blue-600", imgSrc: "/images/partner3.png" },
    { name: "Partner 4", color: "bg-green-500", imgSrc: "/images/partner4.png" },
    { name: "Partner 5", color: "bg-gray-800", imgSrc: "/images/partner5.png" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-600">Trusted By 300+ Brands In SaaS, Fintech, ECommerce, IGaming</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}
            >
              <img src={partner.imgSrc} alt={partner.name} className="rounded-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
