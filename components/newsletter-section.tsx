"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 5000,
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-4">
              <span className="pill bg-primary-100 text-primary-600 text-sm font-medium inline-block">Stay Updated</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Join Our Newsletter</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              Subscribe to receive the latest news, mental health tips, and exclusive offers from eMbrace.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full px-6 py-6 border-primary-200 focus:border-primary-500 focus:ring-primary-500"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full px-6 py-6"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

