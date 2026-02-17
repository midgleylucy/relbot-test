# Relbot Test App

This is a test application created for testing the relbot tool. It's a simple React application built with Vite.

## Purpose

This app is designed to test both:
- **User-facing changes**: Text updates, UI modifications, styling changes
- **Non-user-facing changes**: Package updates, dependency upgrades, build configuration changes

## Getting Started

```bash
npm install
npm run dev
```

## Testing Scenarios

### User-Facing Changes
- Modify text in `src/App.jsx` (headings, descriptions, button labels)
- Update styles in `src/App.css`
- Change content in `index.html`

### Non-User-Facing Changes
- Update dependencies in `package.json` (e.g., `date-fns`, `lodash`, `react`, `vite`)
- Modify build configuration in `vite.config.js`
- Update ESLint rules in `eslint.config.js`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
