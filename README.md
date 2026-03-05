# Airbnb 🏠

> ⚠️ **Work in Progress** — This project is currently under active development.

A full-stack Airbnb-inspired listings app built with React, Node.js, Express, and SQLite.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | SQLite (better-sqlite3) |
| Styling | CSS |
| Routing | React Router |

---

## Project Structure

```
airbnb/
├── client/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   └── public/
├── server/          # Express backend
│   ├── routes/
│   │   └── listings.js
│   ├── database.js
│   ├── index.js
│   └── seed.js
└── README.md
```

---

## Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd airbnb
```

### 2. Start the backend

```bash
cd server
npm install
node seed.js      # seed the database (run once)
node index.js     # start the server on port 3001
```

### 3. Start the frontend

```bash
cd client
npm install
npm run dev       # starts on port 5173
```

---

## Features

- [x] Browse property listings
- [x] SQLite database with seeded listings
- [x] REST API (GET, POST, DELETE)
- [ ] User authentication (login / register)
- [ ] Create & manage your own listings
- [ ] Search and filter listings
- [ ] Listing detail page
- [ ] Image upload

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/listings` | Get all listings |
| GET | `/api/listings/:id` | Get a single listing |
| POST | `/api/listings` | Create a new listing |
| DELETE | `/api/listings/:id` | Delete a listing |

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# Airbnb---Booking-Site
