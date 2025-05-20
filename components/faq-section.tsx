"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "What services does your laboratory offer?",
      answer:
        "NovaMed Laboratories offers a comprehensive range of laboratory services including pre-clinical research, diagnostic testing, clinical trial support, laboratory services, quality assurance, and consultation services. Our state-of-the-art facilities and expert scientists are equipped to handle various research and diagnostic needs with precision and reliability.",
    },
    {
      question: "How do I access my test results?",
      answer:
        "Test results can be accessed through our secure online portal. Once your tests are complete, you will receive an email notification with instructions on how to log in and view your results. For any assistance, please contact our customer support team.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="pill bg-primary-100 text-primary-600 text-sm font-medium inline-block">FAQ</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Find answers to common questions about our laboratory services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <button
        className="w-full glass-card rounded-2xl p-6 flex justify-between items-center hover:shadow-md transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800 text-left">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 text-primary-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pt-4 pb-6 text-gray-600"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

