import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Location from './components/Location'
import BenefitsPage from './pages/BenefitsPage'
import SpecificationsPage from './pages/SpecificationsPage'
import HowToPage from './pages/HowToPage'
import ContactPage from './pages/ContactPage'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to="/login" />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/listing/:id" element={<PrivateRoute><Location /></PrivateRoute>} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/specifications" element={<SpecificationsPage />} />
        <Route path="/how-to" element={<HowToPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
