import { Button } from "@/components/ui/button"
import { Route, Routes, useNavigate } from "react-router"

const protectedRoutes = ({ element }: any) => {
  const navigaete = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigaete("/login");
  }

  return element;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={""} />
      
    </Routes>

  )
}

export default App
