"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonial = [
    {
      name: "Sarah, @ Fintrot",
      role: "Head of Growth",
      content: "Finally, an agency that works at our pace. Smart strategy, clean execution, and zero wasted motion.",
      rating: 5,
      imgSrc: "testimonial1"
    },
    {
      name: "Lena, @ Arva",
      role: "Marketing Director",
      content:
        "Hitmark tripled our qualified leads in under 60 days. No fluff, just focused strategy that delivered real results.",
      rating: 4,
      imgSrc: "testimonial2"
    },
    {
      name: "David, @ Meiswift",
      role: "Co-Founder",
      content: "We hit a 4.6x ROAS in the first month. Their team knew exactly how to scale without burning budget.",
      rating: 5,
      imgSrc: "testimonial3"
    },
  ]

  const testimonials = [
    {
      name: "Dr. Michael S.",
      company: "Private Medical Network",
      role: "Director of Operations",
      content:
        "We’d been spending heavily on ads with almost no increase in patient bookings. Hitmark Digital came in, used AI to target only the right audience, and our appointment bookings went up 240% in three months — all while lowering our ad spend. I’ve never seen results this fast.",
      rating: 5,
      avatar: "MS",
      // results: "300% Lead Increase",
    },
    {
      name: "Lisa O.",
      company: "PayFlow Tech",
      role: "Co-Founder",
      content:
        "As a small fintech, we were getting buried by bigger players. Hitmark Digital’s media buying strategy, powered by AI audience insights, helped us find and convert high-value users we didn’t even know existed. We grew from 500 to over 10,000 active users in just half a year.",
      rating: 4,
      avatar: "LO",
      // results: "4.6x ROAS",
    },
    {
      name: "Ryan T.",
      company: "LuxeHome Décor",
      role: "CEO",
      content:
        "We were stuck at the same ROAS for years. The AI-driven targeting Hitmark Digital brought in was like flipping a switch — suddenly we were seeing a 5X return on ad spend. We’re scaling faster than we thought possible.",
      rating: 5,
      avatar: "RT",
      // results: "500% Traffic Growth",
    },
    {
      name: "Priya M.",
      company: "DataCloud Pro",
      role: "VP of Sales",
      content:
        "Before Hitmark Digital, cold outreach was dead for us. Their AI-powered lead generation delivered over 1,200 qualified leads in just four months. Now our sales team can’t keep up with the volume — a problem I’m happy to have.",
      rating: 4,
      avatar: "PM",
      // results: "250% Revenue Growth",
    },
    {
      name: "Juan C.",
      company: "BetMaster",
      role: "Regional Marketing Director",
      content:
        "We were launching into the Latin American market with zero local presence. Hitmark Digital combined sharp SEO with media buying to get us noticed. First deposits jumped by 27% in the first quarter alone.",
      rating: 5,
      avatar: "JC",
      // results: "60% CAC Reduction",
    },
    {
      name: "Emily R.",
      company: "Glow Wellness",
      role: "Founder",
      content:
        "Our website traffic was fine, but sales were flat. Hitmark Digital’s AI analytics showed us exactly where people were dropping off. Two months later, our conversion rate had doubled — without spending more on ads.",
      rating: 5,
      avatar: "ER",
      // results: "40% Better Conversion",
    },
    {
      name: "Daniel P.",
      company: "BlockLearn",
      role: "Head of Growth",
      content:
        "Acquiring students for our blockchain courses was becoming too expensive. Hitmark Digital’s AI targeting dropped our cost per acquisition by 41%, and the students we get now are more engaged than ever.",
      rating: 5,
      avatar: "DP",
      // results: "40% Better Conversion",
    },
    {
      name: "Sarah L.",
      company: "TechTown Electronics",
      role: "Marketing Manager",
      content:
        "We needed to own local search, and Hitmark Digital made it happen. We’re now ranking top 3 for all our key terms, and in-store sales are up noticeably. They delivered exactly what they promised.",
      rating: 5,
      avatar: "SL",
      // results: "40% Better Conversion",
    },
    {
      name: "Josh B.",
      company: "TrendyThreads",
      role: "COO",
      content:
        "We were losing thousands every month to abandoned carts. Hitmark Digital AI retargeting campaigns recovered over $180K in sales in just six weeks. It's the kind of win that changes your entire quarter.",
      rating: 5,
      avatar: "JB",
      // results: "40% Better Conversion",
    },
    {
      name: "Maya K.",
      company: "GreenFuture Foundation",
      role: "Fundraising Director",
      content:
        "We wanted to connect with younger donors but nothing worked. Hitmark Digital's AI audience mapping found exactly where to reach them. We tripled our donor base and increased average donations by 22% in under six months.",
      rating: 4,
      avatar: "MK",
      // results: "40% Better Conversion",
    },
  ]

  // const nextTestimonial = () => {
  //   setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  // }

  // const prevTestimonial = () => {
  //   setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  // }

    // Calculate max index based on visible cards (3 cards visible at once)
  const maxIndex = Math.max(0, testimonials.length - 3)

  const nextTestimonial = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  // Auto-play functionality - only moves if there are hidden cards
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      if (currentIndex < maxIndex) {
        nextTestimonial()
      } else {
        // Reset to beginning when reaching the end
        setCurrentIndex(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex, maxIndex])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FBFBFB] text-gray-900 px-6 py-2 rounded-full text-md font-medium mb-6 drop-shadow-lg">
            Our Success Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-medium md:w-1/2 md:mx-auto text-gray-900 mb-4">Don't Take Our Word For It, Hear From Our Clients</h2>
        </motion.div>

        {/* <div className="max-w-6xl mx-auto">
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
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img src={`/images/${testimonial.imgSrc}.png`} alt={`${testimonial.imgSrc} image`}/>
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
        </div> */}
        <div className="max-w-6xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              animate={{
                x: `-${currentIndex * (100 / 3)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-1/3 px-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{testimonial.content}"</p>

                    {/* Results Badge */}
                    {/* <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                      {testimonial.results}
                    </div> */}

                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                        <p className="text-gray-500 text-xs">{testimonial.role},  
                        <span className="text-blue-600 text-xs font-medium"> {testimonial.company}</span></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center space-x-4 mt-8"
          >
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full p-3 bg-transparent"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-purple-600 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              size="sm"
              className="rounded-full p-3 bg-purple-600 hover:bg-purple-700"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
