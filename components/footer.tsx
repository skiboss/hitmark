"use client"

import { motion } from "framer-motion"
import { Target, ArrowUp, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 py-10 px-4 relative">
      <div className="container mx-auto max-w-7xl ">
        <div className="flex flex-col md:flex-row justify-evenly items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="mb-4">
              <img src="/hitmark-logo.png" alt="Hitmark Logo" className="" />
            </div>
            <p className="text-base text-gray-600 mb-4 sm:mb-8 max-w-xs">Built for founders. Powered by experts.</p>

            <div className="space-y-1 text-base text-gray-600">
              <p>6220 Westpark Drive Suite 149-B107</p>
              <p>Houston TX 77057, United States</p>
              <p className="font-medium pt-4">+1(832) 781-9909</p>
              <p className="font-medium">admin@hitmark.com</p>
            </div>

            <div className="flex space-x-4 mt-4">
              <motion.a href="https://www.instagram.com/hitmarkdigital?igsh=MWUyb3J3YWY2cGwzNQ==" whileHover={{ scale: 1.5 }} className="text-purple-600 hover:text-purple-700">
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.5 }} className="text-blue-400 hover:text-blue-500">
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.5 }} className="text-blue-600 hover:text-blue-700">
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-base">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">COMPANY</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">INDUSTRIES</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services#case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                    SAAS
                  </Link>
                </li>
                <li>
                  <Link href="/services#case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Ecommerce
                  </Link>
                </li>
                <li>
                  <Link href="/services#case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/services#case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Crypto
                  </Link>
                </li>
                <li>
                  <Link href="/services#case-studies" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Igaming
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">CONNECT</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="https://calendly.com/hitmarkdigital" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Book a Call
                  </Link>
                </li>
                <li>
                  <Link href="/contact#contact-form" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Send a Message
                  </Link>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </a>
                </li> */}
              </ul>
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
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} HitMark. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
