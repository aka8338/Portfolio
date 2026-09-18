# Aklilu Beyero — Portfolio

A premium, recruiter-focused portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and shadcn/ui-inspired components.

## Tech Stack

- **React 19** + **TypeScript** (strict)
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with CSS variable theming (dark default + light toggle)
- **Framer Motion** with `prefers-reduced-motion` support
- **shadcn/ui**-style primitives (Button, Card, Badge, Input, Label, Textarea)
- **Formspree** for contact form submissions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and set your Formspree endpoint:

```bash
cp .env.example .env
```

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Build

```bash
npm run build
npm run preview
```

### Lint & Format

```bash
npm run lint
npm run format
```

## Customization

Update content in typed data files:

- `src/data/site.ts` — name, social links, site metadata
- `src/data/experience.ts` — work history
- `src/data/projects.ts` — featured projects (add `liveUrl` only when a demo exists)
- `src/data/skills.ts` — skills by category

Replace assets in `public/`:

- `profile.svg` → your professional headshot (`profile.jpg` or `.webp`)
- `resume.pdf` → your actual resume PDF
- `og-image.svg` → social preview image (1200×630 recommended)
- Update `site.ts` GitHub/LinkedIn URLs with your real profiles

## Deployment

### Vercel (recommended)

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add `VITE_FORMSPREE_ENDPOINT` in project environment variables
4. Deploy

`vercel.json` is included for SPA routing.

### Netlify

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Project Structure

```
src/
  components/
    layout/     # Navbar, Footer, Background
    sections/   # Hero, About, Experience, Projects, Skills, Contact
    ui/         # Reusable UI primitives
  data/         # Typed content (experience, projects, skills)
  hooks/        # useTheme, useActiveSection, useReducedMotion
  lib/          # animations, utils
```

## Accessibility & Performance

- WCAG 2.1 AA-focused contrast and keyboard navigation
- Skip-to-content link
- Semantic HTML with a single `<h1>`
- Lazy-loaded below-the-fold sections via `React.lazy`
- Self-hosted Inter font via `@fontsource/inter`
- `robots.txt`, `sitemap.xml`, Open Graph/Twitter meta, and JSON-LD Person schema

## License

Private portfolio project. All rights reserved.
