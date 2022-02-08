import React from 'react';

const Header = ()=>{

  return (
    <div className='header'>
      <div className='initials'>
        <h1 className='initials-h1'>JG</h1>
      </div>
      <div className='buttons'>
        <button className='button'>About Me</button>
        <button className='button'>Resume</button>
        <button className='button'>Skills</button>
        <button className='button'>Projects</button>
        <button className='button'>Resume</button>
        <button className='button'>Contact</button>
      </div>
    </div>
  )
}

export default Header;