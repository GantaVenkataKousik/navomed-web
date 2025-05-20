"use client"

import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackgroundScene } from "@/components/3d/background-scene"
import { useToast } from "@/components/ui/use-toast"
import { DecorativeDots } from "@/components/illustrations/decorative-dots"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { TeamSection } from "@/components/team-section"
import { StatisticsSection } from "@/components/statistics-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FAQSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { WaveDivider } from "@/components/wave-divider"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { toast } = useToast()
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

  const handleBookConsultation = () => {
    toast({
      title: "Consultation Request Received",
      description: "We'll get back to you shortly.",
      duration: 5000,
    })
  }

  return (
    <div className="min-h-screen">
      <div className="pattern-dots absolute inset-0 opacity-50 pointer-events-none"></div>
      {mounted && <BackgroundScene />}
      <Navbar />

      {/* Hero Section */}
      <HeroSection onContactUs={handleBookConsultation} />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Specialties Section */}
      <SpecialtiesSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Testimonials */}
      <section className="py-24 bg-blue-50/50 relative">
        <div className="absolute inset-0">
          <div className="pattern-waves absolute inset-0 opacity-30"></div>
          <DecorativeDots />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-4">
            <span className="pill bg-primary-100 text-primary-600 text-sm font-medium inline-block">What Our Clients Say</span>
          </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
              Hear from researchers and healthcare professionals who have partnered with us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          </div>
          <TestimonialCarousel />
        </div>

        <WaveDivider className="absolute bottom-0 left-0" inverted={true} />
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="pattern-waves absolute inset-0 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10"></div>
        <DecorativeDots />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glass-card max-w-3xl mx-auto p-12 rounded-2xl">
            <div className="text-center mb-4">
              <span className="pill bg-white/80 text-primary-600 text-sm font-medium inline-block">Partner With Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Accelerate Your Research with NovaMed Laboratories
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our state-of-the-art facilities and expert scientists are ready to support your next breakthrough.
            </p>
            <Button
              size="lg"
              onClick={handleBookConsultation}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section - Moved to the end */}
      <TeamSection />

      <Footer />
      <ScrollToTop visible={hasScrolled} />
    </div>
  )
}

