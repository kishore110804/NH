import type React from "react"
import "@/app/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Outlet } from "react-router-dom"

// Add the fonts via index.css or public CDN instead of Next.js font loader
// You can add this to your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playball&display=swap" rel="stylesheet">

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background font-inter">
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

