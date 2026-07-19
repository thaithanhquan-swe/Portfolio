# Thái Thanh Quân — Developer Portfolio

A modern, responsive developer portfolio built to showcase my projects, technical skills, experience, and contact information. The site combines a clean dark interface with scroll-triggered motion, an interactive 3D lanyard, and a WebGL background.

## Features

- Fully responsive, mobile-first layout
- Accessible mobile navigation with active-section tracking
- Scroll-triggered animations powered by Motion
- Interactive 3D lanyard built with React Three Fiber and Rapier
- Animated WebGL plasma background
- Filterable project and technology showcase
- About, résumé, contact, and social sections
- Reduced-motion support for accessibility
- Static rendering with the Next.js App Router

## Tech Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4, custom CSS
- **Animation:** Motion, React Type Animation
- **3D and WebGL:** Three.js, React Three Fiber, Drei, Rapier, OGL
- **Icons:** Lucide React, React Icons
- **Code quality:** ESLint

## Getting Started

### Prerequisites

- Node.js 20.9 or newer
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/thaithanhquan-swe/Portfolio.git
cd Portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create an optimized production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── app/
│   ├── (public)/
│   │   ├── components/       # Hero, About, Portfolio, and Contact
│   │   └── page.tsx          # Home page
│   └── layout.tsx            # Root layout and metadata
├── assets/                   # Images and custom icons
├── components/
│   ├── motion/               # Shared page and scroll animations
│   ├── Lanyard.tsx           # Interactive 3D badge
│   └── Plasma.tsx            # WebGL background effect
├── data/                     # Projects, technologies, and social links
├── layouts/                  # Navbar and background layout components
├── styles/                   # Global and container styles
└── types/                    # Shared TypeScript types

public/
├── assets/
│   ├── card.glb              # Lanyard 3D model
│   └── lanyard.png           # Lanyard texture
└── ThaiThanhQuan_Fullstack_Intern.pdf
```

## Customization

The portfolio content is separated from the UI so it can be updated easily:

- Edit projects and technologies in `src/data/portfolio.data.ts`.
- Edit social profiles in `src/data/contact.data.ts`.
- Replace portfolio images in `src/assets/images/store/` and update `src/assets/images/index.ts`.
- Replace the résumé at `public/ThaiThanhQuan_Fullstack_Intern.pdf`.
- Update site metadata in `src/app/layout.tsx`.

The 3D lanyard requires both `public/assets/card.glb` and `public/assets/lanyard.png`. Removing or renaming either file will cause an asset-loading error at runtime.

## Typography

The design uses Monument Extended when it is available locally, with Arial-based fallbacks. For consistent production rendering, add licensed Monument Extended webfont files and load them with `next/font/local`.

## Production

Create and test a production build locally:

```bash
npm run build
npm run start
```

The project can be deployed to any platform that supports Next.js, including Vercel.

## Contact

- GitHub: [thaithanhquan-swe](https://github.com/thaithanhquan-swe)
- LinkedIn: [Thái Thanh Quân](https://www.linkedin.com/in/thaithanhquan-developer/)
- Email: [thaithanhquan.developer@gmail.com](mailto:thaithanhquan.developer@gmail.com)
