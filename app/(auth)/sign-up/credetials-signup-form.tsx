'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { signUpAction } from '@/lib/actions/user.actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useSearchParams } from 'next/navigation';

export default function CredentialsSignUpForm() {
  const [data, action] = useActionState(signUpAction, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        variant="default"
        type="submit"
        className="w-full"
      >
        {pending ? 'Signing Up...' : 'Sign Up'}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="********"
          />
        </div>
        <div>
          <SignInButton />
        </div>
        {!data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{' '}
          <Link href="/sign-in" target="_self" className="link">
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
}
