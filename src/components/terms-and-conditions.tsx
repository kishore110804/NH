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

interface TermsAndConditionsProps {
  onClose: () => void
}

export default function TermsAndConditions({ onClose }: TermsAndConditionsProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold font-playball tracking-wide">Terms and Conditions</DialogTitle>
          <DialogDescription>Please read these terms carefully before using NeuroHaven.</DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[50vh] pr-4">
          <div className="space-y-4 text-sm">
            <p>
              Welcome to NeuroHaven! These Terms and Conditions govern your use of our website and services. By
              accessing or using NeuroHaven, you agree to comply with and be bound by these terms. If you do not agree,
              please refrain from using our platform.
            </p>

            <h3 className="text-lg font-semibold">1. Introduction</h3>
            <p>
              NeuroHaven is an AI-powered mental health platform designed to provide emotional support and connect users
              with professionals. While our AI offers guidance, it is not a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>

            <h3 className="text-lg font-semibold">2. Eligibility</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You must be 18 years or older to use our platform.</li>
              <li>If under 18, you may use NeuroHaven only with parental or guardian consent.</li>
              <li>By using NeuroHaven, you confirm that the information you provide is accurate and complete.</li>
            </ul>

            <h3 className="text-lg font-semibold">3. User Accounts & Security</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>Google Sign-In is mandatory for account creation and login.</li>
              <li>
                NeuroHaven reserves the right to suspend or terminate accounts involved in misconduct or policy
                violations.
              </li>
            </ul>

            <h3 className="text-lg font-semibold">4. Use of Services</h3>
            <p>You agree not to misuse NeuroHaven's platform, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sharing false, misleading, or offensive content.</li>
              <li>Attempting to access another user's data without authorization.</li>
              <li>Engaging in harassment, discrimination, or harmful behavior.</li>
              <li>Using the platform for commercial advertising or promotions without permission.</li>
            </ul>
            <p>Violations may result in account suspension or legal action.</p>

            <h3 className="text-lg font-semibold">5. AI Assistance Disclaimer</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>NeuroHaven's AI provides supportive guidance but is not a licensed medical professional.</li>
              <li>For urgent or crisis situations, please seek immediate professional help.</li>
              <li>The platform does not diagnose medical conditions or replace clinical therapy.</li>
            </ul>

            <h3 className="text-lg font-semibold">6. Doctor's Page & Specialist Accounts</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The Doctor's Dashboard is under development.</li>
              <li>Specialists using our platform must provide verified credentials before offering services.</li>
              <li>NeuroHaven is not liable for any advice provided by independent specialists.</li>
            </ul>

            <h3 className="text-lg font-semibold">7. Privacy & Data Protection</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>We prioritize user privacy and implement strict data security measures.</li>
              <li>Your personal data is stored securely and is not shared without consent.</li>
              <li>Review our Privacy Policy for detailed information on data collection and usage.</li>
            </ul>

            <h3 className="text-lg font-semibold">8. Limitation of Liability</h3>
            <p>NeuroHaven is not responsible for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Any misuse of AI-generated content.</li>
              <li>Technical issues, downtime, or data loss.</li>
              <li>Any harm, emotional distress, or mental health outcomes resulting from the platform's use.</li>
            </ul>
            <p>Use of NeuroHaven is at your own risk.</p>

            <h3 className="text-lg font-semibold">9. Copyright & Intellectual Property</h3>
            <p>
              All content, including text, images, and logos, is owned by NeuroHaven and protected under copyright laws.
              Unauthorized reproduction, distribution, or modification is prohibited.
            </p>

            <h3 className="text-lg font-semibold">10. Modifications & Updates</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>NeuroHaven reserves the right to update these terms at any time.</li>
              <li>Users will be notified of significant changes.</li>
              <li>Continued use of the platform after updates implies acceptance of the revised terms.</li>
            </ul>

            <h3 className="text-lg font-semibold">11. Contact Information</h3>
            <p>
              For questions or concerns regarding these Terms and Conditions, please contact: 📧 support@neurohaven.com
            </p>

            <p className="font-medium">
              By using NeuroHaven, you acknowledge that you have read, understood, and agreed to these Terms and
              Conditions.
            </p>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button onClick={onClose}>I Understand</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

