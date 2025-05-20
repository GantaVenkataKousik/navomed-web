"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamSection } from "@/components/team-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { useEffect, useState } from "react"

export default function TeamPage() {
  const [hasScrolled, setHasScrolled] = useState(false)
  // const [mounted, setMounted] = useState(false) // Keep if using 3D scenes or similar

  useEffect(() => {
    // setMounted(true) // Keep if using 3D scenes or similar

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional: Add background patterns or scenes if desired */}
      <Navbar />
      <main className="flex-grow pt-20"> {/* Add padding-top to avoid overlap with fixed navbar */}
        <TeamSection />
      </main>
      <Footer />
      <ScrollToTop visible={hasScrolled} />
    </div>
  )
} 