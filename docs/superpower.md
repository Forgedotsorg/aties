# ATEÏS Middle East — Website Design Specification
## superpower.md

> Living design reference for `site/index.html`. Keep this updated as the site evolves.

---

## 1. Brand Identity

| Element | Value |
|---|---|
| **Company** | ATEÏS Middle East FZCO |
| **Address** | Unit 11, LIU-1, Dubai Silicon Oasis, P.O. Box 293640, Dubai, UAE |
| **Phone** | +971 4 326 2730 |
| **Email** | info@ateis.ae |
| **Website** | www.ateis.ae |
| **Parent** | ATEÏS Group (founded 1983) |
| **Established ME** | 2006 |
| **Employees** | ~60 UAE-based engineers & specialists |
| **Projects** | 2,500+ installations |
| **Region** | UAE, GCC, India, MENA |

---

## 2. Design System

### 2.1 Color Palette

#### Dark Mode (default)
```css
--bg-0: #080E1A   /* body background */
--bg-1: #0C1525   /* elevated surfaces */
--bg-2: #111E35   /* section tints */
--navy: #162840   /* nav, deep elements */
--sky:  #0EA5E9   /* primary accent */
--sky-2:#38BDF8   /* lighter accent */
--orange:#F97316  /* secondary accent / CTA */
--orange-2:#FB923C
--text:     #E8F4FD
--text-dim: #94B8D4
--text-faint:#5E7E9C
```

#### Light Mode (`html[data-theme="light"]`)
```css
--bg-0: #EEF5FB
--bg-1: #FFFFFF
--bg-2: #E2EDF6
--text:     #102A40
--text-dim: #2E5573
--text-faint:#46748F
```

### 2.2 Typography

| Use | Font | Weight |
|---|---|---|
| Headings (`h1–h4`, `.eyebrow`) | Outfit | 400, 500, 600, 700 |
| Body / labels / forms | Inter | 300, 400, 500, 600 |

**Source**: Google Fonts CDN — loaded via `<link>` in `<head>`

### 2.3 Glassmorphism Cards
All `.glass` components:
```css
background: linear-gradient(160deg, rgba(14,165,233,.06), rgba(14,165,233,.02));
border: 1px solid rgba(14,165,233,.15);
border-radius: 18px;
```

### 2.4 Design Tokens (CSS Variables)
```css
--ease: cubic-bezier(.16, 1, .3, 1)  /* spring easing */
--font-d: 'Outfit', sans-serif
--font-b: 'Inter', sans-serif
```

---

## 3. File Structure

```
site/
├── index.html             ← Single self-contained HTML page
├── assets/
│   └── svg/
│       ├── icons.js       ← ATEÏS custom icon set (AT_ICONS object)
│       ├── hero-dubai.svg ← Animated Dubai skyline (hero background)
│       ├── pillar-pava.svg ← PA/VA pillar card illustration
│       ├── pillar-fire.svg ← Fire detection pillar illustration
│       └── pillar-audio.svg ← Audio over IP pillar illustration
└── docs/
    └── superpower.md      ← This file
```

---

## 4. Page Sections

| # | Section ID | Purpose |
|---|---|---|
| 1 | `#top` | Hero — Dubai skyline, stats, dual CTA |
| 2 | `#about` | Company profile, mission/vision/values |
| 3 | `#solutions` | 3 pillar cards + 12-service grid |
| 4 | `#process` | 6-step delivery flow |
| 5 | `#sectors` | 12 industry sectors grid |
| 6 | `#projects` | Reference project cards |
| 7 | `#partners` | Certifications + product marquee |
| 8 | CTA Band | Full-width free consultation CTA |
| 9 | `#contact` | Contact form + info cards |
| — | Footer | Logo, copyright, social links |
| — | Chatbot | Floating AI assistant (FAB + panel) |

---

## 5. Feature Specifications

### 5.1 Theme Switcher
- **Toggle**: `#themeBtn` in nav (moon icon → sun icon)
- **Mechanism**: `data-theme` attribute on `<html>` element
- **Persistence**: `localStorage.setItem('at-theme', ...)`
- **Restoration**: Inline `<script>` in `<head>` (before any render)
- **Light hero/nav**: Force dark text variables in hero/nav regardless of light theme

### 5.2 Language Selector
- **Trigger**: `#langBtn` in nav
- **Dropdown**: `.lang-dropdown` with 4 options: EN / AR / FR / DE
- **i18n**: `data-i18n` attributes on all translatable elements
- **RTL**: Arabic switches `dir="rtl"` on `<html>`
- **Persistence**: `localStorage.setItem('at-lang', ...)`
- **Translations**: `TRANSLATIONS` object in inline script
- **Default**: English

### 5.3 Chatbot
- **FAB**: `#atFab` — fixed bottom-right, pulsing green dot
- **Panel**: `#atChat` — 390px wide, 600px tall, dark branded panel
- **Sessions**: `AT_SESSION` per page load
- **Webhook**: `AT_AGENT_URL` — n8n webhook URL (update when ready)
- **Fallback**: Local `KB` knowledge base (keyword regex matching)
- **Features**: Typing indicator, smart chips, WA/call action buttons
- **RTL safe**: Chat is always dark-mode branded (fixed vars)
- **Mobile**: Full-screen (`100svh`) on narrow viewports

### 5.4 Animated SVG Hero
- **File**: `assets/svg/hero-dubai.svg`
- **Animation**: CSS `at-kenburns` keyframe — slow zoom-in/out
- **Glow effects**: Two radial gradient glow orbs with `at-breathe`
- **Layers**: sky → far skyline → mid skyline → near skyline → network overlay
- **Parallax**: `window.scroll` translateY on `.hero-art` wrapper
- **Performance**: Animation paused via IntersectionObserver when hero is offscreen (`heroArt.classList.toggle('idle')`)
- **Reduced motion**: All hero animations skipped

### 5.5 Pillar SVG Animations (triggered on viewport entry)
- **Trigger**: `IntersectionObserver` adds `.in` class to `.pillar`
- **PAVA**: Wire loop dash-flow, LED blink, wave shimmer
- **Fire**: Loop flow, alert LED pulse, heat wave shimmer, fire-pulse radial
- **Audio**: Gear rotation, link flow, ember node pulse, zone icon float, window twinkle

### 5.6 Scroll Reveal
- **Class**: `.rv` (opacity: 0, translateY: 26px)
- **Trigger**: `IntersectionObserver` adds `.in` (transition to opacity: 1, translateY: 0)
- **Delay**: `(i % 8) * 45ms` stagger per element
- **Threshold**: 0.12, rootMargin: `0px 0px -40px 0px`
- **Reduced motion**: Elements pre-shown (opacity 1, no transform)

### 5.7 Counter Animations
- **Targets**: `[data-count]` spans inside `.hero-stats`
- **Trigger**: IntersectionObserver on `.hero-stats`
- **Easing**: Cubic deceleration (`1 - Math.pow(1-p, 3)`)
- **Duration**: 1400ms
- **Static/reduced**: Instant set

### 5.8 Partner Marquee
- **Type**: Dual-row infinite scroll (one forward, one reverse)
- **Pause on hover**: `animation-play-state: paused`
- **Content duplicated**: For seamless looping
- **Row 1**: EN54/safety certifications
- **Row 2**: ATEÏS product family names

### 5.9 Contact Form
- **Method**: mailto: link (no server) — same as Lagarde pattern
- **Routing**: `<select>` for department → populates `to:` address
- **WhatsApp**: Pre-fills message and opens wa.me link
- **Validation**: Required: Name + Message fields
- **Note**: Nothing stored on-site (privacy friendly)

### 5.10 Responsive Breakpoints
| Breakpoint | Changes |
|---|---|
| `≤ 1024px` | Services 3-col, sectors 4-col, pillars single, process 3-col |
| `≤ 720px` | Mobile nav menu, hero stats 2-col, services 2-col, sectors 3-col, contact 1-col |
| `≤ 420px` | Services 1-col, sectors 2-col |

---

## 6. Performance

- **Static mode**: `?static=1` URL param disables all animations (for screenshots/headless)
- **Reduced motion**: `prefers-reduced-motion` media query respected throughout
- **Google Fonts**: Preconnect hints in `<head>` for fast font load
- **SVGs**: External files via `<object>` — browsers cache separately
- **Grain**: Data URI SVG — no external requests
- **JS**: Fully inline, no external dependencies

---

## 7. Chatbot Knowledge Base (KB)

### Products
- **BOUTIQUE** — modular PA controllers (BTQ-VM4/VM8)
- **IDA8** — integrated PA/VA with Matrix/Switch for large venues
- **DIVA Compact** — EN54 for smaller installations
- **VOX-NET** — Ethernet/IP distributed audio network
- **VELOX** — UAE-made fire alarm panels (cloud-capable)
- **DPA** — Class-D amplifiers
- **PRO-STREAM** — streaming amplifiers
- **UAP** — DSP processors
- **MAGELLAN** — intercoms with echo-cancelled audio
- **SMARTVOX-II** — compact PA/VA controller

### Certifications
EN54-16 · EN54-24 · EN54-4 · EN60849 · BS5839 · LPCB · UL · Intertek · BSI · ISO

### Sectors
Airports & Transport · Rail & Metro · Shopping Malls · Hotels & Resorts · Hospitals · Universities & Schools · Stadiums & Arenas · Government Buildings · Corporate Offices · Houses of Worship · Industrial Facilities · Smart City Projects

---

## 8. Deployment Notes

- **Type**: Static HTML — no build step required
- **Hosting**: Any web host, S3, CDN, Netlify, GitHub Pages
- **HTTPS**: Required for Geolocation (if added) and smooth service worker (if added)
- **WhatsApp deeplink**: Number is `+97143262730` (update if changed)
- **n8n webhook**: `AT_AGENT_URL` in inline JS — currently set to Lagarde webhook; update to ATEÏS webhook when ready

---

*Last updated: August 2026 — ATEÏS Middle East FZCO*
