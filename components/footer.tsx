"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-secondary-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6 gradient-text">NovaMed Laboratories</h3>
            <p className="mb-6 text-gray-300">
              State-of-the-art laboratory services and expert scientists to support your medical research needs with
              precision and reliability.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-white transition-colors inline-flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2"></span>
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors inline-flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary-400 rounded-full mr-2"></span>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-primary-300" />
                <span className="text-gray-300">
                  ISB, Hyderabad, Telangana 500032
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary-300" />
                <span className="text-gray-300">venkatakousikcse01@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NovaMed Laboratories. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

