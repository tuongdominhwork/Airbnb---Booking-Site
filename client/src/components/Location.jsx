import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import './Location.css'
const Location = () => {
    const { id } = useParams()
    const [listing, setListing] = React.useState(null)
    const [selectedImg, setSelectedImg] = React.useState(0)

    React.useEffect(() => {
        fetch(`http://localhost:3001/api/listings/${id}`)
            .then(res => res.json())
            .then(data => {
                setListing(data)
                setSelectedImg(0)
            })
    }, [id])

    if (!listing) return <p>Loading...</p>

  return (
    <>
        <Header />
        <div className="location-page">
        <h1 className="location-title">{listing.title}</h1>
        <div id='location-address'>
            <img src="/public/location_logo.png" alt="location icon" />
            <p>{listing.address}</p>
        </div>
        
        <div className="gallery">
            <img
                className="gallery-main"
                src={listing.images[selectedImg]?.image}
                alt={listing.images[selectedImg]?.alt_text}
            />
            <div className="gallery-thumbnails">
                {listing.images.map((img, i) => (
                    <img
                        key={i}
                        className={`gallery-thumb ${i === selectedImg ? 'active' : ''}`}
                        src={img.image}
                        alt={img.alt_text}
                        onClick={() => setSelectedImg(i)}
                    />
                ))}
            </div>
        </div>
        <div className='location-info-booking-form'>      
            <div className="location-info">
                <h2>Description:</h2>
                <p className="location-description">{listing.full_description}</p>
                <p className="location-price"><strong>${listing.price}</strong> per night</p>
            </div>

            <div className='booking-form'>
                <h2>Price: ${listing.price} / per night</h2>
                <div>
                    <div id='date-form'>
                        <div>
                            <p>Check in: </p>
                            <input id='date-input' type="date" />
                        </div>
                        <div>
                            <p>Check out:</p>
                            <input id='date-input' type="date" />
                        </div>
                    </div>

                    <div id='number-guest-form'>
                        <p>Number of guest:</p>
                        <input id='guest-input' type="number" />
                    </div>
                </div>
                <button id='booking-btn'>Book this place</button>
            </div>
        </div>  
    </div>
    </>
  )
}

export default Location