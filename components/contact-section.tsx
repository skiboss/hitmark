"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@hitmarkdigital.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "New York, NY" },
  ]

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360,
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute bottom-20 right-20 w-24 h-24 bg-purple-600/10 rounded-full"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Hit Your{" "}
            <motion.span
              animate={{
                color: ["#ffffff", "#3b82f6", "#ffffff"],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-blue-400"
            >
              Growth Targets?
            </motion.span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can scale your brand with precision marketing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                    <info.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Input
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Send className="ml-2 w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">© 2024 Hitmark Digital. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
