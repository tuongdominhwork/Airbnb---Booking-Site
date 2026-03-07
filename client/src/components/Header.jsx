import React from 'react'
import { useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
    const location = useLocation()
    const onLoginPage = location.pathname === '/login'

    return(
        <div className="header">
            <div className="logo">
                <a href="/" id="logo-text">airbnb</a>
            </div>
            <div className="navigation">
                <nav id="header-nav">
                    <li id="header-li"><a href="/benefits">Benefits</a></li>
                    <li id="header-li"><a href="/specifications">Specifications</a></li>
                    <li id="header-li"><a href="/how-to">How-to</a></li>
                    <li id="header-li"><a href="/contact">Contact Us</a></li>
                </nav>
            </div>

            <a href={onLoginPage ? '/register' : '/login'}>
                <button id="login-btn">
                    {onLoginPage ? 'Register' : 'Log in'}
                </button>
            </a>
        </div>
    )
}
