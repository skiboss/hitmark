"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentCase, setCurrentCase] = useState(0)

  const caseStudies = [
    {
      clientOverview: {
        title: "International SEO & Media Buying for iGaming Expansion",
        description:
          "User acquisition gain in new Latin American markets",
        challenge:
          "Needed rapid user acquisition in new Latin American markets.",
      },
      solution: [
        "Localized website content, optimized for region-specific keywords, and launched Spanish-language paid search and social campaigns, guided by AI-powered language sentiment analysis.",
      ],
      testimonial:
        "HitMark's AI-driven approach to international SEO and media buying helped us penetrate new markets faster than we thought possible. Their insights into local user behavior were invaluable.",
      results: {
        metric1: "27% increased first deposits in first quarter",
        metric2: "Gained 12,000 new users in 90 days",
        metric3: "35% reduction in regional CPC",
      },
    },
    {
      clientOverview: {
        title: "Y Combinator Backed Fintech",
        description:
          "Backed by Y Combinator, their growth team needed a way to fill the pipeline without overloading internal resources.",
        challenge:
          "Their existing systems were manual, poorly targeted, and ineffective. SEO traffic was flat, and their cost-per-lead was rising.",
      },
      solution: [
        "Built AI-powered outreach flows via Smartlead and LinkedIn to target CFOs, growth leads, and developers in fintech companies with tailored messaging sequences",
        "Overhauled technical SEO and built revenue-focused content clusters for long-tail fintech API keywords",
      ],
      testimonial:
        "HitMark's system worked faster than any agency we've worked with. Within weeks, our pipeline was overflowing with qualified fintech leads. We didn't just get results, we got scale.",
      results: {
        metric1: "300% increase in qualified leads",
        metric2: "4.6x ROAS in first month",
        metric3: "60% reduction in CAC",
      },
    },
    {
      clientOverview: {
        title: "SaaS Platform - Series A",
        description:
          "A Series A SaaS company struggling to scale their customer acquisition beyond their initial product-market fit.",
        challenge:
          "High customer acquisition costs, low conversion rates from organic traffic, and difficulty reaching enterprise clients.",
      },
      solution: [
        "Implemented multi-channel attribution tracking and optimized their entire funnel from awareness to conversion",
        "Developed enterprise-focused content strategy and account-based marketing campaigns targeting Fortune 500 decision makers",
      ],
      testimonial:
        "The team at HitMark transformed our entire go-to-market strategy. Our enterprise pipeline grew 5x in just 4 months, and our CAC dropped by 45%.",
      results: {
        metric1: "500% increase in enterprise leads",
        metric2: "45% reduction in CAC",
        metric3: "2.8x improvement in LTV:CAC ratio",
      },
    },
    {
      clientOverview: {
        title: "E-commerce Health Brand",
        description:
          "Direct-to-consumer health brand looking to scale beyond their initial Facebook advertising success.",
        challenge:
          "iOS 14.5 update severely impacted their Facebook performance, and they needed to diversify their acquisition channels quickly.",
      },
      solution: [
        "Diversified across Google Ads, YouTube, TikTok, and Pinterest with platform-specific creative strategies",
        "Built comprehensive email marketing automation and SMS campaigns to improve customer lifetime value",
      ],
      testimonial:
        "When iOS 14.5 hit, we thought our business was over. HitMark not only helped us recover but scale to new heights across multiple channels.",
      results: {
        metric1: "250% increase in total revenue",
        metric2: "180% improvement in ROAS",
        metric3: "40% increase in customer LTV",
      },
    },
    {
      clientOverview: {
        title: "AI Audience Mapping for a Non-Profit",
        description:
          "A non-profit organization struggling to reach younger donors and diversify funding sources.",
        challenge:
          "Struggling to reach younger donors and diversify funding sources.",
      },
      solution: [
        "Leveraged AI audience mapping to identify and reach potential donors based on interests, online behaviors, and engagement with environmental causes.",
      ],
      testimonial:
        "Donor base increment, Campaign cost reduction, and Increase in recurring donations",
      results: {
        metric1: "3X increase of donor base in less than six months",
        metric2: "29% reduction in campaign costs",
        metric3: "47% increase in recurring donations",
      },
    },
    {
      clientOverview: {
        title: "AI-Powered Lead Generation for a Fintech Startup",
        description:
          "Struggling to find high-value customers in a competitive digital payments market.",
        challenge:
          "CAC was high, and conversion rates were under 1%.",
      },
      solution: [
        "We deployed AI-driven audience segmentation to identify untapped niches, combined with multi-channel outreach sequences on LinkedIn, email, and paid social. The AI system adjusted targeting parameters weekly based on conversion data.",
      ],
      testimonial:
        "Active Users grew, Customer Acquisition cost reduced drastically, and Customer conversion rate doubled",
      results: {
        metric1: "Active users grew from 500 to 10,000 in six months",
        metric2: "42% reduction in CAC",
        metric3: "Lead-to-customer conversion rate doubled from 0.9% to 1.8%",
      },
    },
    {
      clientOverview: {
        title: "Performance SEO for a Healthcare Provider",
        description:
          "Expensive and Unpredictable Patient Acquisition Cost",
        challenge:
          "Competitors dominated local search, making patient acquisition expensive and unpredictable.",
      },
      solution: [
        "Our team restructured their website architecture, built location-specific landing pages, and implemented AI-assisted keyword clustering to target high-intent medical service searches.",
      ],
      testimonial:
        "Improved search visibility, reduced patient acquisition costs, and increased new patient bookings",
      results: {
        metric1: "Ranked Top 3 for 21 priority keywords within 90 days",
        metric2: "New patient bookings up 240%",
        metric3: "33% reduction in CAC from Google Ads",
      },
    },
    {
      clientOverview: {
        title: "Media Buying for E-Commerce Brand Growth",
        description:
          "Poor Ad performance",
        challenge:
          "Plateaued ad performance and a declining ROAS despite increasing budgets.",
      },
      solution: [
        "We ran A/B tests across Meta and Google Ads, shifting spend toward the highest-performing creative variations identified by AI analysis. Integrated retargeting campaigns recovered lost shoppers.",
      ],
      testimonial:
        "Increased sales volume, over $180K in lost sales recovered, and 5X ROAS",
      results: {
        metric1: "Recovered $180K in lost sales from abandoned carts in six weeks",
        metric2: "5X ROAS maintained over 4 months",
        metric3: "Sales volume increased by 62% without increasing total spend",
      },
    },
  ]

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentStudy = caseStudies[currentCase]

  return (
    <section ref={ref} id="case-studies" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      {/* <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20"
      /> */}

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Case Studies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Here's how we've helped brands scale with precision
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Client Overview */}
            <div className="p-8 lg:p-12 bg-gray-50">
              <motion.div
                key={`client-${currentCase}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Client Overview</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-4">{currentStudy.clientOverview.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{currentStudy.clientOverview.description}</p>

                <h4 className="text-lg font-bold text-gray-900 mb-3">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed">{currentStudy.clientOverview.challenge}</p>
              </motion.div>
            </div>

            {/* HitMark's Solution */}
            <div className="p-8 lg:p-12 bg-white">
              <motion.div
                key={`solution-${currentCase}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">HitMark's Solution</h3>

                <div className="space-y-4 mb-8">
                  {currentStudy.solution.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Results */}
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Results</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-sm">
                      <span className="font-semibold text-blue-600">{currentStudy.results.metric1}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-green-600">{currentStudy.results.metric2}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-purple-600">{currentStudy.results.metric3}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Testimonial */}
          <motion.div
            key={`testimonial-${currentCase}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 lg:p-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
          >
            <blockquote className="text-lg md:text-xl italic leading-relaxed mb-4">
              "{currentStudy.testimonial}"
            </blockquote>
          </motion.div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center items-center space-x-4 mt-8"
        >
          <button
            onClick={prevCase}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentCase ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextCase}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
