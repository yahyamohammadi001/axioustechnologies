"use client"

import type React from "react"

import { useState } from "react"
import { DesktopSidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, HelpCircle, Users } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    
      <div className="flex h-screen bg-background">
  <DesktopSidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          <Header />
          <main className="flex-1 overflow-y-auto">
            {/* Header Section */}
            <section className="py-16 px-6 bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-playfair font-bold text-5xl mb-6">Get in Touch</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Have questions about our courses, need support, or want to partner with us? We'd love to hear from
                  you.
                </p>
              </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-16 px-6">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="h-6 w-6 mr-2" />
                        Send us a Message
                      </CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you within 24 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) => handleInputChange("category", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="courses">Course Information</SelectItem>
                                <SelectItem value="technical">Technical Support</SelectItem>
                                <SelectItem value="billing">Billing & Payments</SelectItem>
                                <SelectItem value="partnership">Partnership</SelectItem>
                                <SelectItem value="media">Media & Press</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject *</Label>
                            <Input
                              id="subject"
                              value={formData.subject}
                              onChange={(e) => handleInputChange("subject", e.target.value)}
                              placeholder="Brief subject line"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Tell us more about your inquiry..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  {/* Contact Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>Reach out to us through any of these channels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">hello@learnpm.com</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Address</div>
                          <div className="text-sm text-muted-foreground">
                            123 Learning Street
                            <br />
                            San Francisco, CA 94105
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Business Hours</div>
                          <div className="text-sm text-muted-foreground">
                            Mon-Fri: 9:00 AM - 6:00 PM PST
                            <br />
                            Sat-Sun: 10:00 AM - 4:00 PM PST
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Links */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Help</CardTitle>
                      <CardDescription>Find answers to common questions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                        <a href="/help">
                          <HelpCircle className="h-4 w-4 mr-2" />
                          FAQ & Help Center
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                        <a href="/courses">
                          <Users className="h-4 w-4 mr-2" />
                          Course Information
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                        <a href="/legal/terms">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Terms & Policies
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Response Time */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Response Times</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">General Inquiries</span>
                        <span className="font-medium">24 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Technical Support</span>
                        <span className="font-medium">4-8 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Billing Issues</span>
                        <span className="font-medium">2-4 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Urgent Matters</span>
                        <span className="font-medium">1-2 hours</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Office Locations */}
            <section className="py-16 px-6 bg-muted/30">
              <div className="max-w-6xl mx-auto">
                <h2 className="font-playfair font-bold text-3xl mb-12 text-center">Our Offices</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>San Francisco HQ</CardTitle>
                      <CardDescription>Main headquarters and training center</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div>123 Learning Street</div>
                        <div>San Francisco, CA 94105</div>
                        <div className="text-muted-foreground">United States</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>New York Office</CardTitle>
                      <CardDescription>East coast operations and partnerships</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div>456 Business Ave</div>
                        <div>New York, NY 10001</div>
                        <div className="text-muted-foreground">United States</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>London Office</CardTitle>
                      <CardDescription>European operations and support</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div>789 Education Lane</div>
                        <div>London EC1A 1BB</div>
                        <div className="text-muted-foreground">United Kingdom</div>
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
