import { Button } from "@/components/ui/button"
import { Brain, Moon, Sun } from "lucide-react"
import { useTheme } from "../utils/theme-provider"
import { NavLink, useNavigate } from "react-router"
import { NavBarItems } from "./NavBarItems"

export const Navbar = () => {
  const { setTheme, theme } = useTheme()
  const navigate = useNavigate();
  const handleNavigation = (title: string, url: string) => {
    navigate(url);
  };

  return (
    <header className="px-22 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">QuizGenius</span>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-4 border p-2 rounded-full">
          {NavBarItems.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.path}
                onClick={() => handleNavigation(item.name, item.path)}
                className={`flex items-center rounded-sm transition-colors duration-200 `}
              >
                <div className="flex-shrink-0 text-center mr-3">
                  {item.icon}
                </div>
                <span className="font-semibold whitespace-nowrap">
                  {item.name}
                </span>
              </NavLink>
            </div>
          ))

          }
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Log In
          </Button>
          <Button size="sm" className="bg-orange-500">Sign Up Free</Button>
          {
            theme === "light" ? <Button variant={"ghost"} onClick={() => setTheme("dark")}>
              <Moon
                size={22} />
            </Button> : <Button variant={"ghost"} onClick={() => setTheme("light")}>
              <Sun size={22} />
            </Button>
          }
        </div>
      </div>
    </header>
  )
}
