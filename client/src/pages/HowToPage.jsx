import Header from '../components/Header'
import './StaticPage.css'

const steps = [
  {
    title: 'Create an Account',
    desc: 'Sign up for free with your email address. It only takes a minute and you\'re ready to explore thousands of listings.',
  },
  {
    title: 'Search for a Stay',
    desc: 'Enter your destination, travel dates, and number of guests. Use filters to narrow down by price, amenities, and property type.',
  },
  {
    title: 'Browse & Compare',
    desc: 'View photo galleries, read verified guest reviews, and check the full list of amenities for each listing before deciding.',
  },
  {
    title: 'Book Your Listing',
    desc: 'Select your dates and click "Reserve". Some listings offer instant booking while others require host approval within 24 hours.',
  },
  {
    title: 'Secure Payment',
    desc: 'Enter your payment details on our encrypted checkout page. You won\'t be charged until the host confirms your booking.',
  },
  {
    title: 'Get Ready & Go',
    desc: 'Receive your booking confirmation and the full property address by email. Pack your bags and enjoy your stay!',
  },
]

const HowToPage = () => {
  return (
    <>
      <Header />
      <div className="static-page">
        <h1>How It Works</h1>
        <p className="subtitle">Book your perfect stay in just a few simple steps.</p>
        <hr />
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={step.title}>
              <div className="step-number">{i + 1}</div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HowToPage
