import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <p className="not-found-code">404</p>
        <h1>Page not found</h1>
        <p className="not-found-copy">
          The page or listing you requested does not exist.
        </p>
        <Link className="not-found-link" to="/">
          Return home
        </Link>
      </main>
    </>
  )
}

export default NotFoundPage
