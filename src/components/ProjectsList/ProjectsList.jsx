import "./ProjectsList.css";
import LikeFilled from "../../assets/like-filled.svg"
import Like from "../../assets/like.svg"
import { getApiData } from "../../services/ApiServices";
import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";

export default function ProjectsList() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fechData = async () => {
      try {
        const projectsResponse = await getApiData('projects')
        setProjects(projectsResponse)
      } catch {
        setProjects([])
      }
    }

    fechData();
  }, [])


  function changeLike(){

  }
  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="projects-grid">
        {projects ?
         projects.map((project) => (
            <div key={project.id} className="project-card d-flex jc-center al-center fd-column">
              <div className="thumb tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                {/* <Button onClick={changeLike} > */}
                  <img src={LikeFilled} height="20px"/>
                {/* </Button> */}
            </div>
          ))
          :
          null
        }
      </div>
    </div>
  );
}
