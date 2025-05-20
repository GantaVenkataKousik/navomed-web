"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

const mediaFeatures = [
  { name: "Forbes", logo: "/placeholder.svg?height=40&width=120" },
  { name: "TechCrunch", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Psychology Today", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Mental Health Podcast", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Wellness Summit", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Health Magazine", logo: "/placeholder.svg?height=40&width=120" },
  { name: "TEDx", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Mind & Body Conference", logo: "/placeholder.svg?height=40&width=120" },
]

export function MediaBanner() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let animationId: number
    let scrollPos = 0
    const totalWidth = scrollElement.scrollWidth
    const viewportWidth = scrollElement.offsetWidth

    const animate = () => {
      scrollPos += 0.5
      if (scrollPos >= totalWidth / 2) {
        scrollPos = 0
      }
      if (scrollElement) {
        scrollElement.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500/5 to-blue-500/5 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="pill bg-blue-100 text-blue-600 text-sm font-medium mb-4">As Featured In</span>
          <h2 className="text-2xl md:text-3xl font-bold gradient-text inline-block mb-4">Media Recognition</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto"></div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
        >
          <div ref={scrollRef} className="flex overflow-x-hidden">
            <div className="flex space-x-16 animate-scroll whitespace-nowrap py-4">
              {mediaFeatures.concat(mediaFeatures).map((media, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={media.logo || "/placeholder.svg"}
                    alt={media.name}
                    width={120}
                    height={40}
                    className="h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

