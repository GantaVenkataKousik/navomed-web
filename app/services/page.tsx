"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("diagnostic-tests")

  return (
    <div className="min-h-screen bg-[#1a2035] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Laboratory Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive research models and diagnostic services for advanced medical studies
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`py-3 px-4 text-center rounded-md transition-all ${
                  activeCategory === category.id
                    ? "bg-[#4299e1] text-white"
                    : "bg-[#2a3352] text-gray-300 hover:bg-[#2d3a5d]"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {subCategories.map((category) => (
              <button
                key={category.id}
                className="py-3 px-4 text-center rounded-md transition-all bg-[#2a3352] text-gray-300 hover:bg-[#2d3a5d]"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeCategory === "diagnostic-tests" && <DiagnosticTestsContent />}
          {activeCategory === "hepatic-models" && <HepaticModelsContent />}
          {activeCategory === "wound-models" && <WoundModelsContent />}
          {activeCategory === "obesity-models" && <ObesityModelsContent />}
          {activeCategory === "vitiligo-model" && <VitiligoModelContent />}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Button
            className="bg-[#4299e1] hover:bg-[#3182ce] text-white rounded-full px-8 py-6 text-lg inline-flex items-center"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact Our Research Team
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ServiceCard({ service }) {
  return (
    <div className="relative rounded-lg overflow-hidden h-60">
      <div className="absolute inset-0">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-gray-200">{service.description}</p>
      </div>
    </div>
  )
}

function DiagnosticTestsContent() {
  return (
    <div className="bg-[#1e2746] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-[#4299e1] mb-2">Schirmer Tear Test</h2>
      <p className="text-gray-300 mb-4">Quantitative measurement of tear volume</p>

      <p className="text-gray-200 mb-6">
        The Schirmer tear test is a precise method to quantify tear production, essential for:
      </p>

      <ul className="space-y-2 mb-8">
        <li className="flex items-start">
          <span className="text-[#4299e1] mr-2">•</span>
          <span className="text-gray-200">Diagnosing dry eye conditions</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#4299e1] mr-2">•</span>
          <span className="text-gray-200">Monitoring tear production</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#4299e1] mr-2">•</span>
          <span className="text-gray-200">Evaluating treatment effectiveness</span>
        </li>
      </ul>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-[#1e2746] rounded-lg p-8 border border-[#2a3352]">
          <h3 className="text-xl font-bold text-[#4299e1] mb-4">Phenol Red Thread Test</h3>
          <p className="text-gray-300 mb-4">Alternative method for tear volume measurement</p>

          <p className="text-gray-200 mb-6">A less invasive alternative to the Schirmer test, providing:</p>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Rapid results within 15 seconds</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Minimal reflex tearing</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Improved patient comfort</span>
            </li>
          </ul>

          <Button className="mt-6 bg-[#4299e1] hover:bg-[#3182ce] text-white">Learn More</Button>
        </div>

        <div className="bg-[#1e2746] rounded-lg p-8 border border-[#2a3352]">
          <Image
            src="/images/lab-microscope-research.png"
            alt="Diagnostic testing"
            width={400}
            height={300}
            className="rounded-lg mb-4"
          />

          <p className="text-gray-200">
            Our diagnostic testing services provide accurate and reliable results for research and clinical
            applications.
          </p>

          <Button className="mt-6 bg-[#4299e1] hover:bg-[#3182ce] text-white">View Detailed Information</Button>
        </div>
      </div>
    </div>
  )
}

function HepaticModelsContent() {
  return (
    <div className="bg-[#1e2746] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-[#4299e1] mb-2">Hepatic Models in Rat</h2>
      <p className="text-gray-300 mb-6">Comprehensive liver disease progression models</p>

      <div className="grid grid-cols-5 gap-4 mb-8">
        {hepaticModelTypes.map((type, index) => (
          <div key={index} className="bg-[#2a3352] rounded-md p-4 text-center">
            <p className="text-gray-200">{type}</p>
          </div>
        ))}
      </div>

      <div className="h-64 bg-[#2a3352] rounded-lg flex items-center justify-center mb-8">
        <p className="text-gray-400">Liver model visualization</p>
      </div>

      <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white py-3">View Detailed Models</Button>
    </div>
  )
}

function WoundModelsContent() {
  return (
    <div className="bg-[#1e2746] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-[#4299e1] mb-2">Excision Wound Model</h2>
      <p className="text-gray-300 mb-6">Temporal progression of wound healing</p>

      <div className="grid grid-cols-6 gap-4 mb-8">
        {woundHealingDays.map((day, index) => (
          <div key={index} className="bg-[#2a3352] rounded-md p-4 text-center">
            <p className="text-gray-200">{day}</p>
          </div>
        ))}
      </div>

      <div className="h-64 bg-[#2a3352] rounded-lg flex items-center justify-center mb-8">
        <p className="text-gray-400">Wound healing visualization</p>
      </div>

      <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white py-3">View Healing Timeline</Button>
    </div>
  )
}

function ObesityModelsContent() {
  return (
    <div className="bg-[#1e2746] rounded-lg p-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-[#2a3352] rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#4299e1] mb-2">Anti-obesity Model</h3>
          <p className="text-gray-300 mb-4">Diet-induced obesity research</p>
          <p className="text-gray-200 mb-6">
            Specialized model for studying anti-obesity interventions and metabolic disorders.
          </p>
          <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white">Learn More</Button>
        </div>

        <div className="bg-[#2a3352] rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#4299e1] mb-2">Fatty Liver Model</h3>
          <p className="text-gray-300 mb-4">NAFLD/NASH research model</p>
          <p className="text-gray-200 mb-6">
            Model for studying non-alcoholic fatty liver disease progression and treatments.
          </p>
          <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white">Learn More</Button>
        </div>

        <div className="bg-[#2a3352] rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#4299e1] mb-2">Healthy Rat Model</h3>
          <p className="text-gray-300 mb-4">Control model</p>
          <p className="text-gray-200 mb-6">
            Standard healthy rat model for comparative studies and baseline measurements.
          </p>
          <Button className="w-full bg-[#4299e1] hover:bg-[#3182ce] text-white">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

function VitiligoModelContent() {
  return (
    <div className="bg-[#1e2746] rounded-lg p-8">
      <h2 className="text-2xl font-bold text-[#4299e1] mb-2">Vitiligo Model</h2>
      <p className="text-gray-300 mb-6">Specialized model for vitiligo research</p>

      <p className="text-gray-200 mb-8">
        Our vitiligo model provides a platform for studying depigmentation disorders and testing potential treatments.
        The model accurately replicates the key features of vitiligo, allowing for comprehensive research into the
        mechanisms and potential therapeutic approaches.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#2a3352] rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Model Features</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Reproducible depigmentation patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Immune system involvement</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Melanocyte destruction monitoring</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Treatment response assessment</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#2a3352] rounded-lg p-6">
          <h3 className="text-xl font-bold text-white mb-4">Applications</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Drug efficacy testing</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Pathogenesis studies</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Repigmentation therapy development</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4299e1] mr-2">•</span>
              <span className="text-gray-200">Immunomodulatory approach testing</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const mainServices = [
  {
    title: "Advanced Testing",
    description: "State-of-the-art laboratory analysis and testing procedures",
    image: "/images/lab-microscope-research.png",
  },
  {
    title: "Animal Models",
    description: "Specialized animal models for research and testing",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Expert Analysis",
    description: "Professional research staff and advanced analytical capabilities",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const serviceCategories = [
  { id: "diagnostic-tests", name: "Diagnostic Tests" },
  { id: "hepatic-models", name: "Hepatic Models" },
  { id: "wound-models", name: "Wound Models" },
  { id: "obesity-models", name: "Obesity Models" },
  { id: "vitiligo-model", name: "Vitiligo Model" },
]

const subCategories = [
  { id: "cns-studies", name: "CNS Studies" },
  { id: "renal-injections", name: "Renal Injections" },
  { id: "administration-routes", name: "Administration Routes" },
  { id: "critical-surgeries", name: "Critical Surgeries" },
  { id: "sublingual-pk", name: "Sublingual PK" },
]

const hepaticModelTypes = ["Healthy Liver", "Steatosis", "NASH", "Fibrosis", "Cirrhosis"]

const woundHealingDays = ["Control", "Day 0", "Day 3", "Day 7", "Day 11", "Day 15"]

