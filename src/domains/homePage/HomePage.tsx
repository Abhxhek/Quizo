import { Button } from "@/components/ui/button"
import { Brain, CheckCircle, ChevronRight, Lightbulb, PenTool, Sparkles, Trophy, Users } from "lucide-react"
import { SiPython, SiNodedotjs, SiReact, SiJavascript } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";

const HomePage = () => {
    return (
        <main className="">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-20 flex flex-col items-center">
                <div className="container px-4 md:px-6">
                    <div className="flex items-center justify-between gap-22 flex-wrap lg:flex-nowrap">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center rounded-full border px-3 py-1 text-sm w-56">
                                <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                                <span className="text-xs font-medium">AI-Powered Quiz Platform</span>
                            </div>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                Create, Manage & Attempt Quizzes with <span className="text-orange-500">AI</span>
                            </h1>
                            <p className="text-muted-foreground md:text-xl">
                                Revolutionize your learning experience with our AI-powered quiz platform. Create custom quizzes in seconds, manage your library, and test your knowledge.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="gap-1.5">
                                    Get Started <ChevronRight className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Explore Quizzes
                                </Button>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CheckCircle className="h-4 w-4 text-primary" />
                                    <span>Free plan available</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden w-md h-md shadow-lg">
                                <img

                                    src="/wmremove-transformed.png"
                                    alt="Quiz Platform Dashboard"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl"></div>
                            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/30 blur-2xl"></div>
                        </div>
                    </div>
                </div>
                        <div className="relative w-4 h-8 border-2 border-gray-400 rounded-full animate-bounce mt-10">
                            <p className="absolute bottom-0 left-[5px] text-xl text-gray-400">.</p>
                        </div>
                            <p className="text-sm text-gray-400">Scroll to explore more</p>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                        <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                            <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-medium">Powerful Features</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Everything You Need for Quizzes
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Our platform combines AI technology with user-friendly tools to create the ultimate quiz experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Brain className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">AI Quiz Creation</h3>
                            <p className="text-muted-foreground">
                                Generate professional quizzes in seconds with our advanced AI. Just provide a topic and let the AI do the rest.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <PenTool className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Custom Quiz Editor</h3>
                            <p className="text-muted-foreground">
                                Fine-tune AI-generated quizzes or create your own from scratch with our intuitive editor.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Trophy className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Interactive Quizzes</h3>
                            <p className="text-muted-foreground">
                                Engage with interactive quizzes featuring multiple question types, timers, and instant feedback.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Collaborative Learning</h3>
                            <p className="text-muted-foreground">
                                Share quizzes with friends, classmates, or colleagues. Perfect for group study sessions.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Smart Analytics</h3>
                            <p className="text-muted-foreground">
                                Track your progress with detailed analytics and insights to improve your learning experience.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">AI-Powered Suggestions</h3>
                            <p className="text-muted-foreground">
                                Receive personalized quiz recommendations based on your interests and performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                            <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-medium">Simple Process</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            How QuizGenius Works
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Creating and taking quizzes has never been easier. Follow these simple steps to get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">

                            <img src="/firstStep.png" alt="first step" className="w-77 h-66 rounded-lg mb-2 shadow-md hover:scale-99 transition-all duration-100 " />

                            <h3 className="mb-2 text-xl font-bold">Choose a Topic</h3>
                            <p className="text-muted-foreground">
                                Select a subject or enter a specific topic you want to create a quiz about.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <img src="/secondStep.png" alt="first step" className="w-77 h-66 rounded-lg mb-2 shadow-md hover:scale-99 transition-all duration-100" />
                            <h3 className="mb-2 text-xl font-bold">Generate with AI</h3>
                            <p className="text-muted-foreground">
                                Our AI creates relevant questions and answers based on your chosen topic in seconds.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <img src="/wmremove-transformed.png" alt="first step" className="w-77 h-66 rounded-lg mb-2 shadow-md hover:scale-99 transition-all duration-100" />
                            <h3 className="mb-2 text-xl font-bold">Take or Share</h3>
                            <p className="text-muted-foreground">
                                Take the quiz yourself or share it with others. Track results and improve your knowledge.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 flex justify-center">
                        <Button size="lg" className="gap-1.5">
                            Try It Now <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section id="categories" className="py-20 bg-muted/50">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                        <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
                            <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-medium">Topics</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Explore Quizzes
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Discover quizzes across a wide range of programming languages and topics to expand your knowledge through AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Python */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden flex items-center justify-center text-6xl text-yellow-500">
                                <SiPython />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center">Python</h3>
                            </div>
                        </div>

                        {/* Node.js */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden flex items-center justify-center text-6xl text-green-600">
                                <SiNodedotjs />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center">Node.js</h3>
                            </div>
                        </div>

                        {/* Java */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden flex items-center justify-center text-6xl text-red-600">
                                <SiJavascript />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center">JavaScript</h3>
                            </div>
                        </div>

                        {/* React.js */}
                        <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                            <div className="aspect-video w-full overflow-hidden flex items-center justify-center text-6xl text-cyan-500">
                                <SiReact />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-center">React.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <Button variant="outline" size="lg">
                            View All Categories
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center gap-4 text-center mb-12">
                        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                            <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                            <span className="text-xs font-medium">User Stories</span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            What Our Users Say
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Discover how QuizGenius is transforming learning experiences for users worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="rounded-lg border bg-background p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-2">
                                    {/* <img
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="User Avatar"
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    /> */}
                                    <RxAvatar size={44}/>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Sarah Johnson</h4>
                                    <p className="text-sm text-muted-foreground">Teacher</p>
                                </div>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                "QuizGenius has revolutionized how I create assessments for my students. The AI generates relevant questions in seconds, saving me hours of work each week."
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="rounded-lg border bg-background p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-2">
                                    {/* <img
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="User Avatar"
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    /> */}
                                    <RxAvatar size={44}/>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Michael Chen</h4>
                                    <p className="text-sm text-muted-foreground">Student</p>
                                </div>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                "I use QuizGenius to prepare for exams. The platform helps me identify knowledge gaps and focus my studying on areas where I need improvement."
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="rounded-lg border bg-background p-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-2">
                                    {/* <img
                                        src="/placeholder.svg?height=60&width=60"
                                        alt="User Avatar"
                                        width={60}
                                        height={60}
                                        className="rounded-full"
                                    /> */}
                                    <RxAvatar size={44}/>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Emily Rodriguez</h4>
                                    <p className="text-sm text-muted-foreground">Corporate Trainer</p>
                                </div>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                "Our team uses QuizGenius for employee training and knowledge assessment. The analytics help us track progress and tailor our training programs."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 ">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                            Ready to Transform Your Quiz Experience?
                        </h2>
                        <p className="max-w-[700px] mb-8 md:text-xl">
                            Join thousands of users who are already creating, managing, and taking quizzes with the power of AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="default" className="gap-1.5">
                                Get Started Free <ChevronRight className="h-4 w-4" />
                            </Button>
                      </div>
                    </div>
                </div>
            </section>
                      <p className="text-center text-gray-500">Created By Abhishek with 💌</p>
        </main>
    )
}

export default HomePage