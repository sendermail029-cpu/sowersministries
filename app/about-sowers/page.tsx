import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Users, BookOpen, Church, Globe, Shield } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import FadeInSection from '@/components/FadeInSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About SOWERS',
  description:
    'SOWERS stands for Serving Orphans Widows Educating & Reaching Society. Founded in 2001 by Rev. Jayakumar Babu Salluri.',
}

const pillars = [
  {
    icon: Heart,
    letter: 'O',
    title: 'Orphans',
    accent: 'text-rose-700',
    surface: 'bg-rose-50',
    border: 'border-rose-100',
    imageLayout: 'collage',
    images: [
      {
        src: '/or-opt.webp',
        alt: 'Orphan care ministry',
        className: 'col-span-7 row-span-2 aspect-[4/5]',
      },
      {
        src: '/or1-opt.webp',
        alt: 'Children supported by SOWERS',
        className: 'col-span-5 row-span-1 aspect-[5/4] self-end',
      },
      {
        src: '/or2-opt.webp',
        alt: 'Children and ministry outreach',
        className: 'col-span-5 row-span-1 aspect-[5/4]',
      },
    ],
    content: [
      'Millions of orphans exist in India. Without proper care, education, and direction, many of these children are exploited and often become inadvertently involved in child trafficking.',
      'SOWERS helps orphans by providing them with a means of education as well as funds for food, shelter, medical care, and general wellbeing to these needy children.',
      'These children are not statistics - they are precious souls, made in the image of God, and deserving of every opportunity to flourish.',
    ],
  },
  {
    icon: Users,
    letter: 'W',
    title: 'Widows',
    accent: 'text-amber-700',
    surface: 'bg-amber-50',
    border: 'border-amber-100',
    imageLayout: 'single',
    images: [
      {
        src: '/widow-opt.webp',
        alt: 'Widow support visit',
        className: 'aspect-[4/5]',
      },
    ],
    content: [
      'In the country of India, widows are looked down upon and actually considered bad luck. Many believe that a woman must have done something wrong in her past life to become a widow.',
      'Because of this deeply ingrained cultural stigma, they are often denied work and find it challenging to build relationships with others.',
      "SOWERS provides food, rent, medical care, and general funding to keep these women off the street and to provide them with a sense of worth and importance - honoured just as Christ honoured and loved the needy during His time on earth.",
    ],
  },
  {
    icon: BookOpen,
    letter: 'E',
    title: 'Educating Pastors',
    accent: 'text-emerald-700',
    surface: 'bg-emerald-50',
    border: 'border-emerald-100',
    imageLayout: 'stack',
    images: [
      {
        src: '/bt-opt.webp',
        alt: 'Pastor training classroom',
        className: 'aspect-[5/3]',
      },
      {
        src: '/bbt-opt.webp',
        alt: 'Pastor ministry teaching',
        className: 'aspect-[5/3]',
      },
    ],
    content: [
      'SOWERS Ministry believes in proper training. Jesus himself trained his disciples. Paul the Apostle trained Timothy. And Pastor Jay was trained in two different theological seminaries for a period of 7 years.',
      'God gave Jay and his staff the vision of teaching untrained tribal pastors through their mobile Bible School. He was introduced to the BTCP (Bible Training Centre for Pastors) in 1997, studied through the entire curriculum, and felt the pressure of the Lord to take the same training to remote, young men and women.',
      'This training has been ongoing since 2001 in India. More than 1,048 men and women have graduated - and are now sent back to their villages with bicycles to travel and share the Gospel.',
    ],
  },
  {
    icon: Church,
    letter: 'R',
    title: 'Reaching Society',
    accent: 'text-blue-700',
    surface: 'bg-blue-50',
    border: 'border-blue-100',
    imageLayout: 'collage',
    images: [
      {
        src: '/outreach-opt.webp',
        alt: 'Community outreach',
        className: 'col-span-7 row-span-2 aspect-[4/5]',
      },
      {
        src: '/ser-opt.webp',
        alt: 'Village society outreach',
        className: 'col-span-5 row-span-1 aspect-[5/4]',
      },
      {
        src: '/reach1-opt.webp',
        alt: 'Serving community needs',
        className: 'col-span-5 row-span-1 aspect-[5/4]',
      },
    ],
    content: [
      'According to the Hindu Caste system which dominates Indian culture, all Christians are Dalits - members of the lowest caste. However, not all Dalits are Christian.',
      "Hindu Dalits are blown away by the loving kindness, humility, and service that Christians show them. Our native pastors and missionaries give Jesus' love in equal measure to all.",
      'We reach unreached communities and villages, plant churches, advocate for the persecuted, and bring the light of the Gospel to every nook of the nation of India.',
    ],
  },
]

function PillarImages({
  pillar,
  reverse = false,
}: {
  pillar: (typeof pillars)[number]
  reverse?: boolean
}) {
  if (pillar.imageLayout === 'single') {
    const image = pillar.images[0]

    return (
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className={`rounded-[2rem] border ${pillar.border} ${pillar.surface} p-4 shadow-[0_30px_65px_rgba(15,23,42,0.08)]`}>
          <div className="group relative overflow-hidden rounded-[1.5rem] bg-white">
            <div className={`relative overflow-hidden rounded-[1.35rem] ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={95}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (pillar.imageLayout === 'stack') {
    return (
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className={`rounded-[2rem] border ${pillar.border} ${pillar.surface} p-4 shadow-[0_30px_65px_rgba(15,23,42,0.08)]`}>
          <div className="space-y-4">
            {pillar.images.map((image) => (
              <div key={image.src} className="group overflow-hidden rounded-[1.5rem] bg-white p-2">
                <div className={`relative overflow-hidden rounded-[1.2rem] ${image.className}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={reverse ? 'lg:order-2' : ''}>
      <div className={`rounded-[2rem] border ${pillar.border} ${pillar.surface} p-4 shadow-[0_30px_65px_rgba(15,23,42,0.08)]`}>
        <div className="grid grid-cols-12 gap-4">
          {pillar.images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-[1.5rem] bg-white p-2 ${
                index === 0 ? '-rotate-1' : index === 1 ? 'translate-y-6 rotate-2' : '-translate-y-4'
              } ${image.className}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[1.2rem]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureStory({
  title,
  intro,
  paragraphs,
  imageSrc,
  imageAlt,
  imageLeft = true,
  imageContain = false,
}: {
  title: string
  intro?: string
  paragraphs: string[]
  imageSrc: string
  imageAlt: string
  imageLeft?: boolean
  imageContain?: boolean
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <FadeInSection direction={imageLeft ? 'left' : 'right'}>
        <div className={`${imageLeft ? '' : 'lg:order-2'}`}>
          <div
            className={`group relative overflow-hidden rounded-[2rem] shadow-[0_30px_70px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/70 ${
              imageContain ? 'bg-transparent p-0' : 'bg-white p-3'
            }`}
          >
            {imageContain ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1724}
                height={912}
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            )}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection direction={imageLeft ? 'right' : 'left'} delay={0.08}>
        <div className={`${imageLeft ? '' : 'lg:order-1'} space-y-6`}>
          <h2 className="font-serif text-4xl text-navy-950 md:text-6xl">{title}</h2>
          {intro && (
            <p className="text-[1.35rem] font-medium leading-10 text-emerald-700 md:text-[1.5rem]">
              {intro}
            </p>
          )}
          <div className="space-y-6 text-xl leading-10 text-navy-900/78">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  )
}

export default function AboutSowersPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Ministry"
        title="What Is SOWERS?"
        subtitle="A sacred acronym that carries four divine assignments - and a calling that has transformed thousands of lives across the villages of India."
        bgImage="/child12-opt.webp"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureStory
            title="God’s Kingdom in India."
            intro="SOWERS stands for Serving Orphans Widows Educating & Reaching Society."
            paragraphs={[
              'Founded in 2001 by Rev. Jayakumar Babu Salluri, “Pastor Jay,” God has used this ministry to educate 1,048 pastors, start and support 170 village churches that reach 320 communities, and help countless orphans and widows.',
              'Under this mission, believers in North America and believers in India can become one by working toward the goal of spiritually guiding orphans, widows, Bible college students, and society by sharing the love and servants’ heart of Jesus Christ.',
            ]}
            imageSrc="/child-opt.webp"
            imageAlt="SOWERS ministry in India"
            imageLeft
            imageContain
          />
        </div>
      </section>

      <section className="bg-cream-50 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="The Name"
              title="Every Letter a Promise"
              subtitle="Founded in 2001 by Rev. Jayakumar Babu Salluri, the name SOWERS captures the heart of everything this ministry stands for."
              center
            />
          </FadeInSection>

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {[
              ['S', 'Serving'],
              ['O', 'Orphans'],
              ['W', 'Widows'],
              ['E', 'Educating '],
              ['R', 'Reaching'],
              ['S', 'Society'],
            ].map(([letter, word], i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="min-w-[120px] rounded-xl border border-[#2E8B43] 
bg-[linear-gradient(180deg,#4CAF50_0%,#3FA34D_25%,#2E8B43_55%,#1E7F3A_100%)] 
px-6 py-5 text-center shadow-[0_20px_35px_rgba(30,127,58,0.25)]">
                  <div className="mb-1 font-display text-4xl font-bold text-white">{letter}</div>
                  <div className="font-sans text-sm text-white">{word}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="The Four Pillars"
              title="Our Ministry in Detail"
              subtitle="Each pillar of SOWERS represents a real and urgent need across India - and a biblically-grounded response rooted in the character of Christ."
              center
            />
          </FadeInSection>

          <div className="mt-14 space-y-20">
            {pillars.map((pillar, i) => (
              <div key={pillar.title}>
                <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                  <FadeInSection direction={i % 2 === 0 ? 'left' : 'right'}>
                    <PillarImages pillar={pillar} reverse={i % 2 !== 0} />
                  </FadeInSection>

                  <FadeInSection direction={i % 2 === 0 ? 'right' : 'left'} delay={0.08}>
                    <div className={`${i % 2 === 0 ? 'lg:pl-2' : 'lg:order-1 lg:pr-2'} space-y-6`}>
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 shadow-[0_18px_30px_rgba(10,25,48,0.14)]">
                          <pillar.icon size={24} />
                        </div>
                        <div className="flex items-baseline gap-3">
                          <span className={`font-display text-3xl font-bold ${pillar.accent}`}>{pillar.letter}-</span>
                          <h3 className="font-serif text-4xl text-navy-950 md:text-6xl">{pillar.title}</h3>
                        </div>
                      </div>

                      <div className="space-y-5 text-xl leading-10 text-navy-900/70">
                        {pillar.content.map((paragraph, j) => (
                          <p key={j}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </FadeInSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">Vision & Mission</p>
              <h2 className="font-serif text-4xl text-navy-950 md:text-6xl">The Heart Behind SOWERS Ministry</h2>
              <p className="mt-6 text-lg leading-8 text-navy-900/72 md:text-xl md:leading-9">
                A Gospel-centered ministry movement serving India through pastoral training, compassion, and lasting partnership.
              </p>
            </div>
          </FadeInSection>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <FadeInSection direction="left">
              <div className="h-full rounded-[2rem] border border-navy-900/8 bg-navy-950 p-8 shadow-[0_24px_55px_rgba(10,25,48,0.14)] lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15">
                    <Globe size={26} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">Our Vision</p>
                    <h3 className="mt-2 font-serif text-3xl text-white md:text-4xl">Seeing India Reached</h3>
                  </div>
                </div>

                <p className="text-lg leading-9 text-white md:text-[1.12rem]">
                  To see the unreached millions of India transformed by the love and power of Jesus Christ through trained, equipped, and Spirit-filled local pastors and missionaries.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white">Village churches strengthened</div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white">Leaders prepared for faithful service</div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white">Communities reached with hope</div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.08}>
              <div className="h-full rounded-[2rem] border border-earth-300/40 bg-[linear-gradient(135deg,#fffaf0_0%,#f7efdd_100%)] p-8 shadow-[0_24px_55px_rgba(15,23,42,0.08)] lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500/15">
                    <Shield size={26} className="text-gold-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-700">Our Mission</p>
                    <h3 className="mt-2 font-serif text-3xl text-navy-950 md:text-4xl">How We Carry It Out</h3>
                  </div>
                </div>

                <p className="text-lg leading-9 text-navy-950/90 md:text-[1.12rem]">
                  We unite believers in North America and India to spiritually guide orphans, widows, Bible college students, and society by sharing the love and servants&apos; heart of Jesus Christ.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-navy-900/10 bg-white/65 p-4 text-navy-900/78">Prayer and discipleship</div>
                  <div className="rounded-2xl border border-navy-900/10 bg-white/65 p-4 text-navy-900/78">Care for widows and orphans</div>
                  <div className="rounded-2xl border border-navy-900/10 bg-white/65 p-4 text-navy-900/78">Leadership training and outreach</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

     

      <CTASection
        eyebrow="Join the Mission"
        title="Be Part of What God Is Doing in India"
        subtitle="Your generosity directly funds pastor training, orphan care, widow support, and church planting across the villages of India."
        primaryLabel="Give to SOWERS"
        primaryHref="/donate"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        dark={false}
      />
    </>
  )
}
