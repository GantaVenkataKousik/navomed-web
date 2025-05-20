"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, Award, Zap } from "lucide-react"
import { WellnessIllustration } from "@/components/illustrations/wellness-illustration"
import { WaveDivider } from "@/components/illustrations/wave-divider"

export function WhyEmbraceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-teal-500" />,
      title: "Standardized & Evidence-Based Care",
      description:
        "Our therapeutic approaches are grounded in scientific research and proven methodologies to ensure effective treatment outcomes.",
    },
    {
      icon: <Award className="h-10 w-10 text-teal-500" />,
      title: "Highly Qualified Therapists",
      description:
        "Our team consists of licensed professionals with specialized training in various mental health and neurodevelopmental disciplines.",
    },
    {
      icon: <Zap className="h-10 w-10 text-teal-500" />,
      title: "Flexible Online & Offline Support",
      description:
        "Access care on your terms with seamless transitions between virtual sessions and in-person appointments.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-24 relative" ref={ref}>
      <WaveDivider className="absolute top-0 left-0" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
              <WellnessIllustration className="w-[300px] h-[300px] mx-auto" />
            </div>
          </motion.div>

          <div className="lg:w-2/3">
            <div className="text-center lg:text-left">
              <span className="pill bg-primary-100 text-primary-600 text-sm font-medium mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Why eMbrace?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8">
                At eMbrace, we believe in a holistic approach to mental health and neurodevelopmental care. Our team of
                experts is dedicated to providing personalized care that addresses your unique needs.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="glass-card h-full rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="mb-6 p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full inline-block">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0" inverted={true} />
    </section>
  )
}

