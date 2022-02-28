import React from "react";
import ScrollIntoView from "react-scroll-into-view";

const Menu = ({setHidden})=>{

  const handleClick = ()=>{
    setHidden(state => !state);
  }

  return (
    <div className='menu'>
      <ScrollIntoView selector='.about-container'>
        <button onClick={handleClick} className='button'>About Me</button>
      </ScrollIntoView>
      <ScrollIntoView selector='.resume-header'>
        <button onClick={handleClick} className='button'>Resume</button>
      </ScrollIntoView>
      <ScrollIntoView selector='.skills-h1'>
        <button onClick={handleClick} className='button'>Skills</button>
      </ScrollIntoView>
      <ScrollIntoView selector='.projects-container'>
        <button onClick={handleClick} className='button'>Projects</button>
      </ScrollIntoView>
      <ScrollIntoView selector='.footer'>
        <button onClick={handleClick} className='button'>Contact</button>
      </ScrollIntoView>
    </div>
  )
}

export default Menu;