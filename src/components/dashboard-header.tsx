import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BrainIcon, LogOutIcon } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

interface DashboardHeaderProps {
  isDoctor?: boolean
}

export default function DashboardHeader({ isDoctor = false }: DashboardHeaderProps) {
  const navigate = useNavigate()

  const handleSignOut = () => {
    // Add sign out logic here
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-4 pl-3 pt-3">
          <BrainIcon className="h-12 w-12 text-primary" />
          <span className="text-4xl font-bold font-playball tracking-wide">NeuroHaven</span>
          {isDoctor && (
            <span className="ml-2 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Doctor</span>
          )}
        </Link>

        <div className="flex items-center gap-5">
          <ThemeToggle />
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            <LogOutIcon className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  )
}

