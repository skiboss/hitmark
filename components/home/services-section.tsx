"use client"

import type React from "react"
import { motion } from "framer-motion"
import { FaGlobe, FaCode, FaMobileAlt } from "react-icons/fa"

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaGlobe size={40} />}
            title="Web Development"
            description="We create responsive and user-friendly websites tailored to your business needs."
          />
          <ServiceCard
            icon={<FaCode size={40} />}
            title="Software Development"
            description="We build custom software solutions to streamline your operations and improve efficiency."
          />
          <ServiceCard
            icon={<FaMobileAlt size={40} />}
            title="Mobile App Development"
            description="We develop native and cross-platform mobile apps for iOS and Android devices."
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
      }}
    >
      <div className="flex flex-col items-center">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

export default ServicesSection
