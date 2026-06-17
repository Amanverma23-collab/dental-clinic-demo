## Goal
Build a single-page dental clinic website that visually matches the reference image, rebranded as **Dr. Dental** in Sikar with phone **9783204194**.

## Pages / Routes
- `/` — Home (one long landing page with all sections from the reference)
- `/contact` — separate contact page with phone, address, map, form (own SEO head)

## Sections on Home (top → bottom, mirroring the screenshot)
1. **Sticky top nav** — Logo "Dr. Dental" (tooth + rays icon) on the left; links Services, About Us, The Team, Journal, Contact; warm-beige "Book Appointment" pill button on the right; phone number 9783204194 visible.
2. **Hero** — Full-bleed photo of a modern dental operatory (AI-generated). Serif headline "Creating Confident & Healthy Smiles", supporting paragraph, beige "Schedule Consultation" CTA centered.
3. **Three feature cards** overlapping a blurred clinic background — Cosmetic Dentistry, Teeth Whitening, Dental Implants. Outline tooth/implant icons in soft teal, title, short copy, "Learn more →" link.
4. **Complete Dental Care Services** — Centered serif heading; row of 6 circular beige icon tiles (Invisalign, Root Canal Treatment, Pediatric Dentistry, Dental Veneers, Emergency Care, Smile Makeover) each with label + "Learn More →".
5. **Patient smiles + Statistics + Doctors strip** — Two patient testimonial cards (photo + stars + quote), a beige stats card (>78.0 happy patients, >46% returning), then a row of doctor cards (photo + name + "Professional Doctor").
6. **About / Why Choose Us** — Two-column section with clinic photo and bullet points (modern equipment, gentle care, 10+ years in Sikar).
7. **Journal / Tips** — 3 article preview cards.
8. **Footer** — Brand block, quick links, contact (phone 9783204194, Sikar address placeholder, email), hours, social icons.

## Design System
- **Palette** (matches reference): warm off-white background `oklch(0.985 0.005 85)`, beige/sand accent `oklch(0.78 0.05 70)`, soft teal `oklch(0.7 0.06 200)` for icons, deep charcoal text `oklch(0.2 0.02 250)`, muted grey for body.
- **Typography**: serif display (Cormorant Garamond) for headings, clean sans (Inter) for body — loaded via `<link>` in `__root.tsx`.
- **Components**: rounded-2xl cards, soft shadows, generous whitespace, beige pill buttons.
- Tokens defined in `src/styles.css` `@theme` / `:root`; no hardcoded colors in components.

## Images
Generate via imagegen and store under `src/assets/`:
- Hero: modern dental operatory with cream chair, large windows
- Blurred clinic background behind the 3 feature cards
- 2 patient portraits (smiling man, smiling woman)
- 3–4 doctor portraits in white coats
- "Why choose us" interior shot
- 3 journal article thumbnails (dental hygiene, whitening, kids' dentistry)
All icons (tooth, sparkle tooth, implant, invisalign, etc.) drawn as inline SVG to keep the soft outline style consistent.

## Files to create
- `src/routes/index.tsx` — replace placeholder, compose home sections
- `src/routes/contact.tsx` — contact page with own head()
- `src/components/site/Nav.tsx`, `Footer.tsx`, `Hero.tsx`, `FeatureCards.tsx`, `ServiceCircles.tsx`, `Testimonials.tsx`, `Stats.tsx`, `Doctors.tsx`, `WhyUs.tsx`, `Journal.tsx`, `Logo.tsx`, `icons.tsx`
- Update `src/routes/__root.tsx` to add Google Fonts `<link>` and default SEO meta ("Dr. Dental — Sikar")
- Update `src/styles.css` with the new beige/teal/serif tokens
- Generated images in `src/assets/`

## Notes / Assumptions
- Treating the reference as **visual inspiration**, not a 1:1 copy (different brand name, original copy, original generated photography).
- All content in English; phone `9783204194` and city `Sikar` appear in nav CTA area, contact section, and footer.
- No backend needed; "Book Appointment" buttons scroll to contact section / link to `/contact`. Form is presentational unless you want Lovable Cloud wired up later.

## Out of scope (ask if you want these)
- Real appointment booking with database
- Multi-language (Hindi) version
- Online payments
