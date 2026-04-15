# SOWERS Ministry Website

A complete, production-ready Next.js 14 website rebuild for [sowersministry.com](https://sowersministry.com).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Design System

- **Colors**: Deep Navy `#0d1030` · Gold `#c9973a` · Cream `#fdfaf5` · Earth tones
- **Fonts**: Cormorant Garamond (display/headings) · Lato (body/UI)
- **Style**: Premium nonprofit, emotionally powerful, Christ-centered

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full hero, 4 pillars, stats, pastor preview, gallery preview |
| About SOWERS | `/about-sowers` | Acronym, vision, 4 pillars in detail |
| About Pastor Jay | `/about-pastor-jay` | Timeline, calling story, Jeremiah 1:5 |
| Church Network | `/church-network` | Pastors, challenges, sponsorship tiers |
| Board of Directors | `/board-of-directors` | 4 board members with full bios |
| Donate | `/donate` | Giving options, impact, trust signals |
| Contact | `/contact` | Form, contact info, prayer requests |
| Gallery ⭐ | `/gallery` | Filterable masonry grid + lightbox |

## Components

- `Navbar` — Fixed, transparent-to-dark, mobile menu with animations
- `Footer` — Full SOWERS branding, navigation, contact
- `FadeInSection` — Scroll-triggered fade/slide animations
- `SectionHeading` — Consistent heading with eyebrow + divider
- `StatsCounter` — Animated number counters
- `CTASection` — Reusable dark CTA blocks
- `PageHero` — Inner page heroes with decorative elements

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Preserved From Original Site

✅ SOWERS acronym meaning (Serving Orphans Widows Educating & Reaching Society)  
✅ Founded 2001 by Rev. Jayakumar Babu Salluri ("Pastor Jay")  
✅ Stats: 1,048+ pastors trained, 170 churches, 320 communities  
✅ Pastor Jay's divine calling on August 21, 1994  
✅ Jeremiah 1:4–10 scripture that God spoke to him  
✅ Seminary training (7 years, B.Th 1999)  
✅ BTCP (Bible Training Centre for Pastors) curriculum  
✅ Bethel Ministries India launched 2001  
✅ Family: wife Vijayakumari, sons Sam Holliday & Mark Jay Holliday  
✅ Board: Pastor Jay, John & Cindy Brickner, Heather Sugg — with full bios  
✅ India Dalit caste system context  
✅ Orphan care details (education, food, shelter, medical, anti-trafficking)  
✅ Widow support details (cultural context, food, rent, medical, dignity)  
✅ North America + India partnership model  
✅ Facebook: facebook.com/bethelmissionsindia  

## New Features Added

⭐ **Gallery page** — category filters, masonry layout, lightbox modal  
⭐ **Animated counters** — stats that count up on scroll  
⭐ **Pastor sponsorship tiers** — $30/mo, $60/mo, one-time  
⭐ **Timeline** — Pastor Jay's life story in visual form  
⭐ **Mobile-first navigation** — smooth animated mobile menu  
⭐ **SEO metadata** — all pages have proper titles/descriptions  

## Customization

### Replace placeholder images
All images currently use Unsplash placeholders. Replace `src` values in each page with actual SOWERS ministry photos.

### Donation integration
The donate page currently links to `/contact`. Integrate a payment processor (Stripe, PayPal, Pushpay) by adding the SDK to the donate page.

### Contact form
The contact form in `/contact/page.tsx` uses local state. Connect to a backend (Formspree, EmailJS, or your own API route).

### Add real gallery photos
In `/gallery/page.tsx`, update the `galleryItems` array with real SOWERS ministry photos and their correct categories.
