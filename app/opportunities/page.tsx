"use client"

import { useState, useCallback } from "react"
import { DesktopSidebar, MobileSidebarContent } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Search, MapPin, Clock, DollarSign, Building2, Users, Calendar, Bookmark, ExternalLink } from "lucide-react"
import Link from "next/link"

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
    description: "Lead cross-functional teams in delivering complex software projects using agile methodologies.",
    requirements: ["5+ years PM experience", "PMP certification preferred", "Agile/Scrum expertise"],
    posted: "2024-03-10",
    deadline: "2024-04-15",
    applicants: 47,
    company_logo: "/abstract-tech-logo.png",
    tags: ["Project Management", "Agile", "Software", "Leadership"],
    featured: true,
  },
  {
    id: "pm-intern-startup",
    title: "Project Management Intern",
    company: "InnovateLab Startup",
    location: "San Francisco, CA",
    type: "internship",
    category: "internship",
    experience: "entry",
    salary: "$25/hour",
    remote: "remote",
    description: "Support project managers in planning and executing product development initiatives.",
    requirements: ["Currently enrolled in relevant program", "Basic PM knowledge", "Strong communication skills"],
    posted: "2024-03-12",
    deadline: "2024-04-01",
    applicants: 23,
    company_logo: "/abstract-startup-logo.png",
    tags: ["Internship", "Startup", "Product Development", "Remote"],
    featured: false,
  },
  {
    id: "freelance-digital-transformation",
    title: "Digital Transformation Consultant",
    company: "Enterprise Solutions Inc",
    location: "Remote",
    type: "contract",
    category: "freelance",
    experience: "senior",
    salary: "$80-120/hour",
    remote: "remote",
    description: "Lead digital transformation initiatives for Fortune 500 clients on a project basis.",
    requirements: ["7+ years consulting experience", "Digital transformation expertise", "Change management skills"],
    posted: "2024-03-08",
    deadline: "2024-03-25",
    applicants: 12,
    company_logo: "/consulting-firm-logo.png",
    tags: ["Consulting", "Digital Transformation", "Enterprise", "Remote"],
    featured: true,
  },
  {
    id: "pm-networking-event",
    title: "NYC Project Management Meetup",
    company: "PM Professional Network",
    location: "New York, NY",
    type: "event",
    category: "networking",
    experience: "all",
    salary: "Free",
    remote: "in-person",
    description: "Monthly networking event for project management professionals. Guest speaker on AI in PM.",
    requirements: ["PM professionals", "All experience levels welcome"],
    posted: "2024-03-05",
    deadline: "2024-03-20",
    applicants: 156,
    company_logo: "/networking-group-logo.jpg",
    tags: ["Networking", "AI", "Professional Development", "NYC"],
    featured: false,
  },
  {
    id: "junior-pm-fintech",
    title: "Junior Project Manager",
    company: "FinTech Innovations",
    location: "Austin, TX",
    type: "full-time",
    category: "job",
    experience: "junior",
    salary: "$70,000 - $85,000",
    remote: "hybrid",
    description: "Support senior PMs in managing fintech product development and regulatory compliance projects.",
    requirements: [
      "1-3 years PM experience",
      "Financial services knowledge preferred",
      "Scrum Master certification a plus",
    ],
    posted: "2024-03-11",
    deadline: "2024-04-10",
    applicants: 34,
    company_logo: "/fintech-logo.png",
    tags: ["FinTech", "Junior Level", "Compliance", "Product Development"],
    featured: false,
  },
  {
    id: "agile-coach-contract",
    title: "Agile Coach - 6 Month Contract",
    company: "Global Manufacturing Corp",
    location: "Chicago, IL",
    type: "contract",
    category: "freelance",
    experience: "senior",
    salary: "$95-130/hour",
    remote: "hybrid",
    description: "Transform traditional manufacturing processes using agile methodologies across multiple teams.",
    requirements: ["Certified Agile Coach", "Manufacturing industry experience", "Change management expertise"],
    posted: "2024-03-09",
    deadline: "2024-03-30",
    applicants: 8,
    company_logo: "/manufacturing-company-logo.png",
    tags: ["Agile Coaching", "Manufacturing", "Transformation", "Contract"],
    featured: true,
  },
]

const categories = ["All", "Jobs", "Internships", "Freelance", "Networking"]
const experienceLevels = ["All", "Entry", "Junior", "Senior", "Executive"]
const remoteOptions = ["All", "Remote", "Hybrid", "In-Person"]
const sortOptions = ["Most Recent", "Salary High to Low", "Salary Low to High", "Deadline Soon", "Most Applicants"]

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedExperience, setSelectedExperience] = useState("All")
  const [selectedRemote, setSelectedRemote] = useState("All")
  const [selectedSort, setSelectedSort] = useState("Most Recent")
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredOpportunities = opportunities
    .filter((opp) => {
      const matchesSearch =
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory =
        selectedCategory === "All" ||
        (selectedCategory === "Jobs" && opp.category === "job") ||
        (selectedCategory === "Internships" && opp.category === "internship") ||
        (selectedCategory === "Freelance" && opp.category === "freelance") ||
        (selectedCategory === "Networking" && opp.category === "networking")

      const matchesExperience =
        selectedExperience === "All" ||
        opp.experience.toLowerCase() === selectedExperience.toLowerCase() ||
        opp.experience === "all"

      const matchesRemote =
        selectedRemote === "All" ||
        (selectedRemote === "Remote" && opp.remote === "remote") ||
        (selectedRemote === "Hybrid" && opp.remote === "hybrid") ||
        (selectedRemote === "In-Person" && opp.remote === "in-person")

      return matchesSearch && matchesCategory && matchesExperience && matchesRemote
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "Most Recent":
          return new Date(b.posted).getTime() - new Date(a.posted).getTime()
        case "Deadline Soon":
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        case "Most Applicants":
          return b.applicants - a.applicants
        default:
          return 0
      }
    })

  const toggleSaveOpportunity = (id: string) => {
    setSavedOpportunities((prev) => (prev.includes(id) ? prev.filter((oppId) => oppId !== id) : [...prev, id]))
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "job":
        return <Building2 className="h-4 w-4" />
      case "internship":
        return <Users className="h-4 w-4" />
      case "freelance":
        return <DollarSign className="h-4 w-4" />
      case "networking":
        return <Calendar className="h-4 w-4" />
      default:
        return <Building2 className="h-4 w-4" />
    }
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

  // Reusable opportunity card component
  const OpportunityCard = ({ opportunity }: { opportunity: any }) => (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 ${
        opportunity.featured ? "ring-2 ring-primary/20" : ""
      }`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <img
              src={opportunity.company_logo || "/placeholder.svg"}
              alt={`${opportunity.company} logo`}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                {getCategoryBadge(opportunity.category)}
                {getRemoteBadge(opportunity.remote)}
                {opportunity.featured && <Badge variant="destructive">Featured</Badge>}
              </div>
              <CardTitle className="text-xl leading-tight mb-1">{opportunity.title}</CardTitle>
              <div className="flex items-center text-muted-foreground text-sm mb-2">
                <Building2 className="h-4 w-4 mr-1" />
                <span className="font-medium">{opportunity.company}</span>
                <span className="mx-2">•</span>
                <MapPin className="h-4 w-4 mr-1" />
                <span>{opportunity.location}</span>
              </div>
              <CardDescription className="text-sm">{opportunity.description}</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleSaveOpportunity(opportunity.id)}
              className={savedOpportunities.includes(opportunity.id) ? "text-primary" : ""}
            >
              <Bookmark
                className={`h-4 w-4 ${
                  savedOpportunities.includes(opportunity.id) ? "fill-current" : ""
                }`}
              />
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/opportunities/${opportunity.id}`}>
                View Details
                <ExternalLink className="h-3 w-3 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="font-medium">{opportunity.salary}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Posted {getDaysAgo(opportunity.posted)}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span
              className={
                getDaysUntilDeadline(opportunity.deadline).includes("Expired")
                  ? "text-destructive"
                  : ""
              }
            >
              {getDaysUntilDeadline(opportunity.deadline)}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{opportunity.applicants} applicants</span>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Key Requirements:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {opportunity.requirements.slice(0, 3).map((req: string, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags and Apply Button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {opportunity.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <Button className="ml-4">
            {opportunity.category === "networking" ? "Register" : "Apply Now"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r bg-card">
          <DesktopSidebar />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={(open) => setIsSidebarOpen(open)}>
        <div className="flex-1 flex flex-col md:pl-64">
          <Header />
          <SheetContent side="left" className="p-0 w-64">
            <SheetHeader>
              <SheetTitle className="sr-only">Sidebar Navigation</SheetTitle>
            </SheetHeader>
            <MobileSidebarContent />
          </SheetContent>
          <main className="flex-1 overflow-y-auto">
            {/* Header Section */}
            <section className="py-12 px-6 bg-card">
              <div className="max-w-6xl mx-auto">
                <h1 className="font-playfair font-bold text-4xl mb-4">Career Opportunities</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover jobs, internships, freelance projects, and networking events in project management
                </p>

                {/* Search and Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  <div className="relative lg:col-span-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search opportunities, companies, or skills..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {experienceLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedRemote} onValueChange={setSelectedRemote}>
                    <SelectTrigger>
                      <SelectValue placeholder="Work Style" />
                    </SelectTrigger>
                    <SelectContent>
                      {remoteOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort and Results */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredOpportunities.length} of {opportunities.length} opportunities
                  </p>
                  <Select value={selectedSort} onValueChange={setSelectedSort}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>

            {/* Opportunities List */}
            <section className="py-8 px-6">
              <div className="max-w-6xl mx-auto">
                <Tabs defaultValue="list" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="list">List View</TabsTrigger>
                    <TabsTrigger value="saved">Saved ({savedOpportunities.length})</TabsTrigger>
                  </TabsList>

                  <TabsContent value="list">
                    <div className="space-y-6">
                      {filteredOpportunities.map((opportunity) => (
                        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                      ))}
                    </div>

                    {/* No Results */}
                    {filteredOpportunities.length === 0 && (
                      <div className="text-center py-12">
                        <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No opportunities found</h3>
                        <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters</p>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setSearchTerm("")
                            setSelectedCategory("All")
                            setSelectedExperience("All")
                            setSelectedRemote("All")
                          }}
                        >
                          Clear Filters
                        </Button>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="saved">
                    <div className="space-y-6">
                      {savedOpportunities.length === 0 ? (
                        <div className="text-center py-12">
                          <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">No saved opportunities</h3>
                          <p className="text-muted-foreground mb-4">
                            Save opportunities you're interested in to view them here
                          </p>
                        </div>
                      ) : (
                        opportunities
                          .filter((opp) => savedOpportunities.includes(opp.id))
                          .map((opportunity) => (
                            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                          ))
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </main>
        </div>
      </Sheet>
    </div>
  )
}
