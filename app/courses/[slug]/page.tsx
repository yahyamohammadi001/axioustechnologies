"use client"

import { DesktopSidebar, MobileSidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Users, Star, BookOpen, Play, CheckCircle, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

const courseData = {
  "notion-for-pm": {
    title: "Mastering Notion for Project Management",
    description: "Leverage Notion's flexible workspaces to plan, track, and execute your projects efficiently.",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 18,
    students: 1500,
    rating: 4.9,
    category: "Project Management Tools",
    image: "/notion.svg",
    progress: 0,
    tags: ["Notion", "Task Management", "Collaboration", "Productivity"],
  },
  "monday-com": {
    title: "Mastering Monday.com for Project Management",
    description: "Learn to effectively use Monday.com for task management, project tracking, and team collaboration.",
    level: "Beginner",
    duration: "4 weeks",
    lessons: 12,
    students: 950,
    rating: 4.7,
    category: "Project Management Tools",
    image: "/Monday.com.svg",
    progress: 0,
    tags: ["Monday.com", "Task Management", "Collaboration"],
  },
  "trello-for-pm": {
    title: "Trello for Project Management",
    description: "Organize your projects, tasks, and teams with Trello's intuitive board system.",
    level: "Beginner",
    duration: "3 weeks",
    lessons: 10,
    students: 1800,
    rating: 4.6,
    category: "Project Management Tools",
    image: "/trello.svg",
    progress: 0,
    tags: ["Trello", "Kanban", "Task Management", "Collaboration"],
  },
  "digital-transformation-pm": {
    title: "Digital Transformation Project Management",
    description: "Lead digital transformation initiatives with modern PM techniques",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 36,
    students: 890,
    rating: 4.6,
    category: "Digital Transformation",
    image: "/digital-transformation-project-management.jpg",
    progress: 0,
    tags: ["Digital", "Transformation", "Innovation"],
  },
  "stakeholder-management": {
    title: "Stakeholder Management Excellence",
    description: "Build strong relationships and manage stakeholder expectations effectively",
    level: "Intermediate",
    duration: "4 weeks",
    lessons: 12,
    students: 1560,
    rating: 4.8,
    category: "Communication",
    image: "/stakeholder-management-business-meeting.jpg",
    progress: 0,
    tags: ["Communication", "Stakeholders", "Relationships"],
  },
  "project-budgeting-finance": {
    title: "Project Budgeting & Financial Management",
    description: "Master project financial planning, budgeting, and cost control techniques",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: 20,
    students: 1200,
    rating: 4.7,
    category: "Finance",
    image: "/project-budget-financial-planning-charts.jpg",
    progress: 0,
    tags: ["Budgeting", "Finance", "Cost Control"],
  },
  "project-management-fundamentals": {
    title: "Project Management Fundamentals",
    description:
      "Learn the core principles of effective project management from planning to execution. This comprehensive course covers all aspects of modern project management including planning, risk management, team leadership, and successful project delivery.",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 24,
    students: 2340,
    rating: 4.8,
    category: "Project Management",
    image: "/project-management-course.png",
    progress: 0,
    tags: ["PMP", "Planning", "Leadership"],
  },
}

export default function CoursePage() {
  const params = useParams()
  const slug = params.slug as string
  const course = courseData[slug as keyof typeof courseData]
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  if (!course) {
    return (
      <div className="flex h-screen bg-background">
        <DesktopSidebar />
        <div className="flex-1 flex flex-col md:pl-64">
          <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
          <MobileSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto bg-card flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
              <Button asChild>
                <Link href="/courses">Back to Courses</Link>
              </Button>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
        {/* Desktop Sidebar (hidden on mobile) */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col flex-grow border-r bg-card">
            <DesktopSidebar />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:pl-64">
          <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
          <MobileSidebar open={isSidebarOpen} setOpen={setIsSidebarOpen} />
          <main className="flex-1 overflow-y-auto bg-card">
            {/* Course Header */}
            <section className="py-8 px-6 bg-card">
              <div className="max-w-6xl mx-auto">
                <Button variant="ghost" asChild className="mb-4">
                  <Link href="/courses">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Courses
                  </Link>
                </Button>

                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge
                        variant={
                          course.level === "Beginner"
                            ? "secondary"
                            : course.level === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {course.level}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{course.category}</span>
                    </div>

                    <h1 className="font-playfair font-bold text-4xl mb-4">{course.title}</h1>
                    <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 fill-primary text-primary" />
                        {course.rating} rating
                      </div>
                    </div>

                    {/* {user && progressPercentage > 0 && (
                      <div className="mb-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Your Progress</span>
                          <span className="text-primary font-medium">{Math.round(progressPercentage)}%</span>
                        </div>
                        <Progress value={progressPercentage} className="h-3" />
                        <p className="text-sm text-muted-foreground mt-1">
                          {completedLessons} of {totalLessons} lessons completed
                        </p>
                      </div>
                    )} */}
                  </div>

                  <div>
                    <Card>
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="text-center mb-4">
                        </div>
                        <Button className="w-full mb-4" size="lg" asChild>
                          <Link href={`/courses/${slug}/lessons/1`}>
                          Start Learning
                          </Link>
                        </Button>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lessons:</span>
                            <span>{course.lessons}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Level:</span>
                            <span>{course.level}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    </div>
  )
}
