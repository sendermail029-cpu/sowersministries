'use client'

import { useEffect, useState, type FormEvent } from 'react'

type LoginPopup = {
  kind: 'success' | 'error'
  message: string
} | null

export default function AdminLoginPanel() {
  const [status, setStatus] = useState('')
  const [popup, setPopup] = useState<LoginPopup>(null)

  useEffect(() => {
    if (!popup) return

    const timer = window.setTimeout(() => setPopup(null), 4000)
    return () => window.clearTimeout(timer)
  }, [popup])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Checking credentials...')

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobile: String(formData.get('mobile') || '').trim(),
        pin: String(formData.get('pin') || '').trim(),
      }),
    })

    const result = await response.json()
    if (response.ok) {
      const successMessage = result.message || 'Login successful.'
      setStatus(successMessage)
      setPopup({ kind: 'success', message: successMessage })
      window.location.href = '/admin'
      return
    }

    const errorMessage = result.error || 'Invalid mobile number or PIN.'
    setStatus(errorMessage)
    setPopup({ kind: 'error', message: errorMessage })
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
            <p className="text-sm font-semibold">
              {popup.kind === 'success' ? 'Login successful' : 'Login failed'}
            </p>
            <p className="mt-1 text-sm leading-6">{popup.message}</p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl">
        <div className="rounded-[2.25rem] border border-cream-300/70 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="border-b border-cream-300/70 pb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-700">
              Admin Login
            </p>
            <h1 className="mt-3 font-display text-3xl text-navy-950 sm:text-4xl">
              Sign In To The Admin Panel
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-navy-900/70 sm:text-base">
              Enter the registered mobile number and PIN to manage updates and gallery uploads.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy-950">Mobile Number</span>
              <input
                name="mobile"
                inputMode="numeric"
                autoComplete="username"
                className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                placeholder="Enter mobile number"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-navy-950">PIN</span>
              <input
                type="password"
                name="pin"
                inputMode="numeric"
                autoComplete="current-password"
                className="rounded-2xl border border-cream-300 bg-white px-4 py-3 text-sm text-navy-950 outline-none transition focus:border-gold-500"
                placeholder="Enter PIN"
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="btn-primary rounded-full px-7 py-3 text-sm font-sans"
              >
                Login
              </button>
              <p className="text-sm text-navy-900/65">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
