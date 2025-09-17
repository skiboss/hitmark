"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import FAQSection from "./faq-section"

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export default function ContactFormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(true)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call - replace with actual Resend integration
      // await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would integrate with Resend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      setSubmitStatus("success")
      setFormData({ name: "", email: "", company: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid =
    formData.name.trim() &&
    formData.email.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.company.trim() &&
    formData.message.trim().length >= 10

  return (
    <section ref={ref} id="contact-form" className="py-20 px-4 bg-white gap-4 md:px-4 md:py-8">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 md:mt-4 rounded-3xl shadow-xl border border-gray-100">
            <div className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    errors.name ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-purple-500"
                  } bg-white`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    errors.email ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-purple-500"
                  } bg-white`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Company Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Enter Company Name"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                    errors.company ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-purple-500"
                  } bg-white`}
                />
                {errors.company && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.company}
                  </motion.p>
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Enter Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                    errors.message ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-purple-500"
                  } bg-white`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <motion.div
                  whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                >
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      isFormValid && !isSubmitting
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotateX: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="flex items-center justify-center gap-2"
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </motion.div>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </motion.div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
