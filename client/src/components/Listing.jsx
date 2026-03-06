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
        <>
            {listings.map(listing => (
                <Link key={listing.id} className="place" to={`/listing/${listing.id}`}>
                    <img id="place-img" src={listing.image} alt={listing.alt_text} />
                    <h4 id="place-title">{listing.title}</h4>
                    <p id="place-des">{listing.description}</p>
                    <p id="place-price">
                        <span style={{ fontWeight: "bold" }}>${listing.price}</span> per night
                    </p>
                </Link>
            ))}
        </>
    )
}

export default Listing