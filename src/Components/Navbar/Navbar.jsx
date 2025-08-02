import { Link, NavLink } from "react-router";
import "./Navbar.css";
import {  assets } from "../../assets/assets.js";
function Navbar() {
  return (
    <header>
        <Link to='/'><img className="logo" src={assets.logo} alt="portfolio logo" loading="lazy"/></Link>

        {/* centered section */}
        <nav>
            <ul className="centered-menu">
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>About Me</NavLink></li>
                <li><NavLink>Services</NavLink></li>
                <li><NavLink>My Work</NavLink></li>
                <li><NavLink>Testimonials</NavLink></li>
            </ul>
        </nav>


{/* right side of menu */}
<div className="nav-right">
    <img src={assets.theme} alt="switch theme" loading="lazy"/>
    <div className="nav-btn">
        <p>Connect</p>
        <img className="connect" src={assets.direction} alt="contact me" loading="lazy"/>
    </div>
</div>
    </header>
  )
}

export default Navbar