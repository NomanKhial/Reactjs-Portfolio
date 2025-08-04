import { assets } from "../../assets/assets";
import Project from "../Project/Project";
import "./Work.css";
function Work() {
  return (
    <div className="work-container" id="work">
      <div className="work-top-section">
        <p className="p-text">My portfolio</p>
        <h2>My latest work</h2>
        <p className="desc">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in React Js development
        </p>
      </div>

      <div className="p-parent">
        <Project />
        <button className="see-more">See more <img src={assets.arrow}/> </button>
      </div>
    </div>
  );
}

export default Work;
