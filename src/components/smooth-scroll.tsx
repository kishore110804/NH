"use client"

import { useEffect } from "react"

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling to all links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      if (!href || !href.startsWith("#")) return

      e.preventDefault()

      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for the navbar
          behavior: "smooth",
        })
      }
    }

    document.addEventListener("click", handleLinkClick)

    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}

