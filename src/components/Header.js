import React from 'react';
import ScrollIntoView from "react-scroll-into-view";

const Header = ()=>{

  return (
    <div className='header'>
      <div className='initials'>
        <h1 className='initials-h1'>JG</h1>
      </div>
      <div className='buttons'>
        <ScrollIntoView selector='.about-container'>
          <button className='button'>About Me</button>
        </ScrollIntoView>
        <ScrollIntoView selector='.resume-header'>
          <button className='button'>Resume</button>
        </ScrollIntoView>
        <ScrollIntoView selector='.skills-h1'>
          <button className='button'>Skills</button>
        </ScrollIntoView>
        <ScrollIntoView selector='.project-container'>
          <button className='button'>Projects</button>
        </ScrollIntoView>
        <ScrollIntoView selector='.footer'>
          <button className='button'>Contact</button>
        </ScrollIntoView>
      </div>
    </div>
  )
}

export default Header;