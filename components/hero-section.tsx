"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DecorativeDots } from "@/components/illustrations/decorative-dots"
import { NeuralNetwork } from "@/components/illustrations/neural-network"

interface HeroSectionProps {
  onContactUs: () => void
}

export function HeroSection({ onContactUs }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-teal-50/50 to-white/80"></div>
        <div className="pattern-dots absolute inset-0 opacity-50"></div>
      </div>

      <DecorativeDots />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="pill bg-primary-100 text-primary-600">
                <span className="text-sm font-medium">Laboratory Services</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Laboratory Services for Medical Research
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              State-of-the-art facilities and expert scientists to support your research needs
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={onContactUs}
                className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary-500 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-6 text-lg group"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"></div>
              <NeuralNetwork className="w-[400px] h-[400px] relative z-10 animate-float" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

