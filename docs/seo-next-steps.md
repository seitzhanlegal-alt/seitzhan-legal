# SEO & local presence — next steps

Use this checklist after you purchase a domain and are ready to go live.

## Domain & hosting

- [ ] Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://yourdomain.kz`)
- [ ] Deploy the site with HTTPS enabled
- [ ] Verify `/sitemap.xml` and `/robots.txt` use the production URL
- [ ] Test all service pages: `/services/*` and `/blog`

## Google

- [ ] **Google Search Console** — add property, submit sitemap, request indexing for homepage and key service pages
- [ ] **Google Analytics** (GA4) — add measurement ID when you choose analytics (optional script in layout)
- [ ] **Google Business Profile** — create profile for Almaty office; use the same name, phone, address, and hours as on the website

## Local directories (Kazakhstan)

- [ ] **2GIS** — company card with address, phone, hours, link to website
- [ ] **Yandex Business** — same NAP data (name, address, phone)

## Content & trust

- [ ] Add real client reviews to `src/lib/reviews.ts` (`PUBLISHED_REVIEWS`) only with written consent
- [ ] Add office photos to `/public` and use on Google Business Profile / social
- [ ] Replace placeholder `sameAs` URLs in `src/components/seo/JsonLd.tsx` with real social profiles
- [ ] Publish blog articles (replace “coming soon” cards on `/blog`)
- [ ] Add `/public/logotype.jpg` and `/public/og-image.jpg`

## Ongoing

- [ ] Keep NAP (name, address, phone) identical everywhere
- [ ] Monitor Search Console for coverage and mobile usability
- [ ] Update service pages when practice areas change
