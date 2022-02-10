import React from "react";
import resume from '../pictures/resume.png';
import ScrollIntoView from "react-scroll-into-view";
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Resume = ()=>{

  return (
    <div className='resume-background'>
      <h1 className='resume-header'>Resume</h1>
      <div className='resume-container'>
        <img className='resume' src={resume}/>
      </div>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn'><FontAwesomeIcon icon={faHouse} /></button>
      </ScrollIntoView>
    </div>
  )
}

export default Resume;