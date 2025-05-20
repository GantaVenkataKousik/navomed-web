"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { PatternBackground } from "@/components/illustrations/pattern-background"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you shortly.",
        duration: 5000,
      })
      setIsSubmitting(false)
      e.target.reset()
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      <div className="pattern-dots absolute inset-0 opacity-50 pointer-events-none"></div>
      <PatternBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-white">
        <div className="container mx-auto px-4 text-center">
          <span className="pill bg-primary-100 text-primary-600 text-sm font-medium mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need more information? We're here to help. Reach out to our team for assistance.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-2xl font-bold gradient-text mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us through any of the following channels. Our team is ready to assist you with
                any questions or inquiries you may have.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Lab no 20A, 3rd floor, Aspire bionest,
                      <br />
                      UNIVERSITY OF HYDERABAD, Gachibowli,
                      <br />
                      Hyderabad, Serilingampalle (M),
                      <br />
                      Telangana 500032
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">083412 43888</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">contact@cologybiosciences.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                    <p className="text-gray-600">Opens 9:30 AM Monday</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="text-2xl font-bold gradient-text mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        required
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        required
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (optional)
                    </label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" className="w-full rounded-lg" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Enter the subject of your message"
                      required
                      className="w-full rounded-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      rows={5}
                      required
                      className="w-full rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white rounded-full py-3 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

