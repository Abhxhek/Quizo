
import Topics from "@/domains/Topics/Topics";
import type { ReactNode } from "react";

interface RouteDefination {
    path: string,
    element: ReactNode,
}

export const routeDefination: RouteDefination[] = [
    { path: "/topics", element: <Topics /> },
]

