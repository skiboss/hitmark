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
      rating: 5,
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
      name: "Sarah Chen",
      company: "Fintrot",
      role: "Head of Growth",
      content:
        "Finally, an agency that works at our pace. Smart strategy, clean execution, and zero wasted motion. HitMark helped us scale from $50K to $500K MRR in just 8 months.",
      rating: 5,
      avatar: "SC",
      // results: "10x MRR Growth",
    },
    {
      name: "Lena Rodriguez",
      company: "Arva Health",
      role: "Marketing Director",
      content:
        "HitMark tripled our qualified leads in under 60 days. No fluff, just focused strategy that delivered real results. Their AI-powered lead gen system is a game-changer.",
      rating: 5,
      avatar: "LR",
      // results: "300% Lead Increase",
    },
    {
      name: "David Kim",
      company: "Meiswift",
      role: "Co-Founder",
      content:
        "We hit a 4.6x ROAS in the first month. Their team knew exactly how to scale without burning budget. Best marketing investment we've ever made.",
      rating: 5,
      avatar: "DK",
      // results: "4.6x ROAS",
    },
    {
      name: "Marcus Thompson",
      company: "TechFlow SaaS",
      role: "CEO",
      content:
        "From zero to 10,000 users in 6 months. HitMark's performance SEO strategy dominated our niche. Our organic traffic grew 500% and conversions followed.",
      rating: 5,
      avatar: "MT",
      // results: "500% Traffic Growth",
    },
    {
      name: "Elena Vasquez",
      company: "GrowthLab",
      role: "VP Marketing",
      content:
        "Their media buying expertise is unmatched. We went from struggling with Facebook ads to scaling profitably across 5 platforms. Revenue up 250% year-over-year.",
      rating: 5,
      avatar: "EV",
      // results: "250% Revenue Growth",
    },
    {
      name: "James Wilson",
      company: "FinanceForward",
      role: "Growth Lead",
      content:
        "HitMark transformed our entire funnel. From awareness to conversion, every touchpoint was optimized. Our customer acquisition cost dropped 60% while quality improved.",
      rating: 5,
      avatar: "JW",
      // results: "60% CAC Reduction",
    },
    {
      name: "Priya Patel",
      company: "TechNova",
      role: "Marketing Manager",
      content:
        "Working with HitMark was a game-changer for our B2B SaaS. They helped us identify our ideal customer profile and created campaigns that converted 40% better than our previous efforts.",
      rating: 5,
      avatar: "PP",
      // results: "40% Better Conversion",
    },
    {
      name: "Priya Patel",
      company: "TechNova",
      role: "Marketing Manager",
      content:
        "Working with HitMark was a game-changer for our B2B SaaS. They helped us identify our ideal customer profile and created campaigns that converted 40% better than our previous efforts.",
      rating: 5,
      avatar: "PP",
      // results: "40% Better Conversion",
    },
    {
      name: "Priya Patel",
      company: "TechNova",
      role: "Marketing Manager",
      content:
        "Working with HitMark was a game-changer for our B2B SaaS. They helped us identify our ideal customer profile and created campaigns that converted 40% better than our previous efforts.",
      rating: 5,
      avatar: "PP",
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
      rating: 5,
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
          <div className="relative overflow-hidden">
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
                  className="flex-shrink-0 w-1/3 px-4"
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
                        <span className="text-blue-600 text-xs font-medium">{testimonial.company}</span></p>
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
