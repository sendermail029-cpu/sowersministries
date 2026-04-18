import { NextResponse, type NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'

const INDIA_PREFIX = '/india-open'

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  )
}

function isAdminPath(pathname: string) {
  return pathname === '/admin' || pathname.startsWith('/admin/')
}

function stripIndiaPrefix(pathname: string) {
  if (pathname === INDIA_PREFIX) return '/'
  return pathname.replace(/^\/india-open/, '') || '/'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const { country } = geolocation(request)

  if (isPublicAsset(pathname)) {
    return NextResponse.next()
  }

  if (isAdminPath(pathname)) {
    return NextResponse.next()
  }

  if (pathname === INDIA_PREFIX || pathname.startsWith(`${INDIA_PREFIX}/`)) {
    const url = request.nextUrl.clone()
    url.pathname = stripIndiaPrefix(pathname)
    return NextResponse.rewrite(url)
  }

  if (country === 'IN') {
    return new NextResponse('This website is not available in India.', {
      status: 403,
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}