"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, ArrowLeft, CheckCircle, User, Target, BookOpen, Briefcase } from "lucide-react"
import { useRouter } from "next/navigation"

const STEPS = [
  { id: 1, title: "Welcome", description: "Let's get you started" },
  { id: 2, title: "Your Role", description: "Tell us about yourself" },
  { id: 3, title: "Learning Goals", description: "What interests you?" },
  { id: 4, title: "Complete", description: "You're all set!" },
]

const ROLES = [
  { id: "student", title: "Student", description: "Looking to learn new skills", icon: BookOpen },
  { id: "professional", title: "Professional", description: "Advancing my career", icon: Briefcase },
  { id: "manager", title: "Manager", description: "Leading teams and projects", icon: User },
  { id: "entrepreneur", title: "Entrepreneur", description: "Building my own business", icon: Target },
]

const INTERESTS = [
  "Project Management",
  "Agile & Scrum",
  "Risk Management",
  "Leadership",
  "Data Analysis",
  "Digital Marketing",
  "Product Management",
  "Business Strategy",
]

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const router = useRouter()

  const progress = (currentStep / STEPS.length) * 100

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = async () => {
    try {
      const response = await fetch('/api/onboarding-complete', {
        method: 'POST',
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error('Failed to complete onboarding');
        // Handle error, maybe show a toast notification
      }
    } catch (error) {
      console.error('Error during onboarding completion:', error);
      // Handle error
    }
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 2:
        return selectedRole !== ""
      case 3:
        return selectedInterests.length > 0
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-card to-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">
              Step {currentStep} of {STEPS.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center">
            <CardTitle className="font-playfair font-bold text-3xl mb-2">{STEPS[currentStep - 1].title}</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              {STEPS[currentStep - 1].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Welcome */}
            {currentStep === 1 && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-playfair font-bold text-2xl">Welcome to Axious Technologies!</h3>
                <p className="text-xl text-muted-foreground text-pretty max-w-md mx-auto">
                  We'll help you personalize your learning experience in just a few quick steps.
                </p>
              </div>
            )}

            {/* Step 2: Role Selection */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="font-playfair font-bold text-xl text-center mb-6">What best describes you?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ROLES.map((role) => (
                    <Card
                      key={role.id}
                      className={`cursor-pointer transition-all hover:shadow-md group ${
                        selectedRole === role.id ? "ring-2 ring-primary bg-primary/5" : ""
                      }`}
                      onClick={() => setSelectedRole(role.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <role.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                        <h4 className="font-semibold text-lg mb-1">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Learning Goals */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="font-playfair font-bold text-xl text-center mb-6">What topics interest you?</h3>
                <p className="text-muted-foreground text-center mb-4">Select all that apply</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {INTERESTS.map((interest) => (
                    <Badge
                      key={interest}
                      variant={selectedInterests.includes(interest) ? "default" : "outline"}
                      className="cursor-pointer p-3 text-center justify-center hover:shadow-sm transition-all"
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    Selected: <span className="font-medium text-primary">{selectedInterests.length}</span> topics
                  </span>
                </div>
              </div>
            )}

            {/* Step 4: Complete */}
            {currentStep === 4 && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-playfair font-bold text-2xl">You're all set!</h3>
                <p className="text-xl text-muted-foreground text-pretty max-w-md mx-auto">
                  Based on your preferences, we've personalized your learning experience. You can always update these
                  settings later.
                </p>
                <Card className="max-w-md mx-auto">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-4">Your Profile Summary</h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Role:</span>
                        <Badge variant="secondary">{ROLES.find((r) => r.id === selectedRole)?.title}</Badge>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-2">Interests:</span>
                        <div className="flex flex-wrap gap-1">
                          {selectedInterests.map((interest) => (
                            <Badge key={interest} variant="outline" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="flex items-center gap-2 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>

              {currentStep < STEPS.length ? (
                <Button onClick={handleNext} disabled={!canProceed()} className="flex items-center gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleComplete} className="flex items-center gap-2">
                  Start Authentication
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
