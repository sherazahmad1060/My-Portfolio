# Sheraz Ahmad Portfolio

A responsive, single-page portfolio website built with HTML, CSS, and vanilla JavaScript. The page presents profile and contact information, skills, projects, experience, education, certifications, testimonials, and social links.

## Project structure

```text
.
├── index.html                 # Page structure and entry point
├── css/
│   └── styles.css             # Layout, visual styles, and responsive rules
├── js/
│   ├── data.js                # Portfolio content in PORTFOLIO_DATA
│   ├── app.js                 # Page behavior and content rendering
│   └── main.js                # Additional script; not loaded by index.html
├── hero-portrait.jpg          # Profile image
└── Sheraz_Ahmad_Resume.pdf    # Downloadable resume
```

## Run the website

No build step or package installation is required. Open `index.html` in a browser. For a more reliable local preview, serve the project folder with any static web server and visit the local address it provides.

The page loads `js/data.js` before `js/app.js`; the app reads the `PORTFOLIO_DATA` object to populate the portfolio. `js/main.js` is not included by `index.html`.

## Update the portfolio content

Edit `PORTFOLIO_DATA` in [`js/data.js`](js/data.js). Keep the existing property names and data shapes because the rendering code expects them.

- `personal`: name, role titles, introduction, contact details, location, profile image, resume path, and summary statistics.
- `resume`: resume summary, address, resume projects, skill groups, and certification names.
- `skills`: skill categories, icons, display type (`progress` or `tags`), and skill items.
- `projects`: portfolio project cards and case studies. Each project has an `id`, title, year, category, description, technologies, links, image, and case-study details.
- `experience`: job title, company, dates, and responsibility list.
- `education`: degree, institution, location, dates, and optional focus or technologies.
- `certifications`: certification name, issuer, issue date, verification link, and badge icon.
- `testimonials`: quote, name, role, and company.
- `socials`: network name, profile URL, and SVG icon.

When adding an item to an array, copy the shape of a nearby item and separate entries with commas. Keep project IDs unique. Use valid URLs for links and paths relative to `index.html` for local assets.

### Change the profile image or resume

1. Add the replacement image or PDF to the project root (or another project folder).
2. Update `personal.avatarUrl` or `personal.resumeUrl` in `js/data.js` to match its relative path.
3. Keep the corresponding file in the project so the browser can load it.

### Update external links

Replace sample project, certification, and social URLs in `js/data.js` with the correct destinations. Check the page in a browser after editing to confirm the links and content render as expected.

## Technologies

- HTML5
- CSS3
- JavaScript (no framework or build system)

