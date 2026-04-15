'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Heart, BookOpen, Church, Users, ChevronDown } from 'lucide-react'
import FadeInSection from '@/components/FadeInSection'
import SectionHeading from '@/components/SectionHeading'
import StatsCounter from '@/components/StatsCounter'
import CTASection from '@/components/CTASection'

const stats = [
  { value: 1300, label: 'Pastors Trained', suffix: '+', description: 'Men & women equipped for ministry' },
  { value: 170, label: 'Village Churches', description: 'Started & supported across India' },
  { value: 400, label: 'Communities', description: 'Reached with the Gospel of Christ' },
  { value: 2001, label: 'Year Founded', description: 'Over two decades of faithful service' },
]

const pillars = [
  {
    icon: Heart,
    letter: 'O',
    title: 'Orphans',
    color: 'from-rose-900/40 to-rose-800/20',
    description:
      'Millions of orphans exist in India. Without proper care, many are exploited and drawn into trafficking. We provide education, food, shelter, medical care, and love to these precious children.',
  },
  {
    icon: Users,
    letter: 'W',
    title: 'Widows',
    color: 'from-amber-900/40 to-amber-800/20',
    description:
      'In India, widows are considered bad luck and often denied work and community. We provide food, rent, medical care, and most importantly the dignity and worth they deserve as beloved by Christ.',
  },
  {
    icon: BookOpen,
    letter: 'E',
    title: 'Educating',
    color: 'from-emerald-900/40 to-emerald-800/20',
    description:
      'Through the BTCP (Bible Training Centre for Pastors) and our mobile Bible School, we train tribal young men and women to become effective ministers, sending them back to their villages equipped.',
  },
  {
    icon: Church,
    letter: 'R',
    title: 'Reaching Society',
    color: 'from-blue-900/40 to-blue-800/20',
    description:
      "Our native pastors and missionaries carry Jesus' love to Dalits and unreached communities with equal measure, planting churches, healing the sick, and claiming communities for Christ.",
  },
]

const transformationStory = {
  name: 'Nagamani',
  village: 'Madhulamada Village',
  title: 'Transforming Lives Slowly but Surely',
  summary:
    'In Madhulamada Village, where the air, water, and dust are toxic, Nagamani faced a painful infection after a minor head injury was left untreated.',
  paragraphs: [
    'What began as a small injury soon became a serious infection. Doctors performed surgery, removed damaged skin, and treated her with strong antibiotics, but her condition became so severe that even nearby villagers found the smell difficult to bear.',
    'When SOWERS Ministry noticed her suffering, we stepped in with compassionate care, prayer, and practical support during one of the darkest seasons of her life.',
    'By the grace of God, Nagamani experienced remarkable healing. Her story stands as a testimony that the Lord still works miracles, and that faithful ministry can restore dignity, hope, and life where there once seemed to be none.',
  ],
  images: [
    { src: '/before-opt.webp', alt: 'Nagamani before receiving treatment', label: 'Before' },
    { src: '/during-opt.webp', alt: 'Nagamani during treatment and care', label: 'During Treatment' },
    { src: '/after-opt.webp', alt: 'Nagamani after healing and recovery', label: 'After' },
  ],
}

const heroSlides = [
  {
    image: '/home1-opt.webp',
    alt: 'SOWERS ministry outreach in India',
    eyebrow: '',
    beforeHighlight: 'Sowing ',
    highlight: 'Hope',
    afterHighlight: ' Across India',
    description:
      'SOWERS Ministry plants churches, trains pastors, and cares for orphans and widows in unreached villages across India.',
  },
  {
    image: '/child12-opt.webp',
    alt: 'Children supported by SOWERS Ministry',
    eyebrow: '',
    beforeHighlight: 'Sharing ',
    highlight: 'Christ',
    afterHighlight: ' With Every Gift',
    description:
      'Every gift supports children, strengthens widows, and equips pastors Together, we are transforming lives and building a stronger future..',
  },
  {
    image: '/mini-opt.webp',
    alt: 'Pastors and ministry leaders in India',
    eyebrow: '',
    beforeHighlight: 'Equipping Leaders for ',
    highlight: 'Harvest',
    afterHighlight: '',
    description:
      'We equip village pastors and local churches to carry the Gospel deeper into India.',
  },
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const currentSlide = heroSlides[activeSlide]

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ${
                index === activeSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,21,57,0.84)_0%,rgba(14,21,57,0.74)_42%,rgba(14,21,57,0.84)_100%)] sm:bg-[linear-gradient(90deg,rgba(14,21,57,0.90)_0%,rgba(14,21,57,0.76)_44%,rgba(14,21,57,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(224,175,62,0.16),transparent_26%),radial-gradient(circle_at_25%_70%,rgba(255,255,255,0.10),transparent_24%)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-start gap-10 px-4 pb-28 pt-52 sm:px-6 sm:pb-16 sm:pt-40 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center lg:px-8 lg:pt-28">
          <div className="max-w-4xl">
            <motion.p
              key={`${activeSlide}-eyebrow`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden"
            >
                    {currentSlide.eyebrow}
            </motion.p>

            <motion.h1
              key={`${activeSlide}-title`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-4xl font-semibold leading-[1.04] text-white sm:text-5xl md:text-6xl lg:text-[4.7rem]"
            >
              {currentSlide.beforeHighlight}
              <span className="italic text-gradient">{currentSlide.highlight}</span>
              {currentSlide.afterHighlight}
            </motion.h1>

            <motion.p
              key={`${activeSlide}-description`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg"
            >
              {currentSlide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://donorbox.org/sowers-ministry"
                className="custom-dbox-popup btn-primary inline-block rounded-full px-7 py-3.5 text-center text-sm font-sans md:px-8 md:py-4 md:text-base"
              >
                Give Now - Change Lives
              </a>
              <Link
                href="/about-sowers"
                className="btn-outline inline-flex items-center justify-center gap-2 rounded-full border-white/30 px-7 py-3.5 text-sm font-sans text-white hover:border-white/50 hover:bg-white/10 md:px-8 md:py-4 md:text-base"
              >
                Our Mission <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-8 hidden items-center justify-center gap-3"
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={`${slide.image}-mobile`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-3.5 rounded-full transition-all ${
                    index === activeSlide ? 'w-10 bg-gold-400' : 'w-3.5 bg-white/45'
                  }`}
                  aria-label={`Show hero slide ${index + 1}`}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 items-center justify-center gap-4 sm:flex"
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-3.5 rounded-full transition-all ${
                    index === activeSlide ? 'w-10 bg-gold-400' : 'w-3.5 bg-white/45 hover:bg-white/70'
                  }`}
                  aria-label={`Show hero slide ${index + 1}`}
                />
              ))}
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(224,175,62,0.20),transparent_60%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/8 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_22%,rgba(14,21,57,0.7)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                      SOWERS Ministry
                    </p>
                    <p className="mt-3 font-display text-[1.7rem] leading-tight text-white md:text-3xl">
                      {currentSlide.highlight} in action across India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-white/30"
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      <section className="bg-cream-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeInSection direction="left">
              <SectionHeading
                eyebrow="Our Identity"
                title="What Does SOWERS Stand For?"
                subtitle="Every letter carries a sacred calling - a covenant to the forgotten, the broken, and the unreached across India."
              />
              <div className="mt-8 space-y-4">
                {[
                  ['S', 'Serving'],
                  ['O', 'Orphans'],
                  ['W', 'Widows'],
                  ['E', 'Educating &'],
                  ['R', 'Reaching'],
                  ['S', 'Society'],
                ].map(([letter, word]) => (
                  <div key={word} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e8a44]">
                      <span className="font-display text-lg font-bold text-white">{letter}</span>
                    </div>
                    <span className="font-sans text-lg font-medium text-navy-900">{word}</span>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -left-6 -top-6 h-48 w-48 rounded-2xl bg-gold-500/10" />
                <div className="relative rounded-2xl bg-navy-950 p-8 text-white shadow-2xl">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gold-500/5 blur-2xl" />
                  <p className="mb-6 font-display text-2xl font-semibold italic leading-relaxed text-gold-300">
                    "Before I formed you in the womb I knew you; before you were born I sanctified you; I ordained you a prophet to the nations."
                  </p>
                  <p className="font-sans text-sm tracking-wide text-gold-400/70">- Jeremiah 1:5 </p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-sm leading-relaxed text-white/60">
                      This is the scripture God spoke to Pastor Jay on August 21, 1994 - the night that changed everything and launched a ministry that has transformed thousands of lives across India.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="The Four Pillars"
              title="Our Ministry Focus"
              subtitle="Four sacred commitments that define everything we do in India - rooted in the love and servants' heart of Jesus Christ."
              center
              light
            />
          </FadeInSection>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <FadeInSection key={pillar.title} delay={i * 0.1}>
                <div className={`card-hover h-full rounded-2xl border border-white/10 bg-gradient-to-br ${pillar.color} p-6`}>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                      <pillar.icon size={22} className="text-gold-400" />
                    </div>
                    <span className="font-display text-5xl font-bold text-gold-400/20">{pillar.letter}</span>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{pillar.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <Image
              src="/conta-opt.webp"
              alt=""
              fill
              aria-hidden="true"
              className="object-cover object-[22%_center] opacity-24 sm:object-center sm:opacity-18"
            />
          </div>
         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(253,249,241,0.65),rgba(253,249,241,0.55))] sm:bg-[linear-gradient(180deg,rgba(253,249,241,0.55),rgba(253,249,241,0.45))]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="God's Faithfulness"
              title="Over Two Decades of Impact"
              subtitle="Numbers that represent real lives transformed - pastors empowered, communities reached, and families restored."
              center
            />
          </FadeInSection>
          <div className="mt-14">
            <StatsCounter stats={stats} light={false} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,58,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(26,30,74,0.08),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Life Transformation"
                  title={transformationStory.title}
                  subtitle="A real testimony from Madhulamada Village of how compassionate care and God’s mercy brought healing, dignity, and hope."
                />

                <div className="mt-8 rounded-[1.75rem] border border-navy-950/10 bg-white/85 p-7 shadow-[0_24px_80px_rgba(13,16,48,0.08)] backdrop-blur-sm sm:p-9">
                  <div className="flex flex-wrap items-center gap-4 border-b border-navy-950/10 pb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-950 text-xl font-bold text-gold-400">
                      N
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-semibold text-navy-950">
                        {transformationStory.name}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.22em] text-gold-600">
                        {transformationStory.village}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-lg leading-relaxed text-navy-900">
                    {transformationStory.summary}
                  </p>

                  <div className="prose-ministry mt-6 space-y-5">
                    {transformationStory.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {transformationStory.images.map((image) => (
                      <div
                        key={image.src}
                        className="overflow-hidden rounded-2xl border border-navy-950/10 bg-cream shadow-[0_16px_40px_rgba(13,16,48,0.08)]"
                      >
                        <div className="relative aspect-[4/5]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-700">
                            {image.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-[0_28px_80px_rgba(13,16,48,0.24)] sm:p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,184,75,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                  <div className="relative">
                    <div className="relative mb-7 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10">
                      <Image
                        src="/after-opt.webp"
                        alt="Nagamani after healing in Madhulamada Village"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,16,48,0.05),rgba(13,16,48,0.68))]" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                          Restored Life
                        </p>
                        <p className="mt-2 font-display text-2xl leading-tight text-white">
                          A visible testimony of healing and hope
                        </p>
                      </div>
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                      Testimony of Mercy
                    </p>
                    <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      From unbearable suffering to visible healing
                    </h3>
                    <p className="mt-5 leading-relaxed text-white/70">
                      This testimony reflects the heart of SOWERS Ministry: to notice the forgotten, stand with the hurting, and trust God for restoration even in the most difficult situations.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {[
                        ['Place', 'Madhulamada'],
                        ['Need', 'Medical care'],
                        ['Result', 'Healing & hope'],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <p className="text-[0.68rem] uppercase tracking-[0.25em] text-white/45">{label}</p>
                          <p className="mt-2 text-sm font-semibold text-gold-300">{value}</p>
                        </div>
                      ))}
                    </div>

                    <blockquote className="mt-8 rounded-[1.5rem] border border-gold-400/25 bg-white/6 p-6 font-display text-2xl italic leading-relaxed text-gold-100">
                      “God still works miracles through compassionate hands, timely care, and faithful ministry.”
                    </blockquote>

                    <div className="mt-8">
                      <Link
                        href="/donate"
                        className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-sans"
                      >
                        Help Change Another Life <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeInSection direction="left">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900" />
                <div className="relative p-8 lg:p-12">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
                    Mobile Bible School
                  </div>
                  <h3 className="mb-6 font-display text-3xl font-semibold text-white">
                    Training Tribal Pastors Through BTCP
                  </h3>
                  <p className="mb-6 leading-relaxed text-white/65">
                    SOWERS Ministry believes in proper training. Jesus himself trained His disciples. Paul trained Timothy. And Pastor Jay was trained in two different theological seminaries for 7 years.
                  </p>
                  <p className="mb-8 leading-relaxed text-white/65">
                    God gave Pastor Jay and his staff the vision of teaching untrained tribal pastors through a mobile Bible School - using the BTCP curriculum to equip mighty arrows of the Lord to reach unreached communities and villages across India. This training has been ongoing since 2001.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      ['1,300+', 'Graduates'],
                      ['2001', 'Started'],
                      ['3 States', 'Covered'],
                      ['BTCP', 'Curriculum'],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="font-display text-2xl font-bold text-gold-400">{v}</div>
                        <div className="mt-1 text-xs uppercase tracking-wide text-white/50">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <SectionHeading
                eyebrow="Pastor Training"
                title="Equipping the Unreached for the Harvest"
              />
              <div className="prose-ministry mt-6 space-y-5">
                <p>
                  We send trained pastors back to their respective villages, providing bicycles for them to travel and share the Gospel. It is a challenge every day. In their journeys, they constantly battle evil forces and heal people who were enslaved to darkness.
                </p>
                <p>
                  But the anointed walk with the authority of the Lord - reaching people, healing the sick, teaching the Word of God, and planting churches across the remotest corners of India.
                </p>
                <p>
                  What started in 2001 within a single county has now spread into three different states. The wings of this ministry continue to grow.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/church-network"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-sans"
                >
                  See the Church Network <ArrowRight size={15} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-100 py-24">
        <div className="absolute inset-0 bg-[url('/dali-opt.webp')] bg-cover bg-center opacity-28 sm:left-auto sm:right-0 sm:w-[54%] sm:opacity-38" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,248,240,0.86),rgba(252,248,240,0.82))] sm:bg-[linear-gradient(90deg,rgba(252,248,240,0.98)_0%,rgba(252,248,240,0.95)_38%,rgba(252,248,240,0.28)_58%,rgba(252,248,240,0.12)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-[2rem] bg-white/58 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-[2px] sm:max-w-[46rem] sm:rounded-none sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0 lg:max-w-[48%]">
            <FadeInSection>
              <SectionHeading
                eyebrow="The India Mission"
                title="Reaching the Dalits & the Unreached"
              />
              <div className="prose-ministry mt-6 space-y-5">
                <p>
                  According to the Hindu Caste system which dominates Indian culture, all Christians are Dalits - members of the lowest caste. Yet, not all Dalits are Christian. Hindu Dalits are moved by the loving kindness, humility, and service that our believers show them.
                </p>
                <p>
                  Our native pastors and missionaries give Jesus' love in equal measure to all - irrespective of caste, background, or religion. This radical, counter-cultural love is the most powerful witness the Gospel has in India.
                </p>
                <p>
                  SOWERS bridges the body of Christ in North America and India into one - working together toward the goal of spiritually guiding orphans, widows, Bible college students, and society by sharing the love and servants' heart of Jesus Christ.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about-sowers"
                  className="btn-primary inline-block rounded-full px-7 py-3.5 text-sm font-sans"
                >
                  Learn About Our Mission
                </Link>
                <Link
                  href="/about-pastor-jay"
                  className="btn-outline inline-block rounded-full px-7 py-3.5 text-sm font-sans"
                >
                  Meet Pastor Jay
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="absolute inset-0 bg-noise opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <FadeInSection direction="left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">✦ The Founder ✦</p>
              <h2 className="mb-6 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                Rev. Jayakumar Babu Salluri
                <span className="mt-2 block text-3xl italic text-gold-400">"Pastor Jay"</span>
              </h2>
              <p className="mb-5 leading-relaxed text-white/65">
                On August 21, 1994, while planning to escape from Bible College, a voice called out to him in the night - "My son, Jayakumar." God spoke the words of Jeremiah 1:5 directly to his heart, and nothing has been the same since.
              </p>
              <p className="mb-8 leading-relaxed text-white/65">
                After 7 years of seminary training and a Bachelor of Theology in 1999, Pastor Jay launched Bethel Ministries in India in 2001 - the foundation and home church of SOWERS Ministry. Today he serves as Chairman of SOWERS Ministry International (USA & Canada) and Vice President of The Greater Vijayawada Pastors Fellowship.
              </p>
              <Link
                href="/about-pastor-jay"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-sans"
              >
                Read His Full Story <ArrowRight size={15} />
              </Link>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold-500/20 to-transparent blur-xl" />
                <div className="relative rounded-2xl border border-gold-500/20 bg-gradient-to-br from-navy-900 to-navy-950 p-8">
                  <div className="mb-6 border-b border-white/10 pb-6">
                    <p className="font-display text-xl italic leading-relaxed text-white/90">
                      "I have survived malaria three times, typhus, a catastrophic automobile accident, threats from Hindu radicals, thirst, hunger, and nights freezing in the jungle. But the anointed walk with the authority of the Lord."
                    </p>
                    <p className="mt-4 text-sm text-gold-400/70">- Rev. Jayakumar Babu Salluri</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {[
                      ['Called', '1994'],
                      ['Ordained', '1999'],
                      ['Ministry Founded', '2001'],
                      ['Pastors Trained', '1,300+'],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <div className="text-xs uppercase tracking-wide text-white/40">{k}</div>
                        <div className="mt-1 font-semibold text-gold-400">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream-50 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,138,68,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(201,151,58,0.10),transparent_26%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
            <FadeInSection direction="left">
              <SectionHeading
                eyebrow="Christmas Joy"
                title="A yearly outreach that brings dignity, joy, and love to children"
                subtitle="Every year SOWERS Ministry reaches children in new villages and underserved communities through Christmas Joy - sharing clothing, meals, gifts, and the love of Christ."
              />
              <div className="prose-ministry mt-6 space-y-5">
                <p>
                  Christmas Joy is one of the beautiful ways this ministry serves children living in deep poverty. We travel into remote areas where many families lack proper food and proper clothing, and where some children have very little to call their own.
                </p>
                <p>
                  Through this programme, children receive practical gifts with dignity and care, reminding them that they are seen, valued, and loved. Each year the outreach reaches different places and different children, carrying the joy of Christ to those who need it most.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/events/christmas-joy"
                  className="inline-flex items-center gap-2 rounded-full border border-[#2e8a44] bg-[#2e8a44] px-7 py-3.5 text-sm font-sans font-semibold text-white transition hover:bg-[#1f6e33]"
                >
                  Show More <ArrowRight size={15} />
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="overflow-hidden rounded-[1.75rem] border border-[#cfe5d4] bg-[#f5f8f3] p-3 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
                <Image
                  src="/chrjoyba-opt.webp"
                  alt="Christmas Joy transformation image"
                  width={1200}
                  height={1600}
                  className="h-auto w-full rounded-[1.2rem]"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="In the Field"
                title="Witness the Work"
                subtitle="Real moments from the mission field - pastors trained, children loved, communities transformed."
              />
              <Link
                href="/gallery"
                className="btn-outline hidden shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-sans sm:inline-flex"
              >
                View Full Gallery <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {[
              { src: '/child12-opt.webp', alt: 'Children in ministry' },
              { src: '/dali-opt.webp', alt: 'Church gathering' },
              { src: '/or1-opt.webp', alt: 'Outreach' },
              { src: '/ser-opt.webp', alt: 'Village church' },
              { src: '/gal1-opt.webp', alt: 'Education' },
              { src: '/gal4-opt.webp', alt: 'Pastors gathering' },
              { src: '/sew-opt.webp', alt: 'Mission work' },
            ].map((img, i) => (
              <FadeInSection key={i} delay={i * 0.05}>
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-navy-900">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 transition-colors group-hover:bg-navy-950/20" />
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link
              href="/gallery"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-gold-500 px-6 py-4 text-base font-semibold text-gold-600 transition hover:bg-gold-50"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Make an Impact"
        title="Your Gift Plants a Church, Feeds a Child, Restores a Widow"
        subtitle="Every dollar given to SOWERS Ministry goes directly to the field - training pastors, supporting orphans, and bringing the love of Christ to the unreached villages of India."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Learn More"
        secondaryHref="/about-sowers"
        dark={false}
        lightBgClassName="bg-[#f3ead8]"
      />
    </>
  )
}
