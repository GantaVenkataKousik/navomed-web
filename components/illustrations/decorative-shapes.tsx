"use client"

import { motion } from "framer-motion"

export function DecorativeShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left circle */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-teal-500/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Top right triangle */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40"
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-blue-500/10 transform rotate-45" />
      </motion.div>

      {/* Bottom left square */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-500/5 rounded-lg"
        initial={{ rotate: 15, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Bottom right circle */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-blue-500/5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Middle floating shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-teal-500/20"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-10 w-6 h-6 bg-blue-500/20 rotate-45"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-10 h-10 rounded-lg bg-teal-500/10"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-blue-500/10"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
    </div>
  )
}

