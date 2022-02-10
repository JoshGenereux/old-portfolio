import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import ScrollIntoView from "react-scroll-into-view";
import github from '../pictures/github.svg'
import linkedin from '../pictures/linkedin.svg';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = ()=>{

  return (
    <div className='footer'>
      <h1 className='footer-h1'>Contact Me</h1>
      <section className='footer-section'>
        <img className='icon' src={github}/>
        <a className='foot-a' href='https://github.com/JoshGenereux' target='_blank'>Github</a>
      </section>
      <section className='footer-section'>
        <img className='icon' src={linkedin}/>
        <a className='foot-a' href='https://www.linkedin.com/in/joshua-genereux-8292a8223/' target='_blank'>Linkedin</a>
      </section>
      <section className='footer-section'>
        <FontAwesomeIcon className='icon' icon={faEnvelope} />
        <p className='foot-a'>josh.genereux13@gmail.com</p>
      </section>
      <ScrollIntoView selector='.header'>
        <button className='about-home-btn footer-home'><FontAwesomeIcon icon={faHouse} /></button>
      </ScrollIntoView>
    </div>
  )
}

export default Footer;