import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex wrapper justify-between items-center">
        <div className="logo">
          <h1 className="font-bold">
            <Link href="/">JEOPARDY</Link>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <div>Theme</div>
          <div>
            <Button asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
