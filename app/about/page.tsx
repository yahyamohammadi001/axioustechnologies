"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Globe, BookOpen, Lightbulb, Heart, Zap } from "lucide-react"
import Link from "next/link"

const stats = [
  { label: "Students Trained", value: "10,000+", icon: Users },
  { label: "Courses Available", value: "50+", icon: BookOpen },
  { label: "Success Rate", value: "95%", icon: Target },
  { label: "Countries Reached", value: "25+", icon: Globe },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our teaching methods and technology to provide the best learning experience.",
  },
  {
    icon: Heart,
    title: "Student Success",
    description: "Your success is our success. We're committed to helping you achieve your career goals.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We maintain the highest standards in education, instruction, and student support.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive community of project management professionals worldwide.",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-0">
      {/* Hero Section */}
            <section className="py-8 sm:py-16 bg-gradient-to-br from-primary/20 to-primary/3">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                <h1 className="font-playfair font-bold text-3xl sm:text-5xl mb-4 sm:mb-6">About Axious Technologies</h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  We're on a mission to democratize project management education and empower professionals worldwide
                  with the skills they need to lead successful projects and drive organizational change.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </section>


            {/* Story Section */}
            <section className="py-8 sm:py-16">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="font-playfair font-bold text-2xl sm:text-3xl mb-6 sm:mb-8 text-center">Our Story</h2>
                <div className="prose prose-sm sm:prose-lg mx-auto text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                  Axious Technologies was founded in 2025 by Yahya Mohammadi with a clear vision: to make high-quality project management education accessible to everyone, regardless of location, background, or career stage.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    
                  </p >
                  <p className="text-lg leading-relaxed mb-6">
                  Yahya holds a Bachelor’s degree in Computer Science from India and has built his career working online as a Software Engineer, gaining hands-on experience in both technology and project management across diverse industries. Alongside his professional journey, he also manages a Limited Liability Company in the United States, which has strengthened his entrepreneurial mindset and passion for building solutions that merge education with technology.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                  Through his global perspective and practical expertise, Yahya recognized a key problem: most project management programs were either too theoretical, too costly, or out of reach for working professionals.<br />    
                  To address this, he launched Axious Technologies—a platform that partners with leading education providers through affiliate marketing programs. Instead of creating courses directly, Axious curates and connects learners with the best available training, tools, and resources in project management.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                  Today, Axious has grown into a trusted hub that brings together expert instruction, real-world projects, peer collaboration, and career support—all sourced from top providers in the industry. Our mission is simple: to empower the next generation of project managers by guiding them to the right opportunities so they can not only learn, but truly excel in their careers.
                  </p>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="py-8 sm:py-16 bg-muted/30">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="font-playfair font-bold text-2xl sm:text-3xl mb-8 sm:mb-12 text-center">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                  {values.map((value, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader>
                        <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardTitle>{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center">{value.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="py-8 sm:py-12 bg-gradient-to-br from-primary/40 to-primary/3">
              <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
                <h2 className="font-playfair font-bold text-2xl sm:text-3xl mb-6 sm:mb-8">Our Mission</h2>
                <p className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                  To empower the next generation of project managers with practical skills, industry knowledge, and the
                  confidence to lead successful projects that drive meaningful change in organizations worldwide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
                  <div>
                    <Award className="h-8 w-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Quality Education</h3>
                    <p className="text-black-foreground/80">
                      Delivering world-class project management education that meets industry standards.
                    </p>
                  </div>
                  <div>
                    <Users className="h-8 w-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Global Community</h3>
                    <p className="text-black-foreground/80">
                      Building a supportive network of project management professionals worldwide.
                    </p>
                  </div>
                  <div>
                    <Target className="h-8 w-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Career Success</h3>
                    <p className="text-black-foreground/80">
                      Helping our students achieve their career goals and advance in their professions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
    </div>
  )
}
