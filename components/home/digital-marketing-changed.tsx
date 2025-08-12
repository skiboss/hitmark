"use client"

import { motion, useInView } from "framer-motion"
import { Search, Share2, Sparkles, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function DigitalMarketingChanged() {

  const services = [
    { icon: Sparkles, label: "Search Engine", color: "text-purple-600", bg: "#9333ea" },
    { icon: Sparkles, label: "Social Media", color: "text-green-600", bg: "#16a34a" },
    { icon: Sparkles, label: "Lead Generation", color: "text-blue-600", bg: "#2563eb" },
    { icon: Sparkles, label: "AI Powered", color: "text-pink-600", bg: "#db2777" },
  ]

  return (
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 mx-auto">
          <div className="container px-4 md:px-36">
            <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-pink-50 dark:from-purple-900/20 dark:via-purple-800/10 dark:to-pink-900/20 rounded-none sm:rounded-2xl lg:rounded-3xl p-8 sm:p-12">
              <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                <p className="text-gray-600 dark:text-gray-400 font-medium text-sm sm:text-base mb-6 sm:mb-8 tracking-wide uppercase">
                  MODERN PERFORMANCE MEDIA
                </p>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight mb-6 sm:mb-8 text-gray-900 dark:text-white">
                  The rules of digital marketing have been rewritten.
                  <br />
                  And we’ve rewritten how to win.
                </h2>
                <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-2 sm:mb-4 max-w-4xl mx-auto">
                  Ad costs are soaring. AI is transforming every channel. Attention spans are fleeting. The internet you knew in 2019 is gone — and so is the old way of marketing.
                </p>
                <p className="text-sm sm:text-lg  text-gray-600 dark:text-gray-400 leading-relaxed mb-2 sm:mb-4 max-w-4xl mx-auto">
                  Today’s marketing leaders and founders face unprecedented challenges. Choosing where, how, and with whom to invest your marketing dollars is now the most critical decision for your business’s growth.
                </p>
                <p className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white mb-8 sm:mb-12">
                 At Hitmark Digital, we don’t just navigate this new landscape — we master it.
Because the old playbook is dead. We’re building a new one. Together.
                </p>
              </div>

              <div className="grid items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                <div className="flex items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Efficient by Design Icon"
                      width={80}
                      height={80}
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tights">
                    Built for Efficiency, Driven by Precision
                    {/* <br />
                    Exceptional by Focus */}
                  </h4>
                </div>

                <div className="flex items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Human Insight AI Icon"
                      width={80}
                      height={80}
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                    Powered by Human Insight, Accelerated by AI
                    {/* <br />
                    Acceleration */}
                  </h4>
                </div>

                <div className="flex items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Marketing Fundamentals Icon"
                      width={80}
                      height={80}
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight
                  ">
                    Mastering Marketing Fundamentals, Fueling Next-Level Growth
                    {/* <br />
                    Fundamentals */}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
