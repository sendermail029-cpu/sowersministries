'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinksBeforeEvents = [
  { label: 'Home', href: '/' },
  { label: 'About Sowers', href: '/about-sowers' },
  { label: 'Sowers Village', href: '/sowers-village' },
  { label: 'About Pastor Jay', href: '/about-pastor-jay' },
  { label: 'Church Network', href: '/church-network' },
  { label: 'Board of Directors', href: '/board-of-directors' },
]

const navLinksAfterEvents = [
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Contact', href: '/contact' },
]

const eventLinks = [
  { label: 'Christmas Joy', href: '/events/christmas-joy' },
  { label: 'Gallery', href: '/gallery' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isIndiaMode =
    pathname === '/india-open' || pathname.startsWith('/india-open/')

  const getHref = (href: string) => {
    if (!isIndiaMode) return href
    if (href === '/') return '/india-open'
    return `/india-open${href}`
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textColorClass = scrolled ? 'text-black lg:text-white' : 'text-white'

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-md shadow-md py-2 lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:py-4'
          : 'bg-[linear-gradient(180deg,rgba(10,16,44,0.55)_0%,rgba(10,16,44,0.22)_60%,transparent_100%)] py-4 lg:bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex h-16 items-center">
          <Link
            href={getHref('/')}
            className="hidden lg:flex shrink-0 items-center pr-6"
          >
            <Image
              src="/logo-opt.webp"
              alt="SOWERS Ministry logo"
              width={293}
              height={84}
              priority
              className="h-12 xl:h-14 2xl:h-16 w-auto"
            />
          </Link>

          <Link
            href={getHref('/')}
            className="flex lg:hidden shrink-0 items-center"
          >
            <Image
              src="/logo-opt.webp"
              alt="SOWERS Ministry logo"
              width={293}
              height={84}
              priority
              className="h-14 sm:h-16 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex min-w-0 flex-1 items-center justify-center gap-1 xl:gap-2 px-2">
            {navLinksBeforeEvents.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className={`relative px-2 xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 group ${textColorClass}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button
                type="button"
                className={`relative flex items-center gap-1 px-2 xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 group ${textColorClass}`}
              >
                Events
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${
                    eventsOpen ? 'rotate-180' : ''
                  }`}
                />
                <span className="absolute bottom-0 left-2 right-2 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <div
                className={`absolute left-1/2 top-full z-50 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-white/15 bg-white/95 p-2 shadow-2xl backdrop-blur-md transition-all duration-200 ${
                  eventsOpen
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0'
                }`}
              >
                {eventLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={getHref(link.href)}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cream-50 hover:text-gold-700"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinksAfterEvents.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className={`relative px-2 xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-[14px] font-sans font-semibold tracking-tight whitespace-nowrap transition-colors duration-300 group ${textColorClass}`}
              >
                {link.label}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 origin-left scale-x-0 bg-gold-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex shrink-0 items-center pl-6">
            <Link
              href={getHref('/donate')}
              className={`rounded-full px-5 xl:px-6 2xl:px-7 py-2.5 text-sm font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105 shadow-lg ${
                scrolled
                  ? 'bg-black text-white hover:bg-gold-600 lg:bg-gold-500 lg:text-black lg:hover:bg-white'
                  : 'bg-gold-500 text-black hover:bg-white'
              }`}
            >
              Donate Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`ml-auto lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors ${
              scrolled
                ? 'border-black/10 bg-black/5 text-black'
                : 'border-white/15 bg-white/10 text-white backdrop-blur-sm'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[rgba(255,255,255,0.96)] backdrop-blur-xl shadow-2xl"
          >
            <nav className="flex flex-col gap-2 px-5 py-6">
              {navLinksBeforeEvents.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={getHref(link.href)}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-lg font-semibold text-navy-950 transition hover:border-[#d9d5ca] hover:bg-[#f8f3e7]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinksBeforeEvents.length * 0.03 }}
                className="py-1"
              >
                <button
                  type="button"
                  onClick={() => setEventsOpen((current) => !current)}
                  className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-lg font-semibold text-navy-950 transition hover:bg-[#f8f3e7]"
                >
                  Events
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      eventsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {eventsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden pl-4"
                    >
                      {eventLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={getHref(link.href)}
                          onClick={() => {
                            setIsOpen(false)
                            setEventsOpen(false)
                          }}
                          className="block rounded-xl px-4 py-3 text-base font-medium text-navy-950/80 transition hover:bg-[#f8f3e7]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinksAfterEvents.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (navLinksBeforeEvents.length + 1 + i) * 0.03,
                  }}
                >
                  <Link
                    href={getHref(link.href)}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-lg font-semibold text-navy-950 transition hover:border-[#d9d5ca] hover:bg-[#f8f3e7]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                href={getHref('/donate')}
                onClick={() => setIsOpen(false)}
                className="mt-5 rounded-2xl bg-gold-500 px-4 py-4 text-center text-lg font-bold text-black shadow-[0_14px_30px_rgba(214,172,77,0.28)]"
              >
                Donate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}