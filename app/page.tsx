"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DesktopSidebar, MobileSidebarContent } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { BookOpen, Users, Briefcase, ArrowRight, Star, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            {/* Hero Section */}
            <section className="relative py-12 px-4 text-center bg-gradient-to-br from-card to-background sm:px-6 lg:px-8">
              <div className="container mx-auto max-w-4xl">
                <h1 className="font-playfair font-bold text-3xl leading-tight mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
                  Master New Skills with
                  <span className="text-primary"> Expert-Led Courses</span>
                </h1>
                <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto sm:text-lg">
                  Join thousands of learners advancing their careers through our comprehensive project management
                  courses, live batches, and exclusive opportunities.
                </p>
                <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-center">
                  <Button size="lg" className="w-full text-lg px-8 sm:w-auto" asChild>
                    <Link href="/onboarding">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col gap-4 mt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:mt-12">
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span>Self-paced & live batches</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Users className="h-4 w-4" />
                    <span>Practical, tool-based learning</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <BookOpen className="h-4 w-4" />
                    <span>20+ Courses</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Courses */}
            <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-8 sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <h2 className="font-playfair font-bold text-2xl leading-tight mb-2 sm:text-3xl">Featured Courses</h2>
                    <p className="text-sm text-muted-foreground sm:text-base">Start your learning journey with our most popular courses</p>
                  </div>
                  <Button variant="outline" asChild className="mt-4 w-full sm:w-auto sm:mt-0">
                    <Link href="/courses">View All Courses</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: "notion-for-pm",
                      title: "Mastering Notion for Project Management",
                      description: "Leverage Notion's flexible workspaces to plan, track, and execute your projects efficiently.",
                      level: "Intermediate",
                      duration: "6 weeks",
                      lessons: 18,
                      students: "1,500",
                      rating: 4.9,
                      category: "Project Management Tools",
                      image: "/notion.svg",
                      progress: 0,
                      tags: ["Notion", "Task Management", "Collaboration", "Productivity"],
                    },
                    {
                      id: "monday-com",
                      title: "Mastering Monday.com for Project Management",
                      description: "Learn to effectively use Monday.com for task management, project tracking, and team collaboration.",
                      level: "Beginner",
                      duration: "4 weeks",
                      lessons: 12,
                      students: "950",
                      rating: 4.7,
                      category: "Project Management Tools",
                      image: "/Monday.com.svg",
                      progress: 0,
                      tags: ["Monday.com", "Task Management", "Collaboration"],
                    },
                    {
                      id: "trello-for-pm",
                      title: "Trello for Project Management",
                      description: "Organize your projects and boost team productivity with Trello's intuitive board system.",
                      level: "Beginner",
                      duration: "3 weeks",
                      lessons: 9,
                      students: "1,200",
                      rating: 4.6,
                      category: "Project Management Tools",
                      image: "/trello.svg",
                      progress: 0,
                      tags: ["Trello", "Task Management", "Kanban"],
                    },
                  ].map((course, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-shadow">
                        <div className={`aspect-video rounded-t-lg overflow-hidden flex items-center justify-center bg-muted border border-border shadow-sm dark:shadow-lg dark:bg-white/[0.04]`}>
                          <div
                            className={[
                              "w-full h-full rounded flex items-center justify-center",
                              ["notion-for-pm", "monday-com", "trello-for-pm"].includes(course.id) ? "bg-white" : ""
                            ].filter(Boolean).join(" ")}
                          >
                            <img
                              src={course.image || "/placeholder.svg"}
                              alt={course.title}
                              className="w-full h-full object-contain p-4 bg-transparent rounded"
                            />
                          </div>
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                          <CardDescription className="text-sm">{course.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          {/* Removed students, rating, and level info */}
                        </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Opportunities */}
            <section className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-8 sm:flex-row sm:justify-between sm:text-left">
                  <div>
                    <h2 className="font-playfair font-bold text-2xl leading-tight mb-2 sm:text-3xl">Career Opportunities</h2>
                    <p className="text-sm text-muted-foreground sm:text-base">Discover jobs, internships, and freelance projects</p>
                  </div>
                  <Button variant="outline" asChild className="mt-4 w-full sm:w-auto sm:mt-0">
                    <Link href="/opportunities">View All Opportunities</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Senior Project Manager",
                      company: "TechCorp Inc.",
                      location: "Remote",
                      type: "Full-time",
                      salary: "$90k - $120k",
                    },
                    {
                      title: "Scrum Master",
                      company: "StartupXYZ",
                      location: "San Francisco, CA",
                      type: "Full-time",
                      salary: "$85k - $110k",
                    },
                    {
                      title: "PM Consultant",
                      company: "Consulting Group",
                      location: "Remote",
                      type: "Contract",
                      salary: "$75/hour",
                    },
                  ].map((job, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-muted-foreground">Location:</span>
                            <span>{job.location}</span>
                          </div>
                          <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-muted-foreground">Type:</span>
                            <Badge variant="secondary">{job.type}</Badge>
                          </div>
                          <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-muted-foreground">Salary:</span>
                            <span className="font-medium text-primary">{job.salary}</span>
                          </div>
                          <Button className="w-full mt-4" size="sm">
                            Apply Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <footer className="bg-card py-8 px-4 mt-8 sm:py-12 sm:px-6 sm:mt-12 w-full">
              <div className="container mx-auto max-w-6xl flex flex-col items-center text-sm text-muted-foreground">
                <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:gap-8">
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors font-semibold">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="hover:text-primary transition-colors font-semibold">Terms of Service</Link>
                  <Link href="/refund-policy" className="hover:text-primary transition-colors font-semibold">Refund Policy</Link>
                </div>
                <p>&copy; {new Date().getFullYear()} Axious Technologies. All rights reserved.</p>
              </div>
            </footer>
          </main>
        </div>
      </Sheet>
    </div>
  )
}
