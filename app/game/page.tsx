import { auth } from '@/auth';
import QuestionDialog from '@/components/shared/question-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { getAllQuestions } from '@/lib/actions/question.action';
import { getResultsByUserId, startNewGame } from '@/lib/actions/result.actions';
import { Question, UserResult } from '@/types';
import { Metadata } from 'next';
import { toast } from 'sonner';
import StartNewGame from './start-new-game-btn';

export const metadata: Metadata = {
  title: 'Game section',
};

export default async function Game() {
  const allQuestions = await getAllQuestions();
  const session = await auth();
  if (!session) throw new Error('User unauthorized');
  const userId = session?.user?.id;
  const userResult = await getResultsByUserId(userId!);

  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h2 className="h2-bold mb-2">Game Board</h2>
        {userResult && userResult.questions.length > 0 && (
          <StartNewGame userId={userId!} />
        )}
      </div>
      <Table>
        <TableCaption>Enjoy Your Game</TableCaption>
        <TableBody>
          {allQuestions.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium text-center">
                {item.category}
              </TableCell>
              {item.questions.map((question: Question, i) => (
                <TableCell key={i} className="font-medium text-center">
                  <QuestionDialog
                    triggerTitle={question.score.toString()}
                    question={question.question}
                    answers={question.answers}
                    categoryName={item.category}
                    userId={userId!}
                    score={question.score}
                    correctAnswer={question.correctAnswer}
                    userResult={userResult as UserResult}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
