import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex-center flex-col space-y-20 mt-10">
      <Button asChild>
        <Link href="/game">Start game</Link>
      </Button>
      <Image
        src="/images/jeopardy.png"
        alt="main picture"
        width={500}
        height={300}
      />
    </div>
  );
}
