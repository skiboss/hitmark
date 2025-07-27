"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: "Growth Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for startups and small businesses ready to scale",
      features: [
        "1 primary marketing channel",
        "Monthly strategy sessions",
        "Basic reporting & analytics",
        "Email support",
        "Campaign setup & optimization",
      ],
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-900 hover:bg-gray-800",
    },
    {
      name: "Scale Pro",
      price: "$5,000",
      period: "/month",
      description: "For growing businesses ready to dominate their market",
      features: [
        "2-3 marketing channels",
        "Bi-weekly strategy sessions",
        "Advanced reporting & insights",
        "Priority support",
        "A/B testing & optimization",
        "Custom landing pages",
        "Lead nurturing sequences",
      ],
      popular: true,
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For established businesses with complex needs",
      features: [
        "Full-service marketing",
        "Weekly strategy sessions",
        "Custom reporting dashboard",
        "Dedicated account manager",
        "Advanced automation",
        "Custom integrations",
        "White-label solutions",
        "24/7 priority support",
      ],
      popular: false,
      color: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Plans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business goals and growth stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
              className={`bg-white p-8 rounded-3xl border-2 ${plan.color} relative overflow-hidden ${
                plan.popular ? "shadow-xl" : "shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <div className={`${plan.popular ? "pt-8" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className={`w-full ${plan.buttonColor} text-white py-3 rounded-full font-semibold`}>
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    {plan.popular && <Zap className="w-4 h-4 ml-2" />}
                  </Button>
                </motion.div>
              </div>

              {/* Animated background for popular plan */}
              {plan.popular && (
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            All plans include a 30-day money-back guarantee and can be cancelled anytime.
          </p>
          <p className="text-sm text-gray-500">
            Custom solutions available for enterprise clients with specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
