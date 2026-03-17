import React, { useState } from 'react'
import Header from '../components/Header'
import './ProfilePage.css'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const name = localStorage.getItem('name')
  const email = localStorage.getItem('email')

  const [bookings, setBookings] = React.useState([])

  React.useEffect(() => {
    if (activeTab === 'bookings') {
      const userId = localStorage.getItem('userId')
      fetch(`http://localhost:3001/api/bookings/user/${userId}`)
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
            <div>
                {bookings.map(b => (
                    <div key={b.id}>
                        <p>Check in: {b.check_in}</p>
                        <p>Check out: {b.check_out}</p>
                        <p>Guests: {b.guests}</p>
                    </div>
                ))}
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
