const jwt = require('jsonwebtoken')
const requireAuth = require('../middleware/auth')

const SECRET = 'your-secret-key'

function mockRes() {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  return res
}

describe('requireAuth middleware', () => {
  it('calls next() when a valid token is provided', () => {
    const token = jwt.sign({ userId: 1 }, SECRET)
    const req = { headers: { authorization: `Bearer ${token}` } }
    const res = mockRes()
    const next = jest.fn()

    requireAuth(req, res, next)

    expect(next).toHaveBeenCalled()
    expect(req.user).toMatchObject({ userId: 1 })
  })

  it('returns 401 when no token is provided', () => {
    const req = { headers: {} }
    const res = mockRes()
    const next = jest.fn()

    requireAuth(req, res, next)

    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: expect.any(String) }))
    expect(next).not.toHaveBeenCalled()
  })

  it('returns 403 when the token is invalid', () => {
    const req = { headers: { authorization: 'Bearer bad.token.here' } }
    const res = mockRes()
    const next = jest.fn()

    requireAuth(req, res, next)

    expect(res.status).toHaveBeenCalledWith(403)
    expect(next).not.toHaveBeenCalled()
  })

  it('returns 403 when the token is expired', () => {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: -1 })
    const req = { headers: { authorization: `Bearer ${token}` } }
    const res = mockRes()
    const next = jest.fn()

    requireAuth(req, res, next)

    expect(res.status).toHaveBeenCalledWith(403)
    expect(next).not.toHaveBeenCalled()
  })
})
