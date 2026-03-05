import './Header.css'

export default function Header() {
    return(
        <div className="header">
            <div className="logo">
                <a href="/" id="logo-text">airbnb</a>
            </div>
            <div className="navigation">
                <nav id="header-nav">
                    <li id="header-li"><a href="#">Benefits</a></li>
                    <li id="header-li"><a href="#">Specifications</a></li>
                    <li id="header-li"><a href="#">How-to</a></li>
                    <li id="header-li"><a href="#">Contact Us</a></li>
                </nav>
            </div>

            <a href='/login'>
                <button id="login-btn">Login</button>
            </a>
        </div>
    )
}
