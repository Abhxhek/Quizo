import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText } from "lucide-react";
import { useState } from "react";

// --- Type Definitions ---
interface Question {
  _id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
}

interface UserAnswers {
  [questionId: string]: string;
}


export const QuizForm = ({ questions, onFinish }: { questions: Question[], onFinish: (score: number) => void }) => {
    console.log({questions})
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  const handleAnswerChange = (questionId: string, selectedOption: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    let calculatedScore = 0;
    questions?.forEach(question => {
      if (userAnswers[question._id] === question.correctAnswer) {
        calculatedScore++;
      }
    });
    onFinish(calculatedScore); // Pass the final score up to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Attempt Quiz</CardTitle>
          <CardDescription>Answer all the questions below and submit your attempt.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {questions?.map((question, index) => (
            <div key={question._id} className="border-t pt-6">
              <p className="font-semibold mb-4">
                Question {index + 1}: {question.questionText}
              </p>
              <RadioGroup
                value={userAnswers[question._id] || ""}
                onValueChange={(value) => handleAnswerChange(question._id, value)}
                className="space-y-2"
              >
                {question?.options.map((option, optionIndex) => (
                
                  <div key={optionIndex} className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                    <RadioGroupItem value={option} id={`${question._id}-${optionIndex}`} />
                    <Label htmlFor={`${question._id}-${optionIndex}`} className="cursor-pointer flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            <FileText className="mr-2 h-4 w-4" />
            Submit Answers
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};