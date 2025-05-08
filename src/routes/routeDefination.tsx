import HomePage from "@/domains/homePage/HomePage";
import type { ReactNode } from "react";

interface RouteDefination {
    path: string,
    element: ReactNode,
}

export const routeDefination: RouteDefination[] = [
    { path: "/", element: <HomePage /> },

]

