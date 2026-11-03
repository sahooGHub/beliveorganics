# Be.Live

Be.Live is a static, wellness-focused landing page and research microsite that explores the connection between organic foods, community, and vitality. The project blends a polished brand experience with an educational "Knowledge Garden" section that documents farming practices, soil health, and sustainable living.

## Overview

This repository contains the website for Be.Live, a concept brand built around the idea that real nourishment comes from honest food systems, connected communities, and a return to natural rhythms.

The site is designed as a clean single-page experience with:

- a brand-led hero section
- a philosophy narrative
- a "Knowledge Garden" research collection
- a supportive partner section linking to Sensera
- responsive, modern styling with subtle motion effects

## Live site

The project is intended for GitHub Pages deployment and is currently structured as a static website.

## Project structure

```text
.
├── index.html              # Landing page and main brand experience
├── research.html           # Research-heavy content page / knowledge garden
├── style.css               # Main site styles
├── research.css            # Research page styling
├── script.js               # Main site interaction scripts
├── research.js             # Research page interactivity
├── logo.jpg                # Main Be.Live brand image
├── Be.Live Logo.jpg        # Alternate logo asset
├── CNAME                   # Custom domain configuration for GitHub Pages
├── README.md               # Project documentation
```

## Features

- Organic, community, and vitality branding
- Elegant landing page with layered visual design
- Soft ambient motion and floating particle effects
- Research section covering farming and sustainability themes
- Responsive layout for desktop and mobile viewing
- No build step required; simple static HTML/CSS/JS site

## Local development

Because this is a static HTML project, you can preview it locally without installing dependencies.

### Option 1: open directly in a browser

Open `index.html` in any modern browser.

### Option 2: run a simple local server

From the project root:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

This repository is configured for GitHub Pages hosting.

Typical setup:

1. Push changes to the default branch.
2. In GitHub repository settings, enable GitHub Pages.
3. Select the branch and root folder (or use the configured custom domain if applicable).
4. Ensure `CNAME` is present if you are using a custom domain.

## Tech stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Notes

This project is a design-forward static website rather than a framework-based app. The content is intentionally editorial and brand-focused, with a strong educational narrative around healthy living and regenerative agriculture.

## License

This project does not currently declare a repository license. If you plan to reuse or distribute the code, add an appropriate open-source license before publication.

## Contact / brand context

The project is associated with the broader "House of Sahoo" ecosystem and is positioned around the values of organic living, informed nutrition, and community-centered wellbeing.
