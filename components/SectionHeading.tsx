'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  eyebrowClassName?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  eyebrowClassName = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-3 ${light ? 'text-gold-400' : 'text-gold-600'} ${eyebrowClassName}`}>
          ✦ {eyebrow} ✦
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl font-semibold leading-tight mb-4 ${light ? 'text-white' : 'text-navy-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-navy-900/60'}`}>
          {subtitle}
        </p>
      )}
      <div className={`section-divider mt-5 ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
