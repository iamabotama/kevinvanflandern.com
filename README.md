# Kevin Van Flandern - Professional Portfolio

A modern, responsive portfolio website showcasing 25+ years of technology leadership, 6 U.S. patents, and expertise in Agile at Scale, AI/LLM, and blockchain technologies.

🌐 **Live Site:** [kevinvanflandern.com](https://kevinvanflandern.com)

## About

This portfolio highlights Kevin Van Flandern's extensive career as a Technical Program Manager and technology leader, including:

- **6 U.S. Patents** in software performance and computer hardware
- **25+ years** at Microsoft, startups, and consulting
- **Expertise** in Agile at Scale, AI/LLM integration, and blockchain development
- **Leadership** across organizations from 10 to 40,000 people
- **Advisory roles** at Meta Research and Frogice Inc

## Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Routing:** Wouter
- **Build Tool:** Vite
- **Package Manager:** pnpm
- **Deployment:** Static hosting (IONOS/Netlify/Vercel)

## Design Philosophy

The portfolio features a **Neo-Brutalism meets Tech Minimalism** aesthetic with:

- Electric purple/magenta color scheme reflecting AI/LLM expertise
- Particle stream animations for dynamic visual interest
- Deep slate backgrounds with high-contrast typography
- Professional headshot with gradient glow effects
- Smooth single-page scrolling navigation

## Project Structure

```
kevin-portfolio/
├── client/
│   ├── public/
│   │   └── images/          # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── pages/           # Page components
│   │   │   └── Home.tsx     # Main portfolio page
│   │   ├── App.tsx          # Routes & layout
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles & design tokens
│   └── index.html           # HTML template
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iamabotama/kevinvanflandern.com.git
cd kevinvanflandern.com
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser to `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

The static files will be generated in the `dist/public/` directory, ready for deployment.

## Key Features

### Hero Section
- Professional headshot with animated gradient glow
- Particle stream canvas animation
- Key credentials and expertise badges
- Direct contact CTAs

### Experience Timeline
- Chronological career history
- Detailed role descriptions
- Technology tags for each position
- Hover effects and smooth transitions

### Patents Showcase
- All 6 U.S. patents displayed
- Patent numbers and filing dates
- Interactive card design

### Contact Section
- Direct email link
- LinkedIn profile integration
- Clean, focused design

## Customization

### Colors
Design tokens are defined in `client/src/index.css`. The primary purple theme uses:
- Primary: `#A855F7` (Purple 500)
- Secondary: `#C026D3` (Fuchsia 600)
- Background: Deep slate (`oklch(0.15 0.02 220)`)

### Typography
- **Headlines:** Space Grotesk (via Google Fonts)
- **Body:** Inter (system default)
- **Technical details:** JetBrains Mono

### Animations
Particle stream animation parameters can be adjusted in `Home.tsx` under the `CONFIG` object.

## Deployment

### Static Hosting (IONOS)
1. Build the project: `pnpm build`
2. Upload contents of `dist/public/` to your hosting provider
3. Configure DNS to point to your hosting

### Netlify/Vercel (Recommended)
1. Connect your GitHub repository
2. Set build command: `pnpm build`
3. Set publish directory: `dist/public`
4. Deploy automatically on push

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images and assets
- Minimal JavaScript bundle
- Fast page load times

## License

© 2026 Kevin D. Van Flandern. All rights reserved.

## Contact

**Kevin Van Flandern**
- Email: [KevinVF@hotmail.com](mailto:KevinVF@hotmail.com)
- LinkedIn: [linkedin.com/in/kevin-van-flandern-1949aa4](https://www.linkedin.com/in/kevin-van-flandern-1949aa4/)

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.
