"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export function SpecialtiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const specialties = ["Pre-Clinical", "Molecular", "Genetic", "Diagnostic"]

  const services = [
    "Animal model development and validation",
    "Pharmacokinetic and pharmacodynamic studies",
    "Toxicology and safety assessment",
    "Efficacy testing and validation",
  ]

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="pill bg-primary-100 text-primary-600 text-sm font-medium inline-block">Our Specialties</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Areas of Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We specialize in various fields of medical research and diagnostics to provide comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">{specialty}</h3>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <Image
                src="/images/lab-microscope-research.png"
                alt="Pre-clinical research"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold gradient-text inline-block mb-6">Pre-Clinical Research Excellence</h3>
              <p className="text-gray-600 mb-8">
                We are committed to providing a preclinical research platform with a unique blend of expertise,
                accuracy, and reliability. Its simple, innovative, and cost-effective approach to support your journey
                of animal experimentation while catering to all your preclinical research needs with high quality,
                reproducible scientific data to develop herbal formulations and screen New Chemical Entities (NCEs).
              </p>

              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mr-3 p-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                      <Check className="h-5 w-5 text-primary-500" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

