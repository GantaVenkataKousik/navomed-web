"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const publications = [
    {
      title: "Novel Biomarkers for Early Detection of Neurodegenerative Diseases",
      authors: "Zhang J, Smith A, Johnson B, et al.",
      journal: "Journal of Molecular Neuroscience",
      year: 2023,
      doi: "10.1038/s41593-023-1234-5",
    },
    {
      title: "Genomic Profiling of Treatment-Resistant Cancers: Implications for Targeted Therapy",
      authors: "Williams R, Chen L, Garcia M, et al.",
      journal: "Nature Cancer",
      year: 2022,
      doi: "10.1038/s43018-022-0456-7",
    },
    {
      title: "Artificial Intelligence in Drug Discovery: Current Status and Future Perspectives",
      authors: "Brown K, Davis T, Wilson P, et al.",
      journal: "Journal of Medicinal Chemistry",
      year: 2022,
      doi: "10.1021/acs.jmedchem.2c00789",
    },
    {
      title: "Structural Insights into Protein-Protein Interactions in Immune Signaling Pathways",
      authors: "Lee S, Thompson R, Anderson K, et al.",
      journal: "Science",
      year: 2021,
      doi: "10.1126/science.abc1234",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          <span className="pill bg-blue-100 text-blue-600 text-sm font-medium mb-4">Our Publications</span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block mb-4">Scientific Contributions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our research has been published in leading scientific journals, contributing to the advancement of knowledge
            in various fields.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {publications.map((pub, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 rounded-full">
                    <FileText className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      <span className="font-medium">{pub.journal}</span>, {pub.year} | DOI: {pub.doi}
                    </p>
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Publication
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  )
}

