import { useLocation } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// Assuming these are your component and service imports
import { Login } from "./components/Login";
import Signup from "./components/Signup";
import { postData } from "@/services/apiServices";
import Cookies from "js-cookie"
import { useUserStore } from "@/store/useUserStore";

// Define a basic type for the form data for better type safety.
// You can make this more specific to your form fields.
type AuthFormData = {
    [key: string]: any;
};

const Auth = () => {
    const location = useLocation();
    // Default to "login" if no state is passed
    const type = location?.state?.type || "login";
    const setUser = useUserStore((state) => state.setUser)

    /**
     * Mutation for handling user login.
     * It calls the postData service with the /login endpoint.
     */
    const { mutateAsync: mutateLogin } = useMutation({
        mutationKey: ["mutateLogin"],
        mutationFn: async (data: AuthFormData) => await postData(`auth/login`, data, {}, false),
        onSuccess: (res) => {
            Cookies.set("authToken", res?.data?.token)
            setUser(res?.data?.user)
            // Show a success message on successful login
            toast.success("Login successful! Welcome back.");
            // Here you would typically handle routing or updating global auth state
        },
        onError: (error: any) => {
            // Show an error message on failure
            const errorMessage = error?.response?.data?.message || "Login failed. Please check your credentials.";
            toast.error(errorMessage);
        }
    });

    /**
     * Mutation for handling user signup.
     * It calls the postData service with the /signup endpoint.
     */
    const { mutateAsync: mutateSignup } = useMutation({
        mutationKey: ["mutateSignup"],
        mutationFn: async (data: AuthFormData) => await postData(`auth/register`, data, {}, false),
        onSuccess: () => {
            // Show a success message on successful signup
            toast.success("Signup successful! You can now log in.");
            // Here you might want to redirect the user to the login page
        },
        onError: (error: any) => {
            // Show an error message on failure
            const errorMessage = error?.response?.data?.message || "Signup failed. Please try again.";
            toast.error(errorMessage);
        }
    });

    /**
     * Handler function to be called from the Login component's form submission.
     * It triggers the login mutation.
     * @param data - The form data from the login form.
     */
    const handleLogin = async (data: AuthFormData) => {
        console.log({ data })
        try {
            await mutateLogin(data);
        } catch (error) {
            // Error is already handled by the onError callback in useMutation,
            // but you can add more specific logic here if needed.
            console.error("Login mutation failed:", error);
        }
    };
    //     email
    // : 
    // "dodo@gmail.com"
    // password
    // : 
    // "password@123"
    // username
    // : 
    // "dodo"

    /**
     * Handler function to be called from the Signup component's form submission.
     * It triggers the signup mutation.
     * @param data - The form data from the signup form.
     */
    const handleSignup = async (data: AuthFormData) => {
        console.log({ data })
        try {
            await mutateSignup(data);
        } catch (error) {
            // Error is already handled by the onError callback in useMutation.
            console.error("Signup mutation failed:", error);
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center mt-10 transition-all duration-200">
            {/* Conditionally render Login or Signup component based on the 'type'
              and pass the corresponding handler function as a prop.
            */}
            {type === "login" ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Signup onSignup={handleSignup} />
            )}
        </div>
    );
};

export default Auth;
