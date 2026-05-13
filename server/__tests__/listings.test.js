jest.mock('../database')

const request = require('supertest')
const app = require('../app')
const db = require('../database')

beforeEach(() => {
  db.clearAll()
})

describe('GET /api/listings', () => {
  it('returns an empty array when no listings exist', async () => {
    const res = await request(app).get('/api/listings')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([])
  })

  it('returns all listings', async () => {
    db.prepare(
      'INSERT INTO listings (image, alt_text, title, description, price) VALUES (?,?,?,?,?)'
    ).run('img.jpg', 'A place', 'Beach House', 'Nice beach house', 120)

    const res = await request(app).get('/api/listings')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0].title).toBe('Beach House')
  })
})

describe('GET /api/listings/:id', () => {
  it('returns a listing with its images', async () => {
    const { lastInsertRowid } = db.prepare(
      'INSERT INTO listings (image, alt_text, title, description, price) VALUES (?,?,?,?,?)'
    ).run('img.jpg', 'alt', 'Mountain Cabin', 'Cozy cabin', 90)
    db.prepare(
      'INSERT INTO listing_images (listing_id, image, alt_text) VALUES (?,?,?)'
    ).run(lastInsertRowid, 'extra.jpg', 'Extra view')

    const res = await request(app).get(`/api/listings/${lastInsertRowid}`)
    expect(res.status).toBe(200)
    expect(res.body.title).toBe('Mountain Cabin')
    expect(res.body.images).toHaveLength(1)
  })

  it('returns 404 for a non-existent listing', async () => {
    const res = await request(app).get('/api/listings/9999')
    expect(res.status).toBe(404)
    expect(res.body.error).toMatch(/not found/i)
  })
})

describe('POST /api/listings', () => {
  it('creates a listing and returns its id', async () => {
    const res = await request(app).post('/api/listings').send({
      image: 'img.jpg',
      alt_text: 'A place',
      title: 'City Loft',
      description: 'Modern loft',
      price: 200,
    })
    expect(res.status).toBe(201)
    expect(res.body.id).toBeDefined()

    const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(res.body.id)
    expect(row.title).toBe('City Loft')
  })
})

describe('DELETE /api/listings/:id', () => {
  it('deletes the listing and returns a confirmation', async () => {
    const { lastInsertRowid } = db.prepare(
      'INSERT INTO listings (image, alt_text, title, description, price) VALUES (?,?,?,?,?)'
    ).run('img.jpg', 'alt', 'Delete Me', 'desc', 50)

    const res = await request(app).delete(`/api/listings/${lastInsertRowid}`)
    expect(res.status).toBe(200)
    expect(res.body.message).toMatch(/deleted/i)

    const row = db.prepare('SELECT * FROM listings WHERE id = ?').get(lastInsertRowid)
    expect(row).toBeUndefined()
  })
})
