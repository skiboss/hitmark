"use client"
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
        <p className="text-gray-700 mb-8">Feel free to reach out if you have any questions or opportunities!</p>

        <div className="flex justify-center space-x-8">
          <motion.a
            href="mailto:your.email@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <FaEnvelope size={40} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <FaLinkedin size={40} />
          </motion.a>

          <motion.a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.05, x: 10 }}
          >
            <FaGithub size={40} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
