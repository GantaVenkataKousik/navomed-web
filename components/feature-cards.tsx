"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Heart, Users, Clock, Shield, Sparkles } from "lucide-react"
import { TherapyIllustration } from "@/components/illustrations/therapy-illustration"
import { FamilyIllustration } from "@/components/illustrations/family-illustration"

export function FeatureCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-teal-500" />,
      title: "Neurodevelopmental Assessments",
      description: "Comprehensive evaluations to understand cognitive strengths and challenges.",
    },
    {
      icon: <Heart className="h-8 w-8 text-teal-500" />,
      title: "Emotional Wellness",
      description: "Therapy approaches focused on building emotional resilience and well-being.",
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: "Family Therapy",
      description: "Strengthening relationships and improving communication within families.",
    },
    {
      icon: <Clock className="h-8 w-8 text-teal-500" />,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your busy lifestyle.",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      title: "Privacy Focused",
      description: "Your information is always protected with the highest security standards.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-teal-500" />,
      title: "Personalized Care Plans",
      description: "Tailored approaches designed specifically for your unique needs.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="pill bg-secondary-100 text-secondary-600 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Comprehensive Mental Health Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a wide range of services designed to support mental health and neurodevelopmental needs at every
            stage of life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            className="col-span-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
              <TherapyIllustration className="w-[250px] h-[250px] animate-float" />
            </div>
          </motion.div>

          <motion.div
            className="col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="glass-card rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="col-span-2 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid md:grid-cols-2 gap-6">
              {features.slice(4, 6).map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="glass-card rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a href="/services" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                  View all our services
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="col-span-1 flex justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
              <FamilyIllustration className="w-[250px] h-[250px] animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

