import { latestNewsletter } from '@/data/newsletters'

export type UpdateAttachmentType =
  | 'pdf'
  | 'ppt'
  | 'pptx'
  | 'doc'
  | 'docx'
  | 'zip'
  | 'image'
  | 'other'

export interface UpdateAttachment {
  name: string
  url: string
  type: UpdateAttachmentType
}

export interface UpdateImage {
  url: string
  alt: string
}

export interface UpdateEntry {
  title: string
  topLabel: string
  summary: string
  heroImage: string
  bodyHtml: string
  contentImages: UpdateImage[]
  attachments: UpdateAttachment[]
  updatedAt: string
}

export const defaultUpdate: UpdateEntry = {
  title: latestNewsletter.title,
  topLabel: latestNewsletter.publishedLabel,
  summary: 'Stay connected with the latest ministry reports, testimonies, and field updates from SOWERS Ministry.',
  heroImage: latestNewsletter.image,
  bodyHtml: latestNewsletter.bodyHtml,
  contentImages: [],
  attachments: [],
  updatedAt: '2026-01-04T00:00:00.000Z',
}
