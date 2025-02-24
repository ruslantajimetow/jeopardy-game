'use client';

import { Button } from '@/components/ui/button';
import { startNewGame } from '@/lib/actions/result.actions';
import { toast } from 'sonner';

export default function StartNewGame({ userId }: { userId: string }) {
  const onStartNewGame = async () => {
    const res = await startNewGame(userId!);
    if (res.success) {
      toast.success('New game', {
        description: res.message,
        duration: 2000,
      });
    }
  };
  return (
    <Button onClick={onStartNewGame} variant="outline">
      New Game
    </Button>
  );
}
