import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import { getLatestNewsletter, saveNewsletter, saveUploadedImageAsWebp } from '@/lib/content-store'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const formData = await request.formData()
    const title = String(formData.get('title') || '').trim()
    const publishedLabel = String(formData.get('publishedLabel') || 'Latest Field Report').trim()
    const bodyHtml = String(formData.get('bodyHtml') || '').trim()
    const imageFile = formData.get('image')

    if (!title || !bodyHtml) {
      return NextResponse.json({ error: 'Title and newsletter content are required.' }, { status: 400 })
    }

    const current = await getLatestNewsletter()
    let image = current.image
    let imageAlt = current.imageAlt

    if (imageFile instanceof File && imageFile.size > 0) {
      image = await saveUploadedImageAsWebp(imageFile, 'newsletter', title)
      imageAlt = title
    }

    await saveNewsletter({
      ...current,
      title,
      publishedLabel,
      bodyHtml,
      image,
      imageAlt,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unable to save newsletter update.' }, { status: 500 })
  }
}
