import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ScrollIntoView from "react-scroll-into-view";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faHouse} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Projects = ()=>{
  const [id, setId] = useState(0);
  const [projects, setProjects] = useState([
    {
      id : 1,
      name: "Live-Fitness",
      picture: '../../pictures/live-fitness-pic.png',
      description: "A workout tracking app that you can keep track of all of your sets, reps and weight used for each of your exercises added.",
      tech: ["Javascript", "Node.js", "HTML", "CSS", "Sequelize","Express"],
      link: "https://github.com/JoshGenereux/live-fitness"
    },
    {
      "id" : 2,
      "name": "React Weather",
      "picture": "../../pictures/react-weather.png",
      "video" : null,
      "description" : "A simple weather app, that uses a weather API, lets users type in any city and shows the current weather.",
      "tech" : ["Javascript", "Node.js", "React", "HTML", "CSS", "Axios", "Express"],
      "link" : "https://github.com/JoshGenereux/react-weather"
    }
  ]);

  const handleRight = ()=>{
    let count = id + 1;
    if(count > projects.length -1) {
      count = 0;
      setId(count);
    }
    setId(count);
  }

  const handleLeft = ()=>{
    let count = id - 1;
    if(count < 0){
      count = projects.length -1;
      setId(count);
    }
    setId(count);
  }


  return (
    <div className='projects-container'>
      <h1 className='projects-header'>Projects</h1>
      <div className='project'>
        <button onClick={handleLeft} className='left-button'><FontAwesomeIcon icon={faArrowLeft} /></button>
        {projects && <ProjectCard projects={projects} id={id}/>}
        <button onClick={handleRight} className='right-button'><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn'><FontAwesomeIcon icon={faHouse} /></button>
      </ScrollIntoView>
    </div>
  )
}

export default Projects;