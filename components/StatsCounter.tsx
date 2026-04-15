'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface StatItem {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
}

interface StatsCounterProps {
  stats: StatItem[]
  light?: boolean
}

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsCounter({ stats, light = true }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={i} className={`text-center ${light ? '' : ''}`}>
          <div className={`font-display text-5xl md:text-6xl font-bold mb-2 ${light ? 'text-gold-400' : 'text-gold-600'}`}>
            <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </div>
          <div className={`font-sans font-semibold text-sm tracking-wide uppercase mb-1 ${light ? 'text-white' : 'text-navy-950'}`}>
            {stat.label}
          </div>
          {stat.description && (
            <div className={`text-xs leading-relaxed ${light ? 'text-white/50' : 'text-navy-900/50'}`}>
              {stat.description}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
