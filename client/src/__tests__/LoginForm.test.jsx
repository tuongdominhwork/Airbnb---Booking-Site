import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../components/LoginForm'

beforeEach(() => {
  localStorage.clear()
  vi.stubGlobal('fetch', vi.fn())
})

afterEach(() => {
  vi.restoreAllMocks()
})

function renderForm() {
  return render(<LoginForm />)
}

describe('LoginForm', () => {
  it('renders email, password inputs and a login button', () => {
    renderForm()
    expect(screen.getByPlaceholderText(/your@email\.com/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument()
  })

  it('shows an error message when the server returns an error', async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Invalid email or password' }),
    })

    renderForm()
    await userEvent.type(screen.getByPlaceholderText(/your@email\.com/i), 'bad@example.com')
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'wrongpass')
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument()
    })
  })

  it('stores token and user info in localStorage on successful login', async () => {
    const mockData = { token: 'abc123', name: 'Alice', email: 'alice@example.com', id: 1 }
    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockData,
    })

    const originalHref = window.location.href
    delete window.location
    window.location = { href: originalHref }

    renderForm()
    await userEvent.type(screen.getByPlaceholderText(/your@email\.com/i), 'alice@example.com')
    await userEvent.type(screen.getByPlaceholderText(/password/i), 'secret')
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    await waitFor(() => {
      expect(localStorage.getItem('token')).toBe('abc123')
      expect(localStorage.getItem('name')).toBe('Alice')
    })
  })
})
