import type { Metadata } from 'next'
import Image from 'next/image'
import { HeartHandshake, HandCoins } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support SOWERS Ministry. Your gift trains pastors, cares for orphans and widows, and plants churches across India.',
}

export default function DonatePage() {
  return (
    <>
      <section
        className="relative overflow-hidden pb-8 pt-24 sm:pb-12 sm:pt-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(9, 18, 38, 0.48), rgba(9, 18, 38, 0.48)), url('/or2-opt.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,172,77,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto flex min-h-[240px] max-w-4xl items-end justify-center pt-20 text-center sm:min-h-[280px] sm:items-center sm:pt-0 lg:min-h-[340px]">
              <div className="rounded-[1.5rem] border border-white/15 bg-black/15 px-4 py-5 shadow-[0_25px_80px_rgba(15,23,42,0.25)] backdrop-blur-[3px] sm:rounded-[2rem] sm:px-10 sm:py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">Give Now</p>
                <h1 className="mt-3 font-serif text-[1.95rem] leading-tight text-white sm:mt-4 sm:text-5xl md:text-6xl">
                  Your Gift Changes Lives Across India
                </h1>
                <p className="mt-3 text-[0.98rem] leading-7 text-white/85 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
                  Support children, widows, pastors, and village outreach through faithful giving.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section id="donate-form" className="relative overflow-hidden bg-[#fffaf1] py-14 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,172,77,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(10,25,48,0.08),transparent_30%)]" />
        <div className="absolute left-0 top-24 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-navy-950/8 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-[1320px] rounded-[1.5rem] border border-white/80 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:rounded-[2rem] sm:p-8 lg:p-10">
              <div className="mx-auto mb-6 max-w-5xl sm:mb-8">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-400/18 text-gold-600 sm:h-14 sm:w-14">
                    <HandCoins size={22} />
                  </div>
                  <p className="text-base leading-8 text-navy-900/90 sm:text-2xl sm:leading-10">
                    Every gift reaches real lives with care, hope, and the love of Christ.
                  </p>
                </div>
              </div>

              <div className="mx-auto grid w-full max-w-[1120px] gap-6 rounded-[1.3rem] border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:rounded-[1.9rem] sm:p-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.72fr)] lg:p-6">
                <div className="rounded-[1.1rem] bg-[linear-gradient(135deg,#0b1f3f_0%,#15386a_55%,#d8a23f_145%)] px-4 py-6 text-center text-white sm:rounded-[1.5rem] sm:px-8 sm:py-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">Secure Giving</p>
                  <p className="mt-3 font-serif text-[2rem] leading-tight sm:text-5xl">Open the Donorbox donation form</p>
                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:mt-5 sm:text-lg sm:leading-8">
                    Click below to give safely through Donorbox. The donation form will open for one-time or monthly support.
                  </p>
                  <a
                    href="https://donorbox.org/sowers-ministry"
                    className="custom-dbox-popup mt-7 inline-flex w-full max-w-[280px] items-center justify-center rounded-full bg-gold-400 px-8 py-4 text-base font-semibold text-navy-950 shadow-[0_14px_30px_rgba(214,172,77,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold-300 sm:mt-8 sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-lg"
                    aria-label="Open Donorbox donation form"
                  >
                    Donate Now
                  </a>
                  <p className="mt-4 text-sm leading-6 text-white/70 sm:leading-7">
                    Secure popup donation form for one-time or monthly giving.
                  </p>
                </div>

                <div className="rounded-[1.1rem] border border-gold-200/60 bg-[#fffaf1] p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:rounded-[1.5rem] sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-700">Scan to Give</p>
                  <p className="mt-3 font-serif text-3xl leading-tight text-navy-950 sm:text-4xl">
                    Donate using the QR code
                  </p>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-navy-900/72 sm:text-base">
                    You can also scan this QR code from your phone and complete your giving quickly and securely.
                  </p>

                  <div className="mx-auto mt-6 flex max-w-[280px] justify-center rounded-[1.6rem] border border-gold-200/70 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                    <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-[1.1rem]">
                      <Image
                        src="/Sowers Ministry Qr code.webp"
                        alt="SOWERS Ministry donation QR code"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-navy-900/60">
                    Scan the QR code to give through the available payment method.
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-3xl px-2 text-center text-navy-950 sm:mt-12">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-600 sm:h-11 sm:w-11">
                    <HeartHandshake size={18} />
                  </div>
                  <p className="text-sm leading-7 text-navy-900/65 sm:text-lg sm:leading-8">
                    Thank you for giving. We pray the Lord blesses you as you bless others.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
