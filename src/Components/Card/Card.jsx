
import { assets } from "../../assets/assets"
import "./Card.css"
function Card({icon, heading, description, readMore}) {
  return (
       <div className="card">
      <img src={icon} alt={heading} loading="lazy" />
      <div className="card-bottom">
        <h2>{heading}</h2>
        <p>{description}</p>
        <p>{readMore} <img className="arrow" src={assets.arrow} alt="arrow" loading="lazy"/></p>
      </div>
    </div>
  )
}

export default Card