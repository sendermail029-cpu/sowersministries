import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import ChristmasJoyGallery from '@/components/ChristmasJoyGallery'

export const metadata: Metadata = {
  title: 'Christmas Joy',
  description:
    'Christmas Joy is a SOWERS Ministry outreach serving children in remote and underserved regions of India with clothing, meals, toys, and hope.',
}

const christmasJoyImages = [
  { id: 1, src: '/chrjoy-opt.webp', alt: 'Christmas Joy outreach gathering', caption: 'Children blessed through Christmas Joy', location: 'Christmas Joy', tall: true },
  { id: 2, src: '/chrjoy2-opt.webp', alt: 'Christmas Joy event moments', caption: 'Sharing joy in remote communities', location: 'Christmas Joy' },
  { id: 3, src: '/chrjoy3-opt.webp', alt: 'Children receiving Christmas Joy gifts', caption: 'Gift packs prepared with care', location: 'Christmas Joy', tall: true },
  { id: 4, src: '/chrjoy5-opt.webp', alt: 'Christmas Joy ministry in the field', caption: 'Serving children with love and care', location: 'Christmas Joy' },
  { id: 5, src: '/chrjoy6-opt.webp', alt: 'Christmas Joy programme activity', caption: 'Reaching new areas every year', location: 'Christmas Joy', tall: true },
  { id: 6, src: '/chrjoy7-opt.webp', alt: 'Christmas Joy outreach to children', caption: 'Dignity restored through giving', location: 'Christmas Joy' },
  { id: 7, src: '/chrjoy10-opt.webp', alt: 'Christmas Joy children gathered together', caption: 'Joy shared among children and families', location: 'Christmas Joy', tall: true },
  { id: 8, src: '/gal1-opt.webp', alt: 'Christmas Joy gift and outreach moment', caption: 'Nutritious care reaching children', location: 'Christmas Joy' },
  { id: 9, src: '/ser-opt.webp', alt: 'Christmas Joy ministry support scene', caption: 'Serving communities with compassion', location: 'Christmas Joy' },
  { id: 10, src: '/chrjoy8-opt.webp', alt: 'Christmas Joy outreach in another village', caption: 'New villages reached through the programme', location: 'Christmas Joy', tall: true },
  { id: 11, src: '/chrjoy9-opt.webp', alt: 'Christmas Joy celebration and giving', caption: 'Celebrating love, dignity, and hope', location: 'Christmas Joy' },
]

const christmasJoyVideos = [
  {
    title: 'ChristmasJoy2021 Video',
    href: 'https://www.youtube.com/embed/ErsCHzPuRNw',
    note: 'Christmas Joy outreach moments from 2021.',
  },
  {
    title: 'Christmas Joy 2022',
    href: 'https://www.youtube.com/embed/klnochde08o',
    note: 'A glimpse into the children, communities, and care reached in 2022.',
  },
  {
    title: 'Christmas Joy 2023',
    href: 'https://www.youtube.com/embed/3ahgbMShGhQ',
    note: 'Christmas Joy in action during the 2023 outreach season.',
  },
  {
    title: 'Christmas Joy 2024',
    href: 'https://www.youtube.com/embed/1447mj_x5A0',
    note: 'Recent field footage from the 2024 Christmas Joy programme.',
  },
]

export default function ChristmasJoyPage() {
  return (
    <>
      <PageHero
        eyebrow="SOWERS Events"
        title="Christmas Joy"
        subtitle="A seasonal outreach carrying clothing, meals, gifts, and the love of Christ to children in remote and underserved parts of India."
        bgImage="/chrjoy-opt.webp"
        bgImageOpacityClass="opacity-100"
        overlayClass="bg-[linear-gradient(180deg,rgba(8,16,48,0.82)_0%,rgba(13,16,48,0.72)_50%,rgba(26,30,74,0.80)_100%)]"
        bgPosition="center top"
      />

      <ChristmasJoyGallery items={christmasJoyImages} videos={christmasJoyVideos} />

      <CTASection
        eyebrow="Sponsor a Child"
        title="One Christmas Joy box can bring warmth, dignity, and a smile"
        subtitle="Your support helps us reach children across Andhra Pradesh, Telangana, Kerala, Orissa, and Karnataka."
        primaryLabel="Donate Now"
        primaryHref="/donate"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        dark={false}
        eyebrowClassName="text-[#2e8a44]"
        primaryClassName="bg-[#2e8a44] text-white hover:bg-[#1f6e33] hover:shadow-[0_8px_30px_rgba(46,138,68,0.35)]"
        secondaryClassName="border-[#2e8a44] text-[#2e8a44] hover:bg-[#2e8a44] hover:text-white"
      />
    </>
  )
}
