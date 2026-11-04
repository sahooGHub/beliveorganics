# Be.Live Organics

Be.Live Organics is a static, learning-driven website exploring the connection between food, farming, community, knowledge and nature. The project is shaped around awareness, learning, collaboration and participation.

## Overview

The public website is currently focused on the V2 vision and its open questions. Detailed research notes and source-gathering materials are being kept internal while they are reviewed for accuracy and prepared for possible publication.

The site includes:

- a brand-led V2 landing page
- a belief and positioning story
- an “Our Questions / Direction” page
- the original Be.Live landing page, preserved as an alternate experience
- responsive, editorial visual styling

The Knowledge Garden and research-source pages are temporarily unpublished from the public-facing site. Their current public URLs display a notice that the material is not available. Since this repository is public, earlier versions may remain accessible in Git history; removing a page from the current site does not make repository history private.

## Current positioning

Be.Live Organics is not presented as a finished farm, a guaranteed business model or a fully proven ecosystem. It is a learning journey:

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
├── research.html           # Temporary public notice; detailed research is unpublished
├── research-sources.html   # Temporary public notice; source notes are unpublished
├── style.css               # Original landing-page styling
├── research.css            # Retained stylesheet for future research-page work
├── script.js               # Original landing-page interactions
├── research.js             # Retained script for future research-page work
├── logo.jpg                # Main brand image
├── Be.Live Logo.jpg        # Alternate logo asset
├── CNAME                   # Optional custom domain configuration for GitHub Pages
└── README.md               # Project documentation
```

## Local development

This is a static HTML project and needs no dependency installation. From the project root, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Deployment

The project is designed for GitHub Pages. Enable Pages in repository settings and select the intended branch and root folder. Keep `CNAME` configured if using a custom domain.

## Research integrity

Research notes may include organisation profiles, campaign descriptions and learning from public material. Before any of this is republished, claims should be matched to specific sources, figures attributed to the organisation or institution that reports them, and unsupported or outdated statements removed or qualified.

## Content and reuse

The Be.Live name, logo, original website copy and design assets are presented for this project’s use. No license is granted here to reproduce or republish them. A public repository and website can still be viewed or copied; a notice communicates intent but cannot technically prevent copying.

## Contact

Public contact is not currently available while a working inbox or form is being configured. Do not use an unverified `hello@beliveorganics.com` address until delivery has been tested.
