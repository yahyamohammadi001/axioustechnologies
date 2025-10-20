"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Phone, MapPin, Briefcase, Bell, Shield, Eye, Camera, Save } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Project Manager",
    company: "TechCorp Solutions",
    bio: "Experienced project manager with 8+ years in technology and digital transformation. Passionate about agile methodologies and team leadership.",
    experience: "8+ years",
    education: "MBA in Business Administration",
    skills: ["Project Management", "Agile/Scrum", "Risk Management", "Stakeholder Management", "Leadership"],
  })

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    courseReminders: true,
    batchNotifications: true,
    opportunityAlerts: false,
    marketingEmails: false,
  })

  const handleSave = () => {
    setIsEditing(false)
    // Save profile data logic here
    console.log("Saving profile:", profileData)
  }

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [field]: value }))
  }

  return (
    
      <div className="flex h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col md:ml-64">
          <Header />
          <main className="flex-1 overflow-y-auto">
            {/* Profile Header */}
            <section className="py-8 px-6 bg-gradient-to-r from-primary/5 to-primary/10">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/professional-headshot.png" />
                      <AvatarFallback className="text-2xl">
                        {profileData.firstName.charAt(0)}
                        {profileData.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 bg-transparent"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <h1 className="font-playfair font-bold text-3xl">
                      {profileData.firstName} {profileData.lastName}
                    </h1>
                    <p className="text-lg text-muted-foreground">{profileData.title}</p>
                    <p className="text-muted-foreground">{profileData.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {profileData.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {profileData.experience}
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "outline" : "default"}>
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
              </div>
            </section>

            {/* Profile Content */}
            <section className="py-8 px-6">
              <div className="max-w-4xl mx-auto">
                <Tabs defaultValue="personal" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="personal">Personal Info</TabsTrigger>
                    <TabsTrigger value="professional">Professional</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          Personal Information
                        </CardTitle>
                        <CardDescription>Update your personal details and contact information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              value={profileData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              value={profileData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={profileData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              className="pl-10"
                              disabled={!isEditing}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              value={profileData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              className="pl-10"
                              disabled={!isEditing}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="location"
                              value={profileData.location}
                              onChange={(e) => handleInputChange("location", e.target.value)}
                              className="pl-10"
                              disabled={!isEditing}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={profileData.bio}
                            onChange={(e) => handleInputChange("bio", e.target.value)}
                            rows={4}
                            disabled={!isEditing}
                          />
                        </div>

                        {isEditing && (
                          <Button onClick={handleSave} className="w-full">
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="professional" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Briefcase className="h-5 w-5 mr-2" />
                          Professional Information
                        </CardTitle>
                        <CardDescription>Manage your career details and skills</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="title">Job Title</Label>
                          <Input
                            id="title"
                            value={profileData.title}
                            onChange={(e) => handleInputChange("title", e.target.value)}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            value={profileData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level</Label>
                          <Select disabled={!isEditing}>
                            <SelectTrigger>
                              <SelectValue placeholder={profileData.experience} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-8">6-8 years</SelectItem>
                              <SelectItem value="8+">8+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="education">Education</Label>
                          <Input
                            id="education"
                            value={profileData.education}
                            onChange={(e) => handleInputChange("education", e.target.value)}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Skills</Label>
                          <div className="flex flex-wrap gap-2">
                            {profileData.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {isEditing && (
                          <Button onClick={handleSave} className="w-full">
                            <Save className="h-4 w-4 mr-2" />
                            Save Changes
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="preferences" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Bell className="h-5 w-5 mr-2" />
                          Notification Preferences
                        </CardTitle>
                        <CardDescription>Choose what notifications you'd like to receive</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="emailUpdates">Email Updates</Label>
                            <p className="text-sm text-muted-foreground">Receive course updates and announcements</p>
                          </div>
                          <Switch
                            id="emailUpdates"
                            checked={notifications.emailUpdates}
                            onCheckedChange={(checked) => handleNotificationChange("emailUpdates", checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="courseReminders">Course Reminders</Label>
                            <p className="text-sm text-muted-foreground">Get reminded about upcoming lessons</p>
                          </div>
                          <Switch
                            id="courseReminders"
                            checked={notifications.courseReminders}
                            onCheckedChange={(checked) => handleNotificationChange("courseReminders", checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="batchNotifications">Batch Notifications</Label>
                            <p className="text-sm text-muted-foreground">Live session reminders and updates</p>
                          </div>
                          <Switch
                            id="batchNotifications"
                            checked={notifications.batchNotifications}
                            onCheckedChange={(checked) => handleNotificationChange("batchNotifications", checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="opportunityAlerts">Opportunity Alerts</Label>
                            <p className="text-sm text-muted-foreground">New job opportunities matching your profile</p>
                          </div>
                          <Switch
                            id="opportunityAlerts"
                            checked={notifications.opportunityAlerts}
                            onCheckedChange={(checked) => handleNotificationChange("opportunityAlerts", checked)}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="marketingEmails">Marketing Emails</Label>
                            <p className="text-sm text-muted-foreground">Promotional content and special offers</p>
                          </div>
                          <Switch
                            id="marketingEmails"
                            checked={notifications.marketingEmails}
                            onCheckedChange={(checked) => handleNotificationChange("marketingEmails", checked)}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="security" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Shield className="h-5 w-5 mr-2" />
                          Security Settings
                        </CardTitle>
                        <CardDescription>Manage your account security and privacy</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">Change Password</h4>
                              <p className="text-sm text-muted-foreground">Update your account password</p>
                            </div>
                            <Button variant="outline">Change</Button>
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">Two-Factor Authentication</h4>
                              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                            </div>
                            <Button variant="outline">Enable</Button>
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">Login Sessions</h4>
                              <p className="text-sm text-muted-foreground">Manage your active sessions</p>
                            </div>
                            <Button variant="outline">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">Download Data</h4>
                              <p className="text-sm text-muted-foreground">Export your account data</p>
                            </div>
                            <Button variant="outline">Download</Button>
                          </div>

                          <div className="flex items-center justify-between p-4 border rounded-lg border-destructive/20">
                            <div>
                              <h4 className="font-medium text-destructive">Delete Account</h4>
                              <p className="text-sm text-muted-foreground">Permanently delete your account</p>
                            </div>
                            <Button variant="destructive">Delete</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </main>
        </div>
      </div>
    
  )
}
