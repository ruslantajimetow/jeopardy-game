import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { auth } from '@/auth';

export default async function UserButton() {
  const randomId = Math.floor(Math.random() * 1000);
  const randomImageUrl = `https://picsum.photos/100?random=${randomId}`;
  const session = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={randomImageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px]">
        <DropdownMenuLabel>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="font-bold">{session?.user?.name}</span>
            <span className="text-muted-foreground">
              {session?.user?.email}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Results</DropdownMenuItem>
        <DropdownMenuItem>Theme</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
