import { NextResponse } from 'next/server'
import { isAdminAuthenticated } from '@/lib/admin-auth'
import {
  clearCurrentUpdateUploads,
  detectUpdateAttachmentType,
  saveLatestUpdate,
  saveUploadedUpdateAttachment,
  saveUploadedUpdateImage,
} from '@/lib/content-store'

export const runtime = 'nodejs'

const allowedAttachmentTypes = new Set([
  'pdf',
  'ppt',
  'pptx',
  'doc',
  'docx',
  'zip',
  'image',
])

export async function POST(request: Request) {
  try {
    if (!(await isAdminAuthenticated())) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
    }

    const formData = await request.formData()
    const title = String(formData.get('title') || '').trim()
    const topLabel = String(formData.get('topLabel') || 'Latest Update').trim()
    const summary = String(formData.get('summary') || '').trim()
    const bodyHtml = String(formData.get('bodyHtml') || '').trim()
    const heroImage = formData.get('heroImage')
    const contentImages = formData
      .getAll('contentImages')
      .filter((entry): entry is File => entry instanceof File && entry.size > 0)
    const attachments = formData
      .getAll('attachments')
      .filter((entry): entry is File => entry instanceof File && entry.size > 0)

    if (!title) {
      return NextResponse.json({ error: 'Please enter an update title.' }, { status: 400 })
    }

    if (!bodyHtml) {
      return NextResponse.json({ error: 'Please enter update content.' }, { status: 400 })
    }

    if (heroImage instanceof File && heroImage.size > 0 && !heroImage.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Hero image must be an image file.' }, { status: 400 })
    }

    if (contentImages.some((file) => !file.type.startsWith('image/'))) {
      return NextResponse.json(
        { error: 'Every content image must be a valid image file.' },
        { status: 400 }
      )
    }

    for (const file of attachments) {
      const detectedType = detectUpdateAttachmentType(file.name, file.type)
      if (!allowedAttachmentTypes.has(detectedType)) {
        return NextResponse.json(
          {
            error:
              'Attachments must be PDF, PPT, PPTX, DOC, DOCX, ZIP, or image files.',
          },
          { status: 400 }
        )
      }
    }

    await clearCurrentUpdateUploads()

    const savedHeroImage =
      heroImage instanceof File && heroImage.size > 0
        ? (
            await saveUploadedUpdateImage(
              heroImage,
              `${title}-hero`,
              `${title} hero image`
            )
          ).url
        : ''

    const savedContentImages = await Promise.all(
      contentImages.map((file, index) =>
        saveUploadedUpdateImage(
          file,
          `${title}-content-${index + 1}`,
          `${title} content image ${index + 1}`
        )
      )
    )

    const savedAttachments = await Promise.all(
      attachments.map((file, index) =>
        saveUploadedUpdateAttachment(file, `${title}-attachment-${index + 1}`)
      )
    )

    await saveLatestUpdate({
      title,
      topLabel,
      summary,
      heroImage: savedHeroImage,
      bodyHtml,
      contentImages: savedContentImages,
      attachments: savedAttachments,
      updatedAt: new Date().toISOString(),
    })

    return NextResponse.json({
      ok: true,
      message: 'Update saved successfully.',
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Unable to save update.' }, { status: 500 })
  }
}
