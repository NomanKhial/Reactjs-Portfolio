import Card from '../Card/Card'
import {services} from "../../assets/assets"
import "./Services.css"
function Services() {
  return (
  <div className='services'>
    <div className="card-top">
          <p className='top-h'>What i offers</p>
          <h2>My Services</h2>
          <p className='top-desc'>I am frontend developer from Battagram with 10 years of experience in multiple companies like Microsoft, Tesla and Apple. I am frontend developer from Battagram with 10 years of experience</p>
      </div>

     <div className='cards-container'>
         {
            services.map(({icon, heading, description, readMore})=>(<Card icon={icon} heading={heading} description={description} readMore={readMore} />))
        }
     </div>
  </div>
  )
}

export default Services