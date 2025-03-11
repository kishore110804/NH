import { MailIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold font-playball tracking-wide">Contact NeuroHaven</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground md:text-lg">
              Have questions or need support? Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <div className="flex items-center space-x-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:support@neurohaven.com" className="text-primary hover:underline">
                support@neurohaven.com
              </a>
            </div>
            <div className="flex space-x-4 pt-4">
              <Button variant="outline" size="icon" aria-label="Twitter">
                <TwitterIcon className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

