"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ChildIllustration } from "@/components/illustrations/child-illustration"

export function StatisticsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: 49, label: "Clients Worldwide", suffix: "+" },
    { value: 194, label: "Research Projects", suffix: "+" },
    { value: 15, label: "Years of Experience", suffix: "+" },
    { value: 97, label: "Published Studies", suffix: "+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500 text-white relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="pattern-dots absolute inset-0 opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
              <ChildIllustration className="w-[300px] h-[300px] animate-float" />
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
              <div className="w-24 h-1 bg-white/30 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-white/80 max-w-xl mx-auto lg:mx-0">
                Trusted by Researchers and Healthcare Professionals. Our commitment to excellence has made us a trusted
                partner in medical research and diagnostics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2} start={isInView ? 0 : null} />
                  <p className="text-white/80 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface CountUpProps {
  end: number
  suffix?: string
  duration?: number
  start: number | null
}

function CountUp({ end, suffix = "", duration = 2, start }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (start === null) return

    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [start, end, duration])

  return (
    <div className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  )
}

