# Eddie's Grooming Lounge — Capstone Project

**Course:** Thrive Africa | Frontend Development Essentials  
**Student:** Edward Nyame  
**Industry:** Barbershop & Personal Grooming  
**Business:** Eddie's Grooming Lounge  
**Location:** Plot 14, Old Post Office Road, Tarkwa Central, Western Region, Ghana

---

## Project Overview

This is my capstone project for the Thrive Africa Frontend Development Essentials course. I built a multi-page website for a barbershop called Eddie's Grooming Lounge, based in Tarkwa in the Western Region of Ghana.

The target audience is mainly working men, UMaT students, and professionals in the Tarkwa area who want a proper haircut, beard trim, or scalp treatment done with natural products.

The main goal of the website is to let visitors see what services the shop offers with clear prices, understand the process before they come in, look through photos of past work, and easily book an appointment through a form or reach out by phone/WhatsApp.

---

## Features & Pages

The site has four pages that share the same navigation bar and footer:

1. **Home** (`index.html`) — Landing page with the hero section, a preview of the top 3 services, the 3-step process explanation, some recent work highlights, and booking call-to-actions.
2. **Our Services** (`services.html`) — Full service menu showing six grooming packages with duration and GH₵ pricing, the natural ingredients used (shea butter, moringa, tea tree, etc.), and a step-by-step chair journey.
3. **Recent Work** (`portfolio.html`) — A gallery page with a draggable before/after slider, filterable tabs for different categories (fades, beards, waves, scalp care), and photo cards with descriptions.
4. **Contact Us** (`contact.html`) — Contact page with the shop location on a map, opening hours, phone/WhatsApp/email details, parking info, and a booking form with validation.

### Section Checklist

| Section | Where | What's in it |
|---|---|---|
| **Hero** | `index.html` top | Business name, headline, intro text, studio photo, two CTA buttons |
| **Our Services** | `index.html#services` + `services.html` | Service cards with names, descriptions, duration, and GH₵ prices |
| **How We Work** | `index.html#how-we-work` | 3 steps: consultation, precision cutting, natural product finish |
| **Recent Work** | `index.html#recent-work` + `portfolio.html` | Gallery images with titles and descriptions |
| **Contact Us** | `contact.html` | Form with name, email, service, barber, date, and message fields. Location and hours included |
| **Footer** | All pages | Copyright, navigation, phone, WhatsApp, email, address, hours, social icons |

---

## JavaScript Interactions

I built five interactions using plain vanilla JavaScript (no libraries). Here's how to test each one:

### 1. Before/After Slider (`portfolio.html`)
Go to `portfolio.html` and scroll to the transformation section. Click and drag the divider handle left or right across the photo. On mobile, swipe with your finger. The image clips in real time so you can see the "before" and "after" side by side.

### 2. Gallery Filter Tabs (`portfolio.html`)
On the same page, scroll to the gallery section. Click any filter button (All Works, Fades & Tapers, Beard Craft, Waves & Coils, Scalp Care). Cards that don't match fade out and the matching ones stay visible.

### 3. Form Validation (`contact.html`)
Go to `contact.html` and try submitting the form without filling anything in. You'll see red error messages below each empty field. Start typing and the errors clear automatically. When everything is filled in correctly, a green banner pops up at the top saying the demo booking was logged. (This is just a frontend demo — no actual email gets sent.)

### 4. Mobile Navigation Drawer (all pages)
Shrink your browser to below 768px or open on a phone. Tap the hamburger icon in the top right. The nav drawer slides in from the right with a dark backdrop. You can close it by tapping the backdrop, tapping any link, or pressing Escape.

### 5. Sticky Header & Back-to-Top (all pages)
Scroll down any page. After about 400px the header gets a shadow effect. A gold arrow button also appears at the bottom right — clicking it scrolls you back to the top smoothly.

---

## Design Research

I looked at barbershop and grooming websites on a few of the recommended platforms before I started coding:

- **Refero and Landbook** — I browsed service-type business layouts to see how they balance images with pricing info. The ones I liked best had lots of whitespace and warm-toned photos instead of stock images.
- **Dribbble and Behance** — Searched for barbershop branding and identity work. Got ideas for the before/after slider from a few salon portfolio concepts I found there.
- **Ghanaian cultural choices** — Instead of going with typical Western barbershop looks (neon signs, red-white-blue colour schemes), I picked colours that reflect the Tarkwa area: deep forest green (`#13251B`) for the Western Region landscape, warm gold (`#D4AF37`) for the gold mining heritage, and terracotta red (`#994628`) for Ghanaian earth tones. The grooming products mentioned (shea butter, moringa oil, coconut oil) are all common in Ghana.

### Image & Asset Credits
- Barbershop and grooming photos from Unsplash and Pexels (free for educational use)
- Logo: custom circular emblem designed for the project
- Icons: Google Material Symbols (Outlined) web font
- Font: Poppins from Google Fonts

---

## Build Process

Here's roughly the order I followed:

1. **Chose the business** — Picked a barbershop in Tarkwa and sketched out rough layouts on paper for each section (hero, services, how we work, recent work, contact, footer).
2. **Set up Git and project files** — Ran `git init`, created the folder structure (`index.html`, `services.html`, `portfolio.html`, `contact.html`, `css/style.css`, `js/script.js`, `js/navigation.js`, `images/`), and pushed the first commit to GitHub.
3. **HTML structure** — Built the markup using semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) and added IDs for in-page navigation. Form fields have proper `<label>` associations.
4. **CSS styling** — Set up CSS custom properties (`:root` variables) for colours, fonts, and spacing. Used CSS Grid for card layouts and Flexbox for the header and navigation.
5. **Navigation system** — Created `js/navigation.js` so I only have to update navigation links in one place and it updates across all four pages automatically.
6. **JavaScript features** — Built the before/after slider (mouse + touch events), gallery filter, form validation with inline error messages, mobile drawer with scroll lock, and sticky header with back-to-top button.
7. **Mobile responsiveness** — Added the viewport meta tag and wrote media queries for 1024px, 768px, 640px, 480px, and 360px breakpoints. Tested on different screen sizes to make sure nothing breaks.
8. **Final testing** — Checked all pages in Chrome and Firefox, tested form validation edge cases, verified the slider works on touch devices, and made sure all links point to the right places.
9. **First push to GitHub** — Committed and pushed to `https://github.com/mrgranthox/barber-shop-thrive`.
10. **Netlify deployment** — Connected the GitHub repo to Netlify for the live version, including `_redirects` and `netlify.toml` routing configuration so page navigation and clean URLs work smoothly across the site.

---

## SEO Setup

Each page has its own SEO tags:
- Unique `<title>` and `<meta description>` for each page
- Open Graph tags (`og:title`, `og:description`, `og:image`) so links look good when shared on WhatsApp or social media
- Geo-targeting tags (`geo.region`, `geo.placename`, `ICBM`) pointing to Tarkwa's coordinates
- Schema.org JSON-LD structured data on every page (Barbershop, OfferCatalog, ImageGallery, ContactPage schemas)
- Canonical URLs on each page

---

## How to Run Locally

No build tools or package managers needed — it's just HTML, CSS, and JavaScript.

**Option A (recommended):** Open a terminal in the project folder and run:
```bash
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser
```

**Option B:** Just double-click `index.html` to open it directly in your browser.

### Testing Results

| Device / Screen | Width Tested | Result |
|---|---|---|
| Mobile (small) | 360–375px | Cards stack in one column, mobile drawer works, buttons are big enough to tap, no sideways scrolling |
| Mobile (large) | 414–430px | Layout looks clean, hero image loads fine, before/after slider works with touch |
| Tablet | 768–820px | Nav switches to the drawer, grids show 2 columns, slider adjusts on rotation |
| Laptop | 1024–1366px | Full desktop nav shows, sticky header works, 3-column grids line up properly |
| Large screen | 1920px | Content stays centred at max-width, text is still readable |

### Known Issues
- The contact form is frontend-only (demo). It doesn't actually send emails — it just shows a confirmation message. In a real version you'd connect it to something like Formspree or a backend.
- The map on the contact page is a static image, not an interactive Google Maps embed.

---

## Reflection

### Biggest challenge
The hardest part was keeping the navigation consistent across four separate HTML files. Without a framework like React where you'd just make a component, I had to find another way. Changing one link meant changing it in four files, which was messy.

### How I solved it
I wrote a small JavaScript file (`js/navigation.js`) that stores all the nav links in one object. On page load, it fills in the nav bar, mobile drawer, and footer links automatically. So now if I need to change a link or add a page, I just edit one array and it updates everywhere.

### What I learned
- You can do a lot with just vanilla JS — the drag slider and the gallery filter didn't need any external libraries.
- Setting up CSS variables at the start saves a lot of time later when you want to change colours or spacing across the whole site.
- Writing copy for a specific place (Tarkwa, Ghana) makes the site feel more real than using generic text.

---

## Submission Details

```
Student name: Edward Nyame
Business and industry: Eddie's Grooming Lounge (Barbershop & Personal Grooming)
GitHub repository link: https://github.com/mrgranthox/barber-shop-thrive
Contact Email: xbeenes@gmail.com
Phone / WhatsApp: +233 (0) 54 329 0849
JavaScript interaction: 
  1. Before/after comparison slider (drag + touch)
  2. Gallery filter tabs
  3. Contact form validation with inline feedback
  4. Mobile nav drawer with scroll lock
  5. Sticky header and back-to-top button
Mobile responsiveness bonus: Completed (tested at 360px, 375px, 768px, 1024px, 1366px)
Netlify live link: https://eddiesgrooming.netlify.app
```

---

*Eddie's Grooming Lounge · Tarkwa, Western Region, Ghana · © 2026*
