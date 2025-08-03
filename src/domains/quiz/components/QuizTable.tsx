import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"; // Adjust import path if needed
import { Button } from "@/components/ui/button"; // Adjust import path
import { Hammer } from "lucide-react";
import { useNavigate } from "react-router";
import { formatDate } from "@/common/utils/utils";

// Interface for the data passed to the table
interface TableData {
    _id: string; // Assuming each quiz has a unique ID for navigation
    title: string;
    description: string;
    createdAt: string;
}

// Props for the QuizTable component
interface QuizTableProps {
    data: TableData[];
}

export default function QuizTable({ data }: QuizTableProps) {
    const navigate = useNavigate();

    // Handler for the "Attempt" button click
    const handleAttemptQuiz = (quizId: string) => {
        // Navigate to the quiz attempt page, e.g., /quiz/attempt/:id
        navigate(`/attempt/${quizId}`, { state: { quizId } });
    };




    return (
        <div className="rounded-md border max-w-6xl w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[25%]">Title</TableHead>
                        <TableHead className="w-[45%]">Description</TableHead>
                        <TableHead className="hidden md:table-cell w-[15%]">Date Created</TableHead>
                        <TableHead className="text-right w-[15%]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && data.length > 0 ? (
                        data.map((quiz) => (
                            <TableRow key={quiz._id}>
                                <TableCell className="font-medium">{quiz.title}</TableCell>
                                <TableCell className="text-muted-foreground">{quiz.description}</TableCell>
                                <TableCell className="hidden md:table-cell">{formatDate(quiz.createdAt)}</TableCell>
                                <TableCell className="text-right">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleAttemptQuiz(quiz._id)}
                                    >
                                        <Hammer className="mr-2 h-4 w-4" />
                                        Attempt
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        // Display a message when there is no data
                        <TableRow>
                            <TableCell colSpan={4} className="h-24 text-center">
                                You haven't created any quizzes yet.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}