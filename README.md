# Krishnendhu N — Immersive 3D Digital Marketing Portfolio

An original, agency-quality 3D digital marketing portfolio website for **Krishnendhu N** (Digital Marketer & Creative Strategist).

## Features

- **Editorial 3D Design**: Saffron orange, deep charcoal, and warm off-white color system with Swiss-inspired typography (`Space Grotesk`, `Inter`, `Playfair Display`).
- **Interactive 3D Hero Object**: Powered by Three.js & React Three Fiber featuring a glossy saffron orb, chrome ribbon ring, and floating micro-particles reacting to cursor & scroll progress.
- **4 Fully Routed Primary Pages**:
  - `HOME` (`/`): Immersive hero, pinned horizontal storytelling sequence (*CREATIVITY MEETS STRATEGY.*), featured project cards, bold CTA.
  - `ABOUT` (`/about`): Editorial biography incorporating Krishnendhu's photo (`profile.jpg`), 3-phase methodology (Understand, Create, Optimize), 1-year timeline, skill matrix, and brand philosophy.
  - `WORK` (`/work`): Filterable project gallery (All, Social Media, Content, Branding, Campaigns), interactive 3D perspective tilt cards, case study modal with 10 structured sections, client feedback quote slider.
  - `CONTACT` (`/contact`): High-contrast layout, editable social links, interactive inquiry form with budget selectors, input validation, and `mailto:` fallback.
- **Custom Interaction Architecture**: Contextual custom cursor, pinned horizontal scroll progress, noise overlay texture, reduced-motion accessibility support, fully mobile responsive.

---

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The website will run locally at `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## Where to Customize Content

All text, links, projects, and testimonials are centralized so you don't have to search through components:

1. **Personal Information & Links**: Edit `src/data/siteConfig.ts`
   - Name, role, logo text, tagline, bio paragraphs.
   - Social URLs (`LinkedIn`, `Instagram`, `Behance`, `Email`).
   - Skills list and marketing philosophy.

2. **Project Case Studies**: Edit `src/data/projects.ts`
   - Modify title, category, year, thumbnails, and 10 case study detail fields.
   - Update `resultsPlaceholder` with verified client results.

3. **Client Testimonials**: Edit `src/data/testimonials.ts`
   - Replace sample testimonial quotes, author names, roles, and companies.

4. **Profile Photo**: Replace `profile.jpg` in the root folder with a new portrait image.

---

## Technical Stack

- **Framework**: React 18 + TypeScript + Vite
- **3D Engine**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **Animation**: Framer Motion + GSAP
- **Styling**: Tailwind CSS + Custom Design System
- **Icons**: Lucide React
