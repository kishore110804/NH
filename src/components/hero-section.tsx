import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="py-28 md:py-40 bg-primary/5 dark:bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-playball tracking-wide">
              Welcome to NeuroHaven
            </h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-xl md:text-2xl">
              Providing AI-powered mental health support with the help of professionals.
            </p>
          </div>
          <div className="space-x-6 pt-4">
            <Link to="/sign-up">
              <Button size="lg" className="px-10 py-6 text-lg">
                Get Started
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="px-10 py-6 text-lg">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

