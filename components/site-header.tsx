"use client"

import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader } from "@/components/ui/sheet"
import { ChevronDown, Menu } from "lucide-react"
// import { ModeToggle } from "./ui/mode-toggle"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-upgrow-purple to-upgrow-green rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight group-hover:text-upgrow-purple transition-colors">
              UPGROW
            </span>
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
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/services/seo" className="w-full">
                    Performance SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/services/paid-media" className="w-full">
                    Paid Media
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/services/content-marketing" className="w-full">
                    Content Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/services/marketing-strategy" className="w-full">
                    Marketing Strategy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-base py-3 font-medium">
                  <Link href="/what-we-do" className="w-full">
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
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/about" className="w-full">
                    Our Story
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/team" className="w-full">
                    Meet the Team
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-sm xl:text-base font-medium hover:text-upgrow-purple transition-colors px-2 xl:px-3"
                >
                  Learn <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/blog" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/resources" className="w-full">
                    Resources
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/webinars" className="w-full">
                    Webinars
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-base py-3">
                  <Link href="/case-studies" className="w-full">
                    Case Studies
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/pricing"
              className="text-sm xl:text-base font-medium hover:text-upgrow-purple transition-colors px-2 xl:px-3"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            asChild
            className="hidden sm:inline-flex bg-upgrow-purple hover:bg-upgrow-purple-dark text-white border-0 px-3 sm:px-6 py-2 font-medium text-sm"
          >
            <Link href="https://calendly.com/hitmarkdigital">Book Strategy Call</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800"
            >
              <SheetHeader className="text-left pb-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="w-8 h-8 bg-gradient-to-br from-upgrow-purple to-upgrow-green rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                    </div>
                    <span className="font-bold text-xl">UPGROW</span>
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
                  <div className="space-y-3">
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
                  </div>

                  {/* Pricing */}
                  <Link
                    href="/pricing"
                    className="block py-3 font-medium text-gray-900 dark:text-gray-100 hover:text-upgrow-purple transition-colors border-b border-gray-100 dark:border-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                </nav>

                {/* CTA Button */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-800 pb-6">
                  <Button
                    asChild
                    className="w-full bg-upgrow-purple hover:bg-upgrow-purple-dark text-white font-medium py-3"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/book-strategy-call">Book Strategy Call</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
