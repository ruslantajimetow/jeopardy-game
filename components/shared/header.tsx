import Link from 'next/link';
import { Button } from '../ui/button';
import { auth } from '@/auth';
import UserButton from './user-button';
import { ThemeModeToggle } from './theme-button';

export default async function Header() {
  const session = await auth();

  return (
    <header className="w-full">
      <div className="flex wrapper justify-between items-center">
        <div className="logo">
          <h1 className="font-bold">
            <Link href="/">JEOPARDY</Link>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <ThemeModeToggle />
          </div>
          <div>
            <Button asChild>
              <Link href="/results">Results</Link>
            </Button>
          </div>
          {session?.user ? (
            <>
              <UserButton />
            </>
          ) : (
            <div>
              <Button asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
