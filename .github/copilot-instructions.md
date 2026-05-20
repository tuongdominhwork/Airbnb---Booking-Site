# Copilot Instructions

## Architecture

Full-stack Airbnb-clone with two separate npm workspaces:

- **`client/`** — React 19 + Vite (ES modules, port 5173)
- **`server/`** — Express 5 + better-sqlite3 (CommonJS, port 3001)

The client makes direct `fetch()` calls to `http://localhost:3001/api/...` (hardcoded — no proxy configured in Vite).

## Dev Commands

Run each from their respective directories:

```bash
# Frontend
cd client && npm run dev      # Vite dev server
cd client && npm run build    # Production build
cd client && npm run lint     # ESLint

# Backend
cd server && npm run dev      # node --watch index.js (auto-restarts on changes)
```

No test framework is configured. Seed the database with `node seed.js` from `server/`.

## Key Conventions

### Frontend
- Each component/page has a **co-located CSS file** (e.g., `Header.jsx` + `Header.css`). Always create/update the matching `.css` file alongside any component.
- File structure: `src/components/` for reusable UI, `src/pages/` for route-level components.
- Navigation links in `Header.jsx` use plain `<a href>` tags (not React Router `<Link>`), which causes full page reloads — this is the existing pattern.
- Authentication state is stored in `localStorage` as `token` and `name`. The `PrivateRoute` wrapper in `App.jsx` checks for the token before rendering protected routes.

### Backend
- Uses **CommonJS** (`require`/`module.exports`) throughout — do not use ES module syntax (`import`/`export`) in server files.
- Database access is **synchronous** via `better-sqlite3`. Use `.prepare().all()` for multi-row queries and `.prepare().get()` for single-row queries.
- Schema and migrations live in `server/database.js`. Add new columns via try/catch `ALTER TABLE` blocks (the established migration pattern).
- The JWT secret is hardcoded as `'your-secret-key'` in both `server/routes/auth.js` and `server/middleware/auth.js` — keep them in sync if changed.
- `requireAuth` middleware exists at `server/middleware/auth.js` but is not applied to listings routes — apply it explicitly when adding protected endpoints.

## API Routes

| Method | Path | Auth Required |
|--------|------|---------------|
| GET | `/api/listings` | No |
| GET | `/api/listings/:id` | No |
| POST | `/api/listings` | No |
| DELETE | `/api/listings/:id` | No |
| POST | `/api/auth/register` | No |
| POST | `/api/auth/login` | No |

## Database Schema

SQLite file at `server/listing.db`, three tables:
- `listings` — `id, image, alt_text, title, description, full_description, address, price`
- `listing_images` — `id, listing_id, image, alt_text` (FK to listings)
- `users` — `id, name, email, password` (bcrypt-hashed)
