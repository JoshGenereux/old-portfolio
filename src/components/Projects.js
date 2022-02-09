import React, {useEffect, useState} from "react";
import ProjectCard from "./ProjectCard";
import ScrollIntoView from "react-scroll-into-view";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faHouse} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const Projects = ()=>{
  const [projects, setProjects] = useState(null);
  const [id, setId] = useState(0);

  useEffect(()=>{
    fetch('http://localhost:8000/projects')
      .then(res => {
       return res.json();
      })
      .then((data)=>{
        setProjects(data)
      })
  },[])

  return (
    <div className='projects-container'>
      <h1 className='projects-header'>Projects</h1>
      <div className='project'>
        <button className='left-button'><FontAwesomeIcon icon={faArrowLeft} /></button>
        {projects && <ProjectCard projects={projects} id={id}/>}
        <button className='right-button'><FontAwesomeIcon icon={faArrowRight} /></button>
      </div>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn'><FontAwesomeIcon icon={faHouse} /></button>
      </ScrollIntoView>
    </div>
  )
}

export default Projects;