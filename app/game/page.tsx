import QuestionDialog from '@/components/shared/question-dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { jeopardyCategories } from '@/db/sample-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game section',
};

export default function Game() {
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <h2 className="h2-bold mb-2">Game Board</h2>
      </div>
      <Table>
        <TableCaption>Enjoy Your Game</TableCaption>
        <TableBody>
          {jeopardyCategories.map((item, i) => (
            <TableRow>
              <TableCell key={i} className="font-medium">
                {item.category}
              </TableCell>
              {item.questions.map((question, i) => (
                <TableCell key={i} className="font-medium">
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
