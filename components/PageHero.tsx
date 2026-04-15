'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  bgImage?: string
  bgSize?: string
  sectionClassName?: string
  textContainerClassName?: string
  minHeightClass?: string
  contentMinHeightClass?: string
  bgPosition?: string
  bgImageOpacityClass?: string
  overlayClass?: string
  contentClassName?: string
  eyebrowClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgSize = 'cover',
  sectionClassName = '',
  textContainerClassName = '',
  minHeightClass = 'min-h-[72vh]',
  contentMinHeightClass = 'min-h-[calc(72vh-8rem)]',
  bgPosition = 'center',
  bgImageOpacityClass = 'opacity-20',
  overlayClass = 'bg-navy-950/70',
  contentClassName = '',
  eyebrowClassName = '',
  titleClassName = '',
  subtitleClassName = '',
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-navy-pattern pt-32 pb-20 ${minHeightClass} ${sectionClassName}`}>
      {bgImage && (
        <div
          className={`absolute inset-0 ${bgImageOpacityClass}`}
          style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: bgPosition, backgroundSize: bgSize, backgroundRepeat: 'no-repeat' }}
        />
      )}
      <div className={`absolute inset-0 ${overlayClass}`} />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-navy-700/30 blur-3xl" />
      </div>

      <div
        className={`relative mx-auto flex ${contentMinHeightClass} max-w-5xl items-center px-4 text-center sm:px-6 lg:px-8 ${contentClassName}`}
      >
        <div className={`w-full ${textContainerClassName}`}>
          {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mb-4 text-xs font-sans font-semibold uppercase tracking-[0.3em] text-gold-400 ${eyebrowClassName}`}
          >
            {eyebrow}
          </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`mb-6 font-display text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl ${titleClassName}`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`mx-auto max-w-2xl text-lg leading-relaxed text-white/70 ${subtitleClassName}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
