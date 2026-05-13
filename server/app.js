const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const listingsRouter = require('./routes/listings')
app.use('/api/listings', listingsRouter)

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)

const bookingRouter = require('./routes/booking')
app.use('/api', bookingRouter)

module.exports = app
