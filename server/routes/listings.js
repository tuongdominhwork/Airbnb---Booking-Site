const express = require('express');
const router = express.Router();
const db = require('../database');

// GET all listings
router.get('/', (req, res) => {
  const listings = db.prepare('SELECT * FROM listings').all();
  res.json(listings);
});

// GET a single listing by ID
router.get('/:id', (req, res) => {
  const listing = db.prepare('SELECT * FROM listings WHERE id = ?').get(req.params.id);
  if (!listing) return res.status(404).json({ error: 'Listing not found' });
  res.json(listing);
});

// POST a new listing
router.post('/', (req, res) => {
  const { image, alt_text, title, description, price } = req.body;
  const result = db.prepare(
    'INSERT INTO listings (image, alt_text, title, description, price) VALUES (?, ?, ?, ?, ?)'
  ).run(image, alt_text, title, description, price);
  res.status(201).json({ id: result.lastInsertRowid });
});

// DELETE a listing
router.delete('/:id', (req, res) => {
  db.prepare('DELETE FROM listings WHERE id = ?').run(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;