import { useState } from 'react';
import { useLocation, useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/services/apiServices";

// --- Shadcn UI & Icon Imports ---
import { Button } from "@/components/ui/button";
import {  ArrowLeft} from 'lucide-react';
import { QuizResult } from '../common/QuizResult';
import { QuizSkeleton } from '../common/QuizSkeleton';
import { QuizForm } from '../common/QuizForm';


// --- Child Component: QuizForm --






// --- Main Parent Component: Attempt ---
export default function Attempt() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const quizId = id || location?.state?.quizId;

  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const { data: getQuizById, isLoading, isError } = useQuery({
    queryKey: ["getQuizById", quizId],
    queryFn: async () => getData(`quiz/getQuizById/${quizId}`)
  });

  const quizData = getQuizById?.data?.data
  console.log({quizData: getQuizById?.data?.data})

  const handleFinishQuiz = (finalScore: number) => {
    setScore(finalScore);
    setIsFinished(true);
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setIsFinished(false);
  };

  const renderContent = () => {
    if (isLoading) {
      return <QuizSkeleton />;
    }

    // if (isError || !quizData) {
    //   return (
    //     <div className="text-center mt-10 text-red-500">
    //       <p>Failed to load the quiz.</p>
    //       <Button variant="outline" className="mt-4" onClick={() => navigate('/quiz')}>
    //         <ArrowLeft className="mr-2 h-4 w-4" />
    //         Back to Quizzes
    //       </Button>
    //     </div>
    //   );
    // }

    if (isFinished) {
      return (
        <QuizResult
          score={score}
          totalQuestions={quizData.questions.length}
          quizTitle={quizData.title}
          onRestart={handleRestartQuiz}
        />
      );
    }

    return (
      <QuizForm
        questions={quizData?.questions}
        onFinish={handleFinishQuiz}
      />
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      {renderContent()}
    </div>
  );
}
