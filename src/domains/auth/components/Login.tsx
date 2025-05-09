import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router"

interface FormData {
    email: string,
    password: string,
}

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        email: "",
        password: ""
    })
    console.log({ formData })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="w-full flex items-center justify-center p-4">
            <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl shadow-xl">
                {/* Left side with illustration */}
                <div className="relative hidden w-1/2  p-8 lg:block ">
                    <div className="absolute left-6 top-6">
                        <img src="/vite.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
                    </div>
                    <div className="flex h-full items-center justify-center shadow-xl rounded-3xl">

                        <img
                            src="/firstStep.png"
                            alt="Colorful robot illustration"
                            width={400}
                            height={400}
                            className="rounded-3xl"
                        />
                    </div>
                </div>

                {/* Right side with login form */}
                <div className="w-full p-8 lg:w-1/2 " >
                    <div className="max-w-md">
                        <h1 className="mb-6 text-4xl font-bold">Sign in</h1>
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-px flex-1 bg-gray-200"></div>
                            <span className="text-sm text-gray-500">Sign in with Open account</span>
                            <div className="h-px flex-1 bg-gray-200"></div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Enter your email</Label>
                                <Input
                                    value={formData?.email}
                                    name="email"
                                    type="email"
                                    placeholder="✉️ tom@uill.net"
                                    className="py-6"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Enter your password</Label>
                                <Input
                                    value={formData?.password}
                                    name="password"
                                    type="password"
                                    placeholder="🔐 ••••••••••••••"
                                    className="py-6"
                                    onChange={handleChange}
                                />
                            </div>
                            <Button className="w-full bg-blue-600 py-6 text-white hover:bg-blue-700">Sign In</Button>
                            <div className="flex justify-between">
                                <div className="lg:hidden">
                                    <img src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-8" />
                                </div>
                                <div className="text-sm flex gap-2">
                                    Don&apos;t have an account?{" "}
                                    <p onClick={() => navigate('/auth', { state: { type: "signup" } })} className="font-semibold text-blue-600 hover:cursor-pointer">
                                        Sign up
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
