# Select Packaging, LLC — Website Build Plan

## Project Overview

Build a modern, professional, multi-page marketing website for **Select Packaging, LLC**, a Dallas-based packaging company. The site should establish credibility, showcase their services across multiple industries, and drive inbound leads through a contact/quote form.

**Reference site:** https://lonestarlabels.com/ — follow this site's structure, page hierarchy, and general content strategy closely. Select Packaging serves similar markets with overlapping but distinct product offerings.

---

## Company Info

- **Company Name:** Select Packaging, LLC
- **Address:** 14114 Dallas Pkwy, Dallas, TX 75254
- **Contact Email:** mwiest@selectpackagingllc.com
- **Phone:** (469) 995-5019
- **Logo:** Provided as `logo.png` in the project assets (black serif text logo reading "Select Packaging, LLC." with a stylized decorative "S" and "P"). The logo is black-on-white, so the site design needs to account for this — use a light header background or provide an inverted/white version for dark sections.

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Next.js 14+ (App Router)** | SEO-critical marketing site; SSG for speed; React ecosystem for components |
| Styling | **Tailwind CSS v3** | Rapid, consistent styling; easy to customize brand tokens |
| Animations | **Framer Motion** | Scroll-triggered reveals, page transitions, hover micro-interactions |
| Forms | **React Hook Form + server action or Formspree/Resend** | Contact/quote form handling — pick whichever is simplest to wire up |
| Fonts | **Google Fonts** — use a refined serif for headings (e.g., Playfair Display, Cormorant Garamond, or DM Serif Display) paired with a clean sans-serif body (e.g., DM Sans, Plus Jakarta Sans, or Outfit) | The logo is serif-based, so the site typography should complement it |
| Icons | **Lucide React** | Clean, consistent icon set |
| Deployment target | **Vercel** (standard Next.js deploy) | Zero-config for Next.js |

---

## Design Direction

### Aesthetic
**Refined / Corporate-Clean with Warmth** — Think premium B2B packaging company, not sterile corporate. The Lone Star Labels site uses a dark navy/gold palette. For Select Packaging, differentiate with:

- **Primary color:** Deep charcoal/black (`#1a1a1a`) — matches the logo
- **Accent color:** A rich teal (`#0e7c86` or similar) — conveys trust, industry, professionalism
- **Secondary accent:** Cool slate gray (`#64748b`) — clean, neutral, modern without competing with the teal
- **Background:** Clean white (`#ffffff`) and a soft cool gray (`#f4f5f7`) for alternating sections
- **Text:** Near-black (`#1a1a1a`) for body, white for dark section overlays
- **Keep the palette neutral overall** — no golds, ambers, or warm metallics. The site should feel clean, modern, and understated.

### Layout Principles
- Full-width hero sections with large headlines and CTAs
- Alternating white / light-gray section backgrounds for visual rhythm
- Card grids for products, markets, and services
- Generous whitespace — let the design breathe
- Sticky header with logo left, nav centered or right, "Get a Quote" CTA button always visible
- Consistent "Ready to Get Started?" CTA banner before every page footer
- Smooth scroll-triggered fade-in animations on sections (using Framer Motion)

### Logo Usage
- The provided logo is black text on transparent/white background
- Use the logo as-is in the header (on white/light background)
- For the footer (dark background), either invert the logo to white or use the company name in white text styled to match

---

## Site Map & Page Specifications

### Navigation Structure
```
Header Nav:
  Home | About Us | Products & Services | Markets | Contact Us

Footer:
  Quick Links (repeat nav) | Contact Info | Email | Address
```

---

### Page 1: HOME (`/`)

**Purpose:** First impression — establish what Select Packaging does, who they serve, and why they're the right partner. Drive visitors deeper into the site or to the contact page.

**Sections (in order):**

1. **Hero Section**
   - Large headline: "Your Packaging Partner in Dallas, TX" (or similar — placeholder is fine)
   - Subheadline: Brief 1-2 sentence value prop about being a full-service packaging solutions provider
   - Two CTA buttons: "Get a Quote" (primary, links to `/contact`) and "Our Services" (secondary/outline, links to `/products-services`)
   - Background: Full-width with a subtle gradient or a placeholder hero image area (use a solid gradient for now since no photography exists yet)

2. **Intro / Who We Are Blurb**
   - Short paragraph (2-3 sentences) introducing Select Packaging — what they do, their commitment to quality, and the breadth of industries they serve
   - Optional small icon row showing key stats or differentiators (e.g., "10+ Industries Served", "Dallas-Based", "Custom Solutions")

3. **Products & Services Overview** (3-4 card grid)
   - Cards for the core offerings: **Labels & Shrink Sleeves**, **Folding Cartons**, **Roll Stock**, **Pre-Made Pouches**
   - Each card: icon or placeholder image area, short title, 1-sentence description, "Learn More →" link to `/products-services`

4. **Markets We Serve** (icon grid or visual card row)
   - Grid showing industry icons/thumbnails: Food & Beverage, Nutraceuticals, Cosmetics & Beauty, Pet Care, Pharmaceuticals, Household & Consumer, Wine & Spirits, Industrial
   - "See All Markets →" link to `/markets`

5. **Why Choose Select Packaging** (testimonials or value props)
   - Since no real testimonials exist yet, use placeholder testimonial cards with lorem ipsum quotes
   - Carousel or 3-column grid layout
   - Style with quote marks icon, italic text, placeholder attribution

6. **CTA Banner**
   - "Ready to Get Started?" with a "Contact Us" button
   - Dark background section to create contrast before footer

---

### Page 2: ABOUT US (`/about`)

**Purpose:** Build trust and tell the company story. Humanize the brand.

**Sections:**

1. **Hero / Page Header**
   - Headline: "About Select Packaging"
   - Subheadline: Placeholder tagline about the company's mission

2. **Company Story**
   - 2-3 paragraphs of placeholder text about Select Packaging's founding, mission, and what drives them
   - Layout: Text on one side, placeholder image area on the other (split layout like Lone Star's about page)

3. **What We Do Summary**
   - Brief recap of products/services and markets with links to those pages

4. **Leadership / Team** (optional — include as placeholder)
   - Grid of 2-3 team member cards with placeholder headshot circles, name, and title
   - Note in a code comment: `{/* TODO: Replace with real team photos and bios */}`

5. **CTA Banner**
   - Same "Ready to Get Started?" pattern as homepage

---

### Page 3: PRODUCTS & SERVICES (`/products-services`)

**Purpose:** Detail every packaging product/service Select Packaging offers.

**Sections:**

1. **Hero / Page Header**
   - Headline: "Our Products & Services"
   - Subheadline: "Custom packaging solutions for every need"

2. **Product Grid** — A card for each product/service:

   - **Labels & Shrink Sleeves**
     - Description: Custom labels and 360° shrink sleeve solutions for branding, compliance, and shelf appeal
   - **Folding Cartons**
     - Description: Custom folding carton packaging for retail, food, pharmaceutical, and consumer products
   - **Roll Stock**
     - Description: Flexible roll stock film for form-fill-seal applications across food, medical, and industrial uses
   - **Pre-Made Pouches**
     - Description: Stand-up pouches, flat pouches, and spouted pouches ready for filling — available in a variety of sizes and materials
   - **Custom Packaging Design**
     - Description: End-to-end packaging design services — from concept and structural design to print-ready artwork
   - **Additional Services** (catch-all card)
     - Description: Warehousing, inventory management, and fulfillment support to keep your supply chain running smoothly

   Each card should have:
   - Placeholder image/icon area
   - Product name as heading
   - 2-3 sentence description (use placeholder copy)
   - Visual consistency — all cards same height, same structure

3. **CTA Banner**

---

### Page 4: MARKETS (`/markets`)

**Purpose:** Show industry expertise and build confidence that Select Packaging understands their specific vertical's needs.

**Sections:**

1. **Hero / Page Header**
   - Headline: "Markets We Serve"
   - Subheadline: "Industry experience to ensure compliance and quality"

2. **Markets Grid** — Visual card grid, each card links to an anchor or future sub-page:

   | Market | Placeholder Description |
   |--------|------------------------|
   | Food & Beverage | FDA-compliant packaging for snacks, sauces, beverages, frozen foods, and more |
   | Nutraceuticals | Supplement and vitamin packaging that meets regulatory standards |
   | Cosmetics & Beauty | Eye-catching packaging for skincare, makeup, and personal care products |
   | Pet Care | Durable, shelf-ready packaging for pet food, treats, and supplements |
   | Pharmaceuticals | Compliant, tamper-evident packaging for OTC and pharmaceutical products |
   | Household & Consumer | Packaging for cleaning products, home goods, and everyday consumer items |
   | Wine & Spirits | Premium labels and packaging for craft spirits, wine, and beer |
   | Industrial | Durable labeling and packaging for industrial chemicals, lubricants, and parts |
   | Cannabis | Compliant, child-resistant packaging for cannabis products (where permitted) |
   | E-Commerce & Fulfillment | Packaging optimized for shipping, unboxing experience, and brand presentation |

   Each card:
   - Placeholder thumbnail image area
   - Market name
   - 1-2 sentence description
   - All cards visually consistent

3. **"Don't see your industry?"** callout linking to contact page

4. **CTA Banner**

---

### Page 5: CONTACT US / GET A QUOTE (`/contact`)

**Purpose:** Convert visitors into leads. Primary conversion page.

**Sections:**

1. **Page Header**
   - Headline: "Contact Us"
   - Show company email, phone, and address in a clean info bar

2. **Two-Column Layout:**

   **Left Column — Contact Information:**
   - Company name
   - Address: 14114 Dallas Pkwy, Dallas, TX 75254
   - Email: mwiest@selectpackagingllc.com
   - Phone: (469) 995-5019
   - Embedded Google Maps iframe showing the address

   **Right Column — Quote Request Form:**
   - Fields:
     - First Name (required)
     - Last Name (required)
     - Company Name (required)
     - Email (required)
     - Phone
     - Industry (dropdown: Food & Beverage, Nutraceuticals, Cosmetics & Beauty, Pet Care, Pharmaceuticals, Household, Wine & Spirits, Industrial, Cannabis, Other)
     - Product Interest (checkboxes: Labels & Shrink Sleeves, Folding Cartons, Roll Stock, Pre-Made Pouches, Custom Design, Other)
     - Message / How can we help? (textarea)
   - Submit button: "Request a Quote"
   - On submit: Show a success toast/message. Wire form to Formspree, Resend, or a Next.js server action that sends an email to `mwiest@selectpackagingllc.com`

---

## Global Components

### Header / Navigation
- **Sticky** on scroll (with subtle background blur/shadow on scroll)
- Logo on the left
- Nav links centered or right-aligned: Home, About Us, Products & Services, Markets, Contact Us
- "Get a Quote" accent button on far right (links to `/contact`)
- Mobile: Hamburger menu with slide-out drawer

### Footer
- Dark background (charcoal/black)
- Three columns:
  1. Logo (white version or text) + short company tagline
  2. Quick Links (all nav pages)
  3. Contact info (address, email, phone)
- Copyright line at bottom: "© 2025 Select Packaging, LLC. All rights reserved."

### Reusable CTA Banner
- Used at the bottom of every page (above footer)
- Dark or accent-colored background
- Headline: "Ready to Get Started?"
- Subtext: "Contact Select Packaging today for a custom quote."
- Button: "Contact Us" → `/contact`

---

## Content & Asset Notes

**IMPORTANT:** No real photography, testimonials, or detailed copy exists yet. For all content:

- Use **placeholder text** that reads naturally (not lorem ipsum — write realistic-sounding packaging industry copy so the site feels real during development)
- Use **placeholder image areas** — solid colored rectangles with an icon or text like "Product Image" in the center. Use a subtle gradient or the brand accent color so they look intentional, not broken.
- Add code comments like `{/* TODO: Replace with real content */}` wherever placeholder content is used
- The logo file is the only real asset — use it in the header and footer

---

## File & Folder Structure

```
select-packaging/
├── public/
│   ├── logo.png                    # Select Packaging logo (provided)
│   └── images/                     # Placeholder for future images
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — fonts, metadata, header/footer
│   │   ├── page.tsx                # Home page
│   │   ├── about/
│   │   │   └── page.tsx            # About Us page
│   │   ├── products-services/
│   │   │   └── page.tsx            # Products & Services page
│   │   ├── markets/
│   │   │   └── page.tsx            # Markets page
│   │   └── contact/
│   │       └── page.tsx            # Contact / Get a Quote page
│   ├── components/
│   │   ├── Header.tsx              # Sticky nav with mobile hamburger
│   │   ├── Footer.tsx              # Site footer
│   │   ├── CTABanner.tsx           # Reusable "Ready to Get Started?" section
│   │   ├── HeroSection.tsx         # Reusable hero/page header component
│   │   ├── ProductCard.tsx         # Card component for products grid
│   │   ├── MarketCard.tsx          # Card component for markets grid
│   │   ├── TestimonialCard.tsx     # Testimonial/quote card
│   │   └── ContactForm.tsx         # Quote request form
│   └── lib/
│       └── constants.ts            # Company info, nav links, product/market data arrays
├── tailwind.config.ts              # Brand colors, fonts, custom theme tokens
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## Key Implementation Details

1. **SEO:** Every page needs proper `<title>` and `<meta description>` tags via Next.js Metadata API. Use descriptive, keyword-rich titles like "Custom Packaging Solutions in Dallas | Select Packaging, LLC"

2. **Performance:** Use Next.js `<Image>` component for all images. Use SSG (`generateStaticParams` or default static rendering) — this is a marketing site with no dynamic data.

3. **Responsiveness:** Every page must be fully responsive. Test at mobile (375px), tablet (768px), and desktop (1280px+). The Lone Star reference site is responsive — match that level of polish.

4. **Animations:** Use Framer Motion for:
   - Fade-up on scroll for section entries
   - Staggered card animations on the products and markets grids
   - Subtle hover scale/shadow on cards and buttons
   - Page header fade-in on load
   - Keep it tasteful — this is a B2B site, not a portfolio

5. **Accessibility:** Proper heading hierarchy (one H1 per page), alt text on images, keyboard-navigable menu, sufficient color contrast, focus-visible outlines.

6. **Form Handling:** The contact form should validate client-side (required fields, email format). For the MVP, log submissions to console or wire to Formspree. Add a success state UI after submission.

---

## Build Order (Suggested)

1. **Project setup** — Initialize Next.js, Tailwind, Framer Motion, folder structure
2. **Global layout** — Header, Footer, fonts, colors, root layout
3. **Home page** — Hero, intro, products overview, markets preview, testimonials, CTA
4. **Products & Services page** — Full product grid
5. **Markets page** — Full markets grid
6. **About Us page** — Company story, team placeholders
7. **Contact page** — Form + contact info + map embed
8. **Polish pass** — Animations, hover states, responsive QA, SEO metadata

---

## Summary

This plan produces a **7-component, 5-page Next.js website** modeled after https://lonestarlabels.com/ but tailored to Select Packaging's specific products (labels, shrink sleeves, folding cartons, roll stock, pre-made pouches) and broader market reach. All content is placeholder-ready with clear TODO markers for the client to fill in real copy and photography later.
