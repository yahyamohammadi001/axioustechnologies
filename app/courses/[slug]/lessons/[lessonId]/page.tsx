"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen, Clock } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const lessonData = {
  1: {
    title: "What is Project Management?",
    duration: "15 min",
    content: `
      <h2>Introduction to Project Management</h2>
      <p>Project management is the application of knowledge, skills, tools, and techniques to project activities to meet project requirements. It involves planning, executing, and closing projects while managing resources, timelines, and stakeholder expectations.</p>
      
      <h3>Key Characteristics of Projects</h3>
      <ul>
        <li><strong>Temporary:</strong> Projects have a definite beginning and end</li>
        <li><strong>Unique:</strong> Each project creates a unique product, service, or result</li>
        <li><strong>Progressive Elaboration:</strong> Projects are developed in steps and continue by increments</li>
      </ul>
      
      <h3>The Project Management Triangle</h3>
      <p>Every project must balance three key constraints:</p>
      <ul>
        <li><strong>Scope:</strong> What work will be done</li>
        <li><strong>Time:</strong> When the project will be completed</li>
        <li><strong>Cost:</strong> How much the project will cost</li>
      </ul>
      
      <h3>Why Project Management Matters</h3>
      <p>Effective project management helps organizations:</p>
      <ul>
        <li>Deliver projects on time and within budget</li>
        <li>Improve quality and reduce risks</li>
        <li>Enhance stakeholder satisfaction</li>
        <li>Optimize resource utilization</li>
      </ul>
    `,
    nextLesson: 2,
    prevLesson: null,
  },
  2: {
    title: "Project Life Cycle",
    duration: "20 min",
    content: `
      <h2>Understanding the Project Life Cycle</h2>
      <p>The project life cycle is a series of phases that a project passes through from its initiation to its closure. These phases provide a framework for managing the project and ensuring its successful completion.</p>
      
      <h3>Typical Project Life Cycle Phases:</h3>
      <ol>
        <li><strong>Initiation:</strong> Defining the project, its objectives, and scope.</li>
        <li><strong>Planning:</strong> Developing a detailed roadmap to guide the project.</li>
        <li><strong>Execution:</strong> Carrying out the planned activities to achieve project goals.</li>
        <li><strong>Monitoring & Controlling:</strong> Tracking progress, managing changes, and ensuring project stays on track.</li>
        <li><strong>Closing:</strong> Formalizing acceptance of the project, archiving records, and releasing resources.</li>
      </ol>
      
      <h3>Importance of Each Phase:</h3>
      <p>Each phase plays a critical role in the overall success of the project. Skipping or inadequately addressing any phase can lead to significant challenges and potential project failure.</p>
    `,
    nextLesson: 3,
    prevLesson: 1,
  },
  3: {
    title: "Project Stakeholders",
    duration: "18 min",
    content: `
      <h2>Identifying and Managing Project Stakeholders</h2>
      <p>Project stakeholders are individuals or organizations who are actively involved in the project, or whose interests may be positively or negatively affected by the project's execution or completion. Effective stakeholder management is crucial for project success.</p>
      
      <h3>Key Stakeholder Groups:</h3>
      <ul>
        <li><strong>Project Manager:</strong> The individual responsible for leading the project.</li>
        <li><strong>Project Team:</strong> The group performing the work of the project.</li>
        <li><strong>Sponsor:</strong> The person or group who provides resources and support for the project.</li>
        <li><strong>Customers/Users:</strong> Those who will use the project's product, service, or result.</li>
        <li><strong>Suppliers:</strong> External entities providing resources or services.</li>
        <li><strong>Government Agencies:</strong> Regulatory bodies that may have an interest in the project.</li>
      </ul>
      
      <h3>Stakeholder Engagement Strategies:</h3>
      <p>Strategies for engaging stakeholders vary based on their influence and interest in the project. This can include regular communication, involvement in decision-making, and conflict resolution.</p>
    `,
    nextLesson: null,
    prevLesson: 2,
  },
}

export default function LessonPage() {
  const params = useParams()
  const slug = params.slug as string
  const lessonId = Number.parseInt(params.lessonId as string)
  const lesson = lessonData[lessonId as keyof typeof lessonData]

  if (!lesson) {
    return (
      
        <div className="flex h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col md:ml-64">
            <Header />
            <main className="flex-1 overflow-y-auto flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
                <Button asChild>
                  <Link href={`/courses/${slug}`}>Back to Course</Link>
                </Button>
              </div>
            </main>
          </div>
        </div>
      
    )
  }

  return (
    
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          <Header />
          <main className="flex-1 overflow-y-auto">
            {/* Lesson Header */}
            <section className="py-6 px-6 bg-card border-b">
              <div className="max-w-4xl mx-auto">
                <Button variant="ghost" asChild className="mb-4">
                  <Link href={`/courses/${slug}`}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Course
                  </Link>
                </Button>

                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="font-playfair font-bold text-2xl mb-2">{lesson.title}</h1>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {lesson.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Lesson {lessonId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Lesson Content */}
            <section className="py-8 px-6">
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: lesson.content }} />
                  </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <div>
                    {lesson.prevLesson && (
                      <Button variant="outline" asChild>
                        <Link href={`/courses/${slug}/lessons/${lesson.prevLesson}`}>
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Previous Lesson
                        </Link>
                      </Button>
                    )}
                  </div>
                  <div>
                    {lesson.nextLesson && (
                      <Button asChild>
                        <Link href={`/courses/${slug}/lessons/${lesson.nextLesson}`}>
                          Next Lesson <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                    {!lesson.nextLesson && (
                      <Button asChild>
                        <Link href={`/courses/${slug}`}>
                          Complete Course <CheckCircle className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    
  )
}
