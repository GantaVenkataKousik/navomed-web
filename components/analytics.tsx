"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // This is where you would typically add your analytics tracking code
    // For example, Google Analytics or similar services
    const url = pathname
    console.log(`Page view: ${url}`)
  }, [pathname])

  return null
}

