"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { BrainIcon, MapPinIcon, ClockIcon, PlusCircleIcon, TrashIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import TermsAndConditions from "@/components/terms-and-conditions"
import PrivacyPolicy from "@/components/privacy-policy"

export default function OnboardingPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [isDoctor, setIsDoctor] = useState(false)
  const [locationPermission, setLocationPermission] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  // For specialist certifications
  type Certification = { type: string; licenseNumber: string; file: File | null }
  const [certifications, setCertifications] = useState<Certification[]>([{ type: "", licenseNumber: "", file: null }])

  const certificationTypes = [
    "USMLE (United States Medical Licensing Examination)",
    "COMLEX (Comprehensive Osteopathic Medical Licensing Exam)",
    "PLAB (Professional and Linguistic Assessments Board Exam)",
    "FMGE (Foreign Medical Graduate Examination)",
    "ABPN (American Board of Psychiatry and Neurology)",
    "RCPS (Royal College of Physicians and Surgeons)",
    "MRCPsych (Membership of the Royal College of Psychiatrists)",
    "DEA License (U.S.)",
    "GMC Registration (UK)",
    "MCI/NMC (India)",
    "Other",
  ]

  const handleLocationPermission = () => {
    setLocationPermission(!locationPermission)
    // In a real app, you would request browser location permission here
  }

  const handleNext = () => {
    if (step < (isDoctor ? 3 : 2)) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      navigate(isDoctor ? "/doc-dashboard" : "/dashboard")
    }, 1500)
  }

  const addCertification = () => {
    setCertifications([...certifications, { type: "", licenseNumber: "", file: null }])
  }

  const removeCertification = (index: number) => {
    const newCertifications = [...certifications]
    newCertifications.splice(index, 1)
    setCertifications(newCertifications)
  }

  const updateCertification = (index: number, field: keyof typeof certifications[0], value: any) => {
    const newCertifications = [...certifications]
    newCertifications[index][field] = value
    setCertifications(newCertifications)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <BrainIcon className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold font-ruthie tracking-wide">Complete Your Profile</CardTitle>
          <CardDescription>
            {step === 1 && "Let's set up your NeuroHaven account"}
            {step === 2 && !isDoctor && "Almost done! Just a few more details"}
            {step === 2 && isDoctor && "Tell us about your professional background"}
            {step === 3 && "Upload your certification documents"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">Location Permission</p>
                  <p className="text-sm text-muted-foreground">
                    Allow NeuroHaven to access your location for location-based doctor assignment
                  </p>
                </div>
                <Switch
                  checked={locationPermission}
                  onCheckedChange={handleLocationPermission}
                  aria-label="Allow location access"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="doctor-toggle" className="text-base">
                    Are you a mental health specialist?
                  </Label>
                  <Switch
                    id="doctor-toggle"
                    checked={isDoctor}
                    onCheckedChange={setIsDoctor}
                    aria-label="Toggle doctor status"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && !isDoctor && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <button type="button" onClick={() => setShowTerms(true)} className="text-primary underline">
                      terms of service
                    </button>{" "}
                    and{" "}
                    <button type="button" onClick={() => setShowPrivacy(true)} className="text-primary underline">
                      privacy policy
                    </button>
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 2 && isDoctor && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="specialization">Field of Specialization</Label>
                <Textarea
                  id="specialization"
                  placeholder="Enter your areas of specialization (e.g., Anxiety, Depression, PTSD)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-muted-foreground" />
                  <Input id="experience" type="number" placeholder="Years of professional experience" min="0" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="space-y-4">
                <Label>Certifications and Licenses</Label>

                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Certification {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCertification(index)}
                          className="text-destructive"
                        >
                          <TrashIcon className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Certification Type</Label>
                      <Select onValueChange={(value) => updateCertification(index, "type", value)} value={cert.type}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select certification type" />
                        </SelectTrigger>
                        <SelectContent>
                          {certificationTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>License Number</Label>
                      <Input
                        placeholder="Enter license number"
                        value={cert.licenseNumber}
                        onChange={(e) => updateCertification(index, "licenseNumber", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Certification Document</Label>
                      <Input
                        type="file"
                        className="cursor-pointer"
                        onChange={(e) => updateCertification(index, "file", e.target.files?.[0] || null)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Upload your professional certification (PDF, JPG, or PNG)
                      </p>
                    </div>
                  </div>
                ))}

                <Button type="button" variant="outline" className="w-full" onClick={addCertification}>
                  <PlusCircleIcon className="h-4 w-4 mr-2" />
                  Add Another Certification
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <button type="button" onClick={() => setShowTerms(true)} className="text-primary underline">
                      terms of service
                    </button>{" "}
                    and{" "}
                    <button type="button" onClick={() => setShowPrivacy(true)} className="text-primary underline">
                      privacy policy
                    </button>
                  </label>
                </div>
              </div>
            </div>
          )}

          {showTerms && <TermsAndConditions onClose={() => setShowTerms(false)} />}
          {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          <Button
            onClick={handleNext}
            disabled={
              (step === 1 && isDoctor && !locationPermission) ||
              (((step === 2 && !isDoctor) || step === 3) && !agreeToTerms) ||
              isSubmitting
            }
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent"></div>
                <span>Processing...</span>
              </div>
            ) : (
              <span>{step < (isDoctor ? 3 : 2) ? "Next" : "Complete Setup"}</span>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

