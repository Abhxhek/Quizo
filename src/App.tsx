import { Navigate, Route, Routes, useNavigate } from "react-router"
import { routeDefination } from "./routes/routeDefination";
import { Layout } from "./common/layout/Layout";
import Cookies from "js-cookie";
import HomePage from "./domains/homePage/HomePage";
import Auth from "./domains/auth/Auth";


const ProtectedRoutes = ({ element }: any) => {
  const token = Cookies.get("authToken")
  // if (!token) {
  //   return <Navigate to={"/auth"} replace />;
  // }

  return element;
}

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout>{<HomePage />}</Layout>} />
      <Route path={"/auth"} element={<Layout>{<Auth />}</Layout>} />
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
