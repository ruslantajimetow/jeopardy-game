import { NextResponse } from 'next/server';

export async function middleware(req: any) {
  const protectedPaths = [/\/game/, /\/results/, /\/user\/(.*)/];

  const url = req.nextUrl.clone();

  const isProtected = protectedPaths.some((p) => p.test(url.pathname));

  const auth =
    req.cookies.get(process.env.SECURE_AUTH_COOKIE) ||
    req.cookies.get('authjs.session-token');

  if (!auth && isProtected) {
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }
}
