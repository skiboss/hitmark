import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import InteractiveCursor from "@/components/interactive-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hitmark Digital - Precision Marketing Agency",
  description:
    "Scale your Brand with Precision Marketing that hits the mark. Turn Clicks Into Customers With Tailored Marketing Solutions That Deliver Real Results.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ScrollProgress />
        <main className="">
          <Header />
          {children}
          </main>
        <Footer />
        <InteractiveCursor />
      </body>
    </html>
  )
}
