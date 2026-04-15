import Link from 'next/link'
import DonorboxModalButton from '@/components/DonorboxModalButton'

interface CTASectionProps {
  eyebrow?: string
  title: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  forceDonorboxModal?: boolean
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
  lightBgClassName?: string
  eyebrowClassName?: string
  primaryClassName?: string
  secondaryClassName?: string
}

export default function CTASection({
  eyebrow = 'Get Involved',
  title,
  subtitle,
  primaryLabel = 'Donate Now',
  primaryHref = '/donate',
  forceDonorboxModal = false,
  secondaryLabel,
  secondaryHref,
  dark = true,
  lightBgClassName = 'bg-white',
  eyebrowClassName = '',
  primaryClassName = '',
  secondaryClassName = '',
}: CTASectionProps) {
  const donorboxHref = 'https://donorbox.org/sowers-ministry'
  const opensDonorbox =
    forceDonorboxModal ||
    primaryHref === '/donate' ||
    primaryHref === '/donate#donate-form' ||
    primaryHref === donorboxHref

  return (
    <section className={`relative overflow-hidden py-24 ${dark ? 'bg-navy-pattern' : lightBgClassName}`}>
      {dark && (
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />
        </div>
      )}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className={`mb-4 text-xs font-sans font-semibold uppercase tracking-[0.3em] ${dark ? 'text-gold-400' : 'text-gold-600'} ${eyebrowClassName}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`mb-6 font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-navy-950'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-navy-900/60'}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {opensDonorbox ? (
            <DonorboxModalButton
              label={primaryLabel}
              className={`btn-primary inline-block rounded-full px-8 py-4 text-base font-sans ${primaryClassName}`}
            />
          ) : (
            <Link
              href={primaryHref}
              className={`btn-primary inline-block rounded-full px-8 py-4 text-base font-sans ${primaryClassName}`}
            >
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={`btn-outline inline-block rounded-full px-8 py-4 text-base font-sans ${dark ? 'border-white/30 text-white hover:bg-white hover:text-navy-950' : ''} ${secondaryClassName}`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
