// --- Child Component: QuizSkeleton ---

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// This component shows a loading state while data is being fetched. (No changes needed here)
export const QuizSkeleton = () => (
    <Card>
        <CardHeader>
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-3/4 mt-2" />
        </CardHeader>
        <CardContent className="space-y-8">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="border-t pt-6 space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <div className="space-y-3">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-3/4" />
                    </div>
                </div>
            ))}
        </CardContent>
        <CardFooter>
            <Skeleton className="h-10 w-full" />
        </CardFooter>
    </Card>
);