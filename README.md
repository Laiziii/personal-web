# Azeez Adigun — personal website

A personal space for a Brock University student with interests in health, technology, AI, gaming, finance, and learning. Built with React and Vite, with dark and light appearances, locally bundled fonts, and no backend or credentials.

## Development

Use Node.js 22.12+ (validated with Node.js 24).

```sh
npm ci
npm run dev
```

The development server uses port 5173. For production validation:

```sh
npm run build
npm run preview
```

`dist/` is the static output. No SPA route rewrites are needed for section anchors. Azeez approved public deployment; [deployment notes](docs/DEPLOYMENT.md) describe the GitHub Pages workflow and one-time hosting configuration.

## Validation

```sh
npm run test:e2e
```

Playwright starts its own production server on port 4175. It tests interest panels and keyboard controls, academic disclosures, mobile navigation, theme persistence, blocked browser storage, clipboard success and failure, responsive layout, and automated accessibility scans in both themes. It uses `/usr/bin/chromium` when available. Else run `npx playwright install chromium` or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to a browser executable.

Automated accessibility checks complement manual keyboard and visual review; they do not establish complete accessibility conformance.

## Content and structure

- `src/profile.js`: approved public identity and contact details. The optional email remains empty; the website uses the approved GitHub profile.
- `src/content.js`: interests, verified repository summaries, academic projects, and strengths.
- `src/components/`: shared header, icons, and decorative interest map.
- `src/sections/`: interactive interests, projects, and contact sections.
- `src/main.jsx`: page composition, introduction, education, and current learning.
- `src/styles.css`: responsive layout and theme variables.
- `docs/CONTENT.md`: project sources and editorial boundaries.

Appearance preference is saved in localStorage. Fonts and illustrations load locally; no analytics, third-party embeds, contact form, or tracking services are included. Browser storage is optional, and clipboard failures offer a manual copy path.
