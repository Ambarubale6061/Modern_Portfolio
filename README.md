# Hailee Portfolio — Next.js

A pixel-perfect conversion of the original HTML/CSS/JS portfolio into a Next.js (App Router) project.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Swiper 11** — testimonials carousel
- **MixItUp 3** — portfolio filter
- **ScrollReveal 4** — scroll animations
- **Boxicons** — icons via CDN
- **Google Fonts (Poppins)** — via CSS @import

---

## Project Structure

```
hailee-portfolio-nextjs/
├── app/
│   ├── layout.js          # Root layout: metadata, favicons, Boxicons CDN
│   └── page.js            # Main page — assembles all section components
├── components/
│   ├── Header.js          # Fixed nav, theme toggle, active-link scroll tracking
│   ├── Home.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills section
│   ├── Services.js        # Services cards + modal (useState)
│   ├── Work.js            # Portfolio grid + MixItUp filter
│   ├── Testimonials.js    # Swiper carousel
│   ├── Contact.js         # Contact cards + form
│   ├── Footer.js          # Footer
│   └── Animations.js      # ScrollReveal — renders null, runs on mount
├── styles/
│   └── globals.css        # Original styles.css (unchanged) + Swiper variables
├── public/
│   └── assets/
│       ├── img/           # ← Copy all .jpg / .png images here
│       ├── pdf/           # ← Copy hailee-Cv.pdf here
│       └── favicons/      # ← Copy all favicon files here
├── next.config.js
└── package.json
```

---

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Copy your static assets

Copy the following from the original project into `public/`:

| Original path | Next.js public path |
|---|---|
| `assets/img/*` | `public/assets/img/` |
| `assets/pdf/hailee-Cv.pdf` | `public/assets/pdf/hailee-Cv.pdf` |
| `assets/favicons/*` | `public/assets/favicons/` |

> **Note:** Do NOT copy `styles.css`, `main.js`, or the JS library files — those are handled by Next.js now.

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## What Changed vs the Original

| Feature | Original | Next.js |
|---|---|---|
| Routing | Single `index.html` | `app/page.js` |
| Styling | `assets/css/styles.css` | `styles/globals.css` (identical) |
| Theme toggle | Inline `<script>` in `main.js` | `useEffect` in `Header.js` |
| Services modal | DOM `classList` manipulation | React `useState` |
| Work filter | MixItUp via CDN script | `import('mixitup')` dynamic import |
| Testimonials | Swiper via CDN script | `swiper/react` package |
| Scroll animations | ScrollReveal via CDN | `import('scrollreveal')` dynamic import |
| Static assets | `assets/` folder | `public/assets/` folder |
| Image paths | `assets/img/...` | `/assets/img/...` |

> All animations, styling, layout, and responsiveness are **identical** to the original.
