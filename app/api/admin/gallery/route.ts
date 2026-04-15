import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import {
  getGalleryItems,
  nextGalleryId,
  saveGalleryItems,
  saveUploadedImageAsWebp,
  type GalleryCategory,
} from '@/lib/content-store'

export const runtime = 'nodejs'

const validCategories = new Set<GalleryCategory>(['children', 'pastors', 'outreach', 'graduation'])
const categoryDefaults: Record<GalleryCategory, { caption: string; location: string }> = {
  children: {
    caption: 'Children served through SOWERS Ministry',
    location: 'Children',
  },
  pastors: {
    caption: 'Pastors encouraged through SOWERS Ministry',
    location: 'Pastors',
  },
  outreach: {
    caption: 'Outreach ministry through SOWERS Ministry',
    location: 'Outreach',
  },
  graduation: {
    caption: 'Graduation and training through SOWERS Ministry',
    location: 'Graduation',
  },
}

export async function POST(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const formData = await request.formData()
    const category = String(formData.get('category') || '').trim() as GalleryCategory
    const captionInput = String(formData.get('caption') || '').trim()
    const locationInput = String(formData.get('location') || '').trim()
    const tall = String(formData.get('tall') || '') === 'true'
    const imageFile = formData.get('image')

    if (!validCategories.has(category)) {
      return NextResponse.json({ error: 'Please choose a valid gallery category.' }, { status: 400 })
    }

    if (!(imageFile instanceof File) || imageFile.size === 0) {
      return NextResponse.json({ error: 'Please choose an image to upload.' }, { status: 400 })
    }

    const defaults = categoryDefaults[category]
    const caption = captionInput || defaults.caption
    const location = locationInput || defaults.location
    const src = await saveUploadedImageAsWebp(imageFile, 'gallery', caption)
    const currentItems = await getGalleryItems()

    currentItems.unshift({
      id: nextGalleryId(currentItems),
      src,
      thumb: src,
      category,
      caption,
      location,
      tall,
    })

    await saveGalleryItems(currentItems)

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unable to save gallery image.' }, { status: 500 })
  }
}
