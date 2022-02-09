import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollIntoView from "react-scroll-into-view";

const Projects = ()=>{



  return (
    <div className='projects-container'>
      <h1 className='projects-header'>Projects</h1>
      <div className='project'>
        <button className='left-button'>left</button>
        <ProjectCard />
        <button className='right-button'>right</button>
      </div>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn'>Home</button>
      </ScrollIntoView>
    </div>
  )
}

export default Projects;