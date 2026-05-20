import Header from '../components/Header'
import './StaticPage.css'

const specs = [
  { title: 'Flexible Dates', desc: 'Book stays from a single night up to 6 months with flexible check-in and check-out times.' },
  { title: 'Guest Capacity', desc: 'Listings available for solo travellers up to groups of 20+ guests.' },
  { title: 'Photo Gallery', desc: 'Every listing features a minimum of 5 high-resolution photos of the property.' },
  { title: 'Exact Location', desc: 'Full address and interactive map provided upon confirmed booking.' },
  { title: 'Pet Friendly', desc: 'Filter listings that welcome your furry companions at no extra cost.' },
  { title: 'Accessibility', desc: 'Search for accessible features including step-free access, grab rails, and wide doorways.' },
  { title: 'Payment Options', desc: 'Pay with credit card, debit card, PayPal, or Apple Pay in your local currency.' },
  { title: 'Cancellation Policy', desc: 'Choose from Flexible, Moderate, or Strict cancellation policies per listing.' },
]

const SpecificationsPage = () => {
  return (
    <>
      <Header />
      <div className="static-page">
        <h1>Platform Specifications</h1>
        <p className="subtitle">Everything you need to know about how our platform works.</p>
        <hr />
        <div className="cards-grid">
          {specs.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SpecificationsPage
