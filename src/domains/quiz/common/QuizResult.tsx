// --- Child Component: QuizResult ---

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy } from "lucide-react";
import { useNavigate } from "react-router";

// This component displays the final score report. (No changes needed here)
export const QuizResult = ({ score, totalQuestions, quizTitle, onRestart }: { score: number, totalQuestions: number, quizTitle: string, onRestart: () => void }) => {
  const navigate = useNavigate();
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="text-2xl mt-4">Quiz Completed!</CardTitle>
        <CardDescription>You've successfully finished the "{quizTitle}" quiz.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-4xl font-bold">You scored {score} / {totalQuestions}</p>
        <div className="text-muted-foreground">
          <p>Correct Answers: {score}</p>
          <p>Incorrect Answers: {totalQuestions - score}</p>
        </div>
      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-2 w-full justify-end">
        <Button variant="outline" className="" onClick={() => navigate('/quizes')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Quizzes
        </Button>
        <Button className="" onClick={onRestart}>Try Again</Button>
      </CardFooter>
    </Card>
  );
};