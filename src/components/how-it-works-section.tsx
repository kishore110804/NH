import { MessageSquareIcon, TrendingUpIcon, UserIcon, CheckSquareIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <MessageSquareIcon className="h-10 w-10 text-primary" />,
      title: "AI Chat Support",
      description: "Users interact with our AI chat for emotional support and tracking.",
    },
    {
      icon: <TrendingUpIcon className="h-10 w-10 text-primary" />,
      title: "Critical Case Flagging",
      description: "AI flags critical cases based on severity & location.",
    },
    {
      icon: <UserIcon className="h-10 w-10 text-primary" />,
      title: "Specialist Review",
      description: "Specialists review flagged cases and offer support when needed.",
    },
    {
      icon: <CheckSquareIcon className="h-10 w-10 text-primary" />,
      title: "Privacy Protection",
      description: "All interactions maintain user privacy and anonymity.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-5xl font-bold font-playball tracking-wide">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our platform combines AI technology with human expertise to provide comprehensive mental health support.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 border-muted">
              <CardHeader className="pb-2">
                <div className="mb-2">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

