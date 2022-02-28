import React, {useState} from 'react';
import ScrollIntoView from "react-scroll-into-view";
import Media from "react-media";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Menu from "./Menu";

const Header = ()=>{
  const [hidden, setHidden] = useState(true)

  const openMenu = ()=>{
    setHidden(state => !state)
  }
  return (
    <div className='header'>
      <Media queries={{
        small: "(max-width: 480px)",
        large: "(min-width: 481px)"
      }}>
        {matches => (
          <>
            {matches.small &&
            <>
              <div className='initials'>
                <h1 className='initials-h1'>JG</h1>
              </div>
              <div className='buttons'>
                <FontAwesomeIcon
                  onClick={openMenu}
                  className='button menu-btn'
                  icon={faBars}/>
              </div>
              { !hidden && <Menu setHidden={setHidden}/>}
            </>
            }
            {matches.large &&
            <>
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
                <ScrollIntoView selector='.projects-container'>
                  <button className='button'>Projects</button>
                </ScrollIntoView>
                <ScrollIntoView selector='.footer'>
                  <button className='button'>Contact</button>
                </ScrollIntoView>
              </div>
            </>
            }
          </>
        )}
      </Media>
    </div>
  )
}

export default Header;