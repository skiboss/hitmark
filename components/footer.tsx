"use client"

import { motion } from "framer-motion"
import { Target, ArrowUp, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 py-12 px-4 relative">
      <div className="container mx-auto max-w-6xl ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <img src="/hitmark-logo.png" alt="Hitmark Logo" className="" />
            </div>
            <p className="text-base text-gray-600 mb-4 sm:mb-8 max-w-xs">Built for founders. Powered by experts.</p>

            <div className="space-y-1 text-base text-gray-600">
              <p>6220 Westpark Drive Suite 149-B107</p>
              <p>Houston TX 77057, United States</p>
              <p className="font-medium pt-4">+(234) 887 298 2093</p>
              <p className="font-medium">admin@hitmark.com</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-purple-600 hover:text-purple-700">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-blue-400 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className="text-blue-600 hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="rounded-full p-3 mb-2 border-purple-200 hover:bg-purple-50 bg-transparent"
            >
              <ArrowUp className="w-4 h-4 text-purple-600" />
            </Button>
            <span className="text-xs text-gray-500">Back to Top</span>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">© 2025 HitMark. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
