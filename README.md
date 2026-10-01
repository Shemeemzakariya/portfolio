# Shameem Zakariya, Portfolio

React + Vite + Tailwind + TypeScript + GSAP + Lenis. One page, dark theme, no backend.

## Run it
```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```

## Fill in your details (in this order)
1. `src/data/site.ts`: email, WhatsApp number, social links, optional hero reel and photo.
2. `src/data/content.ts`: service prices (search "From $XX"), turnaround times, and the "Online Services" description.
3. `src/data/projects.ts`: replace the 6 "Coming soon" tiles with real projects.
4. `public/`: add `og.png` (1200x630) for link previews. Optional: `reel.mp4`, `shameem.webp`, `/work/*.webp`.

## Turn on optional sections
- **Stats:** set `stats.enabled = true` in `content.ts` after entering real numbers.
- **Testimonials:** add entries to `testimonials`. The section appears automatically.
- **Parallax gallery:** add 4–6 square images to `explorations`. The section appears automatically.

## Add a project
```ts
{ title: "Inforium Brand Kit", category: "Design", image: "/work/inforium.webp", href: "https://..." }
```
Add `video: "/work/x.mp4"` for a hover preview (keep clips short and small).

## Deploy
Push to GitHub, import into Vercel or Netlify (build command `npm run build`, output `dist`), then connect a custom domain.

## Before you share the link
- No "From $XX" or "hello@example.com" left on the page
- At least 3 real projects in place
- Hero reel under 3MB, images in WebP
