import { useNavigate } from "react-router";
import { assets } from "../../assets/assets";
import "./About.css";
function About() {
  const navigate = useNavigate()
  return (
    <div className="about-container" id="about">
      <div className="top-about-section">
        <p>Introduction</p>
        <h2>About me</h2>
      </div>
      <div className="about-bottom-section">
        <img
          className="rt-img"
          src={assets.aboutpicture}
          alt="about picture"
          loading="lazy"
        />
        <div className="right-about-side">
          <p>
            I’m a React.js Developer from KPK, Pakistan, with over 10 years of
            experience in building modern web applications. I work as a
            self-employed developer, specializing in creating fast, responsive,
            and scalable frontend solutions using React.js, along with tools
            like Redux, Tailwind CSS, and modern JavaScript libraries.
          </p>
          <div className="boxes-container">
            <div className="box">
              <img src={assets.codeIcon} alt="coding icon" loading="lazy" />
              <h3>Languages</h3>
              <p>HTML, CSS, JavaScript, React Js</p>
            </div>
            <div className="box">
              <img src={assets.edduction} alt="coding icon" loading="lazy" />
              <h3>Education</h3>
              <p>Bs Computer Science 4th Semester <br/> (continue)</p>
            </div>
            <div className="box" onClick={()=> navigate('#work')}>
              <img src={assets.pprojects} alt="coding icon" loading="lazy" />
              <h3>Projects</h3>
              <p>Discover My ReactJs Projects</p>
            </div>
          </div>
          <div className="tools">
            <p>Tools i use</p>
            <div className="tools-container">
              <button>
                <img src={assets.vscode} alt="vscode" loading="lazy" />
              </button>
              <button>
                <img src={assets.firebase} alt="firebase" loading="lazy" />
              </button>
              <button>
                <img src={assets.mongodb} alt="mongodb" loading="lazy" />
              </button>
              <button>
                <img src={assets.figma} alt="figma" loading="lazy" />
              </button>
              <button>
                <img src={assets.git} alt="git" loading="lazy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
