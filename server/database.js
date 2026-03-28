const Database = require("better-sqlite3")

const db = new Database('data.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS listings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    alt_text TEXT,
    title TEXT,
    description TEXT,
    full_description TEXT,
    address TEXT,
    price REAL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS listing_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    listing_id INTEGER,
    image TEXT,
    alt_text TEXT,
    FOREIGN KEY (listing_id) REFERENCES listings(id)
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    listing_id INTEGER,
    check_in DATE,
    check_out DATE,
    guests INTEGER
  )
`)



module.exports = db;
