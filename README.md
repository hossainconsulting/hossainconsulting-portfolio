# Hemayet — Portfolio

An in-progress portfolio website for self-directed Salesforce, AI agent
development and engineering projects.

## Current status

The application foundation is implemented:

- Shared navigation and site metadata.
- Home, Projects, Skills and About routes.
- Shared TypeScript types and site constants.
- Development rules in AGENTS.md and .cursorrules.

The homepage still contains the Next.js starter content. Projects, Skills
and About currently contain placeholder text. Project case studies and
the finished visual design have not been implemented.

This repository is separate from the existing `hossainconsulting/portfolio`
website. Replacing that site or deploying this application is not part of
the completed foundation.

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- ESLint

Use package.json and package-lock.json as the source of truth for dependency
versions. The foundation was verified locally with Node.js 24 and npm 11.

## Local development

From the repository root:

```bash
npm ci
npm run dev
```

Open http://localhost:3000 in your browser.

## Verification

```bash
npm run lint
npm run build
```

Both checks passed for the foundation implementation. Home, Projects,
Skills and About were also checked in the browser.

After UI changes, check affected routes, links, keyboard navigation and
mobile layouts. No automated application test suite has been added yet.

## Project structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    projects/page.tsx
    skills/page.tsx
    about/page.tsx
  components/
    nav/Nav.tsx
  types/
    index.ts
  utils/
    constants.ts
public/
```

Application code belongs under src/. Public assets and configuration
files remain at the repository root.

## Development guidance

Read AGENTS.md and .cursorrules before making changes. For framework code,
consult the relevant documentation bundled in node_modules/next/dist/docs/.

Use verified facts and supporting evidence in portfolio content.
Clearly identify fictional companies, simulations and unfinished work.
Keep credentials and private environment files out of Git.

## Planned work

- [ ] Replace the starter homepage with a portfolio introduction.
- [ ] Add project case studies with evidence and limitations.
- [ ] Replace Skills and About placeholders with verified content.
- [ ] Refine the responsive design and accessibility.
- [ ] Document deployment once a deployment approach is implemented.
