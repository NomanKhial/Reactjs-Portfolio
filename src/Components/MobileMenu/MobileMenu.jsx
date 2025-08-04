import { Link } from "react-router";
import "./MobileMenu.css";
import { useAppContext } from "../../Context/Context";
function MobileMenu() {
  const {menuOpen, setMenuOpen} = useAppContext()
  return (
    <aside  className={`${menuOpen ? 'open' : ''}`}>
        <h2>Explore</h2>
         <ul onClick={(e)=> {
          if(e.target.tagName == 'A') setMenuOpen(false)
         }}>
          <li>
            <Link to="#header">Home</Link>
          </li>
          <li>
            <Link to="#about">About Me</Link>
          </li>
          <li>
            <Link to="#services">Services</Link>
          </li>
          <li>
            <Link to="#work">My Work</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
    </aside>
  )
}

export default MobileMenu