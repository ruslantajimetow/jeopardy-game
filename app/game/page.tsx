import QuestionDialog from '@/components/shared/question-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { jeopardyCategories } from '@/db/sample-data';

export default function Game() {
  return (
    <div>
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
