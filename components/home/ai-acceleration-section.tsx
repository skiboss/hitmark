"use client"

import { motion, useInView } from "framer-motion"
import { Brain, Rocket, Search, Share2, Sparkles, Target, Zap } from "lucide-react"
import Image from "next/image"

export default function AIAcceleration() {


  return (
    // AI Acceleration Section 
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white dark:bg-gray-950 md:max-w-6xl mx-auto">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Human Insight + AI Acceleration"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 lg:order-1">
                <p className="text-upgrow-purple font-semibold text-xs sm:text-sm tracking-wide">
                  THINK MARKETING SYSTEMS
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Blending Human Wisdom with AI Power
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  We leverage cutting-edge AI technologies to accelerate decision-making, adapt quickly, and amplify proven strategies, all while maintaining the personal touch that sets your brand apart.

                </p>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  Ignoring AI is naive. Relying on AI is reckless. Incorporating AI responsibly is competitive
                  advantage.
                </p>

                
              </div>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 pt-4 sm:pt-8">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-upgrow-purple/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-upgrow-purple" />
                    </div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Introducing Neurobrand</h4>
                    <p className="text-sm sm:text-sm text-muted-foreground">
                      We create a comprehensive AI-driven repository built from your brand’s core messaging, creative assets, storytelling guidelines, customer profiles, and trust signals. This foundation ensures your campaigns remain cohesive, compelling, and effective.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-upgrow-purple/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-upgrow-purple" />
                    </div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Fast-Paced Creation & Experimentation</h4>
                    <p className="text-sm sm:text-sm text-muted-foreground">
                      Our approach streamlines content generation and campaign testing, producing rapid iterations informed by real-world data. This agility keeps your marketing efforts fresh, relevant, and results-focused.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-upgrow-purple/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-upgrow-purple" />
                    </div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Trusted AI-Enhanced Processes</h4>
                    <p className="text-sm sm:text-sm text-muted-foreground">
                      We implement reliable AI workflows that balance automation with strategic insight — enabling scalable campaigns that consistently resonate with your audience and stay true to your brand identity.
                    </p>
                  </div>
                </div>
          </div>
        </section>
  )
}