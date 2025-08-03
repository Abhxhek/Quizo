import { Button } from "@/components/ui/button"
import { Brain, Moon, Sun } from "lucide-react"
import { useTheme } from "../components/theme-provider"
import { NavLink, useNavigate } from "react-router"
import { NavBarItems } from "./NavBarItems"
import { useUserStore } from "@/store/useUserStore"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { logout } from "@/services/apiServices"

export const Navbar = () => {
  const { setTheme, theme } = useTheme()
  const navigate = useNavigate()
  const user = useUserStore((state) => state.user)
  const clearUser = useUserStore((state) => state.clearUser)

  const handleNavigation = (url: string) => {
    navigate(url)
  }

  const handleLogout = () => {
    clearUser()
    // Optional: clear token from localStorage/session if needed
    logout()
  }

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
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center rounded-sm transition-colors duration-200`}
              >
                <div>{item.icon}</div>
                <span className="ml-2 font-semibold whitespace-nowrap">
                  {item.name}
                </span>
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Conditional Rendering: User Logged In or Not */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden md:inline-block text-sm font-medium text-muted-foreground">
                Welcome, {user.username}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer h-8 w-8">
                    <AvatarImage src="" alt={user.username} />
                    <AvatarFallback>
                      {user.username?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex"
                onClick={() => navigate("/auth", { state: { type: "login" } })}
              >
                Log In
              </Button>
              <Button
                size="sm"
                className="bg-orange-500"
                onClick={() =>
                  navigate("/auth", { state: { type: "signup" } })
                }
              >
                Sign Up Free
              </Button>
            </>
          )}

          {/* Theme Toggle */}
          {theme === "light" ? (
            <Button variant="ghost" onClick={() => setTheme("dark")}>
              <Moon size={22} />
            </Button>
          ) : (
            <Button variant="ghost" onClick={() => setTheme("light")}>
              <Sun size={22} />
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
