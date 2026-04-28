# Sarvar Shukirlayev — Portfolio

A modern, high-performance personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Editorial dark design** with warm amber accent
- **Dark / Light mode** toggle (persisted via localStorage)
- **Framer Motion** scroll-triggered animations
- **Fully responsive** — mobile, tablet, desktop
- **SEO optimized** with Next.js metadata API
- **Accessibility** basics (semantic HTML, focus styles, ARIA labels)
- **Performance** oriented — minimal bundle, optimized fonts

## 🗂 Project Structure

```
├── app/
│   ├── globals.css        # Design tokens, base styles, animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page (section assembly)
├── components/
│   ├── ui/
│   │   └── FadeIn.tsx     # Reusable scroll-animation wrapper
│   ├── Navbar.tsx         # Sticky nav with dark/light toggle + mobile menu
│   ├── Hero.tsx           # Full-viewport hero section
│   ├── About.tsx          # Bio + highlights
│   ├── Skills.tsx         # Categorized skill badges
│   ├── Projects.tsx       # 3-column project cards
│   ├── Contact.tsx        # Contact form + social links
│   └── Footer.tsx         # Footer with nav and socials
├── hooks/
│   └── useTheme.ts        # Theme management hook
├── lib/
│   └── data.ts            # All static data (projects, skills, links)
├── tailwind.config.ts     # Custom design system
└── next.config.ts         # Next.js config
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update your info

All personal data lives in **`lib/data.ts`** — projects, skills, social links. Edit this file to customize the content.

### Update project links

In `lib/data.ts`, replace the placeholder `demo` and `github` URLs in each project with your real links.

### Connect the contact form

The contact form is UI-only by default. To make it functional:

1. Sign up at [Formspree](https://formspree.io)
2. Create a new form and get your form ID
3. In `components/Contact.tsx`, replace the simulated API call with:

```typescript
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form),
});
if (!res.ok) throw new Error("Failed to send");
```

### Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and connect the repo at [vercel.com](https://vercel.com).

## 🛠 Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | Next.js 15 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS v3               |
| Animation   | Framer Motion v11             |
| Icons       | Lucide React                  |
| Fonts       | Fraunces + Plus Jakarta Sans  |
| Deployment  | Vercel (recommended)          |

## 📋 Sections

1. **Hero** — Name, role badge, value proposition, CTAs
2. **About** — Bio, highlights, open-to-work indicator
3. **Skills** — Foundation / Modern Stack / Tools grid
4. **Projects** — 3 project cards with tech stack and links
5. **Contact** — Form + direct contact links
6. **Footer** — Navigation + social links

---

Built by **Sarvar Shukirlayev** · [github.com/shukirlayev](https://github.com/shukirlayev)
