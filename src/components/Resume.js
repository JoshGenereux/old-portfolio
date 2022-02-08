import React from "react";
import resume from '../pictures/Screen Shot 2022-02-08 at 3.11.17 PM.png';

const Resume = ()=>{

  return (
    <div className='resume-background'>
      <div className='resume-container'>
        <img className='resume' src={resume}/>
      </div>
    </div>
  )
}

export default Resume;