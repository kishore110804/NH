import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container">
          {/* Logo and title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 pl-3 pt-3">
              <BrainIcon className="h-12 w-12 text-primary" />
              <span className="text-4xl font-bold font-playball tracking-wide text-foreground">NeuroHaven</span>
            </div>

            <div className="flex items-center gap-5">
              <ThemeToggle />
              <Link to="/">
                <Button variant="outline" size="sm">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold font-playball mb-6">Privacy Policy</h1>
          <div className="text-sm text-muted-foreground mb-8">
            <p>Effective Date: {currentDate}</p>
            <p>Last Updated: {currentDate}</p>
          </div>

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <p className="lead">
              Welcome to NeuroHaven! Your privacy is important to us. This Privacy Policy explains how we collect, use,
              and protect your personal information when you use our website and services.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>

            <h3 className="text-xl font-medium font-playball mt-6 mb-2">1.1 Personal Information</h3>
            <p>When you sign in with Google, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ Name</li>
              <li>✅ Email Address</li>
              <li>✅ Profile Picture</li>
            </ul>

            <h3 className="text-xl font-medium font-playball mt-6 mb-2">1.2 Automatically Collected Information</h3>
            <p>When you use our website, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ IP Address</li>
              <li>✅ Browser Type</li>
              <li>✅ Device Information</li>
              <li>✅ Usage Data (e.g., pages visited, time spent on pages)</li>
            </ul>

            <h3 className="text-xl font-medium font-playball mt-6 mb-2">1.3 Cookies & Tracking Technologies</h3>
            <p>
              We use cookies and similar technologies to enhance your experience. You can disable cookies in your
              browser settings.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ Provide and improve our services</li>
              <li>✅ Personalize your experience</li>
              <li>✅ Ensure security and prevent fraud</li>
              <li>✅ Communicate updates and important notices</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">3. How We Protect Your Information</h2>
            <p>We implement:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ Encryption for data transmission</li>
              <li>✅ Secure servers and firewalls</li>
              <li>✅ Access controls to limit unauthorized access</li>
            </ul>
            <p>
              However, no online system is 100% secure. If you believe your data has been compromised, please contact us
              immediately.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">4. Sharing of Information</h2>
            <p>We do not sell or rent your personal data. We may share information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ With trusted service providers (e.g., Google for authentication)</li>
              <li>✅ To comply with legal obligations</li>
              <li>✅ For security reasons (e.g., preventing fraud)</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">5. Third-Party Links & Services</h2>
            <p>
              Our website may contain links to external sites (e.g., professional mental health services). We are not
              responsible for their privacy practices. Please review their policies separately.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>✅ Access the personal data we store</li>
              <li>✅ Request deletion of your data</li>
              <li>✅ Opt-out of data collection (e.g., cookies)</li>
            </ul>
            <p>To make a request, contact us at support@neurohaven.com.</p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">7. Children's Privacy</h2>
            <p>
              NeuroHaven is not intended for children under 13. If we learn that we have collected data from a child
              without parental consent, we will delete it immediately.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted here with a new "Last
              Updated" date.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
            <p>📧 support@neurohaven.com</p>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 md:py-10 bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <BrainIcon className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold font-playball tracking-wide">NeuroHaven</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NeuroHaven. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

