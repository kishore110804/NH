"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainIcon } from "lucide-react"
import GoogleSignInButton from "@/components/google-sign-in-button"
import { Checkbox } from "@/components/ui/checkbox"
import TermsAndConditions from "@/components/terms-and-conditions"
import PrivacyPolicy from "@/components/privacy-policy"

export default function SignupPage() {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <BrainIcon className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold font-playball tracking-wide">Create an account</CardTitle>
          <CardDescription>Get started with NeuroHaven</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <GoogleSignInButton isSignUp />
          </div>
          <div className="rounded-lg border p-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <button type="button" onClick={() => setShowTerms(true)} className="text-primary underline">
                  terms of service
                </button>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" />
              <label
                htmlFor="privacy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <button type="button" onClick={() => setShowPrivacy(true)} className="text-primary underline">
                  privacy policy
                </button>
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cookie" />
              <label
                htmlFor="cookie"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link to="/cookie-policy" className="text-primary underline">
                  cookie policy
                </Link>
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>

      {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </div>
  )
}

