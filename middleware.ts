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
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Access Restricted</title>
          <style>
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              min-height: 100vh;
              font-family: Arial, sans-serif;
              background:
                radial-gradient(circle at top, rgba(214, 172, 77, 0.18), transparent 30%),
                linear-gradient(135deg, #08123a 0%, #0c1f63 100%);
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 24px;
            }
            .card {
              width: 100%;
              max-width: 520px;
              background: rgba(255, 255, 255, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.12);
              border-radius: 24px;
              padding: 36px 28px;
              text-align: center;
              box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
              backdrop-filter: blur(10px);
            }
            .icon-wrap {
              width: 84px;
              height: 84px;
              margin: 0 auto 20px;
              border-radius: 999px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(214, 172, 77, 0.16);
              border: 1px solid rgba(214, 172, 77, 0.4);
            }
            .icon {
              font-size: 38px;
              line-height: 1;
            }
            h1 {
              margin: 0 0 12px;
              font-size: 32px;
              line-height: 1.15;
            }
            p {
              margin: 0 auto 28px;
              max-width: 380px;
              font-size: 17px;
              line-height: 1.6;
              color: rgba(255, 255, 255, 0.86);
            }
            .btn {
              display: inline-block;
              padding: 14px 24px;
              border-radius: 999px;
              background: #d6ac4d;
              color: #111111;
              text-decoration: none;
              font-weight: 700;
              transition: transform 0.2s ease, background 0.2s ease;
            }
            .btn:hover {
              background: #f0c766;
              transform: translateY(-1px);
            }
            .note {
              margin-top: 18px;
              font-size: 13px;
              color: rgba(255, 255, 255, 0.62);
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="icon-wrap">
              <div class="icon">🚫</div>
            </div>
            <h1>Access Restricted</h1>
           <p>Sorry, we are unable to provide access to this content in India.</p>
            <a class="btn" href="/india-open">Go to India Access Page</a>
            <div class="note">SOWERS Ministry</div>
          </div>
        </body>
      </html>
      `,
      {
        status: 403,
        headers: {
          'content-type': 'text/html; charset=utf-8',
        },
      }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}