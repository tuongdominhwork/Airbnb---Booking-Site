const express = require('express')
const cors = require('cors')
const db = require('./database')

const app = express()

app.use(cors())
app.use(express.json())

const listingsRouter = require('./routes/listings')
app.use('/api/listings', listingsRouter)

const authRouter = require('./routes/auth')
app.use('/api/auth', authRouter)

const bookingRouter = require('./routes/booking')
app.use('/api', bookingRouter)

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});