'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const pastors = [
  { src: '/pastor1-opt.webp', name: 'Rev.Yohan Rao Chellu ', area: 'Sr.Supervisor' },
  { src: '/pastors (10).webp', name: 'Rev.Nireekshan Rao Kursam', area: 'Sr.Supervisor' },
  { src: '/pastors (8).webp', name: 'Rev.Hosea Chellu ', area: 'Sr.Supervisor' },
  { src: '/pastors (7).webp', name: 'Pastor Daniel Chellu', area: '' },
  { src: '/pastors (6).webp', name: 'Pastor Rambabu Kovasi', area: '' },
  { src: '/pastors (5).webp', name: 'Pastor Kannappa Madivi', area: '' },
    { src: '/pastors (4).webp', name: 'Pastor.Saramma Ranki Reddy', area: '' },
{ src: '/pastors (3).webp', name: 'Pastor Narshimha Rao Vade', area: '' },
 { src: '/pastors (2).webp', name: 'Pastor Naga Raju Naaram ', area: '' },

  { src: '/pastors (1).webp', name: 'Pastor Ramesh Chilaka', area: '' },
 { src: '/pastors (16).webp', name: 'Pastor Babu Rao Sodem', area: '' },
  { src: '/pastors (17).webp', name: 'Pastor.Naga Raju Thaati', area: '' },
  { src: '/pastors (19).webp', name: 'Pastor Lakshman Vanka', area: '' },
  
]

export default function ChurchNetworkShowcase() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToCard = (index: number) => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const card = scroller.querySelector<HTMLElement>(`[data-pastor-index="${index}"]`)
    if (!card) return

    const targetLeft = card.offsetLeft - (scroller.clientWidth - card.clientWidth) / 2

    scroller.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth',
    })

    setActiveIndex(index)
  }

  const handleScroll = () => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const cards = Array.from(scroller.querySelectorAll<HTMLElement>('[data-pastor-index]'))
    const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2

    let nearestIndex = 0
    let nearestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2
      const distance = Math.abs(cardCenter - scrollerCenter)

      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestIndex = index
      }
    })

    setActiveIndex(nearestIndex)
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % pastors.length
      scrollToCard(nextIndex)
    }, 10000)

    return () => window.clearInterval(interval)
  }, [activeIndex])

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
          Church Pastors
        </p>
        <h2 className="text-center font-serif text-4xl text-navy-950 md:text-6xl">Meet the Pastors</h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-navy-900/70">
          Browse the pastors serving across the church network. Scroll through the profiles or use the navigation dots to move to the next pastor.
        </p>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-6 pt-2 scrollbar-hide sm:px-6 lg:px-10"
        >
          {pastors.map((pastor, index) => (
            <article
              key={pastor.src}
              data-pastor-index={index}
              className="group min-w-[290px] snap-center sm:min-w-[340px] lg:min-w-[360px]"
            >
              <div className="overflow-hidden rounded-[2rem] bg-cream-50 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/60 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={pastor.src}
                    alt={pastor.name}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-3 pb-2 pt-5 text-center">
                  <h3 className="font-serif text-2xl text-navy-950">{pastor.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold-600">
                    {pastor.area}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 flex justify-center gap-3">
          {pastors.map((pastor, index) => (
            <button
              key={pastor.src}
              type="button"
              onClick={() => scrollToCard(index)}
              aria-label={`View ${pastor.name}`}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'scale-110 bg-navy-950' : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
