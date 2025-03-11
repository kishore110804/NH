import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6">
        <div className="container">
          {/* Logo and title */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 pl-3 pt-3">
              <Link to="/" className="flex items-center gap-4">
                <BrainIcon className="h-12 w-12 text-primary" />
                <span className="text-4xl font-bold font-playball tracking-wide text-foreground">NeuroHaven</span>
              </Link>
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
          <h1 className="text-4xl font-bold font-playball mb-6">Cookie Policy</h1>

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to NeuroHaven! This Cookie Policy explains how we use cookies and similar tracking technologies
              when you visit our website.
            </p>
            <p>
              By using our website, you consent to the use of cookies in accordance with this policy. If you do not
              agree, you may disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">2. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help enhance your
              browsing experience by remembering your preferences and providing relevant content.
            </p>
            <p>There are two main types of cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Session Cookies</strong>: Temporary cookies that expire when you close your browser.
              </li>
              <li>
                <strong>Persistent Cookies</strong>: Stored on your device for a specified period or until manually
                deleted.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">3. How We Use Cookies</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Enhance User Experience</strong>: Remember your preferences, such as dark mode settings.
              </li>
              <li>
                <strong>Authenticate Users</strong>: Ensure secure login through Google Authentication.
              </li>
              <li>
                <strong>Analyze Website Traffic</strong>: Track interactions to improve our platform.
              </li>
              <li>
                <strong>Improve Security</strong>: Detect and prevent fraudulent activity.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">4. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-medium">Essential Cookies</td>
                    <td className="border border-border p-2">
                      Necessary for website functionality, including authentication and security.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-medium">Performance Cookies</td>
                    <td className="border border-border p-2">
                      Help analyze user behavior to improve website performance.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-medium">Functionality Cookies</td>
                    <td className="border border-border p-2">Store user preferences such as theme settings.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-medium">Analytics Cookies</td>
                    <td className="border border-border p-2">
                      Track website traffic and interactions for optimization.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">5. Managing Cookies</h2>
            <p>You can control or delete cookies through your browser settings. Here's how:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Google Chrome</strong>: Settings &gt; Privacy and Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Mozilla Firefox</strong>: Options &gt; Privacy & Security &gt; Cookies and Site Data
              </li>
              <li>
                <strong>Safari</strong>: Preferences &gt; Privacy &gt; Manage Website Data
              </li>
              <li>
                <strong>Microsoft Edge</strong>: Settings &gt; Privacy, Search, and Services &gt; Cookies
              </li>
            </ul>
            <p>Please note that disabling cookies may affect your experience on our website.</p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">6. Third-Party Cookies</h2>
            <p>
              We may use third-party services, such as Google Analytics, which may set cookies on your device. These
              cookies help analyze website traffic and improve our services. Third-party cookies are subject to their
              respective privacy policies.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page, and we
              encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
              <br />📧 <strong>Email</strong>: support@neurohaven.com
            </p>
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

