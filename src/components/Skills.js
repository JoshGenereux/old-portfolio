import React from "react";
import javascript from '../pictures/javascript-39395.png'
import react from '../pictures/react.png';
import java from '../pictures/java.png';
import css from '../pictures/css.png';
import node from '../pictures/node.png';
import html from '../pictures/html5-logo-31813.png';
import express from '../pictures/express.png'
import sequelize from '../pictures/sequelize.png'
import axios from '../pictures/axios.png'

const Skills = ()=>{

  return (
    <div className='skills-container'>
      <h1 className='skills-h1'>Skills</h1>
      <div className='skills'>
        <section className='skill'>
          <img className='skill-png' src={javascript} alt='javascript'/>
          <h2 className='skill-name'>Javascript</h2>
        </section>
        <section className='skill'>
          <img src={java} alt='java' className='skill-png'/>
          <h2 className='skill-name'>Java</h2>
        </section>
        <section className='skill'>
          <img src={react} alt='react' className='skill-png'/>
          <h2 className='skill-name'>React</h2>
        </section>
        <section className='skill'>
          <img src={node} alt='node' className='skill-png'/>
          <h2 className='skill-name'>Node</h2>
        </section>
        <section className='skill'>
          <img src={html} alt='html' className='skill-png'/>
          <h2 className='skill-name'>HTML</h2>
        </section>
        <section className='skill'>
          <img src={css} alt='css' className='skill-png'/>
          <h2 className='skill-name'>CSS</h2>
        </section>
        <section className='skill'>
          <img src={express} alt='express' className='skill-png'/>
          <h2 className='skill-name'>Express</h2>
        </section>
        <section className='skill'>
          <img src={sequelize} alt='sequelize' className='skill-png'/>
          <h2 className='skill-name'>Sequelize</h2>
        </section>
        <section className='skill'>
          <img src={axios} alt='axios' className='skill-png'/>
          <h2 className='skill-name'>Axios</h2>
        </section>
      </div>
      <button className='skills-home-btn'>Home</button>
    </div>
  )
}

export default Skills;