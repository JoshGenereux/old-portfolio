import React from "react";

const ProjectCard = ({projects, id})=>{

  return (
    <div className='card'>
      <div className='card-pic-div'>
        <img className='card-pic' src={projects[id].picture}/>
      </div>
      <section className='card-info'>
        <h1 className='card-info-h1'>{projects[id].name}</h1>
        <p className='card-desc'>{projects[id].description}</p>
        <h2 className='tech-stack'>Tech Stack:</h2>
        <ul className='card-tech'>
          { projects[id].tech.map((item, i) => <li key={i} className='tech'>{item}</li>) }
        </ul>
        <a href={projects[id].link} target='_blank'>github repo</a>
      </section>
    </div>
  )
}

export default ProjectCard;

