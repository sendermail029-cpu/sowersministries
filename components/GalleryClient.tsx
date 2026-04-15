'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight, Heart, Globe, Star, BookOpen, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import type { GalleryItem } from '@/lib/content-store'

const categories = [
  { id: 'all', label: 'All', icon: Star },
  { id: 'pastors', label: 'Pastors', icon: BookOpen },
  { id: 'children', label: 'Children', icon: Heart },
  { id: 'outreach', label: 'Outreach', icon: Globe },
  { id: 'graduation', label: 'Graduation', icon: GraduationCap },
] as const

export default function GalleryClient({ initialItems }: { initialItems: GalleryItem[] }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [brokenImageIds, setBrokenImageIds] = useState<number[]>([])
  const itemsPerPage = 12

  const validItems = initialItems.filter((item) => !brokenImageIds.includes(item.id))
  const filtered = activeCategory === 'all'
    ? validItems
    : validItems.filter((item) => item.category === activeCategory)

  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
  const paginatedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const hideBrokenImage = (itemId: number) => {
    setBrokenImageIds((current) => (current.includes(itemId) ? current : [...current, itemId]))
  }

  const openLightbox = (item: GalleryItem) => {
    const index = paginatedItems.indexOf(item)
    setLightboxItem(item)
    setLightboxIndex(index)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (lightboxIndex - 1 + paginatedItems.length) % paginatedItems.length
      : (lightboxIndex + 1) % paginatedItems.length
    setLightboxIndex(newIndex)
    setLightboxItem(paginatedItems[newIndex])
  }

  return (
    <>
      <section className="py-10 bg-cream-50 border-b border-cream-300/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-sans font-semibold whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-navy-950 text-white shadow-lg'
                    : 'bg-white text-navy-900/60 border border-cream-300 hover:border-[#2E8A44] hover:text-navy-950'
                }`}
              >
                <cat.icon size={14} className={activeCategory === cat.id ? 'text-[#2E8A44]' : 'text-navy-900/40'} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            <AnimatePresence>
              {paginatedItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="break-inside-avoid mb-4"
                >
                  <div
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-navy-900 shadow-md transition-shadow duration-300 hover:shadow-xl"
                    onClick={() => openLightbox(item)}
                  >
                    <img
                      src={item.thumb}
                      alt={item.caption}
                      onError={() => hideBrokenImage(item.id)}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-950/0 transition-all duration-300 group-hover:bg-navy-950/60">
                      <ZoomIn size={28} className="mb-3 scale-75 transform text-white/0 transition-all duration-300 group-hover:scale-100 group-hover:text-white/90" />
                      <div className="transform px-4 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-4">
                        <p className="mb-1 text-sm font-semibold text-white">{item.caption}</p>
                        <p className="text-xs text-gold-400/80">{item.location}</p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs capitalize text-white/80 opacity-0 transition-opacity duration-300 backdrop-blur-sm group-hover:opacity-100">
                      {item.category}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="py-20 text-center text-navy-900/40">
              <p className="font-display text-2xl">No photos in this category yet.</p>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="min-w-[144px] rounded-full border border-[#ead9b5] bg-white px-8 py-4 text-[1.05rem] font-semibold text-navy-950 transition hover:border-gold-400 disabled:cursor-not-allowed disabled:opacity-35"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-[66px] w-[66px] items-center justify-center rounded-full border text-[1.05rem] font-semibold transition ${
                    currentPage === page
                      ? 'border-navy-950 bg-navy-950 text-white'
                      : 'border-[#ead9b5] bg-white text-navy-950 hover:border-gold-400'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="min-w-[144px] rounded-full border border-[#ead9b5] bg-white px-8 py-4 text-[1.05rem] font-semibold text-navy-950 transition hover:border-gold-400 disabled:cursor-not-allowed disabled:opacity-35"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <X size={18} />
              </button>

              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
              >
                <ChevronRight size={20} />
              </button>

              <img
                src={lightboxItem.src}
                alt={lightboxItem.caption}
                className="max-h-[75vh] w-full rounded-xl object-contain"
              />

              <div className="flex items-start justify-between gap-4 rounded-b-xl bg-navy-950/80 px-6 py-4 backdrop-blur-sm">
                <div>
                  <p className="mb-1 text-sm font-semibold text-white">{lightboxItem.caption}</p>
                  <p className="text-xs text-gold-400/70">{lightboxItem.location}</p>
                </div>
                <span className="mt-1 shrink-0 text-xs text-white/30">
                  {lightboxIndex + 1} / {paginatedItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-noise opacity-20" />
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Be Part of the Story</p>
          <h2 className="mb-6 font-display text-4xl font-semibold text-navy-950 md:text-5xl">
            Every Photo Tells a Story of Transformation
          </h2>
          <p className="mb-10 leading-relaxed text-navy-900/70">
            These images represent thousands of hours of faithful ministry - pastors risking their lives, children given a future, and widows restored with dignity. Your giving writes more chapters in this story.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://donorbox.org/sowers-ministry" className="custom-dbox-popup btn-primary inline-block rounded-full px-8 py-4 text-base font-sans">
              Donate Now
            </a>
            <Link href="/contact" className="inline-block rounded-full border border-gold-500 px-8 py-4 text-base font-sans text-gold-600 transition hover:bg-gold-50">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
