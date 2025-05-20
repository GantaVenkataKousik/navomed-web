"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const products = [
    {
      name: "GenomeScan™",
      description:
        "Advanced genomic sequencing platform for comprehensive genetic analysis with high accuracy and speed.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "ProteInSight™",
      description:
        "Cutting-edge proteomics analysis tool for identifying and quantifying proteins in complex biological samples.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "CellVision™",
      description:
        "High-resolution imaging system for cellular and subcellular visualization with AI-powered analysis.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="pill bg-blue-100 text-blue-600 text-sm font-medium mb-4 inline-block">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Innovative Research Tools</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We develop state-of-the-art tools and technologies to accelerate scientific discovery and improve healthcare
            outcomes.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full group mt-auto"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

