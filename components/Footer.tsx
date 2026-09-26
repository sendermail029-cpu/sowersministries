import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Mail, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/logo-opt.webp"
                alt="SOWERS Ministry logo"
                width={337}
                height={163}
                className="h-16 w-auto"
              />
            </Link>

            <p className="text-sm leading-relaxed mb-5 text-white/60">
              <span className="text-[#2e8a44] font-semibold">S</span>erving{' '}
              <span className="text-[#2e8a44] font-semibold">O</span>rphans{' '}
              <span className="text-[#2e8a44] font-semibold">W</span>idows{' '}
              <span className="text-[#2e8a44] font-semibold">E</span>ducating &{' '}
              <span className="text-[#2e8a44] font-semibold">R</span>eaching{' '}
              <span className="text-[#2e8a44] font-semibold">S</span>ociety
            </p>

            <p className="text-xs text-white/40 leading-relaxed">
              An international coalition between Christ followers in North America and India, founded in 2001.
            </p>
          </div>

          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5">Ministry</h4>
            <ul className="space-y-3">
              {[
                ['About SOWERS', '/about-sowers'],
                ['Statement of Faith', '/statement-of-faith'],
                ['About Pastor Jay', '/about-pastor-jay'],
                ['Church Network', '/church-network'],
                ['Board of Directors', '/board-of-directors'],
                ['Gallery', '/gallery'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-[#2e8a44] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#2e8a44]/50 rounded-full group-hover:bg-[#6edc5a] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5">Get Involved</h4>
            <ul className="space-y-3">
              {[
                ['Donate', '/donate'],
                ['Christmas Joy', '/events/christmas-joy'],
                ['Contact Us', '/contact'],
                ['Prayer Support', '/contact'],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-[#2e8a44] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#2e8a44]/50 rounded-full group-hover:bg-[#6edc5a] transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-[#2e8a44] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">info@sowersministry.com</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#2e8a44] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">Serving North America & India</span>
              </li>

              <li className="mt-6">
                <a
                  href="https://www.facebook.com/bethelmissionsindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#2e8a44] transition-colors"
                >
                  <Facebook size={16} className="text-[#2e8a44]" />
                  Follow on Facebook
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://donorbox.org/sowers-ministry"
                className="custom-dbox-popup inline-block rounded-full bg-[#2e8a44] px-5 py-2.5 text-sm font-sans font-bold text-white text-center transition-all duration-300 hover:bg-[#6edc5a] hover:text-navy-950"
                aria-label="Open donation form"
              >
                Donate Today
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center lg:text-left">
            Copyright {new Date().getFullYear()} SOWERS Ministry International. All rights reserved.
          </p>
 <a
              href="http://www.pandjtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors"
            >
              <span>Designed &amp; Developed By</span>
              <Image
                src="/pjlogo.png"
                alt="P & J Technologies logo"
                width={24}
                height={24}
                className="h-6 w-6 rounded-sm object-contain"
              />
              <span className="font-semibold text-white/80">P&amp;J Technologies</span>
            </a>
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-6">
            <p className="text-xs text-white/30 flex items-center gap-1 text-center">
              Founded in 2001 | Built with <Heart size={10} className="text-[#2e8a44] fill-[#2e8a44]" /> for the Kingdom
            </p>

           
          </div>
        </div>
      </div>
    </footer>
  )
}