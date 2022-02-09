import React from "react";
import fitnessPic from '../pictures/Screen Shot 2022-02-09 at 10.34.14 AM.png';

const ProjectCard = ()=>{
  const projects = {
    name: 'Live-Fitness',
    picture: 'fitnessPic',
    video: 'https://drive.google.com/file/d/1FxZ4HDPbh022ei1QGL3dGuNky2feRwAo/preview',
    description: 'A workout tracking app that you can keep track of all of your sets, reps and weight used for each of your exercises added.',
    tech: ['Javascript', 'Node.js', 'HTML', 'CSS',' Sequelize','Express'],
    link: 'https://github.com/JoshGenereux/live-fitness'
  };

  return (
    <div className='card'>
      <div className='card-pic-div'>
        <iframe className='card-vid' src={projects.video}/>
      </div>
      <section className='card-info'>
        <h1 className='card-info-h1'>{projects.name}</h1>
        <p className='card-desc'>{projects.description}</p>
        <h2 className='tech-stack'>Tech Stack:</h2>
        <ul className='card-tech'>
          { projects.tech.map(item => <li className='tech'>{item}</li>) }
        </ul>
      </section>
    </div>
  )
}

export default ProjectCard;