"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Parent",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "eMbrace has been transformative for our family. The therapists truly understand my child's unique needs and have given us practical tools that work in real life.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    role: "Adult Client",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "After years of struggling with anxiety, I finally found a therapeutic approach that works for me. The personalized care at eMbrace has made all the difference.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya K.",
    role: "Adolescent Client",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "I was hesitant about therapy at first, but my therapist at eMbrace made me feel comfortable from day one. I've learned so much about myself.",
    rating: 5,
  },
  {
    id: 4,
    name: "David L.",
    role: "Parent",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The neurodevelopmental assessment was thorough and insightful. For the first time, we have clarity about our child's needs and a clear path forward.",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  useEffect(() => {
    if (!autoplay) return

    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    timeoutRef.current = setTimeout(nextSlide, 5000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [autoplay, current])

  const next = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-12 -left-12 text-teal-300/30">
        <Quote size={80} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mb-12"
        >
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex flex-col items-center">
                  <Avatar className="h-20 w-20 border-2 border-primary-200 ring-4 ring-primary-50">
                    <AvatarImage src={testimonials[current].avatar} alt={testimonials[current].name} />
                    <AvatarFallback className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                      {testimonials[current].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex mt-3">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">"{testimonials[current].content}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonials[current].name}</h4>
                    <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 items-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary-200 hover:bg-primary-50"
          onClick={prev}
        >
          <ChevronLeft className="h-5 w-5 text-primary-600" />
          <span className="sr-only">Previous</span>
        </Button>

        <div className="flex gap-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all ${
                index === current ? "w-8 bg-gradient-to-r from-primary-500 to-secondary-500" : "w-2.5 bg-primary-200"
              }`}
              onClick={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current)
                }
                setAutoplay(false)
                setCurrent(index)
              }}
            >
              <span className="sr-only">Testimonial {index + 1}</span>
            </button>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary-200 hover:bg-primary-50"
          onClick={next}
        >
          <ChevronRight className="h-5 w-5 text-primary-600" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

