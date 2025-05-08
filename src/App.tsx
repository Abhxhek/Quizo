import { Route, Routes, useNavigate } from "react-router"
import { routeDefination } from "./routes/routeDefination";
import { Layout } from "./common/layout/Layout";


const ProtectedRoutes = ({ element }: any) => {
  const navigate = useNavigate();

  // if (!token) {
  //   navigate("/login");
  // }
  return element;
}

function App() {
  return (
    <Routes>
      {
        routeDefination.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ProtectedRoutes element={<Layout>{route.element}</Layout>} />}
          />
        ))
      }
    </Routes>

  )
}

export default App
