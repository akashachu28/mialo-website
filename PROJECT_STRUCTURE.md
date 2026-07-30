# Mialo Website - Project Structure

## Overview
This is a Next.js 16.2 application with TypeScript, Tailwind CSS, and a modern component-based architecture.

## Folder Structure

```
mialo-website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Home page with Hero & Cards
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   └── contact/
│       └── page.tsx         # Contact page with form
│
├── components/              # Reusable React components
│   ├── Header.tsx           # Sticky navigation header
│   ├── Footer.tsx           # Site footer with links
│   ├── Hero.tsx             # Hero section component
│   ├── Card.tsx             # Reusable card component
│   └── Button.tsx           # Reusable button component
│
└── public/                  # Static assets
```

## Key Features

### Layout (app/layout.tsx)
- Persistent header and footer on all pages
- Geist font integration
- Flex layout ensuring footer stays at bottom

### Header (components/Header.tsx)
- Sticky positioning (stays at top on scroll)
- Navigation links to all pages
- Responsive design

### Pages

1. **Home (app/page.tsx)**
   - Hero section with CTA buttons
   - Feature cards grid (3 columns)
   - CTA section

2. **About (app/about/page.tsx)**
   - Company story section
   - Values cards

3. **Services (app/services/page.tsx)**
   - Service cards grid (2 columns)
   - 6 service offerings

4. **Contact (app/contact/page.tsx)**
   - Contact form (client component)
   - Contact information cards

### Components

- **Hero**: Large header section with gradient background
- **Card**: Reusable card with title, description, and optional icon
- **Button**: Reusable button with primary/secondary variants
- **Footer**: Multi-column footer with links and copyright

## Running the Project

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint
```

## Tech Stack

- **Framework**: Next.js 16.2.12
- **React**: 19.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono

## Notes

- All pages use the App Router pattern
- Components are TypeScript-first
- Tailwind CSS v4 is configured via PostCSS
- The header is sticky and stays visible on scroll
- Layout uses flexbox to ensure footer stays at bottom
