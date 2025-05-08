import { Button } from "@/components/ui/button"
import { Brain, Moon, Sun } from "lucide-react"
import { Link } from "react-router"
import { useTheme } from "../utils/theme-provider"

export const Layout = ({ children }: any) => {

    const { setTheme, theme } = useTheme()
    console.log({ theme })

    return (
        <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
            <header className="px-22 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Brain className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold">QuizGenius</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link to="#features" className="text-sm font-medium hover:text-primary transition-colors">
                            Features
                        </Link>
                        <Link to="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                            How It Works
                        </Link>
                        <Link to="#categories" className="text-sm font-medium hover:text-primary transition-colors">
                            Categories
                        </Link>
                        <Link to="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                            Testimonials
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="hidden md:flex">
                            Log In
                        </Button>
                        <Button size="sm" className="bg-orange-500">Sign Up Free</Button>
                        {
                            theme === "light" ? <Button variant={"ghost"} onClick={() => setTheme("dark")}>
                                <Moon size={22} />
                            </Button> : <Button variant={"ghost"} onClick={() => setTheme("light")}>
                                <Sun size={22} />
                            </Button>
                        }
                    </div>
                </div>  
            </header>
            <main className="w-full flex justify-center">
                {children}
            </main>
        </div>
    )
}
