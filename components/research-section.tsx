"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dna, Microscope, Pill, Atom, Braces, FlaskRoundIcon as Flask } from "lucide-react"

export function ResearchSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const researchAreas = [
    {
      icon: <Dna className="h-8 w-8 text-blue-500" />,
      title: "Genomic Medicine",
      description:
        "Exploring genetic factors in disease development and progression to develop personalized therapeutic approaches.",
    },
    {
      icon: <Microscope className="h-8 w-8 text-blue-500" />,
      title: "Molecular Diagnostics",
      description:
        "Developing advanced diagnostic tools for early detection and monitoring of diseases at the molecular level.",
    },
    {
      icon: <Pill className="h-8 w-8 text-blue-500" />,
      title: "Drug Discovery",
      description:
        "Identifying and validating novel therapeutic targets and developing compounds with potential clinical applications.",
    },
    {
      icon: <Atom className="h-8 w-8 text-blue-500" />,
      title: "Structural Biology",
      description:
        "Investigating the three-dimensional structures of biological molecules to understand their functions and interactions.",
    },
    {
      icon: <Braces className="h-8 w-8 text-blue-500" />,
      title: "Computational Biology",
      description:
        "Using advanced algorithms and data analysis to model biological systems and predict disease outcomes.",
    },
    {
      icon: <Flask className="h-8 w-8 text-blue-500" />,
      title: "Biomarker Development",
      description:
        "Identifying and validating biological markers for disease diagnosis, prognosis, and treatment response.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="pill bg-blue-100 text-blue-600 text-sm font-medium">Our Research</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Cutting-Edge Research Areas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our multidisciplinary team conducts research across various fields to develop innovative solutions for
            complex medical challenges.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchAreas.map((area, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 rounded-full inline-block">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

