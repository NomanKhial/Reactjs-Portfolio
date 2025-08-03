import { assets } from "../../assets/assets";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      {/* intro image and name */}
      <div className="header-container">
        {/* top section */}
        <div className="top-section">
          <img src={assets.profile} alt="my photo" loading="lazy" />
          <p>
            Hi, I'm Noman Khial!{" "}
            <img src={assets.hi} alt="hello" loading="lazy" />
          </p>
        </div>
        {/* bottom section */}
        <div className="bottom-section">
          <h2>Rect Js developer based in pakistan</h2>
          <p>
            I am React Js Developer from kpk, pakistan with over 10 year of
            experience. I am working as self employed I am React Js Developer
          </p>
          <div className="btn-group">
            <button>
              Connect with me{" "}
              <img src={assets.arrow} alt="arrow" loading="lazy" />{" "}
            </button>

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
