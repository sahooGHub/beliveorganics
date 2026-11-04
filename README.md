# Be.Live Organics

Be.Live Organics is a static, learning-driven website exploring the connection between food, farming, community, knowledge and nature. The project is shaped around awareness, learning, collaboration and participation.

## Overview

The public website is focused on the V2 vision, open questions and a general Knowledge Garden introducing farming methods. The Knowledge Garden covers broad concepts—including aquaculture, polyhouse cultivation, hydroponics, multi-layer farming, integrated farming with animals and permaculture—without profiling other organisations or implying affiliations.

Detailed organisation profiles and internal source-gathering notes are not included in the public Knowledge Garden.

The site includes:

- a brand-led V2 landing page
- a belief and positioning story
- an “Our Questions / Direction” page
- a general Knowledge Garden page at `research.html`
- the original Be.Live landing page, preserved as an alternate experience
- responsive, editorial visual styling

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
├── research.html           # General Knowledge Garden: farming-method concepts
├── research-sources.html   # Unpublished internal source notes
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

The Knowledge Garden describes general methods as learning topics, not guaranteed recommendations. Suitability and outcomes depend on local conditions and should be assessed with appropriate evidence. Specific claims, figures, quotations, images and organisation profiles require suitable sources and attribution before publication.

## Content and reuse

The Be.Live name, logo, original website copy and design assets are presented for this project’s use. No license is granted here to reproduce or republish them. A public repository and website can still be viewed or copied; a notice communicates intent but cannot technically prevent copying.

## Contact

Public contact is not currently available while a working inbox or form is being configured. Do not use an unverified `hello@beliveorganics.com` address until delivery has been tested.
