"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const partners = [
  { name: "HSBC", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Instamojo", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Myndstories", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 4", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 5", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 6", logo: "/placeholder.svg?height=60&width=120" },
]

export function PartnerLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <motion.div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {partners.map((partner, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
          variants={itemVariants}
        >
          <Image
            src={partner.logo || "/placeholder.svg"}
            alt={partner.name}
            width={120}
            height={60}
            className="object-contain h-12"
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

