import Header from '../components/Header'
import './StaticPage.css'

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="static-page">
        <h1>Contact Us</h1>
        <p className="subtitle">Have a question or need help? We'd love to hear from you.</p>
        <hr />

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Full Name
            <input type="text" placeholder="Jane Smith" />
          </label>

          <label>
            Email Address
            <input type="email" placeholder="jane@example.com" />
          </label>

          <label>
            Topic
            <select>
              <option value="">Select a topic…</option>
              <option>Booking Issue</option>
              <option>Payment & Refunds</option>
              <option>Account Help</option>
              <option>Host Enquiry</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Message
            <textarea placeholder="Tell us how we can help…" />
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <span>support@airbnb-clone.com</span>
          <span>+1 (800) 555-0199</span>
          <span>Monday – Friday, 9 am – 6 pm EST</span>
        </div>
      </div>
    </>
  )
}

export default ContactPage
