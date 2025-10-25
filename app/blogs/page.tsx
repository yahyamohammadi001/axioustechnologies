"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Search, Calendar, User, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { blogsPosts, categories, BlogPost } from "@/lib/blog-data"

const sortOptions = ["Most Recent", "Most Popular", "Alphabetical"]

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState("All")
  // const [selectedSort, setSelectedSort] = useState("Most Recent")

  const filteredPosts = blogsPosts
    .filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      // const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

      return matchesSearch
    })
    .sort((a, b) => {
      // switch (selectedSort) {
      //   case "Most Recent":
      //     return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      //   case "Most Popular":
      //     return b.views - a.views
      //   case "Alphabetical":
      //     return a.title.localeCompare(b.title)
      //   default:
      //     return 0
      // }
      return 0;
    })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="container mx-auto py-6">
      <main>
            {/* Header Section */}
            <section className="py-12 px-10 bg-card">
              <div className="max-w-12px mx-auto">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-3" />
                  <h1 className="font-playfair font-bold text-4xl">Project Management Blog</h1>
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                  Insights, tutorials, and best practices from industry experts
                </p>

                {/* Search and Filters */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full pl-10 pr-4 py-2 rounded-md"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="py-8 px-6 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featuredPosts.slice(0, 3).map((post) => (
                      <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                        <div className={`aspect-video rounded-t-lg overflow-hidden flex items-center justify-center ${post.id === 'monday-com-pm' || post.id === 'trello-for-agile' || post.id === 'notion-pm-tips' ? 'bg-white p-4' : 'bg-muted'}`}>
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className={`w-full h-full ${post.id === 'monday-com-pm' || post.id === 'trello-for-agile' || post.id === 'notion-pm-tips' ? 'object-contain max-w-[80%] max-h-[80%]' : 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2 flex-wrap">
                            <Badge variant="destructive">Featured</Badge>
                            <Badge variant="outline">{post.category}</Badge>
                          </div>
                          <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors line-clamp-2 break-words">
                            <Link href={post.id === "monday-com-pm" ? "/blogs/monday-com" : post.id === "trello-for-agile" ? "/blogs/trello" : "/blogs/notion"}>{post.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-sm line-clamp-2 break-words">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          {/* <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{new Date(post.publishedAt).toLocaleDateString("en-GB")}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div> */}
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1 min-w-0">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs text-wrap break-words">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                              <Link href={post.id === "monday-com-pm" ? "/blogs/monday-com" : post.id === "trello-for-agile" ? "/blogs/trello" : "/blogs/notion"}>
                                Read More
                                <ArrowRight className="h-3 w-3 ml-1" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* All Posts */}
            <section className="py-8 px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">All Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.jpg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "/agile-scrum-course.jpg";
                          }}
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{post.category}</Badge>
                          {/* <span className="text-xs text-muted-foreground">{post.views} views</span> */}
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2 break-words">
                          <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-2 break-words">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        {/* <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <img
                              src={post.authorAvatar || "/placeholder.svg"}
                              alt={post.author}
                              className="w-6 h-6 rounded-full mr-2"
                            />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span>{new Date(post.publishedAt).toLocaleDateString("en-GB")}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div> */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1 min-w-0">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs text-wrap break-words">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                            <Link href={`/blogs/${post.id}`}>
                              Read
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
      </main>
    </div>
  )
}