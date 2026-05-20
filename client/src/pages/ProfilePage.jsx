import React, { useState } from 'react'
import Header from '../components/Header'
import './ProfilePage.css'
import API_URL from '../api'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const name = localStorage.getItem('name')
  const email = localStorage.getItem('email')

  const [bookings, setBookings] = React.useState([])
  const [selectedBooking, setSelectedBooking] = React.useState(null)

  React.useEffect(() => {
    if (activeTab === 'bookings') {
      const userId = localStorage.getItem('userId')
      fetch(`${API_URL}/api/bookings/user/${userId}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    }
  }, [activeTab])

  function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('userId')
        window.location.href = '/'
    }

  return (
    <>
        <Header />
        <div className='profile-container'>
          <div className='profile-tabs'>
            <button
              className={`profile-btn ${activeTab === 'profile' ? 'profile-btn--active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              My profile
            </button>
            <button
              className={`profile-btn ${activeTab === 'bookings' ? 'profile-btn--active' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              My bookings
            </button>
            <button
              className={`profile-btn ${activeTab === 'accommodations' ? 'profile-btn--active' : ''}`}
              onClick={() => setActiveTab('accommodations')}
            >
              My accommodations
            </button>
          </div>

          {activeTab === 'profile' && <div id='logout-section'>
            <p>Logged in as {name} ( {email} )</p>
            <button id='logout-btn' onClick={handleLogout}>Log out</button>
          </div>}

          {activeTab === 'bookings' && (
            <div className='bookings-section'>
              {bookings.length === 0 ? (
                <p className='bookings-empty'>No bookings yet.</p>
              ) : (
                <div className='bookings-grid'>
                  {bookings.map((b, i) => {
                    const nights = Math.round((new Date(b.check_out) - new Date(b.check_in)) / 86400000) || 0
                    const total = b.price ? (nights * b.price).toLocaleString() : '—'
                    const fmt = d => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                    return (
                      <div
                        key={b.id}
                        className='booking-card'
                        style={{ animationDelay: `${i * 80}ms` }}
                        onClick={() => setSelectedBooking(b)}
                      >
                        <div className='booking-card__img-wrap'>
                          <img className='booking-card__img' src={b.image} alt={b.title} />
                          <span className='booking-card__badge'>Stay</span>
                        </div>
                        <div className='booking-card__body'>
                          <h4 className='booking-card__title'>{b.title}</h4>
                          <p className='booking-card__address'>{b.address}</p>
                          <div className='booking-card__dates'>
                            <span>{fmt(b.check_in)}</span>
                            <span className='booking-card__arrow'>→</span>
                            <span>{fmt(b.check_out)}</span>
                          </div>
                          <div className='booking-card__meta'>
                            <span>{nights} night{nights !== 1 ? 's' : ''}</span>
                            <span className='booking-card__dot'>·</span>
                            <span>{b.guests} guest{b.guests !== 1 ? 's' : ''}</span>
                          </div>
                          <p className='booking-card__total'>${total} total</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {selectedBooking && (() => {
                const b = selectedBooking
                const nights = Math.round((new Date(b.check_out) - new Date(b.check_in)) / 86400000)
                const fmt = d => new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                return (
                  <div className='booking-modal-overlay' onClick={() => setSelectedBooking(null)}>
                    <div className='booking-modal' onClick={e => e.stopPropagation()}>
                      <button className='booking-modal__close' onClick={() => setSelectedBooking(null)}>✕</button>
                      <img className='booking-modal__img' src={b.image} alt={b.title} />
                      <div className='booking-modal__content'>
                        <span className='booking-modal__badge'>Stay</span>
                        <h2 className='booking-modal__title'>{b.title}</h2>
                        <p className='booking-modal__address'>{b.address}</p>
                        <hr className='booking-modal__divider' />
                        <div className='booking-modal__row'>
                          <div className='booking-modal__field'>
                            <span className='booking-modal__label'>Check-in</span>
                            <span className='booking-modal__value'>{fmt(b.check_in)}</span>
                          </div>
                          <div className='booking-modal__field'>
                            <span className='booking-modal__label'>Check-out</span>
                            <span className='booking-modal__value'>{fmt(b.check_out)}</span>
                          </div>
                          <div className='booking-modal__field'>
                            <span className='booking-modal__label'>Guests</span>
                            <span className='booking-modal__value'>{b.guests} guest{b.guests !== 1 ? 's' : ''}</span>
                          </div>
                        </div>
                        <hr className='booking-modal__divider' />
                        <div className='booking-modal__price-breakdown'>
                          <div className='booking-modal__price-row'>
                            <span>${b.price ?? '—'} × {nights} night{nights !== 1 ? 's' : ''}</span>
                            <span>${b.price ? (b.price * nights).toLocaleString() : '—'}</span>
                          </div>
                          <div className='booking-modal__price-row booking-modal__price-row--total'>
                            <span>Total</span>
                            <span>${b.price ? (b.price * nights).toLocaleString() : '—'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {activeTab === 'accommodations' && <div>
            <button id='add-accom-btn'>+ Add new place</button>
          </div>}
        </div>
       
    </>
  )
}

export default ProfilePage
