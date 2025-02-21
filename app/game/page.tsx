import QuestionDialog from '@/components/shared/question-dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { getAllQuestions } from '@/lib/actions/question.action';
import { Question } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game section',
};

export default async function Game() {
  const allQuestions = await getAllQuestions();
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h2 className="h2-bold mb-2">Game Board</h2>
      </div>
      <Table>
        <TableCaption>Enjoy Your Game</TableCaption>
        <TableBody>
          {allQuestions.map((item, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{item.category}</TableCell>
              {item.questions.map((question: Question, i) => (
                <TableCell key={i} className="font-medium text-center">
                  <QuestionDialog
                    triggerTitle={question.score.toString()}
                    question={question.question}
                    answers={question.answers}
                    categoryName={item.category}
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
