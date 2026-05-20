import Header from '../components/Header'
import './StaticPage.css'

const benefits = [
  { title: 'Unique Stays', desc: 'From cozy cabins to luxury villas, find a home that fits your style perfectly.' },
  { title: 'Best Price', desc: 'No hidden fees. Compare prices and book with confidence every time.' },
  { title: 'Secure Booking', desc: 'Your payment and personal data are protected with industry-leading encryption.' },
  { title: 'Global Reach', desc: 'Explore over 100,000 listings across more than 190 countries worldwide.' },
  { title: 'Verified Reviews', desc: 'Read honest reviews from real guests before making your decision.' },
  { title: '24/7 Support', desc: 'Our support team is available around the clock to help you at every step.' },
]

const BenefitsPage = () => {
  return (
    <>
      <Header />
      <div className="static-page">
        <h1>Why Choose Airbnb</h1>
        <p className="subtitle">Millions of guests trust us to find their perfect stay. Here's why.</p>
        <hr />
        <div className="cards-grid">
          {benefits.map((b) => (
            <div className="card" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BenefitsPage
