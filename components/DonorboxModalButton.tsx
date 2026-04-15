'use client'

import { useEffect, useState } from 'react'

interface DonorboxModalButtonProps {
  label: string
  className?: string
}

export default function DonorboxModalButton({
  label,
  className = '',
}: DonorboxModalButtonProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-3 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Donate to SOWERS Ministry"
        >
          <div className="relative w-full max-w-[44rem] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between bg-navy-950 px-5 py-4 text-white">
              <h3 className="font-sans text-xl font-semibold">SOWERS Ministry</h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-3xl leading-none text-white/85 transition hover:text-white"
                aria-label="Close donation form"
              >
                ×
              </button>
            </div>

            <div className="max-h-[85vh] overflow-y-auto bg-white px-3 py-4 sm:px-4 sm:py-5">
              <div className="mx-auto w-full max-w-[610px]">
                <iframe
                  src="https://donorbox.org/embed/sowers-ministry"
                  title="Donate to SOWERS Ministry"
                  name="donorbox-modal"
                  allow="payment"
                  className="block min-h-[1100px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
