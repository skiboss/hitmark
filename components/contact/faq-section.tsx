"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing initial results within 30-60 days, with significant improvements typically visible within 90 days. However, timelines can vary based on your industry, current situation, and goals.",
    },
    {
      question: "What's included in your strategy session?",
      answer:
        "Our strategy session includes a comprehensive audit of your current marketing efforts, identification of growth opportunities, competitive analysis, and a customized roadmap for scaling your business.",
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer:
        "We primarily work with growth-focused businesses ranging from startups to mid-market companies. Our sweet spot is businesses ready to scale and invest in proven marketing strategies.",
    },
    {
      question: "What makes Hitmark Digital different?",
      answer:
        "We focus on precision over volume, maintain lean senior-led teams, provide transparent reporting with real KPIs, and build scalable systems rather than just providing services.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success through business outcomes that matter: qualified leads, revenue growth, customer acquisition cost (CAC), return on ad spend (ROAS), and long-term customer lifetime value.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Here are some common questions about working with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
