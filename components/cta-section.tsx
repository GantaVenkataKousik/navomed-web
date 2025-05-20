"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  onContactUs: () => void
}

export function CTASection({ onContactUs }: CTASectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="pattern-waves absolute inset-0 opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-600/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto rounded-2xl p-12 text-center"
        >
          <span className="pill bg-white/80 text-blue-600 text-sm font-medium mb-4">Research Collaboration</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner with Us to Advance Scientific Discovery
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We collaborate with academic institutions, healthcare organizations, and industry partners to accelerate
            research and develop innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onContactUs}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Our Team
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg"
            >
              Learn About Partnerships
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

