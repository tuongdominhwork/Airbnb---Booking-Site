jest.mock('../database')

const request = require('supertest')
const app = require('../app')
const db = require('../database')

beforeEach(() => {
  db.clearAll()
})

describe('POST /api/auth/register', () => {
  it('registers a new user and returns 201', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Alice',
      email: 'alice@example.com',
      password: 'secret123',
    })
    expect(res.status).toBe(201)
    expect(res.body.message).toMatch(/register/i)
  })

  it('returns 400 when email already exists', async () => {
    const payload = { name: 'Bob', email: 'bob@example.com', password: 'pass' }
    await request(app).post('/api/auth/register').send(payload)
    const res = await request(app).post('/api/auth/register').send(payload)
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/exist/i)
  })
})

describe('POST /api/auth/login', () => {
  beforeEach(async () => {
    await request(app).post('/api/auth/register').send({
      name: 'Carol',
      email: 'carol@example.com',
      password: 'mypassword',
    })
  })

  it('returns a token with user info on valid credentials', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'carol@example.com',
      password: 'mypassword',
    })
    expect(res.status).toBe(200)
    expect(res.body.token).toBeDefined()
    expect(res.body.name).toBe('Carol')
    expect(res.body.email).toBe('carol@example.com')
  })

  it('returns 400 for unknown email', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'nobody@example.com',
      password: 'whatever',
    })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/invalid/i)
  })

  it('returns 400 for wrong password', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'carol@example.com',
      password: 'wrongpassword',
    })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/invalid/i)
  })
})
