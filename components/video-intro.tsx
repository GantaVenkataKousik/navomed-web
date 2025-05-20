"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause } from "lucide-react"
import Image from "next/image"

export function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-24" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="pill bg-teal-100 text-teal-600 text-sm font-medium mb-4">Watch & Learn</span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Discover eMbrace</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto"></div>
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {/* This would be a real video in production */}
          <div className="relative aspect-video bg-gradient-to-r from-teal-500 to-blue-500">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Video thumbnail"
              fill
              className="object-cover mix-blend-overlay opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="h-20 w-20 rounded-full glass-effect flex items-center justify-center transition-transform hover:scale-110 shadow-lg"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="h-10 w-10 text-teal-600" />
                ) : (
                  <Play className="h-10 w-10 text-teal-600 ml-1" />
                )}
              </button>
            </div>
            <video ref={videoRef} className="hidden" onEnded={() => setIsPlaying(false)}>
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="bg-white p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Welcome to eMbrace</h3>
            <p className="text-gray-600">
              Learn about our approach to mental health care and how we can support you on your journey to wellness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

