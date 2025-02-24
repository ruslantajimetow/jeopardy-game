'use client';

import { Button } from '@/components/ui/button';
import { startNewGame } from '@/lib/actions/result.actions';
import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader } from 'lucide-react';

export default function StartNewGame({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();
  const onStartNewGame = async () => {
    startTransition(async () => {
      const res = await startNewGame(userId!);
      if (res.success) {
        toast.success('New game', {
          description: res.message,
          duration: 2000,
        });
      }
    });
  };
  return (
    <Button
      disabled={isPending}
      onClick={onStartNewGame}
      variant="outline"
      className="w-[100px]"
    >
      {isPending ? <Loader className="w-5 h-5 animate-spin" /> : 'New Game'}
    </Button>
  );
}
