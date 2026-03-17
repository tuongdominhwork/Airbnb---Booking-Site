const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require('../database')

const SECRET = 'your-secret-key'

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    const existing = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (existing) {
        return res.status(400).json({ error: 'Email already exist'})
    }

    const hashed = await bcrypt.hash(password, 10)

    db.prepare('INSERT INTO users (name, email, password) VALUES (?,?,?)').run(name, email, hashed)

    res.status(201).json({ message: 'Register sucessfully'})
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
    if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(400).json({ error: 'Invalid email or password' })
    }

    const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '7d' })
    res.json({ token, name: user.name, email: user.email, id: user.id })
})

module.exports = router