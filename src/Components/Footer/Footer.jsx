import { Link } from "react-router"
import {assets} from "../../assets/assets"
import "./Footer.css"
function Footer() {
  return (
    <footer>
        <div className="brnading">
            <img src={assets.logo}/>
            <p><img src={assets.mail_icon} alt='email icon'/>nomankhialb@gmail.com</p>
        </div>
            <hr/>
        <div className="ft-bottom">
            <p>@ {new Date().getFullYear()} Noman Khial, All rights reserved. </p>
            <ul>
                <li><Link to='terms-of-service'>Terms of Services</Link></li>
               <li> <Link to='/privacy'>Privacy Policy</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer