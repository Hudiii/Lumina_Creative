<div align="center">

  <img src="public/favicon.svg" alt="Lumina Creative Logo" width="80" height="80" />

  <h1>✨ Lumina Creative</h1>
  <p><strong>Creative Digital Agency — UI/UX Design · Web Development · Digital Branding</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
  </p>

  <p>
    <a href="#demo">View Demo</a> · 
    <a href="#features">Features</a> · 
    <a href="#getting-started">Getting Started</a> · 
    <a href="#structure">Structure</a>
  </p>

</div>

---

##  Preview

<div align="center">

| Light Mode | Dark Mode |
|:----------:|:---------:|
| ![Hero Light](https://placehold.co/600x340/ffffff/8b5cf6?text=Lumina+Creative+%E2%80%94+Light+Mode&font=montserrat) | ![Hero Dark](https://placehold.co/600x340/030712/a78bfa?text=Lumina+Creative+%E2%80%94+Dark+Mode&font=montserrat) |
| ![Services Light](https://placehold.co/600x340/f9fafb/8b5cf6?text=Services+Section&font=montserrat) | ![Portfolio Dark](https://placehold.co/600x340/111827/a78bfa?text=Portfolio+Section&font=montserrat) |

</div>

> **Note:** Replace placeholders with real screenshots. Run the app locally → capture → save to `public/screenshots/`.

---

## Features

- **Preloader Animation** — smooth branded loading screen on first visit
- **Dark / Light Mode** — persistent via `localStorage`, toggled from navbar
- **Scroll Progress Bar** — top-of-page reading indicator
- **Animated Sections** — AOS (Animate On Scroll) with staggered delays
- **Count-Up Stats** — numbers animate into view on scroll
- **Lazy-Loaded Portfolio** — `React.lazy` + `Suspense` for faster initial load
- **Scroll To Top** — floating button appears after scrolling
- **Fully Responsive** — mobile-first, tested across breakpoints
- **SEO-Ready Structure** — semantic HTML, proper heading hierarchy
- **Custom Purple Palette** — Tailwind extended `primary` color tokens

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 18](https://react.dev/) |
| Bundler | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animations | [AOS](https://michalsnik.github.io/aos/) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) (via Google Fonts) |

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- npm `>= 9`

### Installation

```bash
# Clone the repo
git clone https://github.com/Hudiii/Lumina_Creative.git
cd Lumina_Creative

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build       # output → dist/
npm run preview     # preview production build locally
```

---

## Project Structure

```
Lumina_Creative/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation + dark mode toggle
│   │   ├── Hero.jsx            # Landing section with animated stats
│   │   ├── About.jsx           # Company story & values
│   │   ├── Services.jsx        # UI/UX, Web Dev, Branding cards
│   │   ├── Process.jsx         # How we work — step timeline
│   │   ├── Portfolio.jsx       # Project showcase (lazy loaded)
│   │   ├── TechStack.jsx       # Tools & technologies grid
│   │   ├── Testimonials.jsx    # Client reviews
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx
│   │   ├── Preloader.jsx       # Branded loading animation
│   │   ├── ScrollProgress.jsx  # Top progress bar
│   │   ├── ScrollToTop.jsx     # Floating back-to-top button
│   │   ├── CustomCursor.jsx    # Custom cursor effect
│   │   └── LuminaLogo.jsx      # SVG logo component
│   ├── hooks/
│   │   ├── useDarkMode.js      # Dark mode + localStorage persistence
│   │   └── useCountUp.js       # Intersection Observer number animation
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind directives + global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-400` | `#a78bfa` | Dark mode accents |
| `primary-500` | `#8b5cf6` | Primary CTAs, icons |
| `primary-600` | `#7c3aed` | Hover states |
| `primary-700` | `#6d28d9` | Active states |

---

## Sections

1. **Hero** — tagline, CTA buttons, animated statistics (50+ projects, 30+ clients, 5+ years)
2. **About** — agency story and core values
3. **Services** — UI/UX Design · Web Development · Digital Branding
4. **Process** — step-by-step work methodology
5. **Portfolio** — curated project gallery
6. **Tech Stack** — tools and technologies
7. **Testimonials** — client feedback
8. **Contact** — inquiry form

---

##  License

MIT © [Lumina Creative](https://github.com/Hudiii/Lumina_Creative)

---

<div align="center">
  <p>Built with ❤️ by <strong>Lumina Creative Team</strong></p>
  <p>
    <a href="https://github.com/Hudiii/Lumina_Creative">⭐ Star this repo</a> if you found it useful!
  </p>
</div>
