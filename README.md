# Kubaro Transfer Pricing Advisory

AI-powered transfer pricing consulting for Canadian and cross-border businesses.

## Tech Stack

- **Framework**: [Astro](https://astro.build) with React islands
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build
```

## Deployment

Pushes to `main` automatically deploy via GitHub Actions to GitHub Pages.

## Project Structure

```
src/
  pages/          # Route pages (.astro)
  layouts/        # Page layouts
  components/     # Reusable UI components
  content/blog/   # Blog posts (MDX)
  tools/          # Interactive React components
  styles/         # Global CSS
public/           # Static assets
.github/workflows # CI/CD pipeline
```

## License

Copyright Kubaro Transfer Pricing Advisory. All rights reserved.
