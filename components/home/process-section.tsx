"use client";

import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      title: "Book A Discovery Call",
      description:
        "Book a free strategy call where we go over your business and what it would need to scale its growth",
      color: "text-purple-600",
    },
    {
      number: "2",
      title: "Get Blueprint",
      description:
        "Receive a tailored strategy blueprint designed specifically to help scale your business.",
      color: "text-blue-600",
    },
    {
      number: "3",
      title: "Manage Execution",
      description:
        "We'll work with you to execute and optimize the strategy for long-term success.",
      color: "text-green-600",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            How It Works?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white flex justify-between p-6 py-12 rounded-2xl shadow-lg border-l-4 border-purple-500 relative">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Book A Discovery Call
                  </h3>
                  <p className="text-gray-600">
                    Book a free strategy call where we go over your business and
                    what it would need to scale it's growth
                  </p>

                  
                </div>
                
              </div>
              <div className="flex flex-col justify-end transform -rotate-90 space-y-4 ">
              {steps.slice(1).map((step, index) => 
                index === activeStep ? null : (
                <motion.div
                  // key={step.number}
                  key={index}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center transition text-nowrap text-sm space-x-3 text-gray-600"
                >
                  {`${index + 1}. ${step.title}`}
                  {/* <div className={`font-bold ${step.color}`}>
                    {step.number}.
                  </div>
                  <span>{step.title}</span> */}
                </motion.div>
              ))}
            </div>

            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                Our Process → {`0${activeStep + 1}/03`}
              </div>
            </div>

          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-1">
              <img
                src="/images/team_stairs.png"
                alt="Hitmark Digital Team"
                className="w-full h-80 object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
