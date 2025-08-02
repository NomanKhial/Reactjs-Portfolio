import { assets } from "../../assets/assets";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="top-about-section">
        <p>Introduction</p>
        <h2>Aboout me</h2>
      </div>
      <div className="about-bottom-section">
        <img className="rt-img" src={assets.aboutpicture} alt="about picture" loading="lazy" />
        <div className="right-about-side">
          <p>
            I am React Js Developer from kpk, pakistan with over 10 year of
            experience. I am working as self employed I am React Js Developer
          </p>
          <div className="boxes-container">
            <div className="box">
                <img src={assets.codeIcon} alt="coding icon" loading="lazy"/>
                <h3>Languages</h3>
                <p>HTML, CSS, JavaScript, React Js</p>
            </div>
            <div className="box">
                <img src={assets.codeIcon} alt="coding icon" loading="lazy"/>
                <h3>Languages</h3>
                <p>HTML, CSS, JavaScript, React Js</p>
            </div>
            <div className="box">
                <img src={assets.codeIcon} alt="coding icon" loading="lazy"/>
                <h3>Languages</h3>
                <p>HTML, CSS, JavaScript, React Js</p>
            </div>
          </div>
          <div className="tools">
            <p>Tools i use</p>
            <div className="tools-container">
                <button><img src={assets.vscode} alt="vscode" loading="lazy"/></button>
                <button><img src={assets.vscode} alt="vscode" loading="lazy"/></button>
                <button><img src={assets.vscode} alt="vscode" loading="lazy"/></button>
                <button><img src={assets.vscode} alt="vscode" loading="lazy"/></button>
                <button><img src={assets.vscode} alt="vscode" loading="lazy"/></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
