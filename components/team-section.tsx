"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const allTeamMembers = [
    {
      name: "Ganta Venkata Kousik",
      role: "Software Developer | Entrepreneur",
      bio: "A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven automation. Experienced in delivering high-performance digital solutions across various domains, focusing on scalability, efficiency, and user experience.",
      image: "https://i.postimg.cc/mkbgT9zj/gvk-p-dp.jpg", // Replace with your actual image path
      socials: {
        linkedin: "https://www.linkedin.com/in/gantavenkatakousik/",
        github: "https://github.com/GantaVenkataKousik",
        linktree: "https://linktr.ee/GantaVenkataKousik"
      }
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief Scientific Officer",
      bio: "Ph.D. in Molecular Biology with over 15 years of experience in genomics research and drug discovery.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Director of Research",
      bio: "Expert in computational biology and AI-driven drug discovery with numerous publications in top journals.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dr. Emily Johnson",
      role: "Lead Bioinformatician",
      bio: "Specializes in developing algorithms for analyzing complex biological datasets and identifying patterns.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dr. David Kim",
      role: "Senior Research Scientist",
      bio: "Focuses on developing novel therapeutic approaches for neurodegenerative diseases using stem cell models.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const teamMember = allTeamMembers[0]; // Select only the first member

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
    hidden: { opacity: 0, y: 30 },
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <span className="pill bg-blue-100 text-blue-600 text-sm font-medium inline-block">Our Team</span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Meet Our Developer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            The driving force behind our technical excellence and innovation.
          </p>
        </div>

        {teamMember && (
          <motion.div
            variants={containerVariants} // You might not need containerVariants if it's a single item
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            // Adjust grid layout for a single, wider card
            className="flex justify-center"
          >
            <motion.div variants={itemVariants} className="w-full md:w-3/4 lg:w-1/2"> {/* Adjust width here */}
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-96">
                  <Image src={teamMember.image || "/placeholder.svg"} alt={teamMember.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{teamMember.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{teamMember.role}</p>
                  <p className="text-gray-600 mb-6">{teamMember.bio}</p>
                  <div className="flex space-x-6 justify-center"> {/* Increased spacing between icons */}
                    {teamMember.socials?.linkedin && (
                      <a href={teamMember.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                        <Linkedin className="h-8 w-8" /> {/* Increased icon size */}
                      </a>
                    )}
                    {teamMember.socials?.github && (
                      <a href={teamMember.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                    {teamMember.socials?.linktree && (
                      <a href={teamMember.socials.linktree} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

