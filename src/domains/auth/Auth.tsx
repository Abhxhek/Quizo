import { useLocation } from "react-router"
import { Login } from "./components/Login"
import Signup from "./components/Signup";

const Auth = () => {
    const location = useLocation();
    const type = location?.state?.type || "login";
  

    return (
        <div className="w-full h-full flex items-center justify-center mt-10 transition-all duration-200">
            {type === "login" ? <Login /> : <Signup />}

        </div>
    )
}

export default Auth