# IZON — Website

A premium, production-ready website for IZON, built with Next.js (App Router), TypeScript, Tailwind CSS, Motion and Lucide icons.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open http://localhost:3000

## 3. Build for production

```bash
npm run build
npm run start
```

## 4. Deploy to Vercel

1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no extra configuration is required.
4. Deploy. Your site will be live on a `*.vercel.app` URL.
5. Add a custom domain later from the Vercel project's **Domains** tab.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: IZON website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`node_modules`, `.next`, and `.env*` are already excluded via `.gitignore`.

---

## Where to change things

All editable content lives in a small number of files — you shouldn't need to touch component code for routine updates.

| What to change | File |
|---|---|
| Phone, WhatsApp number, email | `lib/config.ts` |
| Production site URL (for SEO) | `lib/config.ts` → `siteUrl`, or `NEXT_PUBLIC_SITE_URL` env var |
| Social media links | `lib/config.ts` → `social` object. Leave a value empty (`""`) to hide that icon everywhere. |
| Services offered | `lib/data.ts` → `services` array |
| Portfolio projects | `lib/data.ts` → `projects` array. Add a new object and it appears automatically on the homepage. |
| Process / timeline steps | `lib/data.ts` → `processSteps` |
| "Why IZON" cards | `lib/data.ts` → `whyCards` |
| Technology stack shown | `lib/data.ts` → `techGroups` |
| FAQ questions/answers | `lib/data.ts` → `faqs` |
| Colors, fonts, design tokens | `tailwind.config.ts` and `app/globals.css` |

## Analytics & Google services

Nothing is wired up with a real tracking ID by default — no fake IDs are included.

1. Copy `.env.example` to `.env.local`.
2. Add your Google Analytics measurement ID to `NEXT_PUBLIC_GA_ID`.
3. Add your Google Search Console verification string to `NEXT_PUBLIC_GSC_VERIFICATION` (this is automatically read into the page `<head>` via `app/layout.tsx`).
4. To actually load the GA script, add the standard `gtag.js` snippet to `app/layout.tsx` once you have a real ID — this is intentionally left out until you provide one.
5. In Vercel, set the same environment variables under **Project Settings → Environment Variables**.

## Domain

The production domain is not hardcoded. Update `NEXT_PUBLIC_SITE_URL` (or `lib/config.ts`) once you connect a real domain in Vercel, so metadata, Open Graph tags and the sitemap point to the right place.

## Project request form

The **Let's Build Something Great** planner (`components/sections/ProjectPlanner.tsx`) currently sends submissions as a pre-filled WhatsApp message — there is no backend or database. To connect a real form service later (e.g. Formspree, Resend, a serverless API route), replace the `handleSubmit` function in that file; the form fields and validation are already in place.

## Fonts

The type system currently uses a system-font stack (defined via CSS variables in `app/globals.css`) so the project builds without needing network access to Google Fonts. To use a custom typeface, swap in `next/font/google` or `next/font/local` inside `app/layout.tsx` and update the `--font-display` / `--font-body` / `--font-script` variables.

## Project structure

```
app/                 Routes, layout, global styles, SEO files (sitemap, robots)
components/          Reusable UI (SiteChrome, Loader, CustomCursor, FloatingCTA)
components/sections/ One component per homepage section (Hero, Services, Contact...)
components/ui/       Small shared building blocks (SectionHeading)
lib/                 Site configuration and editable content data
public/              Static assets
```

## Notes

- No fake testimonials, statistics, client names, or performance scores are included anywhere in this project — see `lib/data.ts` and the components for where real content should be added as it becomes available.
- Reduced-motion users automatically get a simplified, shorter loading sequence and reduced animation (see `prefers-reduced-motion` handling in `app/globals.css` and `components/Loader.tsx`).
