"use client"

import { motion } from "framer-motion"

export function DecorativeDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating dots */}
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 10 + 5
          const x = Math.random() * 100
          const y = Math.random() * 100
          const delay = Math.random() * 5
          const duration = Math.random() * 10 + 15

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary-300/30"
              style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )
        })}

        {Array.from({ length: 15 }).map((_, i) => {
          const size = Math.random() * 8 + 4
          const x = Math.random() * 100
          const y = Math.random() * 100
          const delay = Math.random() * 5
          const duration = Math.random() * 10 + 15

          return (
            <motion.div
              key={i + 20}
              className="absolute rounded-full bg-secondary-300/30"
              style={{
                width: size,
                height: size,
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      {/* Neural network nodes */}
      <div className="absolute top-1/4 right-10 w-64 h-64 opacity-70 animate-rotate-slow">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 rounded-full bg-primary-400"></div>

          {/* Nodes */}
          <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-secondary-400"></div>
          <div className="absolute top-1/2 left-0 w-3 h-3 -mt-1.5 rounded-full bg-secondary-400"></div>
          <div className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 rounded-full bg-secondary-400"></div>
          <div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 rounded-full bg-secondary-400"></div>
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-secondary-400"></div>
          <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-secondary-400"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full bg-secondary-400"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-secondary-400"></div>

          {/* Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <line x1="50" y1="50" x2="50" y2="0" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="0" y2="50" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="100" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="25" y2="25" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="75" y2="25" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="25" y2="75" stroke="#4299e1" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="75" y2="75" stroke="#4299e1" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating circles */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full border border-primary-200/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 right-20 w-24 h-24 rounded-full border border-secondary-200/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-primary-400/10 to-primary-200/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-secondary-400/10 to-secondary-200/5 blur-3xl"></div>
    </div>
  )
}

