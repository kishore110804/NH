"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface PrivacyPolicyProps {
  onClose: () => void
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  const currentDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold font-playball tracking-wide">Privacy Policy</DialogTitle>
          <DialogDescription>
            Effective Date: {currentDate}
            <br />
            Last Updated: {currentDate}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[50vh] pr-4">
          <div className="space-y-4 text-sm">
            <p>
              Welcome to NeuroHaven! Your privacy is important to us. This Privacy Policy explains how we collect, use,
              and protect your personal information when you use our website and services.
            </p>

            <h3 className="text-lg font-semibold font-playball">1. Information We Collect</h3>
            <p>We collect the following types of information:</p>

            <h4 className="text-md font-medium font-playball mt-2">1.1 Personal Information</h4>
            <p>When you sign in with Google, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ Name</li>
              <li>✅ Email Address</li>
              <li>✅ Profile Picture</li>
            </ul>

            <h4 className="text-md font-medium font-playball mt-2">1.2 Automatically Collected Information</h4>
            <p>When you use our website, we collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ IP Address</li>
              <li>✅ Browser Type</li>
              <li>✅ Device Information</li>
              <li>✅ Usage Data (e.g., pages visited, time spent on pages)</li>
            </ul>

            <h4 className="text-md font-medium font-playball mt-2">1.3 Cookies & Tracking Technologies</h4>
            <p>
              We use cookies and similar technologies to enhance your experience. You can disable cookies in your
              browser settings.
            </p>

            <h3 className="text-lg font-semibold font-playball mt-4">2. How We Use Your Information</h3>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ Provide and improve our services</li>
              <li>✅ Personalize your experience</li>
              <li>✅ Ensure security and prevent fraud</li>
              <li>✅ Communicate updates and important notices</li>
            </ul>

            <h3 className="text-lg font-semibold font-playball mt-4">3. How We Protect Your Information</h3>
            <p>We implement:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ Encryption for data transmission</li>
              <li>✅ Secure servers and firewalls</li>
              <li>✅ Access controls to limit unauthorized access</li>
            </ul>
            <p>
              However, no online system is 100% secure. If you believe your data has been compromised, please contact us
              immediately.
            </p>

            <h3 className="text-lg font-semibold font-playball mt-4">4. Sharing of Information</h3>
            <p>We do not sell or rent your personal data. We may share information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ With trusted service providers (e.g., Google for authentication)</li>
              <li>✅ To comply with legal obligations</li>
              <li>✅ For security reasons (e.g., preventing fraud)</li>
            </ul>

            <h3 className="text-lg font-semibold font-playball mt-4">5. Third-Party Links & Services</h3>
            <p>
              Our website may contain links to external sites (e.g., professional mental health services). We are not
              responsible for their privacy practices. Please review their policies separately.
            </p>

            <h3 className="text-lg font-semibold font-playball mt-4">6. Your Privacy Rights</h3>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>✅ Access the personal data we store</li>
              <li>✅ Request deletion of your data</li>
              <li>✅ Opt-out of data collection (e.g., cookies)</li>
            </ul>
            <p>To make a request, contact us at support@neurohaven.com.</p>

            <h3 className="text-lg font-semibold font-playball mt-4">7. Children's Privacy</h3>
            <p>
              NeuroHaven is not intended for children under 13. If we learn that we have collected data from a child
              without parental consent, we will delete it immediately.
            </p>

            <h3 className="text-lg font-semibold font-playball mt-4">8. Changes to This Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted here with a new "Last
              Updated" date.
            </p>

            <h3 className="text-lg font-semibold font-playball mt-4">9. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
            <p>📧 support@neurohaven.com</p>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button onClick={onClose}>I Understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

