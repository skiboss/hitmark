"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah, @ Fintrot",
      role: "Head of Growth",
      content: "Finally, an agency that works at our pace. Smart strategy, clean execution, and zero wasted motion.",
      rating: 5,
    },
    {
      name: "Lena, @ Arva",
      role: "Marketing Director",
      content:
        "Hitmark tripled our qualified leads in under 60 days. No fluff, just focused strategy that delivered real results.",
      rating: 5,
    },
    {
      name: "David, @ Meiswift",
      role: "Co-Founder",
      content: "We hit a 4.6x ROAS in the first month. Their team knew exactly how to scale without burning budget.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Don't Take Our Word For It,</h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-900">Hear From Our Clients</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-white p-6 rounded-2xl shadow-lg border ${
                  index === currentIndex ? "border-purple-200 ring-2 ring-purple-100" : "border-gray-100"
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-4"
          >
            <Button onClick={prevTestimonial} variant="outline" size="sm" className="rounded-full p-3 bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button onClick={nextTestimonial} size="sm" className="rounded-full p-3 bg-purple-600 hover:bg-purple-700">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
