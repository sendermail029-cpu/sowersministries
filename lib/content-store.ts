import { mkdir, readFile, rm, writeFile } from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { latestNewsletter, type NewsletterEntry } from '@/data/newsletters'
import {
  defaultUpdate,
  type UpdateAttachment,
  type UpdateAttachmentType,
  type UpdateEntry,
  type UpdateImage,
} from '@/data/updates'
import { seedGalleryItems, type GalleryCategory, type GalleryItem } from '@/data/seed-gallery'

const dataDir = path.join(process.cwd(), 'data')
const publicDir = path.join(process.cwd(), 'public')
const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
const newsletterFile = path.join(dataDir, 'newsletter.json')
const galleryFile = path.join(dataDir, 'gallery.json')
const updateFile = path.join(dataDir, 'update.json')
const updateArchiveFile = path.join(dataDir, 'update-archive.json')
const updatesCurrentDir = path.join(uploadsDir, 'updates', 'current')

async function ensureDir(dirPath: string) {
  await mkdir(dirPath, { recursive: true })
}

async function readJsonFile<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(filePath, 'utf8')
    return JSON.parse(raw) as T
  } catch {
    await ensureDir(path.dirname(filePath))
    await writeFile(filePath, JSON.stringify(fallback, null, 2), 'utf8')
    return fallback
  }
}

async function writeJsonFile<T>(filePath: string, value: T) {
  await ensureDir(path.dirname(filePath))
  await writeFile(filePath, JSON.stringify(value, null, 2), 'utf8')
}

async function readJsonFileOrNull<T>(filePath: string): Promise<T | null> {
  try {
    const raw = await readFile(filePath, 'utf8')
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60)
}

function resolveUploadDir(folder: string | string[]) {
  return Array.isArray(folder)
    ? path.join(uploadsDir, ...folder)
    : path.join(uploadsDir, folder)
}

function toPublicUrl(absolutePath: string) {
  return `/${path.relative(publicDir, absolutePath).replace(/\\/g, '/')}`
}

function extensionOf(fileName: string) {
  return path.extname(fileName).toLowerCase()
}

function legacyNewsletterToUpdate(newsletter: NewsletterEntry): UpdateEntry {
  return {
    title: newsletter.title,
    topLabel: newsletter.publishedLabel,
    summary: '',
    heroImage: newsletter.image,
    bodyHtml: newsletter.bodyHtml,
    contentImages: [],
    attachments: [],
    updatedAt: '2026-01-04T00:00:00.000Z',
  }
}

export function detectUpdateAttachmentType(
  fileName: string,
  mimeType = ''
): UpdateAttachmentType {
  if (mimeType.startsWith('image/')) {
    return 'image'
  }

  const extension = extensionOf(fileName)
  switch (extension) {
    case '.pdf':
      return 'pdf'
    case '.ppt':
      return 'ppt'
    case '.pptx':
      return 'pptx'
    case '.doc':
      return 'doc'
    case '.docx':
      return 'docx'
    case '.zip':
      return 'zip'
    default:
      return 'other'
  }
}

export async function getLatestNewsletter(): Promise<NewsletterEntry> {
  return readJsonFile(newsletterFile, latestNewsletter)
}

export async function saveNewsletter(nextValue: NewsletterEntry) {
  await writeJsonFile(newsletterFile, nextValue)
}

export async function getLatestUpdate(): Promise<UpdateEntry> {
  const currentUpdate = await readJsonFileOrNull<UpdateEntry>(updateFile)
  if (currentUpdate) {
    return currentUpdate
  }

  const legacyNewsletter = await readJsonFileOrNull<NewsletterEntry>(newsletterFile)
  const fallback = legacyNewsletter
    ? legacyNewsletterToUpdate(legacyNewsletter)
    : defaultUpdate

  await writeJsonFile(updateFile, fallback)
  return fallback
}

// Earlier updates, newest first
export async function getArchivedUpdates(): Promise<UpdateEntry[]> {
  const archived = (await readJsonFileOrNull<UpdateEntry[]>(updateArchiveFile)) ?? []
  return [...archived].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  )
}

export async function saveLatestUpdate(nextValue: UpdateEntry) {
  await writeJsonFile(updateFile, nextValue)
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return readJsonFile(galleryFile, seedGalleryItems)
}

export async function saveGalleryItems(items: GalleryItem[]) {
  await writeJsonFile(galleryFile, items)
}

export async function saveUploadedImageAsWebp(
  file: File,
  folder: 'gallery' | 'newsletter' | string[],
  nameSeed: string
) {
  const targetDir = resolveUploadDir(folder)
  await ensureDir(targetDir)

  const safeName = slugify(nameSeed) || folder
  const filename = `${safeName}-${Date.now()}.webp`
  const absolutePath = path.join(targetDir, filename)
  const inputBuffer = Buffer.from(await file.arrayBuffer())

  await sharp(inputBuffer)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(absolutePath)

  return toPublicUrl(absolutePath)
}

export async function clearCurrentUpdateUploads() {
  await rm(updatesCurrentDir, { recursive: true, force: true })
  await ensureDir(updatesCurrentDir)
}

export async function saveUploadedUpdateImage(
  file: File,
  nameSeed: string,
  alt: string
): Promise<UpdateImage> {
  const url = await saveUploadedImageAsWebp(file, ['updates', 'current'], nameSeed)
  return { url, alt }
}

export async function saveUploadedUpdateAttachment(
  file: File,
  nameSeed: string
): Promise<UpdateAttachment> {
  await ensureDir(updatesCurrentDir)

  const attachmentType = detectUpdateAttachmentType(file.name, file.type)
  const safeName = slugify(nameSeed) || 'attachment'

  if (attachmentType === 'image') {
    const url = await saveUploadedImageAsWebp(
      file,
      ['updates', 'current'],
      `${safeName}-${file.name}`
    )

    return {
      name: file.name.replace(/\.[^.]+$/, '') + '.webp',
      url,
      type: 'image',
    }
  }

  const extension = extensionOf(file.name) || '.bin'
  const filename = `${safeName}-${Date.now()}${extension}`
  const absolutePath = path.join(updatesCurrentDir, filename)
  const buffer = Buffer.from(await file.arrayBuffer())

  await writeFile(absolutePath, buffer)

  return {
    name: file.name,
    url: toPublicUrl(absolutePath),
    type: attachmentType,
  }
}

export function nextGalleryId(items: GalleryItem[]) {
  return items.reduce((max, item) => Math.max(max, item.id), 0) + 1
}

export type { GalleryCategory, GalleryItem, NewsletterEntry, UpdateAttachment, UpdateEntry, UpdateImage }
