import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getLatestUpdate, type UpdateAttachment } from '@/lib/content-store'

export const metadata: Metadata = {
  title: 'Updates',
  description: 'Read the latest SOWERS Ministry field update and ministry report.',
}

export const dynamic = 'force-dynamic'

function attachmentLabel(type: UpdateAttachment['type']) {
  switch (type) {
    case 'pdf':
      return 'PDF'
    case 'ppt':
      return 'PPT'
    case 'pptx':
      return 'PPTX'
    case 'doc':
      return 'DOC'
    case 'docx':
      return 'DOCX'
    case 'zip':
      return 'ZIP'
    case 'image':
      return 'Image'
    default:
      return 'File'
  }
}

export default async function NewsletterPage() {
  const latestUpdate = await getLatestUpdate()
  const heroImage = '/conta-opt.webp'
  const leadImage = latestUpdate.heroImage

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 pb-28 pt-40 text-center text-white">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={latestUpdate.title}
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,21,57,0.88)_0%,rgba(14,21,57,0.74)_42%,rgba(14,21,57,0.86)_100%)] sm:bg-[linear-gradient(90deg,rgba(14,21,57,0.90)_0%,rgba(14,21,57,0.78)_46%,rgba(14,21,57,0.56)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(224,175,62,0.16),transparent_26%),radial-gradient(circle_at_25%_70%,rgba(255,255,255,0.08),transparent_24%)]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-gold-400">
            {latestUpdate.topLabel}
          </p>

          <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl">
            {latestUpdate.title}
          </h1>

          {latestUpdate.summary && (
            <p className="mt-6 text-lg leading-8 text-white/85 sm:text-xl">
              {latestUpdate.summary}
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream-50 px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="rounded-[2.25rem] border border-cream-300/70 bg-[#f5efdf] px-4 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 sm:py-10 lg:px-12">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-700">
                Updated {new Date(latestUpdate.updatedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {leadImage && (
              <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl overflow-hidden rounded-[2rem] bg-[#e6dcc6] shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                <Image
                  src={leadImage}
                  alt={latestUpdate.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] bg-[#f7f0df] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
              <article
                className="newsletter-prose"
                dangerouslySetInnerHTML={{ __html: latestUpdate.bodyHtml }}
              />

              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#d8c9a8] pt-6">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex rounded-full px-7 py-3 text-sm font-sans"
                >
                  Connect With Us
                </Link>
                <Link
                  href="/donate"
                  className="btn-outline inline-flex rounded-full px-7 py-3 text-sm font-sans"
                >
                  Support the Ministry
                </Link>
              </div>
            </div>
          </div>

          {latestUpdate.contentImages.length > 0 && (
            <section className="rounded-[2.25rem] border border-cream-300/70 bg-white px-5 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-700">
                  Update Images
                </p>
                <h2 className="mt-3 font-display text-3xl text-navy-950">
                  More from the update
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {latestUpdate.contentImages.map((image) => (
                  <div
                    key={image.url}
                    className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-cream-100"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {latestUpdate.attachments.length > 0 && (
            <section className="rounded-[2.25rem] border border-cream-300/70 bg-white px-5 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-8 lg:px-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-700">
                  Attachments
                </p>
                <h2 className="mt-3 font-display text-3xl text-navy-950">
                  Download supporting files
                </h2>
              </div>

              <div className="grid gap-4">
                {latestUpdate.attachments.map((attachment) => (
                  <div
                    key={attachment.url}
                    className="flex flex-col gap-4 rounded-[1.5rem] border border-cream-300/70 bg-cream-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-700">
                        {attachmentLabel(attachment.type)}
                      </p>
                      <p className="mt-2 text-base font-semibold text-navy-950">
                        {attachment.name}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={attachment.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline inline-flex rounded-full px-6 py-3 text-sm font-sans"
                      >
                        Open
                      </a>
                      <a
                        href={attachment.url}
                        download
                        className="btn-primary inline-flex rounded-full px-6 py-3 text-sm font-sans"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  )
}
