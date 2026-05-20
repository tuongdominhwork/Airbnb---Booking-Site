import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'

function renderHeader(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Header />
    </MemoryRouter>
  )
}

afterEach(() => {
  localStorage.clear()
})

describe('Header', () => {
  it('shows a Log in button when no token is stored', () => {
    renderHeader()
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument()
  })

  it('shows Register button when already on the login page', () => {
    renderHeader('/login')
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('shows the user name button when a token is stored', () => {
    localStorage.setItem('token', 'fake-token')
    localStorage.setItem('name', 'Alice')
    renderHeader()
    expect(screen.getByRole('button', { name: /alice/i })).toBeInTheDocument()
  })

  it('renders the airbnb logo link', () => {
    renderHeader()
    expect(screen.getByText('airbnb')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderHeader()
    expect(screen.getByText('Benefits')).toBeInTheDocument()
    expect(screen.getByText('Specifications')).toBeInTheDocument()
    expect(screen.getByText('How-to')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
