'use client'

import { useState } from 'react'
import { Mail, MapPin, Facebook, Send, CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/PageHero'
import SectionHeading from '@/components/SectionHeading'
import FadeInSection from '@/components/FadeInSection'

export default function ContactPage() {
  const gradientTextClass =
    'bg-[linear-gradient(90deg,#1B5E20,#2E8A44,#6EDC5A)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]'

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult('')
    setSent(false)

    try {
      const formData = new FormData()

      formData.append(
        'access_key',
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''
      )
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('subject', 'New Contact Form - SOWERS Ministry')
      formData.append('from_name', form.name)
      formData.append('replyto', form.email)
      formData.append('message', form.message)

      if (form.subject.trim()) {
        formData.append('user_subject', form.subject)
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSent(true)
        setResult('Thank you for reaching out. We will get back to you as soon as possible.')
        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setResult('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact SOWERS Ministry"
        subtitle="We'd love to hear from you about giving, partnership, prayer, or learning more about what God is doing in India."
        bgImage="/conta-opt.webp"
        bgPosition="22% 28%"
        sectionClassName="pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20"
        minHeightClass="min-h-[54vh] sm:min-h-[32rem] lg:min-h-[72vh]"
        contentMinHeightClass="min-h-[calc(54vh-5rem)] sm:min-h-[calc(32rem-6rem)] lg:min-h-[calc(72vh-8rem)]"
        bgImageOpacityClass="opacity-100"
        overlayClass="bg-[radial-gradient(circle_at_top,rgba(96,113,255,0.18),transparent_34%),linear-gradient(180deg,rgba(7,14,43,0.90)_0%,rgba(10,18,56,0.82)_50%,rgba(17,24,88,0.72)_100%)]"
        contentClassName="max-w-4xl pt-8 sm:pt-4 lg:pt-0"
        textContainerClassName="mx-auto max-w-[21rem] rounded-[2rem] border border-white/10 bg-white/[0.03] px-4 py-6 shadow-[0_20px_60px_rgba(4,10,30,0.28)] backdrop-blur-[2px] sm:max-w-none sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-0"
        eyebrowClassName="mb-3 text-[0.7rem] tracking-[0.4em] uppercase font-bold text-gold-400 sm:text-xs"
        titleClassName="mb-4 text-[2.1rem] leading-[1.08] font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        subtitleClassName="hidden max-w-[24rem] mx-auto text-[0.95rem] leading-relaxed text-white/80 sm:block sm:max-w-2xl sm:text-base lg:text-lg"
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_32%),linear-gradient(to_bottom,_#faf7ef,_#f5efe1)] py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-navy-950/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:gap-16">
            <FadeInSection direction="left">
              <div className="rounded-[2.5rem] border border-white/40 bg-white/55 backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.08)] p-6 sm:p-8 lg:p-10">
                <SectionHeading
                  eyebrow="Send a Message"
                  title="We'd Love to Hear From You"
                  eyebrowClassName={gradientTextClass}
                />

                <p className="mt-4 text-navy-900/70 leading-relaxed text-sm sm:text-base max-w-2xl">
                  Whether you have a prayer request, would like to support the ministry,
                  or simply want to learn more, please send us a message and our team
                  will respond as soon as possible.
                </p>

                <div className="mt-8">
                  {sent ? (
                    <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/90 p-8 text-center shadow-sm">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                        <CheckCircle2 size={30} className="text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-navy-950">Message Sent!</h3>
                      <p className="mt-3 text-navy-900/70 max-w-xl mx-auto leading-7">
                        {result}
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          setSent(false)
                          setResult('')
                        }}
                        className="mt-6 inline-flex items-center justify-center rounded-xl bg-navy-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-navy-900"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy-950/60 ml-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-2xl border border-white/50 bg-white/70 px-4 py-4 text-sm text-navy-950 placeholder:text-navy-900/35 shadow-sm outline-none backdrop-blur-sm transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy-950/60 ml-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-2xl border border-white/50 bg-white/70 px-4 py-4 text-sm text-navy-950 placeholder:text-navy-900/35 shadow-sm outline-none backdrop-blur-sm transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy-950/60 ml-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full rounded-2xl border border-white/50 bg-white/70 px-4 py-4 text-sm text-navy-950 placeholder:text-navy-900/35 shadow-sm outline-none backdrop-blur-sm transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-navy-950/60 ml-1">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full resize-none rounded-2xl border border-white/50 bg-white/70 px-4 py-4 text-sm text-navy-950 placeholder:text-navy-900/35 shadow-sm outline-none backdrop-blur-sm transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10"
                          placeholder="Tell us about your prayer request or inquiry..."
                        />
                      </div>

                      {result && !sent && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {result}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-navy-950 px-6 py-5 text-base font-semibold text-white shadow-xl transition active:scale-[0.98] hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                        <Send size={18} className="transition group-hover:translate-x-1" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection direction="right" delay={0.15}>
              <div className="space-y-8">
                <SectionHeading
                  eyebrow="Contact Info"
                  title="Reach Out to Us"
                  eyebrowClassName={gradientTextClass}
                />

                <div className="grid gap-4 sm:gap-6">
                  <div className="rounded-[2rem] border border-white/40 bg-white/55 backdrop-blur-xl p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950 shadow-lg">
                        <Mail size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-navy-950/50">Email Us</div>
                        <a href="mailto:info@sowersministry.com" className={`text-sm font-semibold ${gradientTextClass}`}>
                          info@sowersministry.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/40 bg-white/55 backdrop-blur-xl p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950 shadow-lg">
                        <MapPin size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-navy-950/50">Location</div>
                        <a href="https://www.google.com/maps/place/30501+Rollingoak+Dr,+Bear+Valley+Springs,+CA+93561,+USA/@35.1766271,-118.6651064,17z/data=!3m1!4b1!4m5!3m4!1s0x80c1fd848ece99c1:0x4cd701a5ff49a951!8m2!3d35.1766271!4d-118.6651064?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold ${gradientTextClass}`}>
                          30510 Rollingoak Dr, USA
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/40 bg-white/55 backdrop-blur-xl p-5 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-950 shadow-lg">
                        <Facebook size={18} className="text-gold-400" />
                      </div>
                      <div>
                        <div className="text-[0.7rem] font-bold uppercase tracking-widest text-navy-950/50">Facebook</div>
                        <a href="https://www.facebook.com/bethelmissionsindia/" target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold ${gradientTextClass}`}>
                          bethelmissionsindia
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[2.5rem] border border-gold-500/15 bg-navy-950 p-8 shadow-2xl">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gold-400/10 blur-3xl" />
                  
                  <div className="relative">
                    <h4 className="text-2xl font-semibold text-white">Prayer Requests</h4>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      Would you commit to praying for SOWERS Ministry? Your prayers are as vital
                      as your giving. 
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        'Safety of our village pastors',
                        'Provision for orphans & widows',
                        'New communities to be reached',
                        'Protection from persecution',
                      ].map((req) => (
                        <div key={req} className="flex items-center gap-3 text-sm text-white/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </>
  )
}
