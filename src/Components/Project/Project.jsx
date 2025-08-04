import { myProjects } from "../../assets/assets"
import "./Project.css"
function Project() {
  return (
    <div className="project-card">

      {
        myProjects.map(({ image, title, catagory, iconImage, projectUrl }) => (
          <div className="p-card">
          <a href={projectUrl} target="_blank"></a>
            <img className="project-img" src={image} alt={title} loading="lazy" />
            <div className="bottom-section-p">
              <div>
                <h3>{title}</h3>
                <p>{catagory}</p>
              </div>
              <div className="circle-i">
                <img className="open-project" src={iconImage} alt="explore project" />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Project