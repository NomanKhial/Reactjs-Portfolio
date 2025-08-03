import {assets} from "../../assets/assets"

import "./Contact.css"
function Contact() {
  return (
    <div className="contact" id="contact">
        <div className="contact-top-section">
            <p className="c-title">Connect with me</p>
            <h2 className="c-heading">Get in touch</h2>
            <p className="c-desc">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
        </div>
        <div className="form-section">
            <form id="contact">
                <div className="input-g-c">
                    <input type="text" placeholder="enter name" required/>
                    <input type="email" placeholder="enter email" required/>
                </div>
                <textarea placeholder="Enter Message"/>
                <button type="submit" className="submit-btn">Submit now <img src={assets.arrow} alt="arrow"/></button>
            </form>
        </div>
    </div>
  )
}

export default Contact