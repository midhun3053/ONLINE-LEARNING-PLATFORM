import Link from "next/link"
import { BookOpen, Clock, GraduationCap, LayoutDashboard, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <GraduationCap className="h-6 w-6" />
          <span>LearnHub</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <form className="relative hidden md:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search courses..." className="w-[200px] pl-8 md:w-[300px] lg:w-[400px]" />
          </form>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Explore
          </Button>
          <Button size="sm">My Courses</Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[250px] flex-col border-r bg-muted/40 md:flex">
          <nav className="grid gap-2 p-4 text-sm">
            <Link href="#" className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <BookOpen className="h-4 w-4" />
              My Courses
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Clock className="h-4 w-4" />
              Schedule
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Community
            </Link>
          </nav>
        </aside>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses Enrolled</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">4 active, 4 completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.5</div>
                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Certificates</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">2 pending completion</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Community</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">12 new discussions</p>
              </CardContent>
            </Card>
          </div>
          <Tabs defaultValue="in-progress">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold tracking-tight">My Learning</h2>
              <TabsList className="ml-auto">
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="saved">Saved</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="in-progress" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Web Development Fundamentals"
                  description="Learn HTML, CSS, and JavaScript basics"
                  image="/placeholder.svg?height=200&width=400"
                  progress={65}
                  category="Development"
                />
                <CourseCard
                  title="Data Science Essentials"
                  description="Introduction to data analysis and visualization"
                  image="/placeholder.svg?height=200&width=400"
                  progress={42}
                  category="Data Science"
                />
                <CourseCard
                  title="UX/UI Design Principles"
                  description="Create user-centered digital experiences"
                  image="/placeholder.svg?height=200&width=400"
                  progress={28}
                  category="Design"
                />
                <CourseCard
                  title="Mobile App Development"
                  description="Build cross-platform mobile applications"
                  image="/placeholder.svg?height=200&width=400"
                  progress={15}
                  category="Development"
                />
              </div>
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Introduction to Python"
                  description="Learn Python programming from scratch"
                  image="/placeholder.svg?height=200&width=400"
                  progress={100}
                  category="Programming"
                  completed
                />
                <CourseCard
                  title="Digital Marketing Basics"
                  description="Master the fundamentals of online marketing"
                  image="/placeholder.svg?height=200&width=400"
                  progress={100}
                  category="Marketing"
                  completed
                />
                <CourseCard
                  title="Photography Fundamentals"
                  description="Learn composition, lighting, and editing"
                  image="/placeholder.svg?height=200&width=400"
                  progress={100}
                  category="Photography"
                  completed
                />
              </div>
            </TabsContent>
            <TabsContent value="saved" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Advanced JavaScript"
                  description="Master modern JavaScript frameworks and patterns"
                  image="/placeholder.svg?height=200&width=400"
                  progress={0}
                  category="Development"
                  saved
                />
                <CourseCard
                  title="Machine Learning Fundamentals"
                  description="Introduction to ML algorithms and applications"
                  image="/placeholder.svg?height=200&width=400"
                  progress={0}
                  category="Data Science"
                  saved
                />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function CourseCard({ title, description, image, progress, category, completed = false, saved = false }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground">{category}</span>
          {completed && (
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-green-500">
              Completed
            </span>
          )}
          {saved && (
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              Saved
            </span>
          )}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!saved && (
          <div className="flex items-center gap-2">
            <Progress value={progress} className="h-2" />
            <span className="text-xs font-medium">{progress}%</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={saved ? "outline" : "default"}>
          {saved ? "Start Course" : completed ? "Review Course" : "Continue Learning"}
        </Button>
      </CardFooter>
    </Card>
  )
}

