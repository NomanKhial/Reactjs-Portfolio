import { assets } from "../../assets/assets";
import "./Header.css";
function Header() {
  return (
    <div className="header" id="header">
      {/* intro image and name */}
      <div className="header-container">
        {/* top section */}
        <div className="top-section">
          <img src={assets.profile} alt="my photo" fetchPriority="high"  />
          <p>
            Hi, I'm Noman Khial!{" "}
            <img src={assets.hi} alt="hello"  />
          </p>
        </div>
        {/* bottom section */}
        <div className="bottom-section">
          <h2>Rect Js developer based in pakistan</h2>
          <p>
            I am React Js Developer from kpk, pakistan with over 3 years of
            experience. I am working as self employed I am React Js Developer
          </p>
          <div className="btn-group">
            <a href="https://pk.linkedin.com/in/noman-khial-2b804035a" style={{backgroundColor: 'black', border: '2px solid white'}} target="_blank" rel="noreferrer" className="button">
              Connect with me{" "}
              <img src={assets.arrow} style={{verticalAlign: 'middle'}} alt="arrow" loading="lazy" />{" "}
            </a>

            <a  href={assets.resume} download className="button">
              my resume
              <img src={assets.download} alt="download resume" loading="lazy" />
            </a>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
