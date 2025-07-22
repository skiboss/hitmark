"use client"

import { motion } from "framer-motion"
import { Target } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between px-20">
          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                whileHover={{
                  rotate: [0, 360],
                  transition: { duration: 0.5 },
                }}
              >
                <img src="/hitmark-logo.png" alt="Hitmark Logo"
                  className={`transition-all duration-100 ${
                    isScrolled ? "text-black" : "text-white drop-shadow-lg"
                  }`}
                />
              </motion.div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-14">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1 + 0.5,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Link
                  href={item.href}
                  className={`font-light relative transition-all duration-300 text-black ${
                    pathname === item.href
                      ? isScrolled
                        ? "font-bold"
                        : "font-bold drop-shadow-lg"
                      : isScrolled
                        ? "font-light"
                        : "font-light"
                  }`}
                  // style={!isScrolled ? { textShadow: "1px 1px 3px rgba(0,0,0,0.8)" } : {}}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-all duration-300 ${
                        isScrolled ? "bg-black" : "bg-black shadow-lg"
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
