# Celestial Studio Website

The official website for Phenomena Studio by Aratus - AI-Powered Robot Training Platform.

## Features

- ⚡ **Next.js 14 App Router** - Modern React framework with server components
- 🎨 **Tailwind CSS** - Utility-first styling with custom animations
- 🎭 **Interactive Animations** - Mouse-reactive particles, scroll animations, and smooth transitions
- 🔍 **SEO Optimized** - Comprehensive meta tags, Open Graph, and structured data
- 📱 **Responsive Design** - Mobile-first approach with breakpoints
- 🌟 **Glassmorphism UI** - Modern frosted glass effects throughout
- 🎯 **TypeScript** - Type-safe codebase

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Custom CSS animations + Tailwind utilities
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd phenomena-studio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
phenomena-studio/
├── app/
│   ├── about/           # About page
│   ├── api/            # API routes
│   │   └── beta-signup/ # Beta signup endpoint
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── BackgroundEffects.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── ParticleBackground.tsx
│   └── ScrollAnimation.tsx
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    blue: '#3b82f6',
    purple: '#8b5cf6',
    pink: '#ec4899',
    teal: '#10b981',
  },
}
```

### Animations

Custom animations are defined in `tailwind.config.ts` under `animation` and `keyframes`.

### Beta Signup

The beta signup API route is at `/app/api/beta-signup/route.ts`. Integrate with your email service:

- Mailchimp
- SendGrid
- Resend
- Database (Postgres, MongoDB, etc.)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm run start
```

## SEO

The website includes comprehensive SEO optimization:

- Meta tags in `app/layout.tsx`
- Open Graph tags for social sharing
- Twitter Card support
- Robots.txt configuration
- Sitemap (add `/sitemap.xml` route if needed)

## License

Copyright © 2024 Aratus. All rights reserved.

## Support

For questions or support, contact us at [support@aratus.com](mailto:support@aratus.com)
