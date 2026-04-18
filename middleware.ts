import { NextResponse, type NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { country } = geolocation(request)

  // Allow Next.js internal files
  if (
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  // Allow India access page
  if (pathname === '/india-open' || pathname.startsWith('/india-open/')) {
    return NextResponse.next()
  }

  // Allow admin panel (for you in India)
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return NextResponse.next()
  }

  // Block India for everything else
  if (country === 'IN') {
    return new NextResponse('This website is not available in India.', {
      status: 403,
    })
  }

  // Allow all other countries
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}