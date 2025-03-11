import { Link } from "react-router-dom"
import { BrainIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-10 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <BrainIcon className="h-6 w-6 text-primary" />
          <span className="text-2xl font-bold font-playball tracking-wide">NeuroHaven</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground">
            Cookie Policy
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NeuroHaven. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

