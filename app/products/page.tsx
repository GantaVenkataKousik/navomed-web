"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductsSection } from "@/components/products-section"
import { ScrollToTop } from "@/components/scroll-to-top" // Assuming you want scroll to top
import { useEffect, useState } from "react"
import { FAQSection } from "@/components/faq-section"
import { FeatureCards } from "@/components/feature-cards"
import { DecorativeDots } from "@/components/illustrations/decorative-dots"
import { WaveDivider } from "@/components/wave-divider"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Optional: Add background patterns or scenes if desired, similar to home page */}
      {/* {mounted && <BackgroundScene />} */}
      <Navbar />
      <main className="flex-grow pt-20"> {/* Add padding-top to avoid overlap with fixed navbar */}
        <ProductsSection />
        
        {/* Features Section */}
        <section className="py-16 bg-blue-50/50 relative">
          <div className="absolute inset-0">
            <div className="pattern-waves absolute inset-0 opacity-30"></div>
            <DecorativeDots />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="pill bg-primary-100 text-primary-600 text-sm font-medium mb-4 inline-block">Key Features</span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
                What Makes Our Products Different
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600">
                Our products are designed with precision, efficiency, and innovation in mind to help you achieve your research goals.
              </p>
            </div>
            <FeatureCards />
          </div>
          <WaveDivider className="absolute bottom-0 left-0" inverted={true} />
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="pattern-waves absolute inset-0 opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
          <DecorativeDots />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="glass-card max-w-3xl mx-auto p-12 rounded-2xl">
              <span className="pill bg-white/80 text-primary-600 text-sm font-medium mb-4 inline-block">Ready to Start?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Research with Our Products
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our products and how they can benefit your research.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop visible={hasScrolled} />
    </div>
  )
} 