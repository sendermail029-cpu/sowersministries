import type { Metadata } from 'next'
import Image from 'next/image'
import ChurchNetworkShowcase from '@/components/ChurchNetworkShowcase'

export const metadata: Metadata = {
  title: 'Church Network',
  description: 'Join us in supporting rural pastors in India through prayer, love, and practical support.',
}

const networkStories = [
  {
    image: '/sowers-opt.webp',
    alt: 'Pastor serving in rural India',
    paragraphs: [
      'Pastors throughout rural India are passionate about Jesus and sacrifice all they have for his Kingdom. It is our mission to support, train, and love these pastors so that they become better equipped to serve the Kingdom of God in a very dark and isolated culture. Pastors in India, especially in rural areas, are always on the front line of persecution.',
      'Living with their siblings in small thatched roof leaking huts, walking miles on dark paths in the dense forests to reach villages for the sake of gospel, beaten to death, churches burnt, family members threatened, starved, suffered from malaria, typhoid, jaundice due to the contaminated water and food - all of these are real life testaments being dealt with today. But, they never imagine a day without preaching of the gospel.',
    ],
  },
  {
    image: '/church1-opt.webp',
    alt: 'Village pastor in church network',
    paragraphs: [
      'In villages where darkness prevails, they are the true torches. Where there is confusion, they show God’s wisdom. Where there is sickness and contagious diseases, they are the primary medical caregivers and simultaneously the faith healers too. They transform the lies of the enemy into truth, changing a barbaric culture into a Christ-centered one.',
      'It is a noble task. We want to honor them with a monthly donation that could help to feed their families and educate their children.',
    ],
  },
  {
    image: '/church3-opt.webp',
    alt: 'Pastor encouraged through monthly support',
    paragraphs: [
      'Sponsor a local pastor and they will keep you updated with prayer needs, pictures, quarterly updates, and more. You and your family will be uplifted in their prayers.',
      'If you are interested in sponsoring a specific pastor, you can download their profile and begin praying today. Note their name in your donation form and we will get you connected.',
    ],
  },
]

export default function ChurchNetworkPage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/mini-opt.webp"
            alt="Rural pastors in India"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/65 to-navy-950/85" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-center px-4 pb-24 pt-36 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
              Church Network
            </p>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Join Us in Supporting Rural Pastors in India
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-cream-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
              Church Network
            </p>
            <h2 className="font-serif text-4xl text-navy-950 md:text-6xl">
              The Pastors Behind The Church Network
            </h2>
            <p className="mt-6 text-lg leading-8 text-navy-900/70 md:text-xl">
              Faithful men carrying the Gospel into villages, forests, and hostile places where the name of Jesus is still costly to proclaim.
            </p>
          </div>

          <div className="mt-14 divide-y divide-cream-300/80">
            {networkStories.map((story, index) => (
              <article
                key={story.alt}
                className="grid items-stretch gap-8 py-10 first:pt-0 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-full min-h-[280px] overflow-hidden rounded-[1rem]">
                    <Image
                      src={story.image}
                      alt={story.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.20))]" />
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-5 text-lg leading-9 text-navy-900/80">
                    {story.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-cream-300/80 pt-10 text-navy-950">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
              Partnership
            </p>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl">
              Stand with pastors who refuse to stop preaching Christ
            </h3>
            <p className="mt-4 max-w-4xl text-base leading-8 text-navy-900/78 md:text-lg">
              Your support becomes encouragement, provision, training, and strength for pastors serving in places where the Gospel is resisted but deeply needed.
            </p>
          </div>
        </div>
      </section>

      <ChurchNetworkShowcase />
    </>
  )
}
