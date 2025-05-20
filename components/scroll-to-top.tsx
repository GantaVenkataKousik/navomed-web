"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

interface ScrollToTopProps {
  visible: boolean
}

export function ScrollToTop({ visible }: ScrollToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

