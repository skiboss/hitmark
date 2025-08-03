'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: "Book A Discovery Call",
    description:
      "Book a free strategy call where we go over your business and what it would need to scale its growth",
  },
  {
    title: "Get Blueprint",
    description:
      "Receive a tailored strategy blueprint designed specifically to help scale your business.",
  },
  {
    title: "Manage Execution",
    description:
      "We'll work with you to execute and optimize the strategy for long-term success.",
  },
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-2">How It Works?</p>
        <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Steps */}
        <div className="md:w-1/2 w-full bg-gray-50 p-6 rounded-xl flex flex-col justify-between min-h-[350px]">
          {/* Tabs */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`text-left font-medium transition-colors duration-200 ${
                  activeStep === index
                    ? "text-violet-700 font-semibold"
                    : "text-gray-500 hover:text-violet-600"
                }`}
              >
                {index + 1}. {step.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Slide content */}
          <div className="mt-6 min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm text-gray-600">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="flex justify-between text-sm text-gray-700 pt-6">
            <span>Our Process</span>
            <span>{`0${activeStep + 1}/03`}</span>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/team.jpg"
            alt="Team"
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
