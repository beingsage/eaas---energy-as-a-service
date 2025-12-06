import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/dashboard') || pathname.startsWith('/api/protected')) {
    const token = request.cookies.get('session_id')?.value

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // Optional: minimal verification can be implemented here without requiring MongoDB.
    // For now: just check for presence of session cookie to avoid pulling server-side modules into Edge runtime.
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
}
