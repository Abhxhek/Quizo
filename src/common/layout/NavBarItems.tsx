import { List } from "lucide-react";
import { FiHome } from "react-icons/fi"
import { SiQuizlet } from "react-icons/si";

export const NavBarItems = [
    {
        name: "Home",
        icon: <FiHome />,
        path: "/",
    },
    {
        name: "Topics",
        icon: <List />,
        path: "/topics",
    },
    {
        name: "Quizes",
        icon: <SiQuizlet />,
        path: "/quizes",
    },
]

