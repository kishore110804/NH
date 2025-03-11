import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConstructionIcon } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"

export default function DoctorDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader isDoctor />

      <main className="container py-6">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold font-playball tracking-wide">Doctor Dashboard</h1>

          <Card>
            <CardHeader>
              <CardTitle className="font-playball text-3xl font-bold">Page Under Construction</CardTitle>
              <CardDescription>The doctor dashboard is currently being developed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center space-y-4 py-12">
                <ConstructionIcon className="h-16 w-16 text-muted-foreground" />
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-medium">Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    We're working on building the doctor dashboard with features like AI-flagged chats review,
                    anonymized critical case alerts, and consultation management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

