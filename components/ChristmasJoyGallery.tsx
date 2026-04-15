'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Sparkles, Quote } from 'lucide-react'
import Image from 'next/image'

interface ChristmasJoyImage {
  id: number
  src: string
  alt: string
  caption: string
  location: string
  tall?: boolean
}

interface ChristmasJoyGalleryProps {
  items: ChristmasJoyImage[]
  videos: { title: string; href: string; note: string }[]
}

export default function ChristmasJoyGallery({
  items,
  videos,
}: ChristmasJoyGalleryProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const itemsPerPage = 8

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage))
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )
  const lightboxItem = lightboxIndex === null ? null : paginatedItems[lightboxIndex]

  const getEmbedUrl = (url: string) => {
    if (url.includes('v=')) return url.replace('watch?v=', 'embed/')
    if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'youtube.com/embed/')
    return url
  }

  return (
    <section className="bg-[#FAF9F6] py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative border-b border-[#cfe5d4] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-16 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3 text-[#2e8a44]">
                <Sparkles size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
                  Sowers Ministry India
                </span>
              </div>

              <h2 className="font-display text-5xl font-extralight tracking-tight text-navy-950 md:text-7xl lg:text-8xl">
                The Anatomy of <br />
                <span className="italic font-medium text-[#2e8a44]">Divine Joy.</span>
              </h2>

              <div className="mt-12 space-y-8 text-xl leading-relaxed text-navy-900/80">
                <p>
                  Christmas Joy is more than a seasonal programme; it is a mission of
                  love carried into remote and neglected places. Every year,
                  SOWERS Ministry distributes nearly 1400+ Christmas Joy boxes to
                  children across different areas and among different
                  communities, reaching new places and new families year after
                  year.
                </p>
                <p className="font-light">
                  We go into places where there is no proper food and no proper
                  clothing, where many children are living in severe poverty.
                  Some children do not even have decent clothes to wear, and
                  some are left almost semi-naked in conditions of deep need. In
                  those places, a new outfit, footwear, a nutritious meal, toys,
                  and sweets become more than gifts, they become a sign of
                  dignity, care, and visible love.
                </p>
                <p className="font-light">
                  This programme is not about serving the same people every
                  year. It is about carrying the love of Christ into different
                  areas, reaching different children, and making sure every gift
                  reaches those who need it most.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pt-32">
              <div className="relative p-8 lg:p-12">
                <Quote className="absolute left-0 top-0 h-16 w-16 -translate-x-4 -translate-y-4 text-[#98d5a6]" />
                <p className="relative z-10 text-2xl font-light italic leading-relaxed text-navy-800">
                  "We go where the roads end, so children in forgotten places
                  can still receive the joy, dignity, and love of Christ."
                </p>
                <div className="mt-10 h-px w-24 bg-[#2e8a44]" />
                <div className="mt-10 space-y-6 text-sm font-bold uppercase tracking-widest text-[#2e8a44]">
                  <div className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-[#2e8a44]" />
                    <span className="text-[#2e8a44]">Dignity Restored</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-[#2e8a44]" />
                    <span className="text-[#2e8a44]">1400+ Boxes Yearly</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="h-2 w-2 rounded-full bg-[#2e8a44]" />
                    <span className="text-[#2e8a44]">New Areas Reached</span>
                  </div>
                </div>

                <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-[#cfe5d4] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/chrjoyba-opt.webp"
                      alt="Christmas Joy ministry support image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h3 className="font-display text-4xl font-light text-navy-950">
                A Visual Testimony
              </h3>
              <p className="mt-4 max-w-md text-navy-900/60">
                Every smile is a story of hope breaking through the shadows of
                poverty.
              </p>
            </div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#2e8a44]/80">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
            <AnimatePresence mode="wait">
              {paginatedItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group mb-8 cursor-zoom-in break-inside-avoid"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={700}
                      className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#7fd48c]">
                        {item.location}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {items.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="min-w-[144px] rounded-full border border-[#b9dcbc] bg-white px-8 py-4 text-[1.05rem] font-semibold text-navy-950 transition hover:border-[#2e8a44] disabled:cursor-not-allowed disabled:opacity-35"
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
                      ? 'border-[#2e8a44] bg-[#2e8a44] text-white'
                      : 'border-[#b9dcbc] bg-white text-navy-950 hover:border-[#2e8a44]'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="min-w-[144px] rounded-full border border-[#b9dcbc] bg-white px-8 py-4 text-[1.05rem] font-semibold text-navy-950 transition hover:border-[#2e8a44] disabled:cursor-not-allowed disabled:opacity-35"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div className="mt-40">
          <div className="mb-20 text-center">
            <h3 className="font-display text-5xl font-extralight italic text-[#2e8a44]">
              Field Dispatches
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-900/60">
              These videos capture Christmas Joy across multiple years, showing
              how this outreach keeps reaching different children, different
              villages, and different communities with the love of Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {videos.slice(0, 4).map((video, idx) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-video w-full overflow-hidden rounded-3xl bg-navy-900 shadow-2xl">
                  <iframe
                    className="h-full w-full"
                    src={getEmbedUrl(video.href)}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 pl-2">
                  <h4 className="text-2xl font-light text-navy-950">
                    {video.title}
                  </h4>
                  <p className="mt-2 font-light leading-relaxed text-navy-900/50">
                    {video.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/98 p-6 backdrop-blur-xl"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-10 top-10 text-white/50 transition-colors hover:text-white"
            >
              <X size={40} strokeWidth={1} />
            </button>
            <div
              className="relative h-[70vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-20 left-0 right-0 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.5em] text-gold-500">
                  {lightboxItem.location}
                </p>
                <p className="mt-4 text-xl font-light text-white">
                  {lightboxItem.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
