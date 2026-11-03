# Be.Live Organics

Be.Live Organics is a static, learning-driven website exploring the connection between food, farming, community, knowledge and nature. The project blends a brand experience with research-driven storytelling and a transparent learning mindset.

## Overview

This repository contains the V2 website for Be.Live Organics, shaped around the idea that healthier food systems are built through awareness, learning, collaboration and participation.

The site now includes:

- a brand-led landing page
- a belief and positioning story
- an “Our Questions / Direction” page explaining the core issues being explored
- a “Knowledge Garden” research microsite
- a dedicated source-attribution page for research references and programme links
- a responsive, editorial visual style with soft motion and ambient design
- visitor contact links, temporarily disabled until a working inbox or form is configured

## Current positioning

Be.Live Organics is not positioned as a finished farm, a guaranteed business model or a fully proven ecosystem. Instead, it presents itself as a learning journey:

- learning before building
- awareness before scaling
- consumer demand as a signal
- farmer participation as a core part of the system
- local context and evidence as the real test

## Site structure

```text
.
├── index.html              # Main V2 landing page
├── index-v1.html           # Original Be.Live landing page preserved for reference
├── vision.html             # Our questions, direction and learning framework
├── research.html           # Research and knowledge content hub
├── research-sources.html   # Research source attribution and primary-source links
├── style.css               # Main landing-page styling
├── research.css            # Research page styling
├── script.js               # Landing-page interactions
├── research.js             # Research page scripts
├── logo.jpg                # Main brand image
├── Be.Live Logo.jpg        # Alternate logo asset
├── CNAME                   # Optional custom domain configuration for GitHub Pages
├── README.md               # Project documentation
```

## Key themes

The content explores questions such as:

- why consumer awareness matters before production scaling
- what missing links exist between farmers, food, knowledge, and communities
- why Odisha may be a practical place to learn and experiment
- why Bengaluru may be a relevant market and partnership base
- how multi-layer farming, root-zone understanding and polyhouse systems enter the learning agenda
- how Be.Live can grow without pretending to have all the answers

## Research integrity

The Knowledge Garden references public programmes, organisations and campaigns in an educational, editorial context. To keep the work transparent, `research-sources.html` indexes the main source pages used for profile context, organisation claims and programme descriptions.

This repository is intentionally honest about the difference between:

- what is clearly stated by an organisation itself
- what is reported by a government or public institution
- what still needs independent verification or stronger evidence

## Live site

The project is designed for GitHub Pages deployment as a static site.

## Local development

Because this is a static HTML project, no dependency installation is needed.

### Option 1: open directly in a browser

Open `index.html` in a modern browser.

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

This repository is structured for GitHub Pages hosting.

Typical setup:

1. Push changes to the default branch.
2. In GitHub repository settings, enable GitHub Pages.
3. Select the branch and root folder.
4. If using a custom domain, keep `CNAME` configured.

## Tech stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Notes

This project is intentionally editorial and brand-led rather than framework-based. The tone is designed to feel honest, exploratory and grounded in learning, rather than like a polished startup pitch.

The content is still evolving as the mission develops, and the site intentionally separates:

- what is known
- what is being studied
- what is still being questioned

## Content and reuse

The Be.Live name, logo, original website copy, and design assets are presented for the project’s own use. No license is granted here to reproduce or republish them. A public website or public communications project should be reviewed separately before publishing externally.

## Contact

Public contact is temporarily unavailable while an email inbox or contact form is being configured. Do not use an unverified `hello@beliveorganics.com` address until forwarding or mailbox delivery is confirmed.

## Relationship to the wider House of Sahoo ecosystem

Be.Live Organics is positioned as a learning and values-led initiative within the broader House of Sahoo ecosystem, alongside a focus on health, awareness and intentional living.
