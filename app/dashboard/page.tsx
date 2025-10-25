"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@clerk/nextjs"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  BookOpen,
  Users,
  Briefcase,
  Trophy,
  TrendingUp,
  Calendar,
  Play,
  CheckCircle,
  Target,
  Award,
  BarChart3,
  DollarSign,
  Newspaper,
  PlusCircle,
  MessageSquare,
  UserPlus,
  CheckSquare,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

// Dummy Data
const kpis = {
  totalBlogPosts: "120",
  monthlyVisitors: "15,000",
  affiliateConversions: "240",
  estimatedEarnings: "$4,500",
}

const topPosts = [
  { id: 1, title: "Mastering Project Management: A Beginner's Guide", views: "1.2k", link: "/blogs/post-1" },
  { id: 2, title: "10 Essential Tools for Agile Teams", views: "980", link: "/blogs/post-2" },
  { id: 3, title: "Understanding Affiliate Marketing Funnels", views: "750", link: "/blogs/post-3" },
]

const affiliatePerformance = [
  { id: 1, program: "PM Masterclass", clicks: "5,200", conversions: "80", commissionEarned: "$1,200" },
  { id: 2, program: "Agile Certifications", clicks: "3,100", conversions: "50", commissionEarned: "$800" },
  { id: 3, program: "Advanced Project Strategy", clicks: "1,800", conversions: "30", commissionEarned: "$1,500" },
  { id: 4, program: "Leadership in PM", clicks: "2,500", conversions: "45", commissionEarned: "$1,000" },
]

const recentActivity = [
  { id: 1, icon: Newspaper, description: "New blog post published: 'The Future of Remote Work'", time: "2 hours ago" },
  { id: 2, icon: PlusCircle, description: "New affiliate program added: 'Digital Marketing Masters'", time: "1 day ago" },
  { id: 3, icon: MessageSquare, description: "New comment on 'Project Planning Best Practices'", time: "3 days ago" },
  { id: 4, icon: UserPlus, description: "New user signed up for newsletter", time: "4 days ago" },
]

const todos = [
  { id: 1, task: "Research new affiliate programs for Q4", completed: false },
  { id: 2, task: "Update 'About Us' page content", completed: true },
  { id: 3, task: "Schedule social media posts for next week", completed: false },
  { id: 4, task: "Review Q3 performance report", completed: false },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [todos, setTodos] = useState([
    { id: 1, task: "Research new affiliate programs for Q4", completed: false },
    { id: 2, task: "Update 'About Us' page content", completed: true },
    { id: 3, task: "Schedule social media posts for next week", completed: false },
    { id: 4, task: "Review Q3 performance report", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useUser(); // Get user data from Clerk

  if (!user) return null; // Add loading state if user data is not available yet

  // Client-side check for admin role
  if (user.publicMetadata.role !== "admin") {
    return (
      <div className="flex h-screen bg-background items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair font-bold text-4xl mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-8">You do not have permission to view this page.</p>
          <Link href="/">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTodos([...todos, { id: todos.length + 1, task: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container mx-auto py-6">
      <main className="flex-1 p-6 md:p-8">
            <section className="py-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg shadow-sm mb-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>{user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="font-playfair font-bold text-3xl">Welcome back, {user?.firstName}!</h1>
                    <p className="text-muted-foreground">Here's your affiliate dashboard overview.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* KPI Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.totalBlogPosts}</div>
                  <p className="text-xs text-muted-foreground">+20% from last month</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Visitors</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.monthlyVisitors}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Affiliate Conversions</CardTitle>
                  <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.affiliateConversions}</div>
                  <p className="text-xs text-muted-foreground">+10% from last month</p>
                </CardContent>
              </Card>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Estimated Earnings</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpis.estimatedEarnings}</div>
                  <p className="text-xs text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
            </section>

            {/* Traffic & Engagement */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Visitors Over Time</CardTitle>
                  <CardDescription>Monthly unique visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Chart will go here */}
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    (Chart component)
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Top Performing Blog Posts</CardTitle>
                  <CardDescription>Posts with most views</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between">
                      <Link href={post.link} className="text-sm font-medium hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                      <span className="text-xs text-muted-foreground">{post.views} views</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* Affiliate Performance & Recent Activity */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="lg:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Affiliate Performance</CardTitle>
                  <CardDescription>Overview of your affiliate programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] text-sm">
                      <thead>
                        <tr className="text-left text-muted-foreground">
                          <th className="py-2 pr-2">Program</th>
                          <th className="py-2 px-2">Clicks</th>
                          <th className="py-2 px-2">Conversions</th>
                          <th className="py-2 pl-2 text-right">Commission</th>
                        </tr>
                      </thead>
                      <tbody>
                        {affiliatePerformance.map((program) => (
                          <tr key={program.id} className="border-t border-border/70">
                            <td className="py-3 pr-2 font-medium">{program.program}</td>
                            <td className="py-3 px-2">{program.clicks}</td>
                            <td className="py-3 px-2">{program.conversions}</td>
                            <td className="py-3 pl-2 text-right font-semibold text-primary">{program.commissionEarned}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest updates on your platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <activity.icon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            {/* To-Do / Notes Widget */}
            <section className="mb-8">
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>To-Do / Notes</CardTitle>
                  <CardDescription>Keep track of your tasks and reminders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {todos.map((todo) => (
                    <div key={todo.id} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="form-checkbox h-4 w-4 text-primary rounded"
                      />
                      <p className={`flex-1 text-sm ${todo.completed ? "line-through text-muted-foreground" : ""}`}>
                        {todo.task}
                      </p>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Input
                      type="text"
                      placeholder="Add a new task"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      className="flex-1"
                    />
                    <Button onClick={addTask} disabled={!newTask.trim()}>Add Task</Button>
                  </div>
                </CardContent>
              </Card>
            </section>
      </main>
    </div>
  )
}
