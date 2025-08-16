"use client"

import { motion } from "framer-motion"
import { Target, Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/25 backdrop-blur-md border-b border-gray-100 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-2 md:px-16 md:py-4">
        <div className="flex items-center justify-between px-4 md:px-12">
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <motion.div
                // animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                // whileHover={{
                //   rotate: [0, 360],
                //   transition: { duration: 1.5 },
                // }}
              >
                <img src="/hitmark-logo.png" alt="Hitmark Logo"
                  className={`transition-all w-28 md:w-3/4 duration-100 ${
                    isScrolled ? "text-black" : "text-white drop-shadow-lg"
                  }`}
                />
              </motion.div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex items-center gap-1 text-sm xl:text-base font-medium hover:text-upgrow-purple transition-colors px-2 xl:px-3"
                          >
                            What We Do <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56 bg-white">
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/services#media" className="w-full">
                              Media Buying
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/services#seo" className="w-full">
                              Performance SEO
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/services#ai" className="w-full">
                              AI Lead Generation
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/services/marketing-strategy" className="w-full">
                              Marketing Strategy
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-base py-3 font-medium">
                            <Link href="/services" className="w-full">
                              All Services
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
          
                      <Link
                        href="/case-studies"
                        className="text-sm xl:text-base font-medium hover:text-upgrow-purple transition-colors px-2 xl:px-3"
                      >
                        Case Studies
                      </Link>
          
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex items-center gap-1 text-sm xl:text-base font-medium hover:text-upgrow-purple transition-colors px-2 xl:px-3"
                          >
                            About <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48 bg-white outline-none">
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/about#different" className="w-full">
                              What Makes Us Different
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/about#values" className="w-full">
                              Our Values
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/careers" className="w-full">
                              Careers
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-base py-3">
                            <Link href="/contact" className="w-full">
                              Contact Us
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
          
                      <Link
                        href="/contact"
                        className="text-sm xl:text-base font-medium hover:text-upgrow-purple transition-colors px-2 xl:px-3"
                      >
                        Contact Us
                      </Link>
                    </nav>
                    <Button
                    asChild
                    className="hidden sm:inline-flex bg-white text-gray-800 border-upgrow-purple border-2 rounded-none hover:bg-upgrow-purple-dark font-medium px-3 sm:px-6 py-3 text-sm"
                  >
                    <Link href="/book-strategy-call">Book Strategy Call</Link>
                  </Button>

          {/* Mobile Menu */}
      {/* {isMobile && isMenuOpen && ( */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
        >
          {/* <nav className="container mx-auto py-4 px-4">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-2 px-4 rounded-lg ${
                      pathname === item.href ? "bg-blue-50 text-gray-600 font-bold" : "text-gray-800 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav> */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTitle>
              <SheetTrigger asChild className="bg-transparent">
              <Button variant="ghost" size="sm" className="lg:hidden p-2 bg-gray-40 hover:bg-gray-100 ">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            </SheetTitle>
            
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800"
            >
              <SheetHeader className="text-left pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    {/* <div className="w-8 h-8 bg-gradient-to-br from-upgrow-purple to-upgrow-green rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                    </div> */}
                    <img src="/hitmark-logo.png" alt="Hitmark Logo"
                  className={`transition-all w-16 duration-100 ${
                    isScrolled ? "text-black" : "text-white drop-shadow-lg"
                  }`}
                />
                    <span className="font-bold text-xl">HITMARK</span>
                  </Link>
                  {/* <ModeToggle /> */}
                </div>
              </SheetHeader>

              <div className="flex flex-col h-full">
                <nav className="flex-1 py-6 space-y-6 overflow-y-auto">
                  {/* What We Do Section */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-upgrow-purple text-base">What We Do</h3>
                    <div className="pl-4 space-y-3">
                      <Link
                        href="/services/seo"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Performance SEO
                      </Link>
                      <Link
                        href="/services/paid-media"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Paid Media
                      </Link>
                      <Link
                        href="/services/content-marketing"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Content Marketing
                      </Link>
                      <Link
                        href="/what-we-do"
                        className="block py-2 font-medium text-gray-900 dark:text-gray-100 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        All Services →
                      </Link>
                    </div>
                  </div>

                  {/* Case Studies */}
                  <Link
                    href="/case-studies"
                    className="block py-3 font-medium text-gray-900 dark:text-gray-100 hover:text-upgrow-purple transition-colors border-b border-gray-100 dark:border-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>

                  {/* About Section */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-upgrow-purple text-base">About</h3>
                    <div className="pl-4 space-y-3">
                      <Link
                        href="/about"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/team"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Meet the Team
                      </Link>
                      <Link
                        href="/careers"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Careers
                      </Link>
                      <Link
                        href="/contact"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  {/* Learn Section */}
                  {/* <div className="space-y-3">
                    <h3 className="font-semibold text-upgrow-purple text-base">Learn</h3>
                    <div className="pl-4 space-y-3">
                      <Link
                        href="/blog"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/resources"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Resources
                      </Link>
                      <Link
                        href="/webinars"
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-upgrow-purple transition-colors text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Webinars
                      </Link>
                    </div>
                  </div> */}

                  {/* Pricing */}
                  {/* <Link
                    href="/pricing"
                    className="block py-3 font-medium text-gray-900 dark:text-gray-100 hover:text-upgrow-purple transition-colors border-b border-gray-100 dark:border-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link> */}
                  {/* CTA Button */}
                <div className="pt-6 border-t border-gray-200 pb-6">
                  <Button
                    asChild
                    className="w-full bg-white text-upgrow-purple border-upgrow-purple border-2 hover:bg-upgrow-purple-dark font-medium py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/book-strategy-call">Book Strategy Call</Link>
                  </Button>
                </div>
                </nav>

                {/* CTA Button */}
                {/* <div className="pt-6 border-t border-gray-200 pb-6">
                  <Button
                    asChild
                    className="w-full bg-white text-upgrow-purple border-upgrow-purple border-2 hover:bg-upgrow-purple-dark text-white font-medium py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/book-strategy-call">Book Strategy Call</Link>
                  </Button>
                </div> */}
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      {/* )} */}

        </div>
      </div>

    </motion.header>
  )
}
