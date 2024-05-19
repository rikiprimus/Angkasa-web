
import { NextResponse } from 'next/server';
// import { getToken } from '@/lib/api/auth';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  
  console.log(token)
  const loginUrl = '/sign-in';

  const protectedPaths = ['/home', '/my-booking', '/payment', '/method', '/booking-pass', '/edit-profile'];

  // Redirect to home if the user is already authenticated and tries to access the login page
  if (protectedPaths.includes(req.nextUrl.pathname)) {
    // If there's no token, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL(loginUrl, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home', '/my-booking', '/payment', '/method', '/booking-pass', '/edit-profile'], 
};
