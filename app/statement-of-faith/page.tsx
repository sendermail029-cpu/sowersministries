import type { Metadata } from 'next'
import { BookOpen, Sun, Users, Heart, Cross, Flame, Church, Crown } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import FadeInSection from '@/components/FadeInSection'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Statement of Faith',
  description:
    'What SOWERS Ministry believes - the Bible, the Trinity, salvation through Jesus Christ, the Holy Spirit, the Church, and eternity.',
}

const beliefs = [
  {
    icon: BookOpen,
    title: 'The Holy Scriptures',
    paragraphs: [
      'The Bible is God’s unique revelation to people. It is the inspired Word of God and the supreme and final authority on all matters upon which it teaches.',
    ],
    verses: ['2 Timothy 3:16-17', '2 Peter 1:20-21', 'Hebrews 4:12'],
  },
  {
    icon: Sun,
    title: 'One God in Three Persons',
    paragraphs: [
      'There is only one God, creator of heaven and earth, who exists eternally as three persons: Father, Son, and Holy Spirit, each fully God, yet each personally distinct from the other.',
    ],
    verses: ['Genesis 1:1', 'Exodus 3:14', 'Matthew 28:19', '2 Corinthians 13:14', 'John 1:1-5', 'Matthew 3:13-17'],
  },
  {
    icon: Users,
    title: 'Created in God’s Image',
    paragraphs: [
      'All people are created in God’s image and matter deeply to Him. Central to the message of the Bible is that God loves people and invites them to live in communion with Him and in community with each other.',
    ],
    verses: ['Acts 2:42-47', 'Hebrews 10:19-25'],
  },
  {
    icon: Heart,
    title: 'Salvation by Grace',
    paragraphs: [
      'Apart from Jesus Christ, all people are spiritually lost and, because of sin, deserve the judgment of God. However, God gives salvation and eternal life to anyone who trusts in Jesus Christ and in His sacrifice on his or her behalf. Salvation cannot be earned through personal goodness or human effort. It is a gift that must be received by humble repentance and faith in Christ and His finished work on the cross.',
    ],
    verses: ['Romans 3:23', 'Romans 6:23', 'Romans 5:8', 'Romans 10:9', 'Romans 10:13', 'John 3:16-17'],
  },
  {
    icon: Cross,
    title: 'Jesus Christ',
    paragraphs: [
      'Jesus Christ, the second Person of the Trinity, was born of the Virgin Mary, lived a sinless human life, willingly took upon Himself all of our sins, died and rose again bodily, and is at the right hand of the Father as our advocate and mediator. Someday, He will return to consummate history and to fulfill the eternal plan of God.',
    ],
    verses: ['Matthew 1:18-25', 'John 20', '1 John 2:1-2', 'I Corinthians 15:50-58'],
  },
  {
    icon: Flame,
    title: 'The Holy Spirit',
    paragraphs: [
      'The Holy Spirit, third Person of the Trinity, convicts the world of sin and draws people to Christ. He also indwells all believers. He is available to empower them to lead Christ-like lives and give them spiritual gifts with which to serve the church and reach out to a lost and needy world.',
    ],
    verses: ['John 16:5-15', 'Luke 24:45-49', 'Acts 1:8', '1 Corinthians 12', 'I Corinthians 13', 'Matthew 28:18-20'],
  },
  {
    icon: Church,
    title: 'The Body of Christ',
    paragraphs: [
      'All believers, regardless of caste, creed, and color, are members of the body of Christ, the one true church. Spiritual unity among Christians is expressed through the acceptance and love of one another across ethnic, cultural, socio-economic, national, generational, gender, and denominational lines.',
    ],
    verses: ['Ephesians 4:1-6', 'John 17:20-23', 'Acts 15:1-35'],
  },
  {
    icon: Crown,
    title: 'Eternal Destiny',
    paragraphs: [
      'Death seals each person’s eternal destiny. At the final judgment, unbelievers will be separated from God into condemnation.',
      'Believers will be received into God’s loving presence and rewarded for their faithfulness to Him in this life.',
    ],
    verses: ['Luke 16:19-31', 'Matthew 25:31-46', '2 Corinthians 5:1-10'],
  },
]

const commitmentVerses = ['Romans 12:1-2', 'Galatians 2:20', 'Galatians 6:14', 'Philippians 1:3-11']

export default function StatementOfFaithPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Believe"
        title="Statement of Faith"
        subtitle="The truths of God’s Word that anchor every part of SOWERS Ministry - our teaching, our service, and our partnerships."
        bgImage="/ser-opt.webp"
      />

      <section className="bg-cream-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading
              eyebrow="Our Beliefs"
              title="Rooted in the Word of God"
              subtitle="These core convictions shape who we are and how we serve the people of India."
              center
            />
          </FadeInSection>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
            {beliefs.map((belief, i) => (
              <FadeInSection key={belief.title} delay={(i % 2) * 0.08} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-earth-200/70 bg-white p-7 shadow-[0_24px_55px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_65px_rgba(15,23,42,0.12)] sm:p-9">
                  <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-bold leading-none text-cream-200/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-gold-400 shadow-[0_18px_30px_rgba(10,25,48,0.14)] transition-transform duration-300 group-hover:scale-105">
                      <belief.icon size={24} />
                    </div>
                    <h3 className="font-serif text-2xl text-navy-950 md:text-3xl">{belief.title}</h3>
                  </div>

                  <div className="relative flex-1 space-y-4 text-lg leading-8 text-navy-900/75">
                    {belief.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="relative mt-7 flex flex-wrap gap-2 border-t border-earth-200/60 pt-5">
                    {belief.verses.map((verse) => (
                      <span
                        key={verse}
                        className="rounded-full border border-gold-500/25 bg-gold-50 px-3 py-1 text-sm font-semibold text-gold-700"
                      >
                        {verse}
                      </span>
                    ))}
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-navy-700/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionHeading eyebrow="Our Commitment" title="Living Out What We Believe" center light />
          </FadeInSection>

          <FadeInSection delay={0.08}>
            <div className="mt-10 space-y-6 text-lg leading-9 text-white/85 md:text-xl md:leading-10">
              <p>
                Sowers seeks to encourage and present this message by partnering with other ministries whose Missions are anchored in Biblical teachings, while creating a strengthened body of Christ that will transform and make a difference through their “loving and Christ-like” actions in their local communities.
              </p>
              <p>
                Through our actions, teachings, and mutual beliefs in God, we will all invest our time, energy, and resources to fulfill God’s mission for our lives, reaching others for an eternal relationship with God, while glorifying and building the Kingdom of God.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {commitmentVerses.map((verse) => (
                <span
                  key={verse}
                  className="rounded-full border border-gold-400/30 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-gold-400"
                >
                  {verse}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <CTASection
        eyebrow="Join the Mission"
        title="Partner With Us in the Gospel"
        subtitle="Stand with SOWERS as we train pastors, care for orphans and widows, and reach the villages of India with the love of Christ."
        primaryLabel="Give to SOWERS"
        primaryHref="/donate"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        dark={false}
      />
    </>
  )
}
