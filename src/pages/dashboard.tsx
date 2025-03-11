import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BrainIcon, MessageSquareIcon, TrendingUpIcon, UserIcon, SettingsIcon } from "lucide-react"
import ChatInterface from "@/components/chat-interface"
import EmotionalTrends from "@/components/emotional-trends"
import DashboardHeader from "@/components/dashboard-header"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container py-6">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold font-playball tracking-wide">Dashboard</h1>
            <Button variant="outline" size="sm">
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>

          <Tabs defaultValue="chat" className="space-y-4">
            <TabsList>
              <TabsTrigger value="chat">
                <MessageSquareIcon className="mr-2 h-4 w-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="trends">
                <TrendingUpIcon className="mr-2 h-4 w-4" />
                Emotional Trends
              </TabsTrigger>
              <TabsTrigger value="consultations">
                <UserIcon className="mr-2 h-4 w-4" />
                Consultations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playball text-3xl font-bold">Chat with NeuroHaven</CardTitle>
                  <CardDescription>Start chatting with our AI assistant.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChatInterface />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              <EmotionalTrends />
            </TabsContent>

            <TabsContent value="consultations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-playball text-3xl font-bold">Professional Consultations</CardTitle>
                  <CardDescription>
                    Connect with mental health professionals when you need additional support.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-4 py-6">
                    <BrainIcon className="h-12 w-12 text-muted-foreground" />
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-medium">No Active Consultations</h3>
                      <p className="text-muted-foreground">
                        You don't have any active consultations with professionals at the moment.
                      </p>
                    </div>
                    <Button>Request Consultation</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

