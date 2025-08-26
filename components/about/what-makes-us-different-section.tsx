"use client"

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
      title: "Brand Discovery & Market Positioning",
      description: "Uncover what makes your brand unique and craft a compelling market position that sets you apart.",
    },
    {
      title: "Ideal Client Persona Development",
      description: "Define your dream customers with precision to tailor messaging that truly resonates.",
    },
    {
      title: "Problem-Solution Frameworks",
      description: "Identify core challenges your audience faces and develop targeted solutions that drive engagement.",
    },
    {
      title: "Audience Journey Mapping & Offer Planning",
      description:
        "Strategically plan audience segments and craft offers that move prospects through every stage of the funnel.",
    },
    {
      title: "Landing Page Design & Optimization",
      description: "Create high-converting landing pages optimized for engagement and lead capture.",
    },
    {
      title: "In-Depth Keyword & Audience Research",
      description: "Leverage advanced tools to uncover valuable keywords and precisely target ideal audiences.",
    },
    {
      title: "Compelling Ad Copywriting & Creative Design",
      description: "Develop persuasive ad content and visuals that capture attention and drive action.",
    },
    {
      title: "Conversion Rate Optimization & Testing",
      description: "Continuously test and refine landing pages and funnels to maximize conversions.",
    },
    {
      title: "Performance Reporting & Lead Quality Analysis",
      description: "Monitor qualified leads and opportunities to inform ongoing campaign improvements.",
    },
    {
      title: "Manual Bidding & Automated Rules Management",
      description:
        "Implement data-driven manual bidding strategies combined with rules-based automation once reliable data is established.",
    },
]

export default function WhatMakesUsDifferentSection() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <p className="text-upgrow-purple font-semibold text-xs sm:text-sm tracking-wide mb-4 sm:mb-6">
            WHAT MAKES US DIFFERENT?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            From strategy to execution, we do things differently
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-upgrow-purple/30"
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-upgrow-purple mt-0.5">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Desktop hover popup */}
              <div className="hidden lg:block absolute left-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 text-upgrow-purple mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{service.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
                {/* Arrow pointing up */}
                <div className="absolute -top-2 left-6 w-4 h-4 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
