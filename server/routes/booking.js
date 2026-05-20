const express = require('express')
const router = express.Router()
const db = require('../database')

router.post('/bookings', (req,res) => {
    const { user_id, listing_id, check_in, check_out, guests } = req.body
    const result = db.prepare(
        `INSERT INTO bookings (user_id, listing_id, check_in, check_out, guests) VALUES (?,?,?,?,?)`
    ).run(user_id, listing_id, check_in, check_out, guests)
    res.status(201).json({ id: result.lastInsertRowid })
})

router.get('/bookings/user/:userId', (req, res) => {
    const bookings = db.prepare(`
        SELECT b.*, l.title, l.image, l.address, l.price
        FROM bookings b
        JOIN listings l ON b.listing_id = l.id
        WHERE b.user_id = ?
    `).all(req.params.userId)
    res.json(bookings)
})

module.exports = router