import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "lucide-react"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import HowItWorksSection from "@/components/how-it-works-section"
import ContactSection from "@/components/contact-section"
import ThemeToggle from "@/components/theme-toggle"
import Footer from "@/components/footer"
import SmoothScroll from "@/components/smooth-scroll"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />
      
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md py-6">
        <div className="container">
          
          {/* Top section with Logo and Title */}
          <div className="flex items-center justify-between mb-4 pl-3 pt-3">
            <div className="flex items-center">
              <BrainIcon className="h-12 w-12 text-primary" />
              <span 
                className="text-4xl font-bold tracking-wide text-foreground ml-4"
                style={{ fontFamily: "Playball, cursive" }}
              >
                NeuroHaven
              </span>
            </div>
          </div>

          {/* Navigation and Actions */}
          <div className="flex items-center justify-between">
            
            {/* Navigation Centered */}
            <nav className="hidden md:flex flex-1 justify-center space-x-10 ml-4">
              <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </a>
              <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </a>
              <a href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
                How It Works
              </a>
              <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-primary text-lg">☰</button>

            {/* Theme Toggle & Login */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
