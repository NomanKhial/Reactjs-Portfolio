import Tools from "../Tools/Tools"
import { socialLinks } from "../Tools/tools"

import "./Contact.css"
function Contact() {
  return (
     <div className="tools-centered" id="contact">
        <h2>Contact</h2>
        <Tools title="Connect with Me" icons={socialLinks} />
     </div>
  )
}

export default Contact