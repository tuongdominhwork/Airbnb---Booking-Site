import Header from '../components/Header'
import './HomePage.css'
import Listing from '../components/Listing'

const HomePage = () => {
  return (
    <>
        <Header />
        <div id="content">
            <div className="title">
                <h1 id="big-title">Browse anything.</h1>
            </div>
            <div className="container">
                <Listing />
            </div>
        </div>
    </>
  )
}

export default HomePage