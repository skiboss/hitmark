"use client";

import React, { useState } from 'react';
import { Users, FileText, Settings } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedContent: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Book A Discovery Call",
    description: "Book a free strategy call where we go over your business and what it would need to scale it's growth",
    icon: <Users className="w-6 h-6" />,
    detailedContent: "Book a free strategy call where we go over your business and what it would need to scale it's growth"
  },
  {
    id: 2,
    title: "Get Blueprint", 
    description: "Receive a comprehensive strategy blueprint tailored specifically to your business needs and growth objectives",
    icon: <FileText className="w-6 h-6" />,
    detailedContent: "Receive a comprehensive strategy blueprint tailored specifically to your business needs and growth objectives"
  },
  {
    id: 3,
    title: "Manage Execution",
    description: "We handle the complete implementation and management of your growth strategy with ongoing support", 
    icon: <Settings className="w-6 h-6" />,
    detailedContent: "We handle the complete implementation and management of your growth strategy with ongoing support"
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = processSteps.find(step => step.id === activeStep) || processSteps[0];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          How It Works?
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
      </div>

      {/* Main Content Container - Two Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Left Panel - Content with Rotated Tabs */}
        <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Main Content Area */}
          <div className="p-8 pr-16 min-h-[400px] flex flex-col justify-center">
            <div 
              key={activeStep}
              className="transform transition-all duration-700 ease-out"
              style={{
                animation: 'slideIn 0.7s ease-out'
              }}
            >
              <div className="text-gray-900 font-bold text-xl mb-4">
                {activeStep}. {currentStep.title}
              </div>
              
              <p className="text-gray-600 text-base w-4/5 leading-relaxed mb-8">
                {currentStep.detailedContent}
              </p>

              {/* Bottom Section */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                <div className="text-sm font-medium text-gray-500">
                  Our Process
                </div>
                <div className="text-sm font-bold text-purple-600">
                  {String(activeStep).padStart(2, '0')}/03
                </div>
              </div>
            </div>
          </div>

          {/* Rotated Tabs on Right Border */}
          <div className="absolute right-0 top-0 h-full flex">
            {processSteps
              .filter(step => step.id !== activeStep)
              .sort((a, b) => a.id - b.id)
              .map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`relative flex-1 w-12 flex items-center justify-center transition-all duration-300 border-l bg-gray-50 text-gray-600 hover:bg-purple-50 hover:text-purple-600 border-gray-200 ${
                  index === 0 ? 'rounded-tr-2xl' : ''
                } ${index === 1 ? 'rounded-br-2xl' : ''}`}
              >
                <div 
                  className="transform -rotate-90 whitespace-nowrap text-xs font-medium px-2"
                  style={{ 
                    transformOrigin: 'center',
                    writingMode: 'horizontal-tb'
                  }}
                >
                  {step.id}. {step.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Team Image */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg overflow-hidden">
          <div className="h-full flex items-center justify-center p-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional team meeting"
                className="w-full max-w-lg rounded-xl shadow-lg"
              />
              
              {/* Step indicators on image */}
              {/* <div className="absolute top-4 right-4 space-y-2">
                {processSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      activeStep >= step.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-gray-400'
                    }`}
                  >
                    {step.id}
                  </div>
                ))}
              </div> */}

              {/* Floating status indicator */}
              {/* <div className="absolute -top-3 -left-3 bg-white rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Live Session</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}