import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = request.nextUrl.pathname;

  // If the path is not found, redirect to the 404 page
  // This is a fallback in case the built-in Next.js 404 handling doesn't work
  if (path.startsWith('/_next') || path.includes('/api/')) {
    // Skip middleware for Next.js internal routes
    return NextResponse.next();
  }

  // Continue to the requested page
  return NextResponse.next();
}

// Configure the paths that this middleware should run on
export const config = {
  matcher: [
    // Match all routes except for
    // - API routes (/api/...)
    // - Static files routes (/_next/static/...)
    // - Internal Next.js routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};