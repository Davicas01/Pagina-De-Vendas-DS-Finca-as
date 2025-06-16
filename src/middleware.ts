import { NextRequest, NextResponse } from 'next/server';

/**
 * Simple Next.js Middleware for basic security
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Basic Security Headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
