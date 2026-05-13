jest.mock('../database')

const request = require('supertest')
const app = require('../app')
const db = require('../database')

beforeEach(() => {
  db.clearAll()
  db.prepare(
    'INSERT INTO listings (image, alt_text, title, description, price, address) VALUES (?,?,?,?,?,?)'
  ).run('img.jpg', 'alt', 'Test Listing', 'desc', 100, '123 Main St')
})

describe('POST /api/bookings', () => {
  it('creates a booking and returns its id', async () => {
    const listingId = db.prepare('SELECT id FROM listings LIMIT 1').get().id
    const res = await request(app).post('/api/bookings').send({
      user_id: 1,
      listing_id: listingId,
      check_in: '2026-06-01',
      check_out: '2026-06-07',
      guests: 2,
    })
    expect(res.status).toBe(201)
    expect(res.body.id).toBeDefined()

    const row = db.prepare('SELECT * FROM bookings WHERE id = ?').get(res.body.id)
    expect(row.user_id).toBe(1)
    expect(row.guests).toBe(2)
  })
})

describe('GET /api/bookings/user/:userId', () => {
  it('returns bookings with listing details for a user', async () => {
    const listingId = db.prepare('SELECT id FROM listings LIMIT 1').get().id
    db.prepare(
      'INSERT INTO bookings (user_id, listing_id, check_in, check_out, guests) VALUES (?,?,?,?,?)'
    ).run(42, listingId, '2026-07-01', '2026-07-05', 3)

    const res = await request(app).get('/api/bookings/user/42')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0].title).toBe('Test Listing')
    expect(res.body[0].guests).toBe(3)
  })

  it('returns an empty array when user has no bookings', async () => {
    const res = await request(app).get('/api/bookings/user/999')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })
})
