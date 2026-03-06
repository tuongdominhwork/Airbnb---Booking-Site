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

        <div className="location-info">
            <p className="location-description">{listing.description}</p>
            <p className="location-price"><strong>${listing.price}</strong> per night</p>
        </div>
    </div>
    </>
  )
}

export default Location