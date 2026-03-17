import React from 'react'
import { Link } from 'react-router-dom'
import './Listing.css'

const Listing = () => {
    const [listings, setListings] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:3001/api/listings')
            .then(res => res.json())
            .then(data => setListings(data))
    }, [])

    return (
        <div className="listing-grid">
            {listings.map((listing, index) => (
                <Link
                    key={listing.id}
                    className="place"
                    style={{ animationDelay: `${index * 80}ms` }}
                    to={`/listing/${listing.id}`}
                >
                    <div className="place-media">
                        <img className="place-img" src={listing.image} alt={listing.alt_text} />
                        <div className="place-overlay" />
                        <p className="place-eyebrow">Stay</p>
                    </div>
                    <div className="place-copy">
                        <h4 className="place-title">{listing.title}</h4>
                        <p className="place-description">{listing.description}</p>
                        <p className="place-price">
                            <span>${listing.price}</span> per night
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Listing
