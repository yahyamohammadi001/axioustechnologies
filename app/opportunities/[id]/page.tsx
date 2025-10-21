"use client"

import { DesktopSidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Users,
  Calendar,
  Bookmark,
  Share2,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

// This would typically come from an API or database
const getOpportunityById = (id: string) => {
  const opportunities = [
    {
      id: "senior-pm-tech-corp",
      title: "Senior Project Manager",
      company: "TechCorp Solutions",
      location: "New York, NY",
      type: "full-time",
      category: "job",
      experience: "senior",
      salary: "$120,000 - $150,000",
      remote: "hybrid",
      description:
        "Lead cross-functional teams in delivering complex software projects using agile methodologies. You'll be responsible for managing project timelines, budgets, and stakeholder communications while ensuring high-quality deliverables.",
      requirements: [
        "5+ years of project management experience in software development",
        "PMP certification preferred",
        "Strong expertise in Agile/Scrum methodologies",
        "Experience with project management tools (Jira, Asana, Monday.com)",
        "Excellent communication and leadership skills",
        "Bachelor's degree in relevant field",
      ],
      responsibilities: [
        "Lead cross-functional teams of 8-12 members",
        "Manage project budgets up to $2M",
        "Coordinate with stakeholders across multiple departments",
        "Implement and maintain agile processes",
        "Conduct risk assessment and mitigation planning",
        "Prepare and present project status reports to executives",
      ],
      benefits: [
        "Comprehensive health, dental, and vision insurance",
        "401(k) with company matching up to 6%",
        "Flexible work arrangements (hybrid model)",
        "Professional development budget ($3,000/year)",
        "Unlimited PTO policy",
        "Stock options",
      ],
      posted: "2024-03-10",
      deadline: "2024-04-15",
      applicants: 47,
      company_logo: "/abstract-tech-logo.png",
      company_description:
        "TechCorp Solutions is a leading software development company specializing in enterprise solutions for Fortune 500 companies. Founded in 2010, we've grown to over 500 employees across 3 offices.",
      tags: ["Project Management", "Agile", "Software", "Leadership"],
      featured: true,
    },
  ]

  return opportunities.find((opp) => opp.id === id)
}

export default function OpportunityDetailPage() {
  const params = useParams()
  const opportunity = getOpportunityById(params.id as string)

  if (!opportunity) {
    return (
      
        <div className="flex h-screen bg-background">
          <DesktopSidebar />
          <div className="flex-1 flex flex-col md:ml-64">
            <Header />
            <main className="flex-1 overflow-y-auto flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Opportunity Not Found</h1>
                <p className="text-muted-foreground mb-4">The opportunity you're looking for doesn't exist.</p>
                <Button asChild>
                  <Link href="/opportunities">Back to Opportunities</Link>
                </Button>
              </div>
            </main>
          </div>
        </div>
      
    )
  }

  const getCategoryBadge = (category: string) => {
    const categoryMap = {
      job: "Job",
      internship: "Internship",
      freelance: "Freelance",
      networking: "Event",
    }

    const variantMap = {
      job: "default" as const,
      internship: "secondary" as const,
      freelance: "outline" as const,
      networking: "destructive" as const,
    }

    return (
      <Badge variant={variantMap[category as keyof typeof variantMap] || "default"}>
        {categoryMap[category as keyof typeof categoryMap] || "Other"}
      </Badge>
    )
  }

  const getRemoteBadge = (remote: string) => {
    const badgeMap = {
      remote: { text: "Remote", variant: "secondary" as const },
      hybrid: { text: "Hybrid", variant: "outline" as const },
      "in-person": { text: "On-site", variant: "destructive" as const },
    }

    const badge = badgeMap[remote as keyof typeof badgeMap] || { text: "Unknown", variant: "outline" as const }
    return <Badge variant={badge.variant}>{badge.text}</Badge>
  }

  const getDaysAgo = (dateString: string) => {
    const days = Math.floor((Date.now() - new Date(dateString).getTime()) / (1000 * 60 * 60 * 24))
    return days === 0 ? "Today" : days === 1 ? "1 day ago" : `${days} days ago`
  }

  const getDaysUntilDeadline = (dateString: string) => {
    const days = Math.floor((new Date(dateString).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    return days <= 0 ? "Expired" : days === 1 ? "1 day left" : `${days} days left`
  }

  return (
    
      <div className="flex h-screen bg-background">
  <DesktopSidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          <Header />
          <main className="flex-1 overflow-y-auto">
            {/* Header Section */}
            <section className="py-8 px-6 bg-card border-b">
              <div className="max-w-4xl mx-auto">
                <Button variant="ghost" className="mb-6" asChild>
                  <Link href="/opportunities">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Opportunities
                  </Link>
                </Button>

                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={opportunity.company_logo || "/placeholder.svg"}
                      alt={`${opportunity.company} logo`}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryBadge(opportunity.category)}
                        {getRemoteBadge(opportunity.remote)}
                        {opportunity.featured && <Badge variant="destructive">Featured</Badge>}
                      </div>
                      <h1 className="font-playfair font-bold text-3xl mb-2">{opportunity.title}</h1>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <Building2 className="h-5 w-5 mr-2" />
                        <span className="font-medium text-lg">{opportunity.company}</span>
                        <span className="mx-3">•</span>
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="text-lg">{opportunity.location}</span>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="font-medium">{opportunity.salary}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Posted {getDaysAgo(opportunity.posted)}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span
                            className={
                              getDaysUntilDeadline(opportunity.deadline).includes("Expired") ? "text-destructive" : ""
                            }
                          >
                            {getDaysUntilDeadline(opportunity.deadline)}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{opportunity.applicants} applicants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <Button variant="outline" size="sm">
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button size="lg" className="px-8">
                      {opportunity.category === "networking" ? "Register Now" : "Apply Now"}
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* Content Section */}
            <section className="py-8 px-6">
              <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About This Role</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{opportunity.description}</p>
                    </CardContent>
                  </Card>

                  {/* Responsibilities */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {opportunity.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Requirements */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {opportunity.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Benefits & Perks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {opportunity.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Apply */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Apply</CardTitle>
                      <CardDescription>Apply with your profile or upload a resume</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full" size="lg">
                        {opportunity.category === "networking" ? "Register for Event" : "Apply with Profile"}
                      </Button>
                      <div className="text-center text-sm text-muted-foreground">or</div>
                      <Button variant="outline" className="w-full bg-transparent">
                        Upload Resume
                      </Button>
                      <Separator />
                      <div className="text-xs text-muted-foreground">
                        By applying, you agree to our Terms of Service and Privacy Policy.
                      </div>
                    </CardContent>
                  </Card>

                  {/* Company Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About {opportunity.company}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{opportunity.company_description}</p>
                      <Button variant="outline" className="w-full bg-transparent">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Company Profile
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills & Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Application Stats */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Application Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Applicants</span>
                        <span className="font-medium">{opportunity.applicants}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Posted</span>
                        <span className="font-medium">{getDaysAgo(opportunity.posted)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Deadline</span>
                        <span
                          className={`font-medium ${getDaysUntilDeadline(opportunity.deadline).includes("Expired") ? "text-destructive" : ""}`}
                        >
                          {getDaysUntilDeadline(opportunity.deadline)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    
  )
}
