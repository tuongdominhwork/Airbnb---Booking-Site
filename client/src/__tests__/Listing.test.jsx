import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Listing from '../components/Listing'

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn())
})

afterEach(() => {
  vi.restoreAllMocks()
})

function renderListing() {
  return render(
    <MemoryRouter>
      <Listing />
    </MemoryRouter>
  )
}

describe('Listing', () => {
  it('renders listing cards from the API', async () => {
    const mockListings = [
      { id: 1, title: 'Beach House', description: 'Nice beach', image: 'img.jpg', alt_text: 'beach', price: 120 },
      { id: 2, title: 'Mountain Cabin', description: 'Cozy cabin', image: 'cabin.jpg', alt_text: 'cabin', price: 90 },
    ]
    fetch.mockResolvedValue({
      json: async () => mockListings,
    })

    renderListing()

    await waitFor(() => {
      expect(screen.getByText('Beach House')).toBeInTheDocument()
      expect(screen.getByText('Mountain Cabin')).toBeInTheDocument()
    })
  })

  it('displays price with "per night" label', async () => {
    fetch.mockResolvedValue({
      json: async () => [
        { id: 1, title: 'Studio', description: 'desc', image: 'img.jpg', alt_text: 'alt', price: 75 },
      ],
    })

    renderListing()

    await waitFor(() => {
      expect(screen.getByText('$75')).toBeInTheDocument()
      expect(screen.getByText(/per night/i)).toBeInTheDocument()
    })
  })

  it('renders nothing when the API returns an empty list', async () => {
    fetch.mockResolvedValue({ json: async () => [] })

    const { container } = renderListing()

    await waitFor(() => {
      expect(container.querySelectorAll('.place')).toHaveLength(0)
    })
  })

  it('links each card to the correct listing detail page', async () => {
    fetch.mockResolvedValue({
      json: async () => [
        { id: 5, title: 'Loft', description: 'desc', image: 'img.jpg', alt_text: 'alt', price: 200 },
      ],
    })

    renderListing()

    await waitFor(() => {
      const link = screen.getByRole('link', { name: /loft/i })
      expect(link).toHaveAttribute('href', '/listing/5')
    })
  })
})
