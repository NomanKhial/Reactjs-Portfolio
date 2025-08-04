import { Link, NavLink, useLocation } from "react-router";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { useEffect} from "react";
import { useAppContext } from "../../Context/Context.jsx";
import { FiMenu, FiX } from "react-icons/fi";
import { AiFillSun, AiOutlineMoon } from "react-icons/ai";

function Navbar() {
  const {theme, setTheme, menuOpen, setMenuOpen} = useAppContext()

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header>
      <Link to="/" >
        <img
          className="logo"
          src={assets.logo}
          alt="portfolio logo"
          loading="lazy"
        />
      </Link>

      {/* centered section */}
      <nav>
        <ul className="centered-menu">
          <li>
            <NavLink to="#header">Home</NavLink>
          </li>
          <li>
            <NavLink to="#about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="#services">Services</NavLink>
          </li>
          <li>
            <NavLink to="#work">My Work</NavLink>
          </li>
          <li>
            <NavLink to="#contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* right side of menu */}
      <div className="nav-right">
      <button className="switch-theme-btn"  onClick={()=> setTheme(prev => prev == 'light' ? 'dark' : 'light')}>
        {theme == 'light' ? <AiOutlineMoon  size={30}  /> : <AiFillSun  size={30} color={theme == 'dark' ? 'white' : ''} />}
      </button>        
         <button className="toggle-btn" onClick={() => setMenuOpen(prev => !prev)}>
        {menuOpen ? <FiX  size={30} color={theme === 'dark' ? "white" : ""} /> : <FiMenu  size={30} color={theme === 'dark' ? "white" : ""} />}
      </button>

        <div className="nav-btn">
          <p>Connect</p>
          <img
            className="connect"
            src={assets.direction}
            alt="contact me"
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
