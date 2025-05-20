"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Shield, Users, Clock, Award, Zap } from "lucide-react"

interface CoreValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CoreValueCard: React.FC<CoreValueCardProps> = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
  >
    <div className="w-10 h-10 rounded-full bg-[#e6f2f0] flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, bio }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg overflow-hidden shadow-md"
  >
    <div className="p-6 flex flex-col items-center text-center">
      <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
        <Image src="/images/lab-researcher-1.png" alt={name} width={128} height={128} className="object-cover" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-[#2a9d8f] font-medium mb-4">{title}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </motion.div>
)

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-[#e6f2f0]">
        <div className="absolute inset-0 pattern-hexagons opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#4db6ac]/20 text-[#2a9d8f] px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Leading the Way in Medical Laboratory Excellence
              </h1>
              <p className="text-lg text-gray-700">
                At NovaMed Laboratories, we combine cutting-edge technology with scientific expertise to deliver
                reliable and accurate laboratory services for research and healthcare.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/lab-researcher-1.png"
                alt="Laboratory researcher"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e6f2f0] flex items-center justify-center mr-4">
                  <Check className="h-5 w-5 text-[#2a9d8f]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To provide high-quality, reliable laboratory services that advance scientific research and improve
                healthcare outcomes. We are committed to excellence, innovation, and integrity in all aspects of our
                work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-[#e6f2f0] flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-[#2a9d8f]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To be the leading provider of laboratory services, recognized globally for our scientific expertise,
                technological innovation, and commitment to advancing healthcare and research through reliable and
                accurate testing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-[#e6f2f0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4db6ac]/20 text-[#2a9d8f] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A Legacy of Excellence</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leader in laboratory services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Our Beginning</h3>
                  <p className="text-gray-600">
                    Founded in 2010 by a team of experienced scientists and healthcare professionals, NovaMed
                    Laboratories began with a vision to provide high-quality laboratory services that would support
                    medical research and improve patient care.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Growth and Innovation</h3>
                  <p className="text-gray-600">
                    Over the years, we have expanded our services and capabilities, investing in cutting-edge technology
                    and recruiting top talent in the field. Our commitment to innovation has allowed us to stay at the
                    forefront of laboratory science.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Where We Are Today</h3>
                  <p className="text-gray-600">
                    Today, NovaMed Laboratories is a trusted partner for researchers, healthcare providers, and
                    pharmaceutical companies worldwide. Our state-of-the-art facilities and expert team continue to
                    deliver reliable and accurate results that advance science and improve lives.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Image
                src="/images/lab-researcher-2.png"
                alt="Laboratory researcher with microscope"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4db6ac]/20 text-[#2a9d8f] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Laboratory</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience excellence in research with our modern facilities and equipment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/lab-microscope-research.png"
                alt="Laboratory equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#2a9d8f] mb-6">Advanced Research Facilities</h3>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art laboratory is equipped with modern IVC systems and environmental controls, ensuring
                optimal conditions for research animals and maintaining the highest standards of care and scientific
                integrity.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Advanced Individual Ventilated Cage (IVC) systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Precise environmental control systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Modern animal housing facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Dedicated research spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methods Section */}
      <section className="py-16 bg-[#f5f9f8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4db6ac]/20 text-[#2a9d8f] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Research Methods
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Precision & Care</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our approach combines scientific precision with ethical animal care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#2a9d8f] mb-6">Precision Animal Handling</h3>
              <p className="text-gray-600 mb-6">
                Our experienced technicians employ gentle and precise handling techniques to ensure animal welfare while
                maintaining research integrity. All procedures follow strict ethical guidelines and are performed by
                trained professionals.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Humane handling protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Specialized techniques for different species</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Minimally invasive procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2a9d8f] mr-2">•</span>
                  <span className="text-gray-600">Adherence to international welfare standards</span>
                </li>
              </ul>
            </div>

            <div>
              <Image
                src="/images/lab-microscope-research.png"
                alt="Precision laboratory work"
                width={600}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4db6ac]/20 text-[#2a9d8f] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our core values guide everything we do at NovaMed Laboratories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CoreValueCard
              icon={<Award className="h-6 w-6 text-[#2a9d8f]" />}
              title="Excellence"
              description="We strive for excellence in all aspects of our work, from the accuracy of our testing to the quality of our customer service."
            />
            <CoreValueCard
              icon={<Shield className="h-6 w-6 text-[#2a9d8f]" />}
              title="Integrity"
              description="We conduct our business with the highest ethical standards, ensuring transparency, honesty, and accountability in all our interactions."
            />
            <CoreValueCard
              icon={<Users className="h-6 w-6 text-[#2a9d8f]" />}
              title="Collaboration"
              description="We believe in the power of collaboration, working closely with our clients and partners to achieve shared goals and advance scientific knowledge."
            />
            <CoreValueCard
              icon={<Clock className="h-6 w-6 text-[#2a9d8f]" />}
              title="Reliability"
              description="Our clients can count on us to deliver accurate results on time, every time, with the highest level of consistency and dependability."
            />
            <CoreValueCard
              icon={<Check className="h-6 w-6 text-[#2a9d8f]" />}
              title="Quality"
              description="We maintain rigorous quality control standards to ensure the accuracy and reliability of our testing and services."
            />
            <CoreValueCard
              icon={<Zap className="h-6 w-6 text-[#2a9d8f]" />}
              title="Innovation"
              description="We continuously seek new and better ways to serve our clients, embracing technological advancements and scientific discoveries."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#e6f2f0]">
        <div className="absolute inset-0 pattern-hexagons opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#4db6ac]/20 text-[#2a9d8f] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Experts</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team of experienced scientists and professionals is dedicated to providing the highest quality
              laboratory services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Dr. Sarah Johnson"
              title="Chief Scientific Officer"
              bio="Ph.D. in Molecular Biology with over 15 years of experience in laboratory research and management."
            />
            <TeamMemberCard
              name="Dr. Michael Chen"
              title="Director of Research"
              bio="Ph.D. in Biochemistry with expertise in developing innovative testing methodologies and research protocols."
            />
            <TeamMemberCard
              name="Dr. Emily Rodriguez"
              title="Laboratory Director"
              bio="M.D., Ph.D. with specialization in clinical diagnostics and quality assurance in laboratory settings."
            />
          </div>

          <div className="text-center mt-12">
            <Button
              className="bg-[#2a9d8f] hover:bg-[#238b7e] text-white"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

