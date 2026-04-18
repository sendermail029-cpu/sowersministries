import { NextResponse, type NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { country } = geolocation(request)

  // Allow india-open always
  if (pathname === '/india-open' || pathname.startsWith('/india-open/')) {
    return NextResponse.next()
  }

  // Allow static/internal
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Block India
  if (country === 'IN') {
    return new NextResponse('Not available in India', { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}