import { auth } from '@/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default async function ProfilePage() {
  const session = await auth();
  if (!session) {
    throw new Error('Not authenticated');
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-2">
            <div>
              <span className="font-semibold">Name:</span> {session.user?.name}
            </div>
            <div>
              <span className="font-semibold">Email:</span>{' '}
              {session.user?.email}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
