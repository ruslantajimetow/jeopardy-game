import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogOutIcon, NotebookIcon, UserIcon } from 'lucide-react';
import { signOutAction } from '@/lib/actions/user.actions';

export default function UserButton({
  userName,
  email,
}: {
  userName: string;
  email: string;
}) {
  const randomId = Math.floor(Math.random() * 1000);
  const randomImageUrl = `https://picsum.photos/100?random=${randomId}`;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer">
          <AvatarImage src={randomImageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-bold">{userName}</span>
            <span className="text-muted-foreground">{email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="link" asChild>
            <Link href="/user/profile">
              <UserIcon /> Profile
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="link" asChild>
            <Link href="/results">
              <NotebookIcon /> Results
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex justify-center">
          <form action={signOutAction}>
            <Button variant="destructive">
              <LogOutIcon /> Sign Out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
