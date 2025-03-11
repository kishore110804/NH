import { useNavigate } from "react-router-dom"

export default function AboutSection() {
  const navigate = useNavigate()

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold font-playball tracking-wide">About NeuroHaven</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-lg">
              NeuroHaven is an AI-driven platform that offers mental health assistance while ensuring privacy and
              anonymity.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Our mission is to bridge the gap between technology and mental wellbeing, offering a safe space for users
              to express themselves and receive guidance.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Using advanced AI, we track emotional patterns and provide personalized insights to help users understand
              their mental health journey. When needed, we can connect users with qualified mental health professionals,
              ensuring comprehensive care.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <img
                src="/placeholder.svg"
                alt="AI-based emotional tracking illustration"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

