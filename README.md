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

## GitHub Actions Workflow

This repository includes a GitHub Actions workflow (`.github/workflows/relbot-pr-merge.yml`) that automatically:
- Runs when PRs are merged
- Generates release notes using relbot
- Creates Notion draft pages for user-facing changes
- Creates review issues when drafts are created

The workflow uses the relbot tool from the `moneyforward/relbot` repository and requires the following secrets to be configured:
- `ANTHROPIC_API_KEY` - For AI-powered release note generation
- `NOTION_API_KEY` - For creating Notion draft pages
- `NOTION_RELEASE_NOTES_DATABASE_ID` - Notion database ID for release notes
- `ASANA_API_KEY` - (Optional) For sprint extraction
- Various Notion property configuration secrets

You can also manually trigger the workflow via `workflow_dispatch` with an optional PR number.
