import "./ProjectsList.css";
import LikeFilled from "../../assets/like-filled.svg"
import LikeOutLine from "../../assets/like.svg"
import { getApiData } from "../../services/ApiServices";
import { useState, useEffect, useContext  } from "react";
import { AppContext } from "../Context/AppContext";
import Button from "../Button/Button";

export default function ProjectsList() {

  const [projects, setProjects] = useState([])
  const appContext =  useContext(AppContext)
  const [faveProject, setFaveProject] = useState([])


  const handleSavedProjects = (id) => {
    setFaveProject((prevFavProject) => {
      if(prevFavProject.includes(id)) {
        const filterArray = prevFavProject.filter((projectId) => projectId !== id)
        sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
        return prevFavProject.filter((projectId) => projectId !== id)
      } else {
        sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProject, id]))
        return [...prevFavProject, id]
      }
    })
  }

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


  useEffect(() => {

    const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
    if(savedFavProjects) {
      setFaveProject(savedFavProjects)
    } 
  }, [])

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>
        {appContext.languages[appContext.language].projects.subtitle}
        </p>
      </div>
      <div className="projects-grid">
        {projects ?
         projects.map((project) => (
            <div key={project.id} className="project-card d-flex jc-center al-center fd-column">
              <div className="thumb tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <Button buttonStyle="transparent" onClick={() => handleSavedProjects(project.id)}>
                  <img src={faveProject.includes(project.id) ? LikeFilled : LikeOutLine} height="20px"/>
                </Button>
            </div>
          ))
          :
          null
        }
      </div>
    </div>
  );
}
