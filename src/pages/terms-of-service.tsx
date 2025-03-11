import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BrainIcon } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold font-playball mb-6">Terms and Conditions</h1>

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <p className="lead">
              Welcome to NeuroHaven! These Terms and Conditions govern your use of our website and services. By
              accessing or using NeuroHaven, you agree to comply with and be bound by these terms. If you do not agree,
              please refrain from using our platform.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">1. Introduction</h2>
            <p>
              NeuroHaven is an AI-powered mental health platform designed to provide emotional support and connect users
              with professionals. While our AI offers guidance, it is not a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must be 18 years or older to use our platform.</li>
              <li>If under 18, you may use NeuroHaven only with parental or guardian consent.</li>
              <li>By using NeuroHaven, you confirm that the information you provide is accurate and complete.</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">3. User Accounts & Security</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Google Sign-In is mandatory for account creation and login.</li>
              <li>
                NeuroHaven reserves the right to suspend or terminate accounts involved in misconduct or policy
                violations.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">4. Use of Services</h2>
            <p>You agree not to misuse NeuroHaven's platform, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sharing false, misleading, or offensive content.</li>
              <li>Attempting to access another user's data without authorization.</li>
              <li>Engaging in harassment, discrimination, or harmful behavior.</li>
              <li>Using the platform for commercial advertising or promotions without permission.</li>
            </ul>
            <p>Violations may result in account suspension or legal action.</p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">5. AI Assistance Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>NeuroHaven's AI provides supportive guidance but is not a licensed medical professional.</li>
              <li>For urgent or crisis situations, please seek immediate professional help.</li>
              <li>The platform does not diagnose medical conditions or replace clinical therapy.</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">6. Doctor's Page & Specialist Accounts</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>The Doctor's Dashboard is under development.</li>
              <li>Specialists using our platform must provide verified credentials before offering services.</li>
              <li>NeuroHaven is not liable for any advice provided by independent specialists.</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">7. Privacy & Data Protection</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We prioritize user privacy and implement strict data security measures.</li>
              <li>Your personal data is stored securely and is not shared without consent.</li>
              <li>Review our Privacy Policy for detailed information on data collection and usage.</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">8. Limitation of Liability</h2>
            <p>NeuroHaven is not responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Any misuse of AI-generated content.</li>
              <li>Technical issues, downtime, or data loss.</li>
              <li>Any harm, emotional distress, or mental health outcomes resulting from the platform's use.</li>
            </ul>
            <p>Use of NeuroHaven is at your own risk.</p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">9. Copyright & Intellectual Property</h2>
            <p>
              All content, including text, images, and logos, is owned by NeuroHaven and protected under copyright laws.
              Unauthorized reproduction, distribution, or modification is prohibited.
            </p>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">10. Modifications & Updates</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>NeuroHaven reserves the right to update these terms at any time.</li>
              <li>Users will be notified of significant changes.</li>
              <li>Continued use of the platform after updates implies acceptance of the revised terms.</li>
            </ul>

            <h2 className="text-2xl font-semibold font-playball mt-8 mb-4">11. Contact Information</h2>
            <p>
              For questions or concerns regarding these Terms and Conditions, please contact: 📧 support@neurohaven.com
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

