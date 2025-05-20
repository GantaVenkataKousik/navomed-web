"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-6">
            Leading the Way in Medical Laboratory Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            At NovaMed Laboratories, we are committed to providing a preclinical research platform with a unique blend of
            expertise, accuracy, and reliability. Our innovative and cost-effective approach supports your journey of
            scientific discovery while delivering high-quality, reproducible data.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

