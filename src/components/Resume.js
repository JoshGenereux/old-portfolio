import React from "react";
import resume from '../pictures/Screen Shot 2022-02-08 at 3.11.17 PM.png';
import ScrollIntoView from "react-scroll-into-view";

const Resume = ()=>{

  return (
    <div className='resume-background'>
      <h1 className='resume-header'>Resume</h1>
      <div className='resume-container'>
        <img className='resume' src={resume}/>
        <h1 className='resume-words'>In Progress</h1>
      </div>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn'>Home</button>
      </ScrollIntoView>
    </div>
  )
}

export default Resume;