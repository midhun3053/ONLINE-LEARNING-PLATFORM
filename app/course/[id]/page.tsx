import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, Clock, Download, GraduationCap, Play, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursePage({ params }) {
  // In a real app, you would fetch course data based on the ID
  const courseId = params.id

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="h-6 w-6" />
          <span>LearnHub</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download Materials
          </Button>
        </div>
      </header>
      <div className="grid flex-1 items-start gap-4 p-4 md:grid-cols-[1fr_250px] md:gap-8 md:p-8">
        <div className="grid gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">Web Development Fundamentals</h1>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
            <div className="flex h-full items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <Button size="icon" className="h-12 w-12 rounded-full">
                  <Play className="h-6 w-6" />
                </Button>
                <span className="text-sm font-medium">Play Video</span>
              </div>
            </div>
          </div>
          <Tabs defaultValue="content">
            <TabsList>
              <TabsTrigger value="content">Course Content</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="space-y-4">
              <div className="grid gap-4">
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div className="font-semibold">Module 1: Introduction to HTML</div>
                    <div className="text-sm text-muted-foreground">4 lessons • 45 min</div>
                  </div>
                  <Separator />
                  <div className="p-4">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div className="text-sm">1.1 What is HTML?</div>
                        <div className="ml-auto text-xs text-muted-foreground">10 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div className="text-sm">1.2 Basic HTML Structure</div>
                        <div className="ml-auto text-xs text-muted-foreground">12 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <div className="text-sm">1.3 HTML Elements and Attributes</div>
                        <div className="ml-auto text-xs text-muted-foreground">15 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">1.4 HTML Forms</div>
                        <div className="ml-auto text-xs text-muted-foreground">8 min</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div className="font-semibold">Module 2: CSS Basics</div>
                    <div className="text-sm text-muted-foreground">5 lessons • 60 min</div>
                  </div>
                  <Separator />
                  <div className="p-4">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">2.1 Introduction to CSS</div>
                        <div className="ml-auto text-xs text-muted-foreground">12 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">2.2 CSS Selectors</div>
                        <div className="ml-auto text-xs text-muted-foreground">15 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">2.3 Box Model</div>
                        <div className="ml-auto text-xs text-muted-foreground">10 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">2.4 Flexbox</div>
                        <div className="ml-auto text-xs text-muted-foreground">13 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">2.5 CSS Grid</div>
                        <div className="ml-auto text-xs text-muted-foreground">10 min</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between p-4">
                    <div className="font-semibold">Module 3: JavaScript Fundamentals</div>
                    <div className="text-sm text-muted-foreground">6 lessons • 75 min</div>
                  </div>
                  <Separator />
                  <div className="p-4">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">3.1 Introduction to JavaScript</div>
                        <div className="ml-auto text-xs text-muted-foreground">15 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">3.2 Variables and Data Types</div>
                        <div className="ml-auto text-xs text-muted-foreground">12 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">3.3 Functions</div>
                        <div className="ml-auto text-xs text-muted-foreground">13 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">3.4 DOM Manipulation</div>
                        <div className="ml-auto text-xs text-muted-foreground">15 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">3.5 Events</div>
                        <div className="ml-auto text-xs text-muted-foreground">10 min</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                        <div className="text-sm">3.6 Async JavaScript</div>
                        <div className="ml-auto text-xs text-muted-foreground">10 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4">
                <div className="prose max-w-none dark:prose-invert">
                  <h3>About This Course</h3>
                  <p>
                    Web Development Fundamentals is a comprehensive course designed to introduce you to the core
                    technologies that power the modern web. You'll learn HTML for structure, CSS for styling, and
                    JavaScript for interactivity.
                  </p>
                  <p>
                    By the end of this course, you'll have the skills to build responsive, interactive websites from
                    scratch. You'll understand how the web works and be prepared to dive deeper into advanced web
                    development topics.
                  </p>
                  <h3>What You'll Learn</h3>
                  <ul>
                    <li>HTML structure and semantic elements</li>
                    <li>CSS styling, layouts, and responsive design</li>
                    <li>JavaScript fundamentals and DOM manipulation</li>
                    <li>Building interactive web pages</li>
                    <li>Web development best practices</li>
                  </ul>
                  <h3>Prerequisites</h3>
                  <p>
                    No prior programming experience is required. Basic computer skills and familiarity with using the
                    internet are recommended.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="discussion" className="space-y-4">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Discussion</CardTitle>
                    <CardDescription>
                      Connect with fellow students and instructors to ask questions and share insights.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            className="rounded-full"
                            width={40}
                            height={40}
                            alt="User avatar"
                          />
                          <div className="grid gap-1">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Sarah Johnson</div>
                              <div className="text-xs text-muted-foreground">2 days ago</div>
                            </div>
                            <p className="text-sm">
                              I'm having trouble with the flexbox exercise in Module 2. Can someone explain how to
                              center items both horizontally and vertically?
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                              <Button variant="ghost" size="sm">
                                Reply
                              </Button>
                              <span className="text-xs text-muted-foreground">3 replies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            className="rounded-full"
                            width={40}
                            height={40}
                            alt="User avatar"
                          />
                          <div className="grid gap-1">
                            <div className="flex items-center gap-2">
                              <div className="font-semibold">Michael Chen</div>
                              <div className="text-xs text-muted-foreground">1 week ago</div>
                            </div>
                            <p className="text-sm">
                              The JavaScript section is really well explained! I especially liked the practical examples
                              in the DOM manipulation lesson.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                              <Button variant="ghost" size="sm">
                                Reply
                              </Button>
                              <span className="text-xs text-muted-foreground">5 replies</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>Track your course completion</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-2">
                <Progress value={65} className="h-2" />
                <span className="text-xs font-medium">65%</span>
              </div>
              <div className="grid gap-1 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Module 1 completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                  <span>Module 2 in progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full border border-muted-foreground" />
                  <span>Module 3 not started</span>
                </div>
              </div>
              <Button className="w-full">Continue Learning</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>3 hours total</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>15 lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span>Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>1,245 students</span>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="font-medium">Instructor</div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    className="rounded-full"
                    width={40}
                    height={40}
                    alt="Instructor avatar"
                  />
                  <div>
                    <div className="font-medium">David Wilson</div>
                    <div className="text-xs text-muted-foreground">Senior Web Developer</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

