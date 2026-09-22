# Local Business Landing Page Capstone — Eddie's Grooming Lounge

**Thrive Africa | Frontend Development Essentials Course**  
**Student Name:** Edward Nyame  
**Assigned Industry:** Barbershop & Personal Grooming  
**Business Name:** Eddie's Grooming Lounge  
**Location:** Plot 14, Old Post Office Road, Tarkwa Central, Western Region, Ghana  

---

## 1. Project Overview

For my capstone project in the Thrive Africa Frontend Development Essentials course, I chose to design and build a complete website for **Eddie's Grooming Lounge**, a premium barbershop located in Tarkwa, Ghana.

### Target Customers
The business caters to working professionals, university students from the University of Mines and Technology (UMaT), corporate executives, and gentlemen across the Western Region who appreciate meticulous hair craftsmanship, clean beard detailing, and restorative scalp therapy in an unhurried, welcoming setting.

### Main Goal
The primary objective of the site is to establish an authentic digital presence for the lounge that:
- Showcases the range of grooming services and transparent pricing in Ghana Cedis (GH₵).
- Explains the step-by-step chair consultation process so first-time visitors know exactly what to expect.
- Provides proof of quality through documented cut transformations and an interactive Before-and-After slider.
- Makes it effortless for patrons to get in touch or book their chair via direct phone call, WhatsApp, or an online booking form.

---

## 2. Features & Page Architecture

The project contains four interconnected pages with a shared navigation system:
1. **Home (`index.html`)** — The primary landing page introducing the lounge, key service highlights, our three-step cutting process, recent work previews, and clear call-to-action prompts.
2. **Our Services (`services.html`)** — Comprehensive service menu detailing six distinct grooming packages with durations and prices in GH₵, a breakdown of local Ghanaian botanical ingredients (shea butter, moringa, jojoba, tea tree), and a 4-step chair journey.
3. **Recent Work (`portfolio.html`)** — Interactive visual portfolio featuring an interactive Before-and-After slider, filterable gallery tabs, and case cards for various hair and beard textures (including Type 4C coils, wave alignments, and silver tapers).
4. **Contact Us (`contact.html`)** — Full contact suite featuring physical location details, business opening hours, parking information, direct telephone/WhatsApp links, an aerial map preview, and a validated interactive booking form.

### Required Page Sections (Rubric Verified)

| Section | Location | Content Included |
|---|---|---|
| **Hero** | `index.html` (Top) | Business name ("EDDIE'S"), headline ("Rooted in Ghana. Sharpened to Perfection."), short introduction, high-res studio visual card, and primary CTAs ("Explore Our Services", "Book a Chair"). |
| **Our Services** | `index.html#services` & `services.html` | Clear offerings with titles, descriptions, durations, and pricing in GH₵ (e.g. Signature Taper & Shear, Hot-Towel Beard Sculpt, Sovereign Scalp Therapy, Tarkwa VIP Experience). |
| **How We Work** | `index.html#how-we-work` | A 3-step sequence: *01 We Listen First* (consultation), *02 Precision Cutting, Ghana Style* (shear & clipper work), and *03 Natural Finish & Send-Off* (shea butter & cool herbal seal). |
| **Recent Work** | `index.html#recent-work` & `portfolio.html` | High-quality gallery images with titles, short descriptions, and barber attributions showcasing clean fades, wave compression, and beard sculpting. |
| **Contact Us** | `contact.html` & `index.html#contact` | Interactive form with labeled Full Name, Email, Service Selection, Barber Selection, Date, and Message fields. Includes location details and opening hours. |
| **Footer** | All pages (Bottom) | Business name, copyright notice, navigation links, direct telephone, WhatsApp link, physical address, opening hours, and etiquette/ingredient/privacy links. |

---

### JavaScript Interactions (How to Test)

The project includes five distinct JavaScript interactions built using plain vanilla JavaScript (`js/script.js` and `js/navigation.js`):

#### 1. Interactive Before-and-After Haircut Slider (on `portfolio.html`)
- **How to try it:** Navigate to `portfolio.html` and scroll down to the "Client Transformation #104" section. Click and drag the vertical divider handle left and right across the photo (or drag with your finger on touch screens).
- **What happens:** As you drag, the top image dynamically clips via CSS `width` adjustments, revealing the "Before" overgrown state on the left and the clean "After" drop fade on the right. The width updates smoothly in real-time on mousemove/touchmove and stays constrained within container boundaries.

#### 2. Portfolio Category Filtering (on `portfolio.html`)
- **How to try it:** On `portfolio.html`, scroll to the "More of Our Work" section and click on any filter button: *All Works*, *Fades & Tapers*, *Beard Craft*, *Waves & Coils*, or *Scalp Care*.
- **What happens:** Non-matching cards smoothly fade out and collapse, while matching cards display with a subtle upward transition. Clicking "All Works" brings back all eight gallery cards.

#### 3. Client-Side Contact Form Validation (on `contact.html`)
- **How to try it:** Navigate to `contact.html` and submit the booking form empty, or enter an invalid email (e.g. `kofi@`).
- **What happens:** 
  - Inline error messages appear immediately below the invalid fields in red text, with matching border highlights on the inputs.
  - As soon as you begin typing valid text, the error messages disappear automatically via real-time `input` event listeners.
  - When all required fields are correctly filled and submitted, a green demo alert banner appears at the top confirming the booking (*"Akwaaba, [Your Name]!"*), clearly labeled as a frontend demo in accordance with course guidelines.

#### 4. Responsive Mobile Navigation Drawer (All pages)
- **How to try it:** Resize your browser window below 768px (or view on a mobile device) and tap the hamburger button in the top right.
- **What happens:** The hamburger animates into an "X", the body background scroll locks to prevent jumpy movement, and a side navigation drawer slides in smoothly from the right over a backdrop scrim. Tapping the backdrop scrim, any navigation link, or pressing the `Escape` key closes the drawer cleanly.

#### 5. Scroll-Triggered Sticky Header & Back-to-Top Button (All pages)
- **How to try it:** Scroll down past 400px on any page.
- **What happens:** The navigation header gains a subtle background elevation shadow, and a floating gold back-to-top button fades in at the bottom right. Clicking it smoothly animates the viewport back to the top.

---

## 3. Design Research

Before writing code, I researched several award-winning grooming websites, barbershop brand systems, and editorial portfolios on platforms recommended in the course brief:

- **Refero & Landbook:** Studied layouts of boutique services that balance visual imagery with clear pricing tables. I noticed the best sites use ample whitespace, strong typographic hierarchy, and warm, tactile photography rather than clinical stock images.
- **Dribbble & Behance:** Looked up modern barbershop identity designs, specifically studying how high-end salons showcase before-and-after work and how they display opening hours clearly.
- **Local Inspiration & Adaptation:** 
  - Rather than copying European or American barbershop clichés (neon signs, red-white-and-blue poles, or sterile clinical language), I deliberately rooted the visual identity in Ghanaian culture.
  - The colour palette draws directly from Ghana's landscape: **Deep Forest Green (`#13251B`)** reflecting Western Region's lush rainforests, **Warm Gold (`#D4AF37`)** referencing the gold mining heritage of Tarkwa, and **Terracotta (`#994628`)** representing Ghanaian red earth and clay.
  - The ingredients featured throughout the site are genuine West African staples: raw unrefined shea butter from Tamale (Northern Region), cold-pressed moringa from the Brong-Ahafo area, pure coconut oil, and soothing aloe vera.

### Image Credits & Assets
- Studio and portrait photos: High-quality barbershop and grooming photography licensed for educational use via Unsplash and Pexels.
- Brand Emblem: Custom vector-inspired circular crest designed for Eddie's Grooming Lounge.
- Icons: Google Material Symbols (Outlined) web font.
- Typography: Google Fonts — **Poppins** applied throughout all headings, navigation, buttons, and body copy for a clean, consistent, contemporary look.

---

## 4. Build Process

Here is the chronological order of how the project was built:

1. **Business Planning & Paper Wireframing:** Selected the barbershop industry and conceptualised Eddie's Grooming Lounge in Tarkwa. Sketched rough desktop and mobile layouts on paper for each of the six required sections.
2. **Git Repository & Project Setup:** Initialised a local Git repository, set up the project folder structure (`index.html`, `services.html`, `portfolio.html`, `contact.html`, `css/style.css`, `js/script.js`, `js/navigation.js`, and `images/`), and made the initial commit.
3. **Semantic HTML Structure:** Coded semantic markup using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags. Added IDs to each section to enable smooth in-page jumping and inter-page navigation. Form fields were built with explicit `<label for="...">` associations.
4. **CSS Architecture & Design Tokens:** Built `css/style.css` using custom properties in `:root` for colors, typography, spacing, border radii, and transitions. Implemented CSS Grid for card layouts and Flexbox for headers, navigation, and badges.
5. **Single-Source Navigation System:** Created `js/navigation.js` to eliminate code duplication across pages. Centralised the link data into a single configuration object that dynamically renders the header nav, mobile drawer, and footer links, while automatically calculating and highlighting the active link.
6. **JavaScript Interactivity:** Implemented the Before/After comparison slider using mouse and touch event listeners, coded the category filter for gallery cards, and built form validation logic with custom inline feedback.
7. **Mobile Responsiveness (Bonus Credit):** Added `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. Crafted custom media queries targeting 1024px, 768px, 640px, 480px, and 360px. Verified touch targets, font scaling, image flexibility, and layout stacking on narrow screens.
8. **Testing & Code Audit:** Thoroughly tested cross-browser compatibility, verified HTML5 semantics, audited all alt texts, verified accessibility color contrast, and cleaned up code comments to ensure professional, readable formatting.
9. **Netlify Deployment (Bonus Credit):** Connected the repository to Netlify for continuous static hosting.

---

## 5. SEO & Structured Data Implementation

Every page has been given its own dedicated, page-specific SEO package:

- **Unique Page Titles & Descriptions:** Crafted unique meta titles and rich descriptions for all four pages tailored to local Tarkwa search queries.
- **Open Graph & Twitter Cards:** Configured `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` (`en_GH`), and Twitter summary cards for rich preview generation when links are shared on WhatsApp, Facebook, or Twitter.
- **Geotargeting Tags:** Added `geo.region` (`GH-WP`), `geo.placename` (`Tarkwa`), and `ICBM`/`geo.position` coordinates (`5.3018, -1.9930`) to boost local Ghanaian search discovery.
- **Schema.org Structured Data (JSON-LD):**
  - `index.html`: Complete `Barbershop` schema with address, coordinates, opening hours, and phone number.
  - `services.html`: `OfferCatalog` schema listing individual services and prices in GHS.
  - `portfolio.html`: `ImageGallery` schema describing the portfolio case studies.
  - `contact.html`: `ContactPage` schema with local business contact point details.
- **Canonical URLs:** Self-referencing canonical links on every page to prevent duplicate content indexing.

---

## 6. Run & Test Instructions

### Running Locally
There are no dependencies, package managers, or build steps required.

**Option A: Using Python's built-in HTTP server (Recommended)**
```bash
# Navigate to the project directory in your terminal
cd path/to/project

# Start a local static server
python3 -m http.server 8080

# Open in your browser:
# http://localhost:8080
```

**Option B: Direct Browser Opening**
Double-click `index.html` or open it directly in Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge.

### Testing Checklist & Results

| Screen / Device | Tested Width | Result |
|---|---|---|
| **Mobile (iPhone SE / Galaxy)** | 360px – 375px | All cards stack into single columns; mobile drawer operates cleanly; form inputs and buttons meet minimum 48px tap target heights; no horizontal overflow. |
| **Mobile Large (iPhone Pro Max)** | 414px – 430px | Clean card padding; hero image renders sharply; before/after slider operates smoothly via touch. |
| **Tablet (iPad Mini / Air)** | 768px – 820px | Navigation shifts gracefully to drawer; grids display 2 columns; before/after slider adjusts width dynamically on orientation change. |
| **Laptop / Desktop** | 1024px – 1366px | Full horizontal navigation displays; sticky header elevation triggers on scroll; 3-column service and work grids align cleanly. |
| **Large Desktop** | 1920px (Full HD) | Content containers cap at 1280px max-width to maintain comfortable reading lengths; typography remains crisp. |

---

## 7. Reflection & Key Learnings

### Biggest Challenge
The biggest technical hurdle was managing multi-page navigation across four independent HTML files without using a templating engine like Jinja or a framework like React. In typical static sites, modifying a nav link means manually editing every single HTML file, which easily leads to broken links and inconsistent active states.

### Solution
I engineered a lightweight component pattern in vanilla JavaScript (`js/navigation.js`). By defining the navigation routes once in a data object and mounting it into `data-component` DOM containers on `DOMContentLoaded`, any navigation change only requires editing one single array. Additionally, reading `window.location.pathname` allows the script to automatically apply the `.active` class to the appropriate link without any manual per-page configuration.

### What I Learned
- The power of modern vanilla JavaScript — implementing responsive touch-and-drag sliders and dynamic DOM filtering without relying on external libraries like jQuery or Swiper.
- The importance of design tokens in CSS — creating a scalable design system using custom CSS properties in `:root`.
- How to structure authentic local business copy that resonates with Ghanaian culture rather than relying on generic corporate templates.

---

## 8. Course Submission Details

```
Student name: Edward Nyame
Business and industry: Eddie's Grooming Lounge (Barbershop & Personal Grooming)
GitHub repository link: https://github.com/edward-nyame/eddies-grooming-lounge
JavaScript interaction: 
  1. Interactive Before & After comparison slider with touch/drag support
  2. Filterable gallery category tabs
  3. Client-side booking form validation with inline feedback
  4. Mobile navigation drawer with scroll lock
  5. Scroll-triggered sticky header and back-to-top button
Mobile responsiveness bonus: Completed (Tested across 360px, 375px, 768px, 1024px, 1366px)
Netlify live link: https://eddiesgrooming.netlify.app
```

---

*Eddie's Grooming Lounge · Tarkwa, Western Region, Ghana · © 2026*
