"use client"
import { motion } from "framer-motion"

const AboutSection = () => {
  const cardVariants = {
    initial: { scale: 1, rotate: 0, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold mb-2">My Story</h3>
            <p className="text-gray-700">A brief overview of my background, experiences, and what drives me.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p className="text-gray-700">Highlighting my key skills and expertise in various areas.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold mb-2">Values</h3>
            <p className="text-gray-700">Describing the core values that guide my work and interactions.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
