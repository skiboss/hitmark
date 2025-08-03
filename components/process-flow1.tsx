'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const steps = [
  {
    title: "Book A Discovery Call",
    description: "Book a free strategy call where we go over your business and what it would need to scale its growth",
  },
  {
    title: "Get Blueprint",
    description: "Receive a tailored strategy blueprint designed specifically to help scale your business.",
  },
  {
    title: "Manage Execution",
    description: "We'll work with you to execute and optimize the strategy for long-term success.",
  },
];

export default function ProcessFlow1() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-6">
        <p className="text-sm text-gray-500 mb-2">How It Works?</p>
        <h2 className="text-3xl font-bold text-gray-800">Our Process</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Content Card */}
        <div className="relative w-full md:w-1/2 bg-gray-50 p-6 rounded-xl min-h-[300px]">
          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{steps[activeStep].title}</h3>
              <p className="text-sm text-gray-600">{steps[activeStep].description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Footer */}
          <div className="flex justify-between text-sm text-gray-700 pt-6 mt-8">
            <span>Our Process</span>
            <span>{`0${activeStep + 1}/03`}</span>
          </div>

          {/* Rotated steps (positioned on the right edge of the card) */}
          <div className="hidden md:flex flex-col gap-4 -right-14">
            {steps.map((step, index) => {
              if (index === activeStep) return null;

              return (
                <>
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="transform -rotate-90 text-sm text-gray-400 hover:text-violet-600 transition"
                >
                  {`${index + 1}. ${step.title.split(' ')[0]}`}
                </button>
                
                </>
              );
            })}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/team.jpg"
            alt="Team"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
