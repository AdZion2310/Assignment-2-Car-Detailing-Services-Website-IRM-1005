# Bytown Shine Car Wash & Detailing — website

A static, dependency-free site in plain HTML, CSS and JavaScript. Open `index.html` in a browser; there is no build step.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, proof strip, locations, package comparison, detailing services, add-ons, about teaser, final CTA |
| `about.html` | About: story, approach, location cards, CTA |
| `packages.html` | Packages: prices per vehicle size, extras, detailing services, help CTA |
| `contact.html` | Contact: location cards, message form (client-side validation only), email section |

## Files

- `css/style.css` — all styling. Colours, fonts and header sizes are CSS variables at the top of the file.
- `js/main.js` — mobile menu, scroll-to-top button and contact form validation.
- `images/favicon.svg`, `images/favicon.ico`, `images/apple-touch-icon.png` — favicon set derived from the logo mark (SVG for modern browsers, .ico fallback, 180px iOS home-screen icon).
- `images/logo.svg` — the Bytown Shine logo (self-contained SVG, text converted to outlines; 307×80, shown at 80px tall on desktop and 43px on mobile).

## Notes for editing

- **Phone and email links** all use `href="#"` for now. Replace them with `tel:6135550142` / `mailto:info@bytownshine.ca` style links when you are ready.
- **Addresses, phone numbers, hours and prices** are sample content written for an Ottawa hand car wash. Replace them with your own before publishing; the sample phone numbers use the fictional 555-01xx range.
- **Photos** on `index.html` (hero and the detailing split) and `about.html` (hero) are hotlinked from external URLs. To serve them locally, save each file into `images/` and point its `src` at it.
- **Contact form** — the form posts nowhere. Point `action` at your form handler or a form service and remove the demo success handler at the bottom of `js/main.js`.
- There is no online booking on the site; every call to action goes to the contact page or a phone number.

Fonts load from Google Fonts (Open Sans, Montserrat Alternates). Remove the `<link>` in each `<head>` to self-host them instead.
