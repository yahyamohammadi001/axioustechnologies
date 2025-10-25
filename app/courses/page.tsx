"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Search, Clock, Users, Star, BookOpen } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "notion-for-pm",
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
  {
    id: "monday-com",
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
  {
    id: "trello-for-pm",
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
  {
    id: "digital-transformation-pm",
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
  {
    id: "stakeholder-management",
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
  {
    id: "project-budgeting-finance",
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
]

// const categories = [
//   "All",
//   "Project Management",
//   "Agile",
//   "Risk Management",
//   "Digital Transformation",
//   "Communication",
//   "Finance",
// ]
// const levels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // const [selectedCategory, setSelectedCategory] = useState("All")
  // const [selectedLevel, setSelectedLevel] = useState("All")

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    // const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    // const matchesLevel = selectedLevel === "All" || course.level === selectedLevel

    return matchesSearch
  })

  return (
    <div className="container mx-auto py-6">
      <main>
            {/* Header Section */}
            <section className="py-12 px-6 bg-card">
              <div className="max-w-6xl mx-auto">
                <h1 className="font-playfair font-bold text-4xl mb-4">Explore Courses</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Master project management skills with our comprehensive course library
                </p>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search courses, topics, or skills..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  {/* <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-48">
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
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select> */}
                </div>

                {/* Results Count */}
                <p className="text-muted-foreground mb-6">
                  Showing {filteredCourses.length} of {courses.length} courses
                </p>
              </div>
            </section>

            {/* Courses Grid */}
            <section className="py-8 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <Card key={course.id} className="group hover:shadow-lg transition-all duration-300">
                      <div className={`aspect-video rounded-t-lg overflow-hidden flex items-center justify-center ${course.id === 'monday-com' || course.id === 'notion-for-pm' || course.id === 'trello-for-pm' ? 'bg-white p-4' : 'bg-muted'}`}>
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-contain max-w-[80%] max-h-[80%]"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          {/* <Badge
                            variant={
                              course.level === "Beginner"
                                ? "secondary"
                                : course.level === "Intermediate"
                                  ? "default"
                                  : "destructive"
                            }
                          >
                            {course.level}
                          </Badge> */}
                          {/* <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                            {course.rating}
                          </div> */}
                        </div>
                        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                        <CardDescription className="text-sm">{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {/* Course Stats */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {course.duration}
                            </div>
                            <div className="flex items-center">
                              <BookOpen className="h-4 w-4 mr-1" />
                              {course.lessons} lessons
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {course.students.toLocaleString()}
                            </div>
                          </div>

                          {/* Progress Bar (for logged in users) */}
                          {/* {user && course.progress > 0 && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Progress</span>
                                <span className="text-primary font-medium">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          )} */}

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {course.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-end pt-2">
                            {/* <span className="font-bold text-lg text-primary">{course.price}</span> */}
                            <Button asChild size="sm">
                              <Link href={`/courses/lesson-redirect`}>
                                {"Start Learning"}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* No Results */}
                {filteredCourses.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No courses found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search terms or filters</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("")
                        // setSelectedCategory("All")
                        // setSelectedLevel("All")
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </section>
      </main>
    </div>
  )
}
