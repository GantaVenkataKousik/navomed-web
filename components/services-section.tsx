"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, FlaskRoundIcon as Flask, Microscope, ClipboardList, TestTube, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Flask className="h-8 w-8 text-primary-500" />,
      title: "Pre-Clinical Research",
      description:
        "Comprehensive pre-clinical research services to support your drug development and scientific discovery process.",
      link: "#",
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary-500" />,
      title: "Diagnostic Testing",
      description: "Advanced diagnostic testing services with quick turnaround times and accurate results.",
      link: "#",
    },
    {
      icon: <ClipboardList className="h-8 w-8 text-primary-500" />,
      title: "Clinical Trials",
      description: "Support for clinical trials with reliable data collection, analysis, and reporting.",
      link: "#",
    },
    {
      icon: <TestTube className="h-8 w-8 text-primary-500" />,
      title: "Laboratory Services",
      description: "Full-service laboratory capabilities including sample processing, analysis, and storage.",
      link: "#",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-500" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and assurance protocols to ensure the highest standards of accuracy.",
      link: "#",
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "Consultation Services",
      description: "Expert consultation on research design, methodology, and interpretation of results.",
      link: "#",
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
        <div className="text-center mb-4">
          <span className="pill bg-primary-100 text-primary-600 text-sm font-medium inline-block">Our Services</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">
            Comprehensive Laboratory Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a wide range of laboratory services to meet your research and diagnostic needs with precision and
            reliability.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 p-4 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary-500 text-primary-600 hover:bg-primary-50 rounded-full px-8 py-6 text-lg group"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

