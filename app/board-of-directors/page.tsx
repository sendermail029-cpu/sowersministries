'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
}

const heroSlides = [
  { src: '/cb-opt.webp', alt: 'Cindy and John Brickner', position: 'center 28%' },
  { src: '/nb-opt.webp', alt: 'Bill and Heather Sugg', position: 'center 24%' },
  { src: '/home1-opt.webp', alt: 'Pastor Jay', position: 'center 20%' },
  { src: '/nj-opt.webp', alt: 'Nicholas and Jenny Patey', position: 'center 24%' },
]

export default function BoardOfDirectorsPage() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="bg-white overflow-x-hidden">
      <section className="relative overflow-hidden bg-navy-pattern pt-28 pb-14 min-h-[60vh] sm:pt-32 sm:pb-20 sm:min-h-[72vh]">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroSlides[activeSlide].src}
              initial={{ opacity: 0.25 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.25 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroSlides[activeSlide].src}
                alt={heroSlides[activeSlide].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: heroSlides[activeSlide].position }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,48,0.84)_0%,rgba(13,16,48,0.78)_52%,rgba(26,30,74,0.72)_100%)]" />

        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-navy-700/30 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(60vh-6rem)] max-w-5xl items-center px-4 text-center sm:min-h-[calc(72vh-8rem)] sm:px-6 lg:px-8">
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs font-sans font-semibold uppercase tracking-[0.3em] text-gold-400"
            >
              Leadership
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 font-display text-[3.2rem] font-semibold leading-[0.95] text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Board of Directors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mx-auto max-w-[20rem] text-[0.95rem] leading-relaxed text-white/75 sm:max-w-2xl sm:text-lg"
            >
              Meet the leaders helping guide the vision and mission of SOWERS Ministry.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- CINDY & JOHN SECTION --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/cb-opt.webp"
                alt="Cindy and John Brickner"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex items-end p-8 md:p-12">
                <div>
                  <h2 className="font-serif text-4xl md:text-6xl text-white mb-2">Cindy & John Brickner</h2>
                  <p className="text-gold-400 font-bold tracking-widest uppercase">Finance Manager & Secretary General Since 2016</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div {...fadeInUp} className="prose prose-lg prose-navy max-w-none">
              <h3 className="text-3xl font-bold text-navy-950 flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-gold-500"></span> Cindy Brickner
              </h3>
              <p>Cindy has been a teacher of God&apos;s Word for over 20 years and is passionate about inspiring the faith of others. Her first introduction to India was in 2008 when she and John were invited to visit the country with their senior pastor as an elder and leader in women&apos;s ministry.</p>
              <p>She spent one particular bus trip alongside a young man who was praying about building a school—he told her of the needs, and she sought God for ways to help. After much prayer and divine appointments, Cindy was encouraged to become a part of what God was doing in India.</p>
              <p>In 2017 she joined the board for SOWERS Ministry, witnessing the completed school that her dear friend had spoke about in 2008. Cindy has a deep heart for the people of India and a passion to see Christ glorified through connecting the heart of his bride—regardless of our borders.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="prose prose-lg prose-navy max-w-none">
              <h3 className="text-3xl font-bold text-navy-950 flex items-center gap-3 mb-6">
                <span className="w-8 h-1 bg-gold-500"></span> John Brickner
              </h3>
              <p>John Brickner is a dedicated leader with more than 14 years of experience serving as a pastor and elder in Southern California. Known for a compassionate approach and commitment to social justice, John has been an inspiring force in both spiritual guidance and community outreach.</p>
              <p>His work in India includes multiple mission trips, establishing partnerships with local organizations, and mentoring emerging leaders. His unique perspective and hands-on experience in cross-cultural settings have enriched the mission and vision of SOWERS Ministry.</p>
              <p>In his free time, John enjoys traveling with his wife, spending quality time with his grandchildren, and collecting baseball cards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BILL & HEATHER SECTION --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16 lg:flex lg:flex-row-reverse lg:items-center lg:gap-16">
            <div className="relative h-[400px] lg:h-[500px] w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-xl mb-12 lg:mb-0">
              <Image src="/nb-opt.webp" alt="Bill and Heather Sugg" fill className="object-cover" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-serif text-5xl md:text-7xl text-navy-950 mb-6">Bill & Heather Sugg</h2>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gold-600 border border-gold-200 shadow-sm uppercase tracking-widest">Executive Directors</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-bold text-navy-900 border border-slate-200 shadow-sm uppercase tracking-widest">Donor Relations</span>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div {...fadeInUp} className="prose prose-lg prose-navy max-w-none">
              <h3 className="text-3xl font-bold text-navy-950 mb-6 underline decoration-gold-500 decoration-4 underline-offset-8">Heather Sugg</h3>
              <p>Heather Sugg leads community relations for the SOWERS ministry. You may find her reaching out to schedule a visit or discuss getting involved. She is an executive at a technology-focused communication agency. Her marketing background includes consulting and developing communication strategy for clients ranging from start-ups to S&P 500 companies.</p>
              <p>She enjoys launching new brands and helping build a new generation of leaders. Her missionary work began in 2015 when she collaborated with East-West Ministries International to lead small groups in remote Caribbean locations.</p>
              <p>Heather is a bible study leader, deaconess, and board member at Calvary Chapel North Shore, her home church in Princeville, Hawaii. When God moved her and Bill to Hawaii in 2017, they prayed for a new mission to support and He placed Pastor Jay in their lives with divine appointment.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="prose prose-lg prose-navy max-w-none">
              <h3 className="text-3xl font-bold text-navy-950 mb-6 underline decoration-gold-500 decoration-4 underline-offset-8">Bill Sugg</h3>
              <p>Bill Sugg (and his wife Heather) first met Pastor Jay in 2017 when he visited their new home Church (Calvary Chapel North Shore). After hearing of the incredible need and work SOWERS was doing to spread the gospel in India, he knew they needed to be part of supporting this incredible ministry.</p>
              <p>After a couple years of supporting the ministry and getting to know them better, Pastor Jay approached Heather and Bill asking them to assist in donor relations and join the board of directors.</p>
              <p>Bill&apos;s diverse career spans from high net-worth insurance, marketing and sales management, full time ministry and even personal training/nutrition coaching. Wherever God brought him, he develops relationships that help people bring God into the forefront of their lives.</p>
              <p>Today, Bill is an owner and executive at Cloud Warriors, a technology service integration company with a social mission to turn IT budgets into jobs for U.S. Veterans. He has a passion for helping others achieve their goals and succeed. Bill is an elder and board member at Calvary Chapel North Shore where he leverages his experience to help bring the ministry to the next level.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PASTOR JAY SECTION --- */}
      <section className="relative overflow-hidden bg-[#0a1930] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,185,77,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_20%)]"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <motion.div {...fadeInUp}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
                <div className="relative h-[500px] overflow-hidden rounded-[1.5rem] border border-[#17314f] lg:h-[700px]">
                  <Image
                    src="/home23-opt.webp"
                    alt="Pastor Jay"
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute right-10 top-10 rounded-full bg-[#e6b94d] px-6 py-3 font-black text-[#0a1930] shadow-[0_14px_30px_rgba(230,185,77,0.35)]">
                  SERVING SINCE 2016
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="pt-2 lg:pt-12">
              <div className="mb-10">
                <div className="mb-5 h-1.5 w-24 rounded-full bg-[#e6b94d]"></div>
                <h2 className="font-serif text-6xl text-white md:text-7xl">Pastor Jay</h2>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <span className="text-xl font-bold uppercase tracking-widest text-[#e6b94d]">Chairman of the Board</span>
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    <span
                      aria-hidden="true"
                      className="h-5 w-8 overflow-hidden rounded-[3px] border border-white/20 shadow-sm"
                    >
                      <span className="block h-1/3 bg-[#ff9933]"></span>
                      <span className="flex h-1/3 items-center justify-center bg-white text-[8px] leading-none text-[#1a3c8e]">◉</span>
                      <span className="block h-1/3 bg-[#138808]"></span>
                    </span>
                    <span className="bg-gradient-to-r from-[#e6b94d] via-[#f3deb1] to-white bg-clip-text text-lg font-semibold uppercase tracking-[0.28em] text-transparent">
                      India
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-none space-y-8 leading-relaxed">
                <p className="text-[1.45rem] font-medium leading-10 text-white">
                  Rev. Jayakumar Babu Salluri, &ldquo;Pastor Jay&rdquo; was called to the ministry on August 21,1994. After a 7-year bible college program he earned a Bachelor of Theology in 1999. He launched Bethel Ministries in India in 2001, the foundation and home church of SOWERS Ministry.
                </p>
                <p className="text-[1.3rem] leading-10 text-white/82">
                  Pastor Jay has personally trained 1,300+ pastors and sent them out into the field over these years. He is Vice President of The Greater Vijayawada Pastors Fellowship. And has been serving as chairman of Sowers Ministry International, USA & Canada since 2016. 
                </p>
                <div>
                  <Link
                    href="/about-pastor-jay"
                    className="inline-flex items-center rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-white"
                  >
                    More About Pastor Jay
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NICHOLAS & JENNY SECTION --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-16">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/nj-opt.webp" alt="Nicholas and Jenny Patey" fill className="object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent flex justify-center px-4 pb-3 pt-24 md:px-8 md:pb-4 md:pt-32 text-center">
                <div className="w-full max-w-4xl bg-white/90 backdrop-blur-md px-6 py-5 md:px-10 md:py-6 rounded-2xl border-b-8 border-gold-500">
                  <p className="mb-3 text-3xl font-serif italic text-navy-950 md:text-4xl">"Point them to Jesus."</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy-950">Nicholas & Jenny Patey</h2>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div {...fadeInUp} className="prose prose-lg prose-navy max-w-none">
              <h3 className="text-2xl font-bold text-white bg-navy-950 px-6 py-3 inline-block rounded-lg mb-6">Nicholas Patey</h3>
              <p>Nicholas Patey was saved by Jesus in high school, a life-changing moment that continues to shape every part of his journey. He played volleyball throughout high school and began coaching during his college years, an experience that not only deepened his love for the sport but also led him to meet his wife, Jenny. They have now been married for 18 years and are raising three wonderful children: Noah (14), Lucas (12), and Charlotte (10).</p>
              <p>Nicholas earned his undergraduate degree in Mathematics from The Master&apos;s University and his master&apos;s degree in Education from Azusa Pacific University. His teaching career began at Azusa High School, where he taught for three years before moving to Golden Valley High School. For the past 16 years, he has served at Golden Valley as a mathematics teacher, including five years as department chair, and currently works as an Instructional Coach.</p>
              <p>Since 2009, Nicholas and his family have been active members of Grace Baptist Church, where he helps lead Bible studies in an adult Bible fellowship group and serves in the youth ministry. He has also had the privilege of traveling to India, Haiti, and Ecuador to share the gospel and is honored to serve on the board of Sowers Ministries.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="prose prose-lg prose-navy max-w-none">
              <h3 className="text-2xl font-bold text-white bg-navy-950 px-6 py-3 inline-block rounded-lg mb-6">Jenny Patey</h3>
              <p>Jenny Patey grew up in a Christian home and invited Jesus into her heart at a young age. Her church quickly became a second home, where she was actively involved in ministry and missions. From a young age, she had the opportunity to visit other countries and experience different cultures through church-led mission trips, which deepened her passion for seeing God&apos;s work around the world.</p>
              <p>Jenny played college volleyball and later coached junior high and high school girls, a role that blended her love for the sport and mentorship. Volleyball is also how she met her husband, Nicholas. They&apos;ve been married for 18 years and share a heart for global ministry. In 2009, they spent a summer in India supporting schools and teacher credentialing programs as part of kingdom work abroad.</p>
              <p>Jenny is passionate about education and began her career as a history teacher after earning her master&apos;s degree in education. She later transitioned out of the classroom to care for her young children and currently works as a credentialed teacher, supporting K-12 homeschooling families. She also homeschools her own children, ages 14, 12, and 10. Recently, she completed a second master&apos;s degree and earned her credential in educational leadership, with hopes of one day pursuing a role in school administration.</p>
              <p>Deeply involved in her local church, Jenny has served as a youth leader for over a decade, investing in high school students and pointing them to Jesus. She and her family have a special heart for vulnerable children and have been actively involved in foster care, both as a foster family and in supportive roles, for the past five years. Jenny is passionate about teamwork, discipleship, and making a positive impact wherever God calls her.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
