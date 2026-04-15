import PageHero from '@/components/PageHero'
import GalleryClient from '@/components/GalleryClient'
import { getGalleryItems } from '@/lib/content-store'

export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  const items = await getGalleryItems()

  return (
    <>
      <PageHero
        eyebrow="SOWERS Gallery"
        title="Witness the Work"
        subtitle="Real moments from India's mission field - lives transformed, churches planted, and the love of Christ poured out to the forgotten."
        bgImage="/child-opt.webp"
        bgImageOpacityClass="opacity-100"
        overlayClass="bg-[linear-gradient(180deg,rgba(8,16,48,0.86)_0%,rgba(13,16,48,0.80)_50%,rgba(26,30,74,0.78)_100%)]"
      />
      <GalleryClient initialItems={items} />
    </>
  )
}
