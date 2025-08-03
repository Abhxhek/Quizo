
import Attempt from "@/domains/quiz/components/Attempt";
import Quiz from "@/domains/quiz/Quiz";
import Topics from "@/domains/Topics/Topics";
import type { ReactNode } from "react";

interface RouteDefination {
    path: string,
    element: ReactNode,
}

export const routeDefination: RouteDefination[] = [
    { path: "/topics", element: <Topics /> },
    { path: "/quizes", element: <Quiz /> },
    { path: "/attempt/:id", element: <Attempt /> },

]

