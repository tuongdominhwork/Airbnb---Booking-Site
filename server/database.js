const Database = require("better-sqlite3")

const db = new Database('listing.db')

db.exec(`
  CREATE TABLE IF NOT EXISTS listings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    alt_text TEXT,
    title TEXT,
    description TEXT,
    price REAL
  )
`);

module.exports = db;