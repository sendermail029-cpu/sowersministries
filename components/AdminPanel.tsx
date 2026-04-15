'use client'

import { useEffect, useState, type FormEvent } from 'react'
import type { UpdateEntry } from '@/lib/content-store'

type AdminPopup = {
  kind: 'success' | 'error'
  message: string
} | null

export default function AdminPanel({
  update,
  galleryCount,
}: {
  update: UpdateEntry
  galleryCount: number
}) {
  const [updateStatus, setUpdateStatus] = useState('')
  const [galleryStatus, setGalleryStatus] = useState('')
  const [activeTab, setActiveTab] = useState<'updates' | 'gallery'>('updates')
  const [popup, setPopup] = useState<AdminPopup>(null)

  useEffect(() => {
    if (!popup) return

    const timer = window.setTimeout(() => setPopup(null), 4000)
    return () => window.clearTimeout(timer)
  }, [popup])

  function showPopup(kind: 'success' | 'error', message: string) {
    setPopup({ kind, message })
  }

  async function handleUpdateSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setUpdateStatus('Saving update...')

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/admin/updates', {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    if (response.ok) {
      const successMessage = result.message || 'Update saved successfully.'
      setUpdateStatus(successMessage)
      showPopup('success', successMessage)
      return
    }

    const errorMessage = result.error || 'Unable to save update.'
    setUpdateStatus(errorMessage)
    showPopup('error', errorMessage)
  }

  async function handleGallerySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setGalleryStatus('Uploading image and converting to WebP...')

    const formData = new FormData(event.currentTarget)
    const selectedCategory = String(formData.get('category') || 'children')
    const response = await fetch('/api/admin/gallery', {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    if (response.ok) {
      const successMessage = `Gallery image uploaded successfully to the ${selectedCategory} tab.`
      event.currentTarget.reset()
      setGalleryStatus(successMessage)
      showPopup('success', successMessage)
      return
    }

    const errorMessage = result.error || 'Unable to upload gallery image.'
    setGalleryStatus(errorMessage)
    showPopup('error', errorMessage)
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin'
  }

  return (
    <section className="bg-cream-50 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      {popup && (
        <div className="fixed right-4 top-6 z-[80] max-w-sm sm:right-6">
          <div
            className={`rounded-[1.5rem] border px-5 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-sm ${
              popup.kind === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                : 'border-red-200 bg-red-50 text-red-900'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold">
                  {popup.kind === 'success' ? 'Success' : 'Something went wrong'}
                </p>
                <p className="mt-1 text-sm leading-6">{popup.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setPopup(null)}
                className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70 transition hover:opacity-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.25rem] border border-cream-300/70 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 border-b border-cream-300/70 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-700">
                Admin Panel
              </p>
              <h1 className="mt-3 font-display text-3xl text-navy-950 sm:text-4xl">
                Manage Updates And Gallery
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-navy-900/70 sm:text-base">
                Publish the current ministry update and keep the gallery growing.
                Update uploads are stored separately from gallery images, and new
                update files safely replace the previous active update.
              </p>
            </div>

            <div className="rounded-2xl bg-cream-50 px-5 py-4 text-sm text-navy-900/70">
              <p>
                <strong>Current update:</strong> {update.title}
              </p>
              <p className="mt-2">
                <strong>Gallery items available:</strong> {galleryCount}
              </p>
              <button
                type="button"
                onClick={handleLogout}
                className="mt-4 rounded-full border border-cream-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition hover:border-gold-500"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('updates')}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === 'updates'
                  ? 'bg-navy-950 text-white'
                  : 'border border-cream-300 bg-white text-navy-900'
              }`}
            >
              Updates
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('gallery')}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeTab === 'gallery'
                  ? 'bg-navy-950 text-white'
                  : 'border border-cream-300 bg-white text-navy-900'
              }`}
            >
              Gallery
            </button>
          </div>

          {activeTab === 'updates' && (
            <form onSubmit={handleUpdateSubmit} className="mt-8 grid gap-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy-950">
                    Update Title
                  </span>
                  <input
                    name="title"
                    defaultValue={update.title}
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                    placeholder="Enter update title"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy-950">
                    Top Label
                  </span>
                  <input
                    name="topLabel"
                    defaultValue={update.topLabel}
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                    placeholder="Latest Field Report"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy-950">
                  Summary / Subtitle
                </span>
                <textarea
                  name="summary"
                  defaultValue={update.summary}
                  rows={3}
                  className="rounded-[1.5rem] border border-cream-300 bg-white px-4 py-4 text-sm leading-7 text-navy-950 outline-none transition focus:border-gold-500"
                  placeholder="Optional short summary shown in the hero section"
                />
              </label>

              <div className="grid gap-6 lg:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy-950">
                    Hero Image
                  </span>
                  <input
                    type="file"
                    name="heroImage"
                    accept="image/*"
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950"
                  />
                  <span className="text-xs text-navy-900/55">
                    Upload one hero image. If you save a new update, previous
                    update files are replaced automatically.
                  </span>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy-950">
                    Content Images
                  </span>
                  <input
                    type="file"
                    name="contentImages"
                    accept="image/*"
                    multiple
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950"
                  />
                  <span className="text-xs text-navy-900/55">
                    You can choose multiple images here. They will appear in the
                    update page below the main article.
                  </span>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy-950">
                  Newsletter Content (HTML supported)
                </span>
                <textarea
                  name="bodyHtml"
                  defaultValue={update.bodyHtml}
                  rows={18}
                  className="min-h-[420px] rounded-[1.75rem] border border-cream-300 bg-white px-4 py-4 text-sm leading-7 text-navy-950 outline-none transition focus:border-gold-500"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy-950">
                  Attachments
                </span>
                <input
                  type="file"
                  name="attachments"
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.zip,image/*"
                  multiple
                  className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950"
                />
                <span className="text-xs text-navy-900/55">
                  You can choose multiple files here. Supported: PDF, PPT, PPTX,
                  DOC, DOCX, ZIP, and image files.
                </span>
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="btn-primary rounded-full px-7 py-3 text-sm font-sans"
                >
                  Save Update
                </button>
                <p className="text-sm text-navy-900/65">{updateStatus}</p>
              </div>
            </form>
          )}

          {activeTab === 'gallery' && (
            <form onSubmit={handleGallerySubmit} className="mt-8 grid max-w-3xl gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy-950">
                    Category
                  </span>
                  <select
                    name="category"
                    defaultValue="children"
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                  >
                    <option value="children">Children</option>
                    <option value="pastors">Pastors</option>
                    <option value="outreach">Outreach</option>
                    <option value="graduation">Graduation</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy-950">
                    Image Layout
                  </span>
                  <select
                    name="tall"
                    defaultValue="false"
                    className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                  >
                    <option value="false">Normal</option>
                    <option value="true">Tall</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy-950">Caption</span>
                <input
                  name="caption"
                  className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                  placeholder="Describe the image"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy-950">Location</span>
                <input
                  name="location"
                  className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                  placeholder="Andhra Pradesh, India"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-navy-950">
                  Upload Image
                </span>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950"
                />
                <span className="text-xs text-navy-900/55">
                  Any image format is accepted. The system converts it to optimized
                  WebP and places it in the selected gallery tab.
                </span>
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="btn-primary rounded-full px-7 py-3 text-sm font-sans"
                >
                  Upload To Gallery
                </button>
                <p className="text-sm text-navy-900/65">{galleryStatus}</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
