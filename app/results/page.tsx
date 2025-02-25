import { auth } from '@/auth';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllResults } from '@/lib/actions/result.actions';
import { formatId } from '@/lib/utils';

export default async function ResultsPage() {
  const results = await getAllResults();
  const session = await auth();
  const userId = session?.user?.id;
  return (
    <Table>
      <TableCaption>A list of results.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">User Id</TableHead>
          <TableHead className="text-right">Name</TableHead>
          <TableHead className="text-right">Total score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results?.map((result) => (
          <TableRow key={result.id}>
            <TableCell className="text-left">
              <div className="flex items-center">
                {userId === result.userId && (
                  <Badge variant="default">You</Badge>
                )}
                <span>{formatId(result.userId)}</span>
              </div>
            </TableCell>
            <TableCell className="text-right">{result.user.name}</TableCell>
            <TableCell className="text-right">{result.totalScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
