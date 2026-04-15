import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import FadeInSection from '@/components/FadeInSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Pastor Jay',
  description:
    'The story of Rev. Jayakumar Babu Salluri - called by God in 1994, trained for 7 years, and faithfully serving India since 2001.',
}

const timeline = [
  {
    year: '1994',
    event: 'The Divine Calling',
    detail:
      'On August 21, 1994, while planning to flee from Bible College, Pastor Jay heard a voice in the night: "My son, Jayakumar." God spoke Jeremiah 1:5 directly to his heart - "Before I formed you in the womb I knew you; before you were born I sanctified you." From that moment, everything changed.',
  },
  {
    year: '1994-99',
    event: 'Seven Years of Seminary',
    detail:
      'Pastor Jay trained in two different theological seminaries for 7 years. God gave him an excellent command of English, and he had the privilege of interpreting for renowned international speakers. He graduated in February 1999 with a Bachelor of Theology - and was one of the few asked to remain on as faculty out of 450 graduates.',
  },
  {
    year: '1997',
    event: 'Introduced to BTCP',
    detail:
      'Pastor Jay was introduced to the Bible Training Centre for Pastors (BTCP) in 1997. He studied the entire curriculum and felt the clear call of the Lord to take this same training to remote, tribal young men and women - equipping them as mighty arrows of the Lord to reach unreached communities.',
  },
  {
    year: '2001',
    event: 'Bethel Ministries & SOWERS Founded',
    detail:
      'Pastor Jay launched Bethel Ministries in India in 2001 - the foundation and home church of SOWERS Ministry. The mobile Bible School began the same year. What started in a single county has now spread into three different states of India.',
  },
  {
    year: '2016',
    event: 'SOWERS International Chairmanship',
    detail:
      'Pastor Jay has been serving as Chairman of Sowers Ministry International USA & Canada since 2016, and as Vice President of The Greater Vijayawada Pastors Fellowship - bridging the global Church in support of the India mission.',
  },
  {
    year: 'Today',
    event: 'An Ever-Growing Mission',
    detail:
      'Over 1,048 pastors trained and sent into the field. 170 village churches started and supported. 320 communities reached. Pastor Jay and his wife Vijayakumari, along with their sons Sam and Mark, continue to face challenges daily - but leading with faith, the journey continues with a broad vision to reach every corner of India.',
  },
]

export default function AboutPastorJayPage() {
  return (
    <>
      <PageHero
        eyebrow="The Founder"
        title="Pastor Jay's Story"
        subtitle="From a troubled Bible college student planning to run away - to the founder of a ministry that has transformed thousands of lives across India."
        bgImage="/home1-opt.webp"
        minHeightClass="min-h-[88vh]"
        bgPosition="center 24%"
        bgImageOpacityClass="opacity-100"
        overlayClass="bg-gradient-to-b from-navy-950/80 via-navy-950/65 to-navy-950/85"
      />

      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeInSection direction="left">
              <SectionHeading eyebrow="The Calling" title="A Voice in the Night" />
              <div className="mt-6 space-y-4 prose-ministry">
                <p>
                  Growing up, Jayakumar Babu Salluri's influences were the Catholic Church from his father and the Hindu religion from his mother. When his father sent him to a Bible College run by the Church of God in Kakinada, on the Bay of Bengal, he did not adjust well.
                </p>
                <p>
                  The long hours - prayer at 5:00 a.m. and again at 10:00 p.m., Bible reading, classes, manual duties - felt overwhelming. He felt he did not belong and was wasting his time. Two months later, he decided to run away.
                </p>
                <p>
                  On the night of August 21, 1994, his plan was clearly hatched. He slipped into sleep - but woke when someone called his name clearly:
                </p>
              </div>

              <div className="mt-6 bg-navy-950 rounded-xl p-6 border-l-4 border-gold-500">
                <p className="font-display text-xl italic text-white/90 leading-relaxed mb-2">
                  "My son, Jayakumar. I have chosen you before you were formed in your mother's womb."
                </p>
                <p className="text-gold-400/70 text-sm">- The voice Pastor Jay heard, August 21, 1994</p>
              </div>

              <div className="mt-5 prose-ministry">
                <p>
                  He woke his roommate, who suggested that if the voice came again, he should kneel and pray. Around twenty minutes to midnight, the voice returned - as distinctly as if speaking on a telephone. Without thinking, he knelt beside his bed.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="bg-navy-950 rounded-2xl p-8 border border-gold-500/20">
                <p className="text-gold-400 text-xs tracking-[0.3em] uppercase font-semibold mb-5">
                  Jeremiah 1:4-10 
                </p>
                <div className="space-y-3 text-white/75 text-sm leading-relaxed font-sans italic">
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">4</span> Then the word of the Lord came to me, saying:
                  </p>
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">5</span> "Before I formed you in the womb I knew you; before you were born I sanctified you; I ordained you a prophet to the nations."
                  </p>
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">6</span> Then said I: "Ah, Lord God! Behold, I cannot speak, for I am a youth."
                  </p>
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">7</span> But the Lord said to me: "Do not say, 'I am a youth,' for you shall go to all to whom I send you, and whatever I command you, you shall speak.
                  </p>
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">8</span> Do not be afraid of their faces, for I am with you to deliver you," says the Lord.
                  </p>
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">9</span> Then the Lord put forth His hand and touched my mouth, and the Lord said to me: "Behold, I have put My words in your mouth.
                  </p>
                  <p>
                    <span className="text-gold-400 not-italic font-semibold">10</span> See, I have this day set you over the nations and over the kingdoms, to root out and to pull down, to destroy and to throw down, to build and to plant."
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading eyebrow="His Journey" title="A Life Poured Out for India" center />
          </FadeInSection>

          <div className="mt-14 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-500/30 to-transparent" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center z-10 shrink-0 shadow-lg shadow-gold-500/30">
                      <div className="w-3 h-3 bg-navy-950 rounded-full" />
                    </div>

                    <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                      <div className="bg-cream-100 rounded-xl p-6 border border-cream-300/50">
                        <div className="font-display text-2xl font-bold text-gold-600 mb-1">{item.year}</div>
                        <h4 className="font-sans font-semibold text-navy-950 text-base mb-3">{item.event}</h4>
                        <p className="text-navy-900/65 text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeInSection direction="left">
              <SectionHeading eyebrow="Faith & Family" title="A Life of Sacrifice & Faithfulness" light />
              <div className="mt-6 space-y-4 text-white/65 text-sm leading-relaxed">
                <p>
                  God blessed Pastor Jay with his beautiful wife, Vijayakumari Salluri, and two sons. Their first, Sam Holliday, was born premature and declared dead in the womb - but by God's grace, he was born alive and has grown into a living testimony of God's faithfulness.
                </p>
                <p>
                  Their second son, Mark Jay Holliday, was born on August 2, 2018 - each day often bringing a life-threatening situation. But leading with faith, the journey continues with a broad vision to equip more and more people to reach every nook of the nation of India.
                </p>
                <p>
                  Pastor Jay has dealt with many challenges in ministry: spiritual battles, malaria three times, typhus once, problems with the government and law enforcement, life-threatening Hindu radicals, a catastrophic automobile accident, thirst, hunger, and many nights freezing in the jungle.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-gold-500/20 bg-white/5 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src="/jayfamily-opt.webp"
                      alt="Pastor Jay family placeholder"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 border border-gold-500/20">
                  <p className="font-display text-2xl italic text-white/90 leading-relaxed mb-6">
                    "Reaching the Unreached millions with the light of the Gospel, Educating the Youngsters, Advocating the Persecuted. Planting the Churches, Helping the Poor and Needy - this is the calling God placed on my life."
                  </p>
                  <p className="text-gold-400/70 text-sm">- Rev. Jayakumar Babu Salluri</p>
                  <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                    {[
                      ['Chairman', 'SOWERS Ministry Intl USA & Canada (since 2016)'],
                      ['Vice President', 'Greater Vijayawada Pastors Fellowship'],
                      ['Founder', 'Bethel Ministries, India (2001)'],
                      ['Training', '7 Years Seminary, B.Th (1999)'],
                    ].map(([title, desc]) => (
                      <div key={title}>
                        <div className="text-gold-400 font-semibold text-xs uppercase tracking-wide mb-1">{title}</div>
                        <div className="text-white/50 text-xs leading-relaxed">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Support the Mission"
        title="Stand With Pastor Jay & the SOWERS Team"
        subtitle="Your partnership enables pastors to be trained, villages to be reached, and the love of Christ to flow into the darkest corners of India."
        primaryLabel="Give Now"
        primaryHref="/donate"
        forceDonorboxModal
        secondaryLabel="Church Network"
        secondaryHref="/church-network"
        dark={false}
      />
    </>
  )
}
