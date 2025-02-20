import { Metadata } from 'next';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CredentialsSignInForm from './credentials-signin-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl: string }>;
}) {
  const session = await auth();

  const { callbackUrl } = await searchParams;

  if (session) {
    return redirect(callbackUrl || '/');
  }
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex-center space-y-4">
        <Link href="/" target="_self">
          Jeopardy
        </Link>
        <CardTitle className="text-center">Sign In</CardTitle>
      </CardHeader>
      <CardDescription className="text-center">
        Sign in to your account
      </CardDescription>
      <CardContent className="space-y-4">
        <CredentialsSignInForm />
      </CardContent>
    </Card>
  );
}
