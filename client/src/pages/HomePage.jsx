import React from 'react'
import Header from '../components/Header'
import './HomePage.css'
import Listing from '../components/Listing'

const headline = 'Browse anything.'

const HomePage = () => {
  const [typedHeadline, setTypedHeadline] = React.useState('')

  React.useEffect(() => {
    let currentIndex = 0

    const intervalId = window.setInterval(() => {
      currentIndex += 1
      setTypedHeadline(headline.slice(0, currentIndex))

      if (currentIndex === headline.length) {
        window.clearInterval(intervalId)
      }
    }, 50)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <>
        <Header />
        <div id="content">
            <div className="title">
                <h1 id="big-title">{typedHeadline}</h1>
            </div>
            <div className="container">
                <Listing />
            </div>
        </div>
    </>
  )
}

export default HomePage
