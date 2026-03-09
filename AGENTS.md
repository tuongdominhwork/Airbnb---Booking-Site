# Repository Guidelines

## Project Structure & Module Organization
This repository is split into `client/` and `server/`. The frontend lives in `client/src/`, with reusable UI in `client/src/components/`, route-level screens in `client/src/pages/`, and CSS files kept next to the related component or page. Static assets belong in `client/public/` or `client/src/assets/` if added later. The backend lives in `server/`, with Express entry code in `server/index.js`, route handlers in `server/routes/`, auth middleware in `server/middleware/`, SQLite setup in `server/database.js`, and seed data in `server/seed.js`.

## Build, Test, and Development Commands
Install dependencies separately in each app:

- `cd client && npm install`
- `cd server && npm install`

Use these day-to-day commands:

- `cd client && npm run dev` starts the Vite frontend on `http://localhost:5173`.
- `cd client && npm run build` creates the production bundle.
- `cd client && npm run lint` runs ESLint for React files.
- `cd client && npm run preview` serves the built frontend locally.
- `cd server && npm run dev` runs the Express API with `node --watch`.
- `cd server && node seed.js` seeds the SQLite database when schema or sample data changes.

## Coding Style & Naming Conventions
Use ES modules in `client/` and CommonJS in `server/`. Follow the existing style: single quotes, semicolons optional, and component/page filenames in PascalCase such as `HomePage.jsx` or `LoginForm.jsx`. Keep backend modules lowercase by role, for example `routes/auth.js` and `middleware/auth.js`. Prefer 2-space indentation for new code and keep CSS files paired with their component when practical. Run `npm run lint` in `client/` before opening a PR.

## Testing Guidelines
There is no real automated test suite yet. `server/package.json` still contains the default placeholder `npm test`, so do not present backend tests as implemented. For now, verify changes by:

- running both apps locally,
- reseeding with `node seed.js` when backend data changes,
- manually exercising affected routes and pages.

When adding tests, place frontend tests near the feature or under a dedicated `__tests__/` folder, and use filenames ending in `.test.jsx` or `.test.js`.

## Commit & Pull Request Guidelines
Recent commits use short imperative messages such as `Update login register logout` and `Fix path logo`. Keep commits focused and similarly direct. Pull requests should include a brief summary, impacted areas (`client`, `server`, or both), manual test notes, and screenshots for visible UI changes. Link the relevant issue when one exists.
