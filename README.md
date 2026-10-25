# Responsive Design Tokens & Mobile-First CSS Architecture

A ready-to-run responsive dashboard project for Task 04. It demonstrates reusable CSS custom properties (design tokens), mobile-first layout, responsive CSS Grid/Flexbox, glassmorphism, theme switching, fluid typography, and mobile overflow prevention.

## Features
- Centralized color, typography, spacing, radius, and shadow tokens in `:root`
- Mobile-first layout that starts at 320px
- Responsive breakpoints at 768px, 1024px, and 1440px
- Dashboard cards, chart, activity feed, and project list
- Dark/light theme toggle saved with `localStorage`
- Live project search without reloading
- Glass-style panels, subtle shadows, hover transitions
- Keyboard focus indicators and reduced-motion support
- No build step, npm install, or backend required

## Folder structure
```text
responsive-design-tokens-mobile-first/
├── index.html
├── styles/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

## Run
1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Use the search field and theme button to test the interactions.

## Test responsive sizes
In Chrome, press `F12` (or right-click > Inspect), enable the device toolbar, and test:
- 320px mobile
- 768px tablet
- 1024px desktop
- 1440px large desktop

The project is a front-end demo. The New Project button is a demo notification and does not save data because no backend is included.

## GitHub submission
1. Create a public repository named `responsive-design-tokens-mobile-first`.
2. Upload `index.html`, `styles/`, `js/`, and `README.md` (upload the extracted files, not the ZIP only).
3. Commit the files.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, select Deploy from a branch, choose `main` and `/ (root)`, then Save.
6. Submit the public GitHub repository link or the published GitHub Pages link, as your academy instructions request.
