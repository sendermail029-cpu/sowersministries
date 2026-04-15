import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'SOWERS Ministry | Serving Orphans Widows Educating & Reaching Society',
    template: '%s | SOWERS Ministry',
  },
  description: 'SOWERS Ministry — Serving Orphans Widows Educating & Reaching Society. Founded in 2001 by Rev. Jayakumar Babu Salluri, we plant churches, train pastors, and care for orphans and widows across India.',
  // Added more specific and regional keywords
  keywords: [
    'SOWERS Ministry', 
    'Christian ministry India', 
    'India missions', 
    'pastor training', 
    'orphanage support India', 
    'widow welfare', 
    'church planting', 
    'Pastor Jay', 
    'Jayakumar Babu Salluri',
    'charitable trust India',
    'evangelism',
    'social work Vijayawada',
    'rural outreach missions'
  ],
  // This adds the logo.svg to your browser tab
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sowersministry.com',
    siteName: 'SOWERS Ministry',
    images: [
      {
        url: '/logo.svg', // Good for social sharing previews
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* The favicon link is also handled by Next.js Metadata API, but manual link for safety: */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <Script id="donorbox-popup-config-global" strategy="afterInteractive">
          {`window.DonorBox = { widgetLinkClassName: 'custom-dbox-popup' };`}
        </Script>
        <Script
          src="https://donorbox.org/install-popup-button.js"
          strategy="afterInteractive"
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}