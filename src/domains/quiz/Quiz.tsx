import CustomPagination from "@/common/components/CustomPagination";
import QuizTable from "./components/QuizTable";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/services/apiServices";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function Quiz() {
    const limit = 10;
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [searchTerm, setSearchTerm] = useState<string>("")

    const { data: getQuizes } = useQuery({
        queryKey: ["getQuizes",  currentPage, limit, searchTerm],
        queryFn: async () => {
            const result = await getData(`Quiz/getQuiz?page=${currentPage}&limit=${limit}&title=${searchTerm}`)
            return result?.data;
        }
    })

    const handlePage = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className="w-full mt-4">
            <div className="flex w-full flex-col items-center gap-4">
                <header className="max-w-6xl w-full min-w-xs">
                    <Input
                        placeholder="Search by quiz title..."
                        className="max-w-md w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </header>
                <QuizTable data={getQuizes?.data} />
                <CustomPagination
                    totalPages={getQuizes?.totalPages || 0}
                    currentPage={currentPage}
                    onPageChange={handlePage}
                />
            </div>
        </div>
    )
}
