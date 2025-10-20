"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Search, HelpCircle, BookOpen, CreditCard, Users, Settings, MessageSquare } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    description: "New to LearnPM? Start here",
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "Click the 'Sign Up' button in the top right corner and follow the registration process. You can sign up with your email or use social login options.",
      },
      {
        question: "What's the difference between courses and batches?",
        answer:
          "Courses are self-paced learning materials you can access anytime. Batches are live, instructor-led cohorts with scheduled sessions and peer interaction.",
      },
      {
        question: "Do I need any prior experience in project management?",
        answer:
          "No prior experience is required for our beginner courses. We offer programs for all skill levels, from complete beginners to experienced professionals.",
      },
      {
        question: "How long does it take to complete a course?",
        answer:
          "Course duration varies. Self-paced courses typically take 4-8 weeks, while live batches run for 8-12 weeks with 2-3 sessions per week.",
      },
    ],
  },
  {
    id: "courses-learning",
    title: "Courses & Learning",
    icon: Users,
    description: "Questions about our educational content",
    faqs: [
      {
        question: "Can I access course materials after completion?",
        answer:
          "Yes! You have lifetime access to all course materials, including videos, resources, and updates to the curriculum.",
      },
      {
        question: "Are the courses accredited?",
        answer:
          "Our courses are designed to prepare you for industry-standard certifications like PMP, and we provide certificates of completion for all programs.",
      },
      {
        question: "What if I fall behind in a live batch?",
        answer:
          "All live sessions are recorded and available for review. You can also reach out to instructors during office hours for additional support.",
      },
      {
        question: "Do you offer corporate training?",
        answer:
          "Yes, we provide customized corporate training programs for teams and organizations. Contact us for enterprise solutions.",
      },
    ],
  },
  {
    id: "billing-payments",
    title: "Billing & Payments",
    icon: CreditCard,
    description: "Payment and subscription questions",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, PayPal, and offer payment plans for courses over $500. Enterprise customers can pay by invoice.",
      },
      {
        question: "Is there a refund policy?",
        answer:
          "Yes, we offer a 30-day money-back guarantee for all courses. If you're not satisfied, contact support for a full refund.",
      },
      {
        question: "Can I get a receipt for my purchase?",
        answer:
          "Receipts are automatically sent to your email after purchase and are also available in your account dashboard.",
      },
      {
        question: "Do you offer student discounts?",
        answer:
          "Yes, we offer 20% discounts for students with valid .edu email addresses. We also have scholarships available for qualifying candidates.",
      },
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support",
    icon: Settings,
    description: "Platform and technical issues",
    faqs: [
      {
        question: "I'm having trouble logging in. What should I do?",
        answer:
          "Try resetting your password first. If that doesn't work, clear your browser cache or try a different browser. Contact support if issues persist.",
      },
      {
        question: "Can I access courses on mobile devices?",
        answer:
          "Yes! Our platform is fully responsive and works on all devices. We also have mobile apps for iOS and Android coming soon.",
      },
      {
        question: "What are the system requirements?",
        answer:
          "You need a modern web browser (Chrome, Firefox, Safari, Edge) and a stable internet connection. No special software installation required.",
      },
      {
        question: "How do I download course materials?",
        answer:
          "Most resources can be downloaded directly from the course page. Look for the download icon next to PDFs, templates, and other materials.",
      },
    ],
  },
]

const quickLinks = [
  { title: "Contact Support", href: "/contact", icon: MessageSquare },
  { title: "Course Catalog", href: "/courses", icon: BookOpen },
  { title: "Live Batches", href: "/batches", icon: Users },
  { title: "Account Settings", href: "/dashboard", icon: Settings },
]

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFAQs = faqCategories.map((category) => ({
    ...category,
    faqs: category.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }))

  const allFAQs = faqCategories.flatMap((category) => category.faqs)
  const searchResults = searchTerm
    ? allFAQs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : []

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        {/* <Header /> */}
        <main className="flex-1 overflow-y-auto">
          {/* Header Section */}
          <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="font-playfair font-bold text-5xl mb-6">Help Center</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions or get in touch with our support team
              </p>

              {/* Search */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg"
                />
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-8 px-6 bg-card border-b">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Button key={index} variant="outline" className="h-auto p-4 justify-start bg-transparent" asChild>
                    <Link href={link.href}>
                      <link.icon className="h-5 w-5 mr-3" />
                      <span>{link.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Search Results */}
          {searchTerm && (
            <section className="py-8 px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Search Results ({searchResults.length} found)</h2>
                {searchResults.length > 0 ? (
                  <Accordion type="single" collapsible className="space-y-4">
                    {searchResults.map((faq, index) => (
                      <AccordionItem key={index} value={`search-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">Try different keywords or browse categories below</p>
                    <Button variant="outline" onClick={() => setSearchTerm("")}>
                      Clear Search
                    </Button>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* FAQ Categories */}
          {!searchTerm && (
            <section className="py-8 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>

                {/* Category Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {faqCategories.map((category) => (
                    <Card
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        selectedCategory === category.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                    >
                      <CardHeader className="text-center">
                        <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Badge variant="outline">{category.faqs.length} articles</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* FAQ Content */}
                <div className="space-y-8">
                  {filteredFAQs.map((category) => (
                    <div
                      key={category.id}
                      className={selectedCategory && selectedCategory !== category.id ? "hidden" : ""}
                    >
                      <div className="flex items-center mb-6">
                        <category.icon className="h-6 w-6 text-primary mr-3" />
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem
                            key={index}
                            value={`${category.id}-${index}`}
                            className="border rounded-lg px-4"
                          >
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Contact Support */}
          <section className="py-16 px-6 bg-muted/30">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair font-bold text-3xl mb-6">Still Need Help?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/blogs">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse Articles
                  </Link>
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                <p>Average response time: 4 hours</p>
                <p>Support available: Monday - Friday, 9 AM - 6 PM PST</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
