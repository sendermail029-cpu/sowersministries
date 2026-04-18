import { NextResponse, type NextRequest } from 'next/server'
import { geolocation } from '@vercel/functions'

const INDIA_PREFIX = '/india-open'

function isPublicAsset(pathname: string) {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/manifest.json' ||
    /\.(png|jpg|jpeg|gif|webp|svg|ico|bmp|avif|mp4|webm|pdf|txt|xml|css|js|map|woff|woff2|ttf|eot)$/i.test(pathname)
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

  // Allow static files, images, fonts, internals
  if (isPublicAsset(pathname)) {
    return NextResponse.next()
  }

  // Allow admin everywhere
  if (isAdminPath(pathname)) {
    return NextResponse.next()
  }

  // Allow india-open routes and rewrite them to existing pages
  if (pathname === INDIA_PREFIX || pathname.startsWith(`${INDIA_PREFIX}/`)) {
    const url = request.nextUrl.clone()
    url.pathname = stripIndiaPrefix(pathname)
    return NextResponse.rewrite(url)
  }

  // Block normal site in India
  if (country === 'IN') {
    return new NextResponse('This website is not available in India.', {
      status: 403,
    })
  }

  // Allow rest of world
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}